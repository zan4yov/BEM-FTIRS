import type { VercelRequest, VercelResponse } from '@vercel/node';
import { redis } from './_lib/redis';
import type { Event } from '../src/types';
import { seedEvents } from '../src/data/seed';

const KEY = 'bem_events';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === 'GET') {
      const existing = await redis.get<Event[]>(KEY);
      if (Array.isArray(existing) && existing.length > 0) {
        return res.status(200).json({ events: existing });
      }
      await redis.set(KEY, seedEvents);
      return res.status(200).json({ events: seedEvents });
    }

    if (req.method === 'PUT') {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      const events = (body?.events ?? []) as Event[];
      await redis.set(KEY, events);
      return res.status(200).json({ ok: true });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Unknown error';
    return res.status(500).json({ error: msg });
  }
}

