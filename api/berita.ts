import type { VercelRequest, VercelResponse } from '@vercel/node';
import type { Berita } from '../src/types/index.js';
import { seedBerita } from '../src/data/seed.js';
import { supabaseAdmin } from './_lib/supabase.js';

const KEY = 'bem_berita';
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

      const existing = data?.value as Berita[] | undefined;
      if (Array.isArray(existing) && existing.length > 0) {
        return res.status(200).json({ berita: existing });
      }

      const { error: upsertErr } = await supabaseAdmin
        .from(TABLE)
        .upsert({ key: KEY, value: seedBerita }, { onConflict: 'key' });
      if (upsertErr) throw upsertErr;

      return res.status(200).json({ berita: seedBerita });
    }

    if (req.method === 'PUT') {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      const berita = (body?.berita ?? []) as Berita[];
      const { error } = await supabaseAdmin
        .from(TABLE)
        .upsert({ key: KEY, value: berita }, { onConflict: 'key' });
      if (error) throw error;
      return res.status(200).json({ ok: true });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (e) {
    const msg =
      e instanceof Error
        ? `${e.name}: ${e.message}`
        : typeof e === 'string'
          ? e
          : JSON.stringify(e);
    // eslint-disable-next-line no-console
    console.error('[api/berita] error', e);
    return res.status(500).json({ error: msg });
  }
}

