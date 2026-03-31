import { useState } from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { useData } from '../../context/DataContext';
import type { Berita } from '../../types';
import { Plus, Pencil, Trash2, X } from 'lucide-react';
import { AppIcon } from '../../components/icons/AppIcon';

const EMPTY: Omit<Berita, 'id'> = {
  title: '', excerpt: '', body: '', author: '', publishedAt: new Date().toISOString().slice(0, 16),
  category: 'kegiatan', imageColor: 'linear-gradient(135deg, #dc2626 0%, #7f1d1d 100%)',
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

export default function AdminBerita() {
  const { berita, addBerita, updateBerita, deleteBerita } = useData();
  const [dialog, setDialog] = useState<'add' | 'edit' | 'delete' | null>(null);
  const [form, setForm] = useState<Omit<Berita, 'id'>>(EMPTY);
  const [editId, setEditId] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const openAdd = () => { setForm(EMPTY); setDialog('add'); };
  const openEdit = (item: Berita) => { setEditId(item.id); setForm({ ...item }); setDialog('edit'); };
  const openDelete = (id: string) => { setDeleteId(id); setDialog('delete'); };
  const closeDialog = () => { setDialog(null); setEditId(null); setDeleteId(null); };

  const handleSave = () => {
    if (dialog === 'add') addBerita(form);
    if (dialog === 'edit' && editId) updateBerita({ ...form, id: editId });
    closeDialog();
  };

  const handleDelete = () => {
    if (deleteId) deleteBerita(deleteId);
    closeDialog();
  };

  const BODY_TEXT: React.CSSProperties = { fontFamily: "'Barlow', sans-serif", fontSize: 13, fontWeight: 300, color: 'rgba(255,255,255,0.5)' };

  return (
    <AdminLayout>
      <div style={{ maxWidth: 1000 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28, flexWrap: 'wrap', gap: 12 }}>
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 600, color: '#fff', marginBottom: 4 }}>Manajemen Berita</h1>
            <p style={{ ...BODY_TEXT, fontSize: 13 }}>{berita.length} artikel terdaftar</p>
          </div>
          <button onClick={openAdd} className="lgs-red" style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 18px', borderRadius: 10, fontSize: 13, fontWeight: 500, color: '#fff', border: 'none', cursor: 'pointer' }}>
            <Plus size={15} /> Tambah Berita
          </button>
        </div>

        <div className="lg" style={{ borderRadius: 16, overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  {['Judul', 'Penulis', 'Tanggal', 'Kategori', 'Aksi'].map(h => (
                    <th key={h} style={{ padding: '14px 18px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: 0.8, whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {berita.map((item, i) => (
                  <tr key={item.id} style={{ borderBottom: i < berita.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                    <td style={{ padding: '14px 18px' }}>
                      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                        {item.image ? (
                          <img src={item.image} alt="" style={{ width: 32, height: 32, borderRadius: 6, objectFit: 'cover', flexShrink: 0 }} />
                        ) : (
                          <div style={{ width: 32, height: 32, borderRadius: 6, background: item.imageColor, flexShrink: 0 }} />
                        )}
                        <div style={{ fontSize: 13, fontWeight: 500, color: '#fff', lineHeight: 1.3 }}>{item.title.slice(0, 50)}{item.title.length > 50 ? '…' : ''}</div>
                      </div>
                    </td>
                    <td style={{ padding: '14px 18px', ...BODY_TEXT, fontSize: 12 }}>{item.author}</td>
                    <td style={{ padding: '14px 18px', ...BODY_TEXT, fontSize: 12, whiteSpace: 'nowrap' }}>
                      {new Intl.DateTimeFormat('id-ID', { dateStyle: 'medium' }).format(new Date(item.publishedAt))}
                    </td>
                    <td style={{ padding: '14px 18px' }}>
                      <span style={{ fontSize: 10, padding: '3px 9px', borderRadius: 9999, background: 'rgba(220,38,38,0.15)', color: 'rgba(220,38,38,0.9)', fontWeight: 600 }}>{item.category}</span>
                    </td>
                    <td style={{ padding: '14px 18px' }}>
                      <div style={{ display: 'flex', gap: 6 }}>
                        <button onClick={() => openEdit(item)} style={{ padding: '6px 8px', borderRadius: 8, background: 'rgba(255,255,255,0.06)', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center' }}>
                          <Pencil size={13} />
                        </button>
                        <button onClick={() => openDelete(item.id)} style={{ padding: '6px 8px', borderRadius: 8, background: 'rgba(220,38,38,0.1)', border: 'none', cursor: 'pointer', color: 'rgba(220,38,38,0.8)', display: 'flex', alignItems: 'center' }}>
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

      {/* Form Dialog */}
      {(dialog === 'add' || dialog === 'edit') && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 400, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)', overflowY: 'auto', padding: 24, boxSizing: 'border-box' }}>
          <div className="lgs" style={{ borderRadius: 20, padding: '32px', width: '100%', maxWidth: 560, margin: '40px auto', background: '#111', boxSizing: 'border-box' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: '#fff' }}>{dialog === 'add' ? 'Tambah Berita' : 'Edit Berita'}</h3>
              <button onClick={closeDialog} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.5)', padding: 4 }}><X size={18} /></button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { label: 'Judul', key: 'title', type: 'text', placeholder: 'Judul berita...' },
                { label: 'Penulis', key: 'author', type: 'text', placeholder: 'Nama penulis...' },
                { label: 'Tanggal Publikasi', key: 'publishedAt', type: 'datetime-local', placeholder: '' },
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
                <label style={{ display: 'block', fontSize: 11, color: 'rgba(255,255,255,0.5)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.8 }}>Excerpt (Ringkasan)</label>
                <textarea value={form.excerpt} onChange={e => setForm(prev => ({ ...prev, excerpt: e.target.value }))} rows={2} placeholder="Ringkasan singkat..."
                  style={{ ...INPUT_STYLE, resize: 'vertical' }} />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 11, color: 'rgba(255,255,255,0.5)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.8 }}>Body (HTML)</label>
                <textarea value={form.body} onChange={e => setForm(prev => ({ ...prev, body: e.target.value }))} rows={6} placeholder="<p>Konten artikel...</p>"
                  style={{ ...INPUT_STYLE, resize: 'vertical', fontFamily: 'monospace', fontSize: 12 }} />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 11, color: 'rgba(255,255,255,0.5)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.8 }}>Kategori</label>
                <select value={form.category} onChange={e => setForm(prev => ({ ...prev, category: e.target.value as Berita['category'] }))}
                  style={{ ...INPUT_STYLE }}>
                  {['kegiatan', 'prestasi', 'pengumuman', 'sosial'].map(c => (
                    <option key={c} value={c} style={{ background: '#1a1a1a' }}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 11, color: 'rgba(255,255,255,0.5)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.8 }}>Warna Cover (Alternatif)</label>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {COLORS.map(c => (
                    <div key={c} onClick={() => setForm(prev => ({ ...prev, imageColor: c }))}
                      style={{ width: 36, height: 36, borderRadius: 8, background: c, cursor: 'pointer', border: form.imageColor === c ? '2px solid #fff' : '2px solid transparent' }}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 11, color: 'rgba(255,255,255,0.5)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.8 }}>Gambar Cover Berita</label>
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={e => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = () => setForm(prev => ({ ...prev, image: reader.result as string }));
                      reader.readAsDataURL(file);
                    }
                  }}
                  style={{ ...INPUT_STYLE, padding: '8px', cursor: 'pointer' }}
                />
                {form.image && (
                  <div style={{ marginTop: 10, position: 'relative', display: 'inline-block' }}>
                    <img src={form.image} alt="Preview" style={{ height: 80, borderRadius: 8, objectFit: 'cover' }} />
                    <button onClick={() => setForm(prev => ({ ...prev, image: undefined }))} style={{ position: 'absolute', top: -6, right: -6, background: 'rgba(220,38,38,1)', color: 'white', border: 'none', borderRadius: '50%', width: 22, height: 22, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <X size={12} />
                    </button>
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
                <button onClick={closeDialog} style={{ flex: 1, padding: '11px', borderRadius: 10, background: 'rgba(255,255,255,0.06)', border: 'none', cursor: 'pointer', fontSize: 13, color: 'rgba(255,255,255,0.6)', fontFamily: "'Barlow', sans-serif" }}>Batal</button>
                <button onClick={handleSave} className="lgs-red" style={{ flex: 1, padding: '11px', borderRadius: 10, border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 500, color: '#fff' }}>Simpan</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {dialog === 'delete' && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 400, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)', overflowY: 'auto', padding: 24, boxSizing: 'border-box' }}>
          <div className="lgs" style={{ borderRadius: 20, padding: '32px', width: '100%', maxWidth: 360, margin: '40px auto', textAlign: 'center', background: '#111', boxSizing: 'border-box' }}>
            <div style={{ width: 44, height: 44, margin: '0 auto 16px', color: 'rgba(220,38,38,0.9)' }}>
              <AppIcon name="trash" size={44} />
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: '#fff', marginBottom: 10 }}>Hapus Berita?</h3>
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
