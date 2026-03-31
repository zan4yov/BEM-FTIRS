import { useState } from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { useData } from '../../context/DataContext';
import type { Event } from '../../types';
import { Plus, Pencil, Trash2, X } from 'lucide-react';
import { AppIcon } from '../../components/icons/AppIcon';

const EMPTY: Omit<Event, 'id'> = {
  title: '', description: '', date: '', category: 'internal',
  location: '', isUpcoming: true, imageColor: 'linear-gradient(135deg, #dc2626 0%, #7f1d1d 100%)',
};

const COLORS = [
  'linear-gradient(135deg, #dc2626 0%, #7f1d1d 100%)',
  'linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%)',
  'linear-gradient(135deg, #059669 0%, #065f46 100%)',
  'linear-gradient(135deg, #d97706 0%, #92400e 100%)',
  'linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)',
  'linear-gradient(135deg, #0891b2 0%, #164e63 100%)',
];

const INPUT_STYLE: React.CSSProperties = {
  width: '100%', padding: '10px 14px', borderRadius: 10,
  background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
  color: '#fff', fontSize: 13, fontFamily: "'Barlow', sans-serif", outline: 'none',
};

export default function AdminEvent() {
  const { events, addEvent, updateEvent, deleteEvent } = useData();
  const [dialog, setDialog] = useState<'add' | 'edit' | 'delete' | null>(null);
  const [form, setForm] = useState<Omit<Event, 'id'>>(EMPTY);
  const [editId, setEditId] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const openAdd = () => { setForm(EMPTY); setDialog('add'); };
  const openEdit = (ev: Event) => { setEditId(ev.id); setForm({ ...ev }); setDialog('edit'); };
  const openDelete = (id: string) => { setDeleteId(id); setDialog('delete'); };
  const closeDialog = () => { setDialog(null); setEditId(null); setDeleteId(null); };

  const handleSave = () => {
    if (dialog === 'add') addEvent(form);
    if (dialog === 'edit' && editId) updateEvent({ ...form, id: editId });
    closeDialog();
  };

  const handleDelete = () => {
    if (deleteId) deleteEvent(deleteId);
    closeDialog();
  };

  const BODY_TEXT: React.CSSProperties = { fontFamily: "'Barlow', sans-serif", fontSize: 13, fontWeight: 300, color: 'rgba(255,255,255,0.5)' };

  return (
    <AdminLayout>
      <div style={{ maxWidth: 1000 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28, flexWrap: 'wrap', gap: 12 }}>
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 600, color: '#fff', marginBottom: 4 }}>Manajemen Event</h1>
            <p style={{ ...BODY_TEXT, fontSize: 13 }}>{events.length} event terdaftar</p>
          </div>
          <button onClick={openAdd} className="lgs-red" style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 18px', borderRadius: 10, fontSize: 13, fontWeight: 500, color: '#fff', border: 'none', cursor: 'pointer' }}>
            <Plus size={15} /> Tambah Event
          </button>
        </div>

        <div className="lg" style={{ borderRadius: 16, overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  {['Judul', 'Tanggal', 'Kategori', 'Status', 'Aksi'].map(h => (
                    <th key={h} style={{ padding: '14px 18px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: 0.8, whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {events.map((ev, i) => (
                  <tr key={ev.id} style={{ borderBottom: i < events.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                    <td style={{ padding: '14px 18px' }}>
                      <div style={{ fontSize: 13, fontWeight: 500, color: '#fff' }}>{ev.title}</div>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>{ev.location}</div>
                    </td>
                    <td style={{ padding: '14px 18px', ...BODY_TEXT, fontSize: 12, whiteSpace: 'nowrap' }}>
                      {new Intl.DateTimeFormat('id-ID', { dateStyle: 'medium' }).format(new Date(ev.date))}
                    </td>
                    <td style={{ padding: '14px 18px' }}>
                      <span style={{ fontSize: 10, padding: '3px 9px', borderRadius: 9999, background: 'rgba(220,38,38,0.15)', color: 'rgba(220,38,38,0.9)', fontWeight: 600 }}>{ev.category}</span>
                    </td>
                    <td style={{ padding: '14px 18px' }}>
                      <span style={{ fontSize: 10, padding: '3px 9px', borderRadius: 9999, background: ev.isUpcoming ? 'rgba(34,197,94,0.15)' : 'rgba(100,116,139,0.15)', color: ev.isUpcoming ? 'rgba(34,197,94,0.9)' : 'rgba(156,163,175,0.9)', fontWeight: 600 }}>
                        {ev.isUpcoming ? 'Mendatang' : 'Selesai'}
                      </span>
                    </td>
                    <td style={{ padding: '14px 18px' }}>
                      <div style={{ display: 'flex', gap: 6 }}>
                        <button onClick={() => openEdit(ev)} style={{ padding: '6px 8px', borderRadius: 8, background: 'rgba(255,255,255,0.06)', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center' }}>
                          <Pencil size={13} />
                        </button>
                        <button onClick={() => openDelete(ev.id)} style={{ padding: '6px 8px', borderRadius: 8, background: 'rgba(220,38,38,0.1)', border: 'none', cursor: 'pointer', color: 'rgba(220,38,38,0.8)', display: 'flex', alignItems: 'center' }}>
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Dialog */}
      {(dialog === 'add' || dialog === 'edit') && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 400, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
          <div className="lgs" style={{ borderRadius: 20, padding: '32px', width: '100%', maxWidth: 520, maxHeight: '85vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: '#fff' }}>{dialog === 'add' ? 'Tambah Event' : 'Edit Event'}</h3>
              <button onClick={closeDialog} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.5)', padding: 4 }}><X size={18} /></button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { label: 'Judul', key: 'title', type: 'text', placeholder: 'Judul event...' },
                { label: 'Lokasi', key: 'location', type: 'text', placeholder: 'Lokasi event...' },
                { label: 'Tanggal', key: 'date', type: 'datetime-local', placeholder: '' },
              ].map(f => (
                <div key={f.key}>
                  <label style={{ display: 'block', fontSize: 11, color: 'rgba(255,255,255,0.5)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.8 }}>{f.label}</label>
                  <input type={f.type} value={(form as Record<string, unknown>)[f.key] as string} placeholder={f.placeholder}
                    onChange={e => setForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                    style={{ ...INPUT_STYLE, colorScheme: 'dark' }}
                  />
                </div>
              ))}

              <div>
                <label style={{ display: 'block', fontSize: 11, color: 'rgba(255,255,255,0.5)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.8 }}>Deskripsi</label>
                <textarea value={form.description} onChange={e => setForm(prev => ({ ...prev, description: e.target.value }))} rows={3} placeholder="Deskripsi event..."
                  style={{ ...INPUT_STYLE, resize: 'vertical' }} />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 11, color: 'rgba(255,255,255,0.5)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.8 }}>Kategori</label>
                <select value={form.category} onChange={e => setForm(prev => ({ ...prev, category: e.target.value as Event['category'] }))}
                  style={{ ...INPUT_STYLE }}>
                  {['internal', 'eksternal', 'akademik', 'sosial'].map(c => (
                    <option key={c} value={c} style={{ background: '#1a1a1a' }}>{c}</option>
                  ))}
                </select>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <label style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: 0.8 }}>Status Mendatang</label>
                <div onClick={() => setForm(prev => ({ ...prev, isUpcoming: !prev.isUpcoming }))}
                  style={{ width: 44, height: 24, borderRadius: 12, background: form.isUpcoming ? '#dc2626' : 'rgba(255,255,255,0.15)', cursor: 'pointer', position: 'relative', transition: 'background 0.2s', flexShrink: 0 }}>
                  <div style={{ position: 'absolute', width: 18, height: 18, borderRadius: '50%', background: '#fff', top: 3, left: form.isUpcoming ? 23 : 3, transition: 'left 0.2s' }} />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 11, color: 'rgba(255,255,255,0.5)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.8 }}>Warna Cover</label>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {COLORS.map(c => (
                    <div key={c} onClick={() => setForm(prev => ({ ...prev, imageColor: c }))}
                      style={{ width: 36, height: 36, borderRadius: 8, background: c, cursor: 'pointer', border: form.imageColor === c ? '2px solid #fff' : '2px solid transparent', transition: 'border 0.2s' }}
                    />
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
                <button onClick={closeDialog} style={{ flex: 1, padding: '11px', borderRadius: 10, background: 'rgba(255,255,255,0.06)', border: 'none', cursor: 'pointer', fontSize: 13, color: 'rgba(255,255,255,0.6)', fontFamily: "'Barlow', sans-serif" }}>Batal</button>
                <button onClick={handleSave} className="lgs-red" style={{ flex: 1, padding: '11px', borderRadius: 10, border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 500, color: '#fff' }}>Simpan</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete confirm */}
      {dialog === 'delete' && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 400, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
          <div className="lgs" style={{ borderRadius: 20, padding: '32px', width: '100%', maxWidth: 360, textAlign: 'center' }}>
            <div style={{ width: 44, height: 44, margin: '0 auto 16px', color: 'rgba(220,38,38,0.9)' }}>
              <AppIcon name="trash" size={44} />
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: '#fff', marginBottom: 10 }}>Hapus Event?</h3>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 24, fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}>Tindakan ini tidak dapat dibatalkan.</p>
            <div style={{ display: 'flex', gap: 10 }}>
              <button onClick={closeDialog} style={{ flex: 1, padding: '11px', borderRadius: 10, background: 'rgba(255,255,255,0.06)', border: 'none', cursor: 'pointer', fontSize: 13, color: 'rgba(255,255,255,0.6)', fontFamily: "'Barlow', sans-serif" }}>Batal</button>
              <button onClick={handleDelete} style={{ flex: 1, padding: '11px', borderRadius: 10, background: 'rgba(220,38,38,0.8)', border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 600, color: '#fff', fontFamily: "'Barlow', sans-serif" }}>Hapus</button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
