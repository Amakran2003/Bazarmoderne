import { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Layout from './components/common/Layout';
import Home from './pages/Home';
import Boutique from './pages/Boutique';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import SplashScreen from './components/common/SplashScreen';
import ScrollToTop from './components/common/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';

// Root component that shows the splash screen
function RootComponent() {
  const navigate = useNavigate();
  
  const handleSplashComplete = () => {
    navigate('/home');
  };

  return <SplashScreen onComplete={handleSplashComplete} />;
}

// Wrapper component to check if we need to show the splash screen
function AppContent() {
  const [showSplash, setShowSplash] = useState(false);
  const location = useLocation();
  const redirectCountRef = useRef(0);
  
  useEffect(() => {
    // Prevent redirect loops by tracking how many redirects have happened
    if (redirectCountRef.current > 3) {
      console.error("Too many redirects detected, breaking loop");
      sessionStorage.setItem('visited', 'true');
      setShowSplash(false);
      return;
    }
    
    // Check if this is the initial load or if there's a specific query param
    const isFirstVisit = sessionStorage.getItem('visited') !== 'true';
    const params = new URLSearchParams(location.search);
    const shouldShowSplash = params.get('splash') === 'true';
    
    // Only show splash on first visit or explicit request
    if ((isFirstVisit || shouldShowSplash) && redirectCountRef.current === 0) {
      setShowSplash(true);
      sessionStorage.setItem('visited', 'true');
      redirectCountRef.current++;
    } else {
      setShowSplash(false);
    }
    
    // Clean up any splash parameter in the URL to prevent loops
    if (shouldShowSplash && window.history.replaceState) {
      params.delete('splash');
      const newUrl = 
        location.pathname + 
        (params.toString() ? `?${params.toString()}` : '') +
        location.hash;
      window.history.replaceState({}, '', newUrl);
    }
  }, [location]);
  
  if (showSplash && location.pathname !== '/home') {
    // With HashRouter, we need to handle paths differently
    const redirectPath = location.pathname === '/' ? '/home' : location.pathname;
    const params = new URLSearchParams(location.search);
    params.delete('splash'); // Ensure splash param is removed
    const cleanSearch = params.toString() ? `?${params.toString()}` : '';
    
    return <SplashScreen redirectTo={redirectPath + cleanSearch} />;
  }
  
  return (
    <Routes>
      <Route path="/" element={<RootComponent />} />
      <Route path="/home" element={
        <Layout>
          <Home />
        </Layout>
      } />
      <Route path="/boutique" element={
        <Layout>
          <Boutique />
        </Layout>
      } />
      <Route path="/menu" element={
        <Layout>
          <Menu />
        </Layout>
      } />
      <Route path="/contact" element={
        <Layout>
          <Contact />
        </Layout>
      } />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}