/**
 * HeroSection Component
 * 
 * The main hero section displayed at the top of the homepage.
 * Features animated elements, responsive design, and parallax scrolling effects.
 * Teen-friendly design with vibrant colors and modern fonts.
 * 
 * Imported by:
 * - Home.tsx
 */
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import ThemedButton from '../common/ThemedButton';

export default function HeroSection() {
  const { themeColors, theme } = useTheme();

  // Define vibrant colors for teenage audience
  const teenColors = {
    primary: '#FF3366', // Vibrant pink/red
    secondary: '#33CCFF', // Bright blue
    accent: '#FFCC00', // Bright yellow
    text: theme === 'light' ? '#333333' : '#FFFFFF',
  };

  // Modern underline style with gradient for teen appeal
  const underlineStyle = {
    background: `linear-gradient(90deg, ${teenColors.primary} 0%, ${teenColors.secondary} 100%)`,
    height: '5px',
    borderRadius: '4px',
  };

  return (
    <motion.section 
      className="flex items-center justify-center px-4 py-16 sm:py-24 md:py-28 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ 
        backgroundImage: `radial-gradient(circle at 80% 10%, ${teenColors.primary}15, transparent 40%), 
                          radial-gradient(circle at 20% 70%, ${teenColors.secondary}15, transparent 40%)`,
      }}
    >
      <div className="text-center max-w-5xl mx-auto z-10">
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 lg:mb-12"
          style={{ 
            color: teenColors.primary,
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 800,
            textShadow: theme === 'light' 
              ? "2px 2px 4px rgba(0, 0, 0, 0.1)" 
              : "2px 2px 4px rgba(0, 0, 0, 0.5)"
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Bienvenue chez{' '}
          <div className="relative inline-block">
            <span className="relative z-10" style={{
              background: `-webkit-linear-gradient(45deg, ${teenColors.primary}, ${teenColors.secondary})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Le Bazar Moderne</span>
            <motion.div 
              className="absolute -bottom-2 left-0 w-full -z-10"
              style={underlineStyle}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
          </div>
        </motion.h1>
        
        <motion.div 
          className="mb-12 lg:mb-16 px-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl"
            style={{ 
              color: teenColors.text,
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              textShadow: theme === 'dark' ? "0px 1px 2px rgba(0, 0, 0, 0.8)" : "none" 
            }}
          >
            Des snacks exclusifs directement importés d'Asie : Mars, Snickers, Skittles, Red Bull avec des saveurs introuvables ailleurs en France.
          </p>
          <p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl mt-6"
            style={{ 
              color: teenColors.secondary,
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              textShadow: theme === 'dark' ? "0px 1px 2px rgba(0, 0, 0, 0.8)" : "none" 
            }}
          >
            Découvrez notre sélection unique de produits que vous ne trouverez nulle part ailleurs !
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <ThemedButton to="/menu" variant="primary">
            Voir nos produits
          </ThemedButton>
          
          <ThemedButton to="/boutique" variant="secondary">
            Notre boutique
          </ThemedButton>
        </motion.div>
      </div>
    </motion.section>
  );
}
