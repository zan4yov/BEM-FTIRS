import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Event, Berita, GalleryItem, StaffCode } from '../types';
import { seedEvents, seedBerita, seedGallery, seedStaffCodes } from '../data/seed';

interface DataContextType {
  events: Event[];
  berita: Berita[];
  gallery: GalleryItem[];
  staffCodes: StaffCode[];
  addEvent: (e: Omit<Event, 'id'>) => void;
  updateEvent: (e: Event) => void;
  deleteEvent: (id: string) => void;
  addBerita: (b: Omit<Berita, 'id'>) => void;
  updateBerita: (b: Berita) => void;
  deleteBerita: (id: string) => void;
  addStaffCode: (s: Omit<StaffCode, 'id'>) => void;
  updateStaffCode: (s: StaffCode) => void;
  deleteStaffCode: (id: string) => void;
}

const DataContext = createContext<DataContextType | null>(null);

function load<T>(key: string, fallback: T[]): T[] {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T[]) : fallback;
  } catch {
    return fallback;
  }
}

function save<T>(key: string, data: T[]) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch {
    // Ignore quota errors; persistence is handled by the backend when available.
  }
}

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

export function DataProvider({ children }: { children: ReactNode }) {
  const [events, setEvents] = useState<Event[]>(() => load('bem_events', seedEvents));
  const [berita, setBerita] = useState<Berita[]>(() => load('bem_berita', seedBerita));
  const [gallery] = useState<GalleryItem[]>(() => load('bem_gallery', seedGallery));
  const [staffCodes, setStaffCodes] = useState<StaffCode[]>(() => load('bem_staff_codes', seedStaffCodes));
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from backend (Vercel Functions + Redis) when available.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [evRes, brRes] = await Promise.all([
          fetch('/api/events').catch(() => null),
          fetch('/api/berita').catch(() => null),
        ]);

        if (cancelled) return;

        if (evRes?.ok) {
          const json = (await evRes.json()) as { events?: Event[] };
          if (Array.isArray(json.events)) setEvents(json.events);
        }
        if (brRes?.ok) {
          const json = (await brRes.json()) as { berita?: Berita[] };
          if (Array.isArray(json.berita)) setBerita(json.berita);
        }
      } finally {
        if (!cancelled) setHydrated(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // Keep local cache for faster reloads.
  useEffect(() => { save('bem_events', events); }, [events]);
  useEffect(() => { save('bem_berita', berita); }, [berita]);
  useEffect(() => { save('bem_gallery', gallery); }, [gallery]);
  useEffect(() => { save('bem_staff_codes', staffCodes); }, [staffCodes]);

  // Persist to backend after hydration (prevents overwriting backend with seeds).
  useEffect(() => {
    if (!hydrated) return;
    fetch('/api/events', {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ events }),
    }).catch(() => undefined);
  }, [events, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    fetch('/api/berita', {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ berita }),
    }).catch(() => undefined);
  }, [berita, hydrated]);

  const addEvent = (e: Omit<Event, 'id'>) => setEvents(prev => [{ ...e, id: 'evt-' + uid() }, ...prev]);
  const updateEvent = (e: Event) => setEvents(prev => prev.map(x => x.id === e.id ? e : x));
  const deleteEvent = (id: string) => setEvents(prev => prev.filter(x => x.id !== id));

  const addBerita = (b: Omit<Berita, 'id'>) => setBerita(prev => [{ ...b, id: 'news-' + uid() }, ...prev]);
  const updateBerita = (b: Berita) => setBerita(prev => prev.map(x => x.id === b.id ? b : x));
  const deleteBerita = (id: string) => setBerita(prev => prev.filter(x => x.id !== id));

  const addStaffCode = (s: Omit<StaffCode, 'id'>) => setStaffCodes(prev => [{ ...s, id: 'sc-' + uid() }, ...prev]);
  const updateStaffCode = (s: StaffCode) => setStaffCodes(prev => prev.map(x => x.id === s.id ? s : x));
  const deleteStaffCode = (id: string) => setStaffCodes(prev => prev.filter(x => x.id !== id));

  return (
    <DataContext.Provider value={{
      events, berita, gallery, staffCodes,
      addEvent, updateEvent, deleteEvent,
      addBerita, updateBerita, deleteBerita,
      addStaffCode, updateStaffCode, deleteStaffCode,
    }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error('useData must be used within DataProvider');
  return ctx;
}
