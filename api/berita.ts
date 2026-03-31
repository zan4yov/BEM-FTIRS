import type { VercelRequest, VercelResponse } from '@vercel/node';
import { redis } from './_lib/redis.js';
import type { Berita } from '../src/types/index.js';
import { seedBerita } from '../src/data/seed.js';

const KEY = 'bem_berita';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === 'GET') {
      const existing = await redis.get<Berita[]>(KEY);
      if (Array.isArray(existing) && existing.length > 0) {
        return res.status(200).json({ berita: existing });
      }
      await redis.set(KEY, seedBerita);
      return res.status(200).json({ berita: seedBerita });
    }

    if (req.method === 'PUT') {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      const berita = (body?.berita ?? []) as Berita[];
      await redis.set(KEY, berita);
      return res.status(200).json({ ok: true });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Unknown error';
    return res.status(500).json({ error: msg });
  }
}

