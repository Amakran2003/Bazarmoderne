/**
 * Layout Component
 * 
 * Main application layout wrapper that provides consistent structure across all pages.
 * Features:
 * - Responsive header with navigation
 * - Mobile menu with animation
 * - Teen-friendly styling with vibrant colors and modern fonts
 * - Conditional footer (hidden on menu page on mobile)
 */
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Globe, Facebook } from 'lucide-react'; // Import icons
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../../context/ThemeContext';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const location = useLocation();
  const isMenuPage = location.pathname === '/menu';
  const { theme, themeColors } = useTheme();

  // Detect if we're on desktop or mobile
  useEffect(() => {
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth >= 768); // 768px is the "md" breakpoint in Tailwind
    };
    
    // Initial check
    checkIfDesktop();
    
    // Update on window resize
    window.addEventListener('resize', checkIfDesktop);
    
    return () => {
      window.removeEventListener('resize', checkIfDesktop);
    };
  }, []);

  const navItems = [
    { name: 'Accueil', path: '/home' },
    { name: 'Notre Boutique', path: '/boutique' },
    { name: 'Produits', path: '/menu' },
    { name: 'Contact', path: '/contact' }
  ];

  // Define vibrant colors for teenage audience - same as HeroSection
  const teenColors = {
    primary: '#FF3366', // Vibrant pink/red
    secondary: '#33CCFF', // Bright blue
    accent: '#FFCC00', // Bright yellow
    text: theme === 'light' ? '#333333' : '#FFFFFF',
    background: theme === 'light' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(18, 18, 18, 0.95)',
    navHover: theme === 'light' ? '#f0f0f0' : '#333333',
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300" 
         style={{ backgroundColor: themeColors.background }}>
      <header className="fixed top-0 left-0 right-0 backdrop-blur-md shadow-sm z-[9999] transition-colors duration-300"
              style={{ backgroundColor: teenColors.background }}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Link 
              to="/home" 
              className="text-xl sm:text-2xl font-bold nav-item"
              style={{ 
                fontFamily: "'Poppins', sans-serif",
                position: 'relative',
                zIndex: 1000,
              }}
            >
              <span style={{
                background: `-webkit-linear-gradient(45deg, ${teenColors.primary}, ${teenColors.secondary})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 800,
              }}>
                Le Bazar Moderne
              </span>
            </Link>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <motion.div 
                key={item.path} 
                whileHover={{ y: -4, scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  className={`font-medium text-sm lg:text-base nav-item rounded-full px-3 py-1`}
                  style={{ 
                    color: location.pathname === item.path ? teenColors.primary : teenColors.text,
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: location.pathname === item.path ? 700 : 500,
                    backgroundColor: location.pathname === item.path 
                      ? `${teenColors.primary}15` 
                      : 'transparent',
                    border: location.pathname === item.path 
                      ? `1px solid ${teenColors.primary}30` 
                      : '1px solid transparent',
                    transition: 'all 0.3s ease',
                    zIndex: 1000, 
                    position: 'relative' 
                  }}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <div className="relative">
              <ThemeToggle />
            </div>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <motion.button
              className="relative z-60"
              style={{ color: teenColors.primary }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </motion.button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden"
          initial={false}
          animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ overflow: isMobileMenuOpen ? 'visible' : 'hidden' }}
        >
          <div 
            className="px-4 py-2 space-y-1 shadow-lg"
            style={{ 
              backgroundColor: theme === 'light' ? '#ffffff' : '#1a1a1a',
              borderTop: `1px solid ${teenColors.primary}20`,
              borderBottom: `1px solid ${teenColors.primary}20`,
            }}
          >
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  className={`block py-2 ${location.pathname === item.path ? 'font-semibold' : ''}`}
                  style={{ 
                    color: location.pathname === item.path ? teenColors.primary : teenColors.text,
                    fontFamily: "'Montserrat', sans-serif"
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="flex-1 mt-16 lg:mt-20 relative z-[50]">
        {children}
      </main>

      {/* Footer */}
      {(!isMenuPage || (isMenuPage && isDesktop)) && (
        <footer className="py-4 text-xs transition-colors duration-300"
                style={{ 
                  background: `linear-gradient(90deg, ${teenColors.primary}dd, ${teenColors.secondary}dd)`,
                }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Social Media Section - Made more visible */}
            <div className="mb-3 text-center">
              <h3 className="text-sm font-bold mb-2" 
                  style={{ 
                    fontFamily: "'Poppins', sans-serif", 
                    color: 'white',
                    textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                  }}>
                Suivez-nous
              </h3>
              <div className="flex justify-center items-center space-x-6">
                <a 
                  href="https://instagram.com/lebazarmoderne" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center hover:opacity-80 transition-opacity bg-white/10 px-3 py-2 rounded-lg"
                >
                  <Instagram className="w-4 h-4 mb-1 text-white" />
                  <span className="text-xs font-medium" 
                        style={{ 
                          fontFamily: "'Montserrat', sans-serif",
                          color: 'white',
                          textShadow: '0 1px 1px rgba(0,0,0,0.2)'
                        }}>
                    @lebazarmoderne
                  </span>
                </a>
                <a 
                  href="https://tiktok.com/@lebazarmoderne" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center hover:opacity-80 transition-opacity bg-white/10 px-3 py-2 rounded-lg"
                >
                  <Globe className="w-4 h-4 mb-1 text-white" />
                  <span className="text-xs font-medium" 
                        style={{ 
                          fontFamily: "'Montserrat', sans-serif",
                          color: 'white',
                          textShadow: '0 1px 1px rgba(0,0,0,0.2)'
                        }}>
                    @lebazarmoderne
                  </span>
                </a>
                <a 
                  href="https://facebook.com/lebazarmoderne" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center hover:opacity-80 transition-opacity bg-white/10 px-3 py-2 rounded-lg"
                >
                  <Facebook className="w-4 h-4 mb-1 text-white" />
                  <span className="text-xs font-medium" 
                        style={{ 
                          fontFamily: "'Montserrat', sans-serif",
                          color: 'white',
                          textShadow: '0 1px 1px rgba(0,0,0,0.2)'
                        }}>
                    Le Bazar Moderne
                  </span>
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center border-t border-white/20 pt-3">
              <p className="text-xs" style={{ fontFamily: "'Montserrat', sans-serif", color: 'white' }}>
                &copy; {new Date().getFullYear()} Le Bazar Moderne • Tous droits réservés
              </p>
              <div className="mt-1 sm:mt-0 flex space-x-4">
                <a href="#" 
                   className="hover:underline text-xs text-white"
                   style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Mentions légales
                </a>
                <a href="#" 
                   className="hover:underline text-xs text-white"
                   style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Politique de confidentialité
                </a>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}