import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SiteAtmosphere } from './components/SiteAtmosphere';
import Landing from './pages/Landing';
import Tentang from './pages/Tentang';
import Departemen from './pages/Departemen';
import Kabinet from './pages/Kabinet';
import Divisi from './pages/Divisi';
import DivisiDetail from './pages/DivisiDetail';
import EventPage from './pages/Event';
import Berita from './pages/Berita';
import BeritaDetail from './pages/BeritaDetail';
import Galeri from './pages/Galeri';
import Staf from './pages/Staf';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminEvent from './pages/admin/AdminEvent';
import AdminBerita from './pages/admin/AdminBerita';
import AdminStaffCodes from './pages/admin/AdminStaffCodes';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
  if (!isLoggedIn) return <Navigate to="/admin/login" replace />;
  return <>{children}</>;
}

function PublicLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');
  const isStaf = location.pathname === '/staf';

  if (isAdmin) return <>{children}</>;

  return (
    <>
      <Navbar />
      {/* <FtirsTopBranding /> */}
      <main style={{ position: 'relative', zIndex: 1, paddingTop: 0 }}>
        {children}
      </main>
      {!isStaf && <Footer />}
    </>
  );
}

function AppRoutes() {
  return (
    <PublicLayout>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/departemen" element={<Departemen />} />
        <Route path="/kabinet" element={<Kabinet />} />
        <Route path="/divisi" element={<Divisi />} />
        <Route path="/divisi/:slug" element={<DivisiDetail />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/berita/:id" element={<BeritaDetail />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/staf" element={<Staf />} />

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path="/admin/event" element={<ProtectedRoute><AdminEvent /></ProtectedRoute>} />
        <Route path="/admin/berita" element={<ProtectedRoute><AdminBerita /></ProtectedRoute>} />
        <Route path="/admin/staff-codes" element={<ProtectedRoute><AdminStaffCodes /></ProtectedRoute>} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </PublicLayout>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <SiteAtmosphere />
        <AppRoutes />
      </DataProvider>
    </BrowserRouter>
  );
}
