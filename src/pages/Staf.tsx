import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useData } from '../context/DataContext';
import { Orb } from '../components/ui/Orb';

const BODY_TEXT: React.CSSProperties = {
  fontFamily: "'Barlow', sans-serif",
  fontSize: 14,
  fontWeight: 300,
  color: 'rgba(255,255,255,0.5)',
  lineHeight: 1.75,
};

export default function Staf() {
  const { staffCodes } = useData();
  const [inputCode, setInputCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    const code = inputCode.trim().toUpperCase();
    if (!code) { setError('Masukkan kode staf terlebih dahulu.'); return; }
    const found = staffCodes.find(sc => sc.code === code);
    if (found) {
      window.open(found.spreadsheetUrl, '_blank', 'noopener noreferrer');
      setError('');
    } else {
      setError('Kode tidak ditemukan. Hubungi admin BEM.');
    }
  };

  return (
    <div style={{ position: 'relative', zIndex: 1, background: 'transparent', color: '#fff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 24px' }}>
      <Orb color="rgba(220,38,38,0.7)" x="50%" y="50%" size="600px" opacity={0.08} />
      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 440 }}>
        <div className="lgs" style={{ borderRadius: 24, padding: '40px 36px' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'linear-gradient(135deg, #dc2626, #7f1d1d)', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#fff', boxShadow: '0 0 14px rgba(220,38,38,0.4)' }}>BEM</div>
            <h1 style={{ fontSize: 22, fontWeight: 600, color: '#fff', marginBottom: 8 }}>Staff Progress</h1>
            <p style={{ ...BODY_TEXT, fontSize: 13 }}>Masukkan kode staf untuk mengakses spreadsheet progress divisi Anda.</p>
          </div>

          {/* Input */}
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', fontSize: 11, color: 'rgba(255,255,255,0.5)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1, fontWeight: 500 }}>
              Kode Staf
            </label>
            <input
              type="text"
              value={inputCode}
              onChange={e => { setInputCode(e.target.value.toUpperCase()); setError(''); }}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              placeholder="Contoh: DIV-MED-001"
              style={{
                width: '100%', padding: '12px 16px', borderRadius: 12,
                background: 'rgba(255,255,255,0.06)', border: error ? '1px solid rgba(220,38,38,0.5)' : '1px solid rgba(255,255,255,0.1)',
                color: '#fff', fontSize: 14, fontFamily: "'Barlow', sans-serif", outline: 'none',
                transition: 'border-color 0.2s', letterSpacing: 1,
              }}
              onFocus={e => (e.target.style.borderColor = 'rgba(255,255,255,0.3)')}
              onBlur={e => (e.target.style.borderColor = error ? 'rgba(220,38,38,0.5)' : 'rgba(255,255,255,0.1)')}
            />
            {error && (
              <p style={{ fontSize: 12, color: 'rgba(220,38,38,0.9)', marginTop: 8, fontFamily: "'Barlow', sans-serif" }}>{error}</p>
            )}
          </div>

          <button onClick={handleSubmit} className="lgs-red"
            style={{ width: '100%', padding: '13px', borderRadius: 12, fontSize: 14, fontWeight: 500, color: '#fff', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            Akses Spreadsheet <ArrowUpRight size={15} />
          </button>

          <p style={{ ...BODY_TEXT, fontSize: 11, textAlign: 'center', marginTop: 20 }}>
            Kode dikelola oleh admin BEM FTIRS. Jika kode tidak ditemukan, hubungi koordinator divisi Anda.
          </p>
        </div>
      </div>
    </div>
  );
}
