import React from 'react';
import { HashRouter, Routes, Route, useLocation, Link, Navigate } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import MarketplaceScreen from './screens/MarketplaceScreen';
import ServiceDetailScreen from './screens/ServiceDetailScreen';
import SelectDateScreen from './screens/SelectDateScreen';
import SelectPaymentScreen from './screens/SelectPaymentScreen';
import ReviewBookingScreen from './screens/ReviewBookingScreen';
import ConfirmationScreen from './screens/ConfirmationScreen';
import MyBookingsScreen from './screens/MyBookingsScreen';
import ProfileScreen from './screens/ProfileScreen';
import TechnologyScreen from './screens/TechnologyScreen';
import SecurityScreen from './screens/SecurityScreen';
import PerformanceScreen from './screens/PerformanceScreen';
import SupportChatScreen from './screens/SupportChatScreen';
import ExploreScreen from './screens/ExploreScreen';
import ScanScreen from './screens/ScanScreen';

// Admin imports
import { AdminAuthProvider, useAdminAuth } from './contexts/AdminAuthContext';
import AdminLoginScreen from './screens/admin/AdminLoginScreen';
import AdminDashboardScreen from './screens/admin/AdminDashboardScreen';
import AdminServicesScreen from './screens/admin/AdminServicesScreen';
import AdminBookingsScreen from './screens/admin/AdminBookingsScreen';
import AdminUsersScreen from './screens/admin/AdminUsersScreen';

// Protected Admin Route Component
const ProtectedAdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAdminLoggedIn } = useAdminAuth();
  if (!isAdminLoggedIn) {
    return <Navigate to="/admin/login" replace />;
  }
  return <>{children}</>;
};

const BottomNav = () => {
  const location = useLocation();
  const hiddenPaths = ['/', '/login', '/register', '/service', '/booking', '/technology', '/security', '/performance', '/chat', '/admin'];
  const isHidden = hiddenPaths.some(path => location.pathname === path || location.pathname.startsWith('/booking/') || location.pathname.startsWith('/service/') || location.pathname.startsWith('/admin'));

  if (isHidden) return null;

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 pb-safe z-40">
      <div className="flex justify-around items-center h-16 px-2">
        <Link to="/marketplace" className={`flex flex-col items-center justify-center w-16 h-full gap-1 transition-colors ${isActive('/marketplace') ? 'text-primary' : 'text-text-secondary-light dark:text-text-secondary-dark hover:text-primary'}`}>
          <span className={`material-symbols-outlined text-2xl ${isActive('/marketplace') ? 'filled' : ''}`}>home</span>
          <span className="text-[10px] font-medium">Home</span>
        </Link>
        <Link to="/explore" className="flex flex-col items-center justify-center w-16 h-full text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors gap-1">
          <span className="material-symbols-outlined text-2xl">search</span>
          <span className="text-[10px] font-medium">Explore</span>
        </Link>
        <Link to="/scan" className="flex flex-col items-center justify-center w-14 h-14 -mt-6 bg-primary rounded-full shadow-lg shadow-primary/30 text-white transition-transform active:scale-95">
          <span className="material-symbols-outlined text-3xl">qr_code_scanner</span>
        </Link>
        <Link to="/bookings" className={`flex flex-col items-center justify-center w-16 h-full gap-1 transition-colors ${isActive('/bookings') ? 'text-primary' : 'text-text-secondary-light dark:text-text-secondary-dark hover:text-primary'}`}>
          <span className={`material-symbols-outlined text-2xl ${isActive('/bookings') ? 'filled' : ''}`}>receipt_long</span>
          <span className="text-[10px] font-medium">Orders</span>
        </Link>
        <Link to="/profile" className={`flex flex-col items-center justify-center w-16 h-full gap-1 transition-colors ${isActive('/profile') ? 'text-primary' : 'text-text-secondary-light dark:text-text-secondary-dark hover:text-primary'}`}>
          <span className={`material-symbols-outlined text-2xl ${isActive('/profile') ? 'filled' : ''}`}>person</span>
          <span className="text-[10px] font-medium">Profile</span>
        </Link>
      </div>
      <div className="h-5 w-full"></div>
    </div>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <AdminAuthProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display">
          <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/marketplace" element={<MarketplaceScreen />} />
            <Route path="/service/:id" element={<ServiceDetailScreen />} />

            <Route path="/booking/date" element={<SelectDateScreen />} />
            <Route path="/booking/payment" element={<SelectPaymentScreen />} />
            <Route path="/booking/review" element={<ReviewBookingScreen />} />
            <Route path="/booking/confirmation" element={<ConfirmationScreen />} />

            <Route path="/bookings" element={<MyBookingsScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/explore" element={<ExploreScreen />} />
            <Route path="/scan" element={<ScanScreen />} />

            {/* Info Pages */}
            <Route path="/technology" element={<TechnologyScreen />} />
            <Route path="/security" element={<SecurityScreen />} />
            <Route path="/performance" element={<PerformanceScreen />} />

            {/* AI Feature */}
            <Route path="/chat" element={<SupportChatScreen />} />

            {/* Admin Routes */}
            <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
            <Route path="/admin/login" element={<AdminLoginScreen />} />
            <Route path="/admin/dashboard" element={<ProtectedAdminRoute><AdminDashboardScreen /></ProtectedAdminRoute>} />
            <Route path="/admin/services" element={<ProtectedAdminRoute><AdminServicesScreen /></ProtectedAdminRoute>} />
            <Route path="/admin/bookings" element={<ProtectedAdminRoute><AdminBookingsScreen /></ProtectedAdminRoute>} />
            <Route path="/admin/users" element={<ProtectedAdminRoute><AdminUsersScreen /></ProtectedAdminRoute>} />
          </Routes>
          <BottomNav />
        </div>
      </HashRouter>
    </AdminAuthProvider>
  );
};

export default App;