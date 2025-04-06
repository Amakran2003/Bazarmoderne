/**
 * SplashScreen Component
 * 
 * Initial loading screen shown when the app first loads or when explicitly triggered.
 * Features:
 * - Animated logo entrance
 * - Theme-aware styling (adapts to light/dark mode)
 * - Flexible navigation with callback or redirect options
 * - Falls back to multiple navigation methods for broader browser compatibility
 * 
 * Props:
 * - onComplete: Optional callback function when animation completes
 * - redirectTo: Optional path to redirect to after animation
 * 
 * Imported by:
 * - App.tsx (used in RootComponent and AppContent)
 */
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react'; // Changed from Beef to ShoppingBag icon
import { useNavigate } from 'react-router-dom';
import './SplashScreen.css';

interface SplashScreenProps {
  onComplete?: () => void;
  redirectTo?: string;
}

export default function SplashScreen({ onComplete, redirectTo }: SplashScreenProps) {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Simple timer to call the onComplete callback after animation
    const timer = setTimeout(() => {
      try {
        if (onComplete) {
          onComplete();
        } else if (redirectTo) {
          // Simplified redirect logic for better mobile support
          const cleanPath = redirectTo.replace(/^\//, '');
          
          // First attempt: React Router
          navigate(cleanPath);
          
          // Backup attempt after a short delay if React Router might fail
          setTimeout(() => {
            if (document.location.pathname.indexOf(cleanPath) === -1) {
              // If navigation didn't work, try direct location change as fallback
              window.location.href = '#/' + cleanPath;
            }
          }, 300);
        } else {
          // Default fallback to home if no redirect specified
          navigate('/home');
        }
      } catch (error) {
        console.error('Navigation error in SplashScreen', error);
        // Ultimate fallback - direct hash change
        window.location.hash = '#/home';
      }
    }, 2500); // Animation duration
    
    return () => clearTimeout(timer);
  }, [navigate, onComplete, redirectTo]);
  
  const iconVariants = {
    hidden: { 
      scale: 0.2,
      opacity: 0,
      rotateY: -180
    },
    visible: { 
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      }
    }
  };
  
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Updated color scheme for Le Bazar Moderne
  const primaryColor = '#FF3366';
  const secondaryColor = '#33CCFF';
  
  return (
    <div className="splash-screen">
      <div className="splash-content">
        <motion.div
          className="splash-icon"
          initial="hidden"
          animate="visible"
          variants={iconVariants}
        >
          {/* Updated icon for Le Bazar Moderne */}
          <ShoppingBag 
            size={80} 
            style={{ 
              color: primaryColor,
              filter: `drop-shadow(0 0 10px ${primaryColor}40)`
            }}
          />
        </motion.div>
        
        <motion.div
          className="splash-text"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          {/* Updated branding text */}
          <h1 style={{ color: primaryColor, marginBottom: '0.5rem' }}>Le Bazar Moderne</h1>
          <p style={{ color: secondaryColor }}>Les produits rares à votre porte</p>
        </motion.div>
        
        {/* New animated loading bar */}
        <motion.div
          className="loading-bar"
          initial={{ width: 0, opacity: 0 }}
          animate={{ 
            width: "100%", 
            opacity: [0, 1, 1, 0],
            transition: { 
              width: { duration: 2, ease: "easeInOut" },
              opacity: { 
                times: [0, 0.2, 0.8, 1],
                duration: 2.5
              }
            }
          }}
          style={{
            height: '3px',
            background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor})`,
            marginTop: '2rem',
            borderRadius: '3px'
          }}
        />
      </div>
    </div>
  );
}
