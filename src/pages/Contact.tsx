import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import PortfolioAttribution from '../components/contact/PortfolioAttribution';

export default function Contact() {
  const { theme } = useTheme();
  
  // Teen-friendly colors - matching the rest of the site
  const teenColors = {
    primary: '#FF3366', // Vibrant pink/red
    secondary: '#33CCFF', // Bright blue
    accent: '#FFCC00', // Bright yellow
    heading: theme === 'light' ? '#FF3366' : '#FF3366',
    gradient: `linear-gradient(90deg, #FF3366, #33CCFF)`,
  };
  
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative overflow-hidden">
      {/* Background decorations */}
      <motion.div 
        className="fixed top-20 right-0 w-80 h-80 rounded-full opacity-10 blur-3xl z-0"
        style={{ 
          background: `radial-gradient(circle at center, ${teenColors.primary}50 0%, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="fixed bottom-20 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl z-0"
        style={{ 
          background: `radial-gradient(circle at center, ${teenColors.secondary}50 0%, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl text-center mb-3 sm:mb-4 relative z-10"
        style={{ 
          fontFamily: "'Poppins', sans-serif",
          background: `-webkit-linear-gradient(45deg, ${teenColors.primary}, ${teenColors.secondary})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 800,
          textShadow: theme === 'light' 
            ? "2px 2px 4px rgba(0, 0, 0, 0.1)" 
            : "2px 2px 4px rgba(0, 0, 0, 0.5)"
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Nous Contacter
      </motion.h1>

      <motion.div
        className="h-1 w-24 mx-auto mb-12 rounded-full"
        style={{ background: teenColors.gradient }}
        initial={{ width: 0 }}
        animate={{ width: 96 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        <ContactForm />
        <ContactInfo />
      </div>
      
      <PortfolioAttribution />
    </div>
  );
}