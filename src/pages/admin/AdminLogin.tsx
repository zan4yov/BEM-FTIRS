import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FtirsAdminHeaderStrip } from '../../components/FtirsAdminHeaderStrip';

const ADMIN_EMAIL = 'admin@bemftirs.its.ac.id';
const ADMIN_PASSWORD = 'bemftirs2025';

const BODY_TEXT: React.CSSProperties = {
  fontFamily: "'Barlow', sans-serif",
  fontSize: 14,
  fontWeight: 300,
  color: 'rgba(255,255,255,0.5)',
  lineHeight: 1.75,
};

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      localStorage.setItem('isAdminLoggedIn', 'true');
      navigate('/admin');
    } else {
      setError('Email atau password salah.');
    }
  };

  return (
    <div style={{ position: 'relative', zIndex: 1, background: 'transparent', color: '#fff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '56px 24px 40px' }}>
      <FtirsAdminHeaderStrip />
      <div style={{ width: '100%', maxWidth: 420 }}>
        <div className="lgs" style={{ borderRadius: 24, padding: '40px 36px' }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'linear-gradient(135deg, #dc2626, #7f1d1d)', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#fff' }}>BEM</div>
            <h1 style={{ fontSize: 20, fontWeight: 600, color: '#fff', marginBottom: 6 }}>Admin Panel</h1>
            <p style={{ ...BODY_TEXT, fontSize: 12 }}>BEM FTIRS ITS — Super Admin</p>
          </div>

          {error && (
            <div style={{ background: 'rgba(220,38,38,0.1)', border: '1px solid rgba(220,38,38,0.3)', borderRadius: 10, padding: '10px 14px', marginBottom: 20, fontSize: 13, color: 'rgba(220,38,38,0.9)', fontFamily: "'Barlow', sans-serif" }}>
              {error}
            </div>
          )}

          {[
            { label: 'Email', type: 'email', value: email, onChange: setEmail, placeholder: 'admin@bemftirs.its.ac.id' },
            { label: 'Password', type: 'password', value: password, onChange: setPassword, placeholder: '••••••••' },
          ].map(field => (
            <div key={field.label} style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', fontSize: 11, color: 'rgba(255,255,255,0.5)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1, fontWeight: 500 }}>
                {field.label}
              </label>
              <input
                type={field.type}
                value={field.value}
                onChange={e => { field.onChange(e.target.value); setError(''); }}
                onKeyDown={e => e.key === 'Enter' && handleLogin()}
                placeholder={field.placeholder}
                style={{
                  width: '100%', padding: '12px 16px', borderRadius: 10,
                  background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                  color: '#fff', fontSize: 14, fontFamily: "'Barlow', sans-serif", outline: 'none',
                }}
              />
            </div>
          ))}

          <button onClick={handleLogin} className="lgs-red"
            style={{ width: '100%', padding: '13px', borderRadius: 12, fontSize: 14, fontWeight: 500, color: '#fff', border: 'none', cursor: 'pointer', marginTop: 8 }}>
            Masuk ke Admin Panel
          </button>

          <p style={{ ...BODY_TEXT, fontSize: 10, textAlign: 'center', marginTop: 20 }}>
            Demo: admin@bemftirs.its.ac.id / bemftirs2025
          </p>
        </div>
      </div>
    </div>
  );
}
