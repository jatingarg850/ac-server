import { Outlet, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/commonComponents/navbar';
import HeroSection from './components/commonComponents/herosection';
import Footer from './components/commonComponents/footer';

function AppContent() {
  const { pathname } = useLocation();
  const { user } = useAuth();
  const isAuthPage = pathname === '/login' || pathname === '/signup';
  const isAdminPage = pathname.startsWith('/admin');

  // Don't show navbar and footer on login/signup pages and admin panel
  if (isAuthPage || isAdminPage) {
    return <Outlet />;
  }

  return (
    <>
      <Navbar />
      {pathname === '/' && <HeroSection />}
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
