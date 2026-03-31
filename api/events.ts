import type { VercelRequest, VercelResponse } from '@vercel/node';
import type { Event } from '../src/types/index.js';
import { seedEvents } from '../src/data/seed.js';
import { supabaseAdmin } from './_lib/supabase.js';

const KEY = 'bem_events';
const TABLE = 'app_kv';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === 'GET') {
      const { data, error } = await supabaseAdmin
        .from(TABLE)
        .select('value')
        .eq('key', KEY)
        .maybeSingle();

      if (error) throw error;

      const existing = data?.value as Event[] | undefined;
      if (Array.isArray(existing) && existing.length > 0) {
        return res.status(200).json({ events: existing });
      }

      const { error: upsertErr } = await supabaseAdmin
        .from(TABLE)
        .upsert({ key: KEY, value: seedEvents }, { onConflict: 'key' });
      if (upsertErr) throw upsertErr;

      return res.status(200).json({ events: seedEvents });
    }

    if (req.method === 'PUT') {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      const events = (body?.events ?? []) as Event[];
      const { error } = await supabaseAdmin
        .from(TABLE)
        .upsert({ key: KEY, value: events }, { onConflict: 'key' });
      if (error) throw error;
      return res.status(200).json({ ok: true });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Unknown error';
    return res.status(500).json({ error: msg });
  }
}

