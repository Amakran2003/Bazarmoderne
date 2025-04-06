import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export default function BoutiqueHeader() {
  const { theme } = useTheme();
  
  // Teen-friendly colors - matching the rest of the site
  const teenColors = {
    primary: '#FF3366', // Vibrant pink/red
    secondary: '#33CCFF', // Bright blue
    heading: theme === 'light' ? '#FF3366' : '#FF3366',
    gradient: `linear-gradient(90deg, #FF3366, #33CCFF)`,
  };
  
  return (
    <>
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl text-center mb-3 sm:mb-4"
        style={{ 
          color: teenColors.heading,
          fontFamily: "'Poppins', sans-serif", 
          fontWeight: 800,
          textShadow: theme === 'light' 
            ? "2px 2px 4px rgba(0, 0, 0, 0.1)" 
            : "2px 2px 4px rgba(0, 0, 0, 0.5)"
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Notre Boutique
      </motion.h1>

      <motion.div
        className="h-1 w-24 mx-auto mb-8 sm:mb-12 rounded-full"
        style={{ background: teenColors.gradient }}
        initial={{ width: 0 }}
        animate={{ width: 96 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </>
  );
}
