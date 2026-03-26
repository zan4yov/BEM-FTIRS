import { useState } from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { useData } from '../../context/DataContext';
import type { StaffCode } from '../../types';
import { Plus, Pencil, Trash2, X, ExternalLink } from 'lucide-react';

const DIVISI_OPTIONS = [
  'Kesekretariatan', 'Keuangan', 'Hubungan Luar', 'Kajian Strategis & Advokasi',
  'Pengembangan SDM', 'Kewirausahaan', 'Sosial Masyarakat',
  'Media, Komunikasi & Informasi', 'Olahraga, Seni & Budaya', 'Minat & Bakat',
];

const EMPTY: Omit<StaffCode, 'id'> = {
  code: '', divisi: DIVISI_OPTIONS[0], spreadsheetUrl: '', createdAt: new Date().toISOString(),
};

const INPUT_STYLE: React.CSSProperties = {
  width: '100%', padding: '10px 14px', borderRadius: 10,
  background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
  color: '#fff', fontSize: 13, fontFamily: "'Barlow', sans-serif", outline: 'none',
};

export default function AdminStaffCodes() {
  const { staffCodes, addStaffCode, updateStaffCode, deleteStaffCode } = useData();
  const [dialog, setDialog] = useState<'add' | 'edit' | 'delete' | null>(null);
  const [form, setForm] = useState<Omit<StaffCode, 'id'>>(EMPTY);
  const [editId, setEditId] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const openAdd = () => { setForm(EMPTY); setDialog('add'); };
  const openEdit = (sc: StaffCode) => { setEditId(sc.id); setForm({ ...sc }); setDialog('edit'); };
  const openDelete = (id: string) => { setDeleteId(id); setDialog('delete'); };
  const closeDialog = () => { setDialog(null); setEditId(null); setDeleteId(null); };

  const handleSave = () => {
    const code = { ...form, code: form.code.trim().toUpperCase() };
    if (dialog === 'add') addStaffCode(code);
    if (dialog === 'edit' && editId) updateStaffCode({ ...code, id: editId });
    closeDialog();
  };

  const handleDelete = () => {
    if (deleteId) deleteStaffCode(deleteId);
    closeDialog();
  };

  const BODY_TEXT: React.CSSProperties = { fontFamily: "'Barlow', sans-serif", fontSize: 13, fontWeight: 300, color: 'rgba(255,255,255,0.5)' };

  return (
    <AdminLayout>
      <div style={{ maxWidth: 1000 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28, flexWrap: 'wrap', gap: 12 }}>
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 600, color: '#fff', marginBottom: 4 }}>Manajemen Staff Codes</h1>
            <p style={{ ...BODY_TEXT, fontSize: 13 }}>{staffCodes.length} kode terdaftar</p>
          </div>
          <button onClick={openAdd} className="lgs-red" style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 18px', borderRadius: 10, fontSize: 13, fontWeight: 500, color: '#fff', border: 'none', cursor: 'pointer' }}>
            <Plus size={15} /> Tambah Kode
          </button>
        </div>

        <div className="lg" style={{ borderRadius: 16, overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  {['Kode', 'Divisi', 'URL Spreadsheet', 'Aksi'].map(h => (
                    <th key={h} style={{ padding: '14px 18px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: 0.8, whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {staffCodes.map((sc, i) => (
                  <tr key={sc.id} style={{ borderBottom: i < staffCodes.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                    <td style={{ padding: '14px 18px' }}>
                      <span style={{ fontFamily: 'monospace', fontSize: 13, color: '#fff', background: 'rgba(220,38,38,0.1)', padding: '3px 8px', borderRadius: 6 }}>{sc.code}</span>
                    </td>
                    <td style={{ padding: '14px 18px', ...BODY_TEXT, fontSize: 12 }}>{sc.divisi}</td>
                    <td style={{ padding: '14px 18px' }}>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <span style={{ ...BODY_TEXT, fontSize: 11, maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{sc.spreadsheetUrl}</span>
                        <button onClick={() => window.open(sc.spreadsheetUrl, '_blank', 'noopener noreferrer')}
                          style={{ padding: '4px 6px', borderRadius: 6, background: 'rgba(255,255,255,0.06)', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                          <ExternalLink size={12} />
                        </button>
                      </div>
                    </td>
                    <td style={{ padding: '14px 18px' }}>
                      <div style={{ display: 'flex', gap: 6 }}>
                        <button onClick={() => openEdit(sc)} style={{ padding: '6px 8px', borderRadius: 8, background: 'rgba(255,255,255,0.06)', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center' }}>
                          <Pencil size={13} />
                        </button>
                        <button onClick={() => openDelete(sc.id)} style={{ padding: '6px 8px', borderRadius: 8, background: 'rgba(220,38,38,0.1)', border: 'none', cursor: 'pointer', color: 'rgba(220,38,38,0.8)', display: 'flex', alignItems: 'center' }}>
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
        <div style={{ position: 'fixed', inset: 0, zIndex: 400, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
          <div className="lgs" style={{ borderRadius: 20, padding: '32px', width: '100%', maxWidth: 480 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: '#fff' }}>{dialog === 'add' ? 'Tambah Kode Staf' : 'Edit Kode Staf'}</h3>
              <button onClick={closeDialog} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.5)', padding: 4 }}><X size={18} /></button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label style={{ display: 'block', fontSize: 11, color: 'rgba(255,255,255,0.5)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.8 }}>Kode Unik</label>
                <input type="text" value={form.code} placeholder="DIV-XXX-001"
                  onChange={e => setForm(prev => ({ ...prev, code: e.target.value.toUpperCase() }))}
                  style={{ ...INPUT_STYLE, fontFamily: 'monospace', letterSpacing: 1 }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 11, color: 'rgba(255,255,255,0.5)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.8 }}>Nama Divisi</label>
                <select value={form.divisi} onChange={e => setForm(prev => ({ ...prev, divisi: e.target.value }))} style={{ ...INPUT_STYLE }}>
                  {DIVISI_OPTIONS.map(d => (
                    <option key={d} value={d} style={{ background: '#1a1a1a' }}>{d}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 11, color: 'rgba(255,255,255,0.5)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.8 }}>URL Spreadsheet</label>
                <div style={{ display: 'flex', gap: 8 }}>
                  <input type="url" value={form.spreadsheetUrl} placeholder="https://docs.google.com/spreadsheets/..."
                    onChange={e => setForm(prev => ({ ...prev, spreadsheetUrl: e.target.value }))}
                    style={{ ...INPUT_STYLE, flex: 1 }}
                  />
                  {form.spreadsheetUrl && (
                    <button onClick={() => window.open(form.spreadsheetUrl, '_blank', 'noopener noreferrer')}
                      style={{ padding: '10px 12px', borderRadius: 10, background: 'rgba(255,255,255,0.06)', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, fontFamily: "'Barlow', sans-serif", flexShrink: 0 }}>
                      <ExternalLink size={13} /> Test Link
                    </button>
                  )}
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

      {dialog === 'delete' && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 400, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
          <div className="lgs" style={{ borderRadius: 20, padding: '32px', width: '100%', maxWidth: 360, textAlign: 'center' }}>
            <div style={{ fontSize: 40, marginBottom: 16 }}>🗑️</div>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: '#fff', marginBottom: 10 }}>Hapus Kode?</h3>
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
