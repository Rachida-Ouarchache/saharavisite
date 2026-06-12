import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AuthProvider, useAuth } from './context/AuthContext';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import LoadingSpinner from './components/LoadingSpinner';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const MorocEliteHome = lazy(() => import('./pages/MorocEliteHome'));
const About = lazy(() => import('./pages/About'));
const Destinations = lazy(() => import('./pages/Destinations'));
const DestinationDetail = lazy(() => import('./pages/DestinationDetail'));
const Tours = lazy(() => import('./pages/Tours'));
const TourDetail = lazy(() => import('./pages/TourDetail'));
const ExperienceDetail = lazy(() => import('./pages/ExperienceDetail'));
const ExperienceActivities = lazy(() => import('./pages/ExperienceActivities'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Contact = lazy(() => import('./pages/Contact'));
const AdminLogin = lazy(() => import('./pages/Admin/Login'));
const AdminDashboard = lazy(() => import('./pages/Admin/Dashboard'));

const ProtectedRoute = ({ children }) => {
  const { user, loading, isAdmin } = useAuth();
  if (loading) return <LoadingSpinner fullScreen />;
  if (!user || !isAdmin) return <Navigate to="/admin/login" replace />;
  return children;
};

const AppRoutes = () => (
  <Suspense fallback={<LoadingSpinner fullScreen />}>
    <Routes>
      <Route path="/" element={<MorocEliteHome />} />
      <Route path="/experiences/private-marrakech-tour" element={<Navigate to="/experiences/villes-imperiales-desert-10-jours" replace />} />
      <Route path="/experiences/desert-luxury-camp" element={<Navigate to="/experiences/villes-imperiales-desert-10-jours" replace />} />
      <Route path="/experiences/atlas-mountains-escape" element={<Navigate to="/experiences/villes-imperiales-desert-10-jours" replace />} />
      <Route path="/experiences/coastal-riviera-retreat" element={<Navigate to="/experiences/villes-imperiales-desert-10-jours" replace />} />
      <Route path="/experiences/:slug/activities" element={<ExperienceActivities />} />
      <Route path="/experiences/:slug" element={<ExperienceDetail />} />
      <Route path="/tripnexa" element={<Navigate to="/" replace />} />
      <Route element={<Layout />}>
        <Route path="about" element={<About />} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="destinations/:slug" element={<DestinationDetail />} />
        <Route path="tours" element={<Tours />} />
        <Route path="tours/:slug" element={<TourDetail />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="contact" element={<Contact />} />
        <Route path="book/:tourSlug" element={<Contact />} />
      </Route>
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </Suspense>
);

const RTLManager = () => {
  const { i18n } = useTranslation();
  useEffect(() => {
    const isRTL = i18n.language === 'ar';
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', i18n.language);
    document.body.style.fontFamily = isRTL
      ? "'Noto Sans Arabic', sans-serif"
      : '';
  }, [i18n.language]);
  return null;
};

const App = () => (
  <Router>
    <AuthProvider>
      <RTLManager />
      <ScrollToTop />
      <FloatingWhatsApp />
      <AppRoutes />
    </AuthProvider>
  </Router>
);

export default App;
