import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export default function AboutCard() {
  const { theme } = useTheme();
  
  // Teen-friendly colors - matching the rest of the site
  const teenColors = {
    primary: '#FF3366', // Vibrant pink/red
    secondary: '#33CCFF', // Bright blue
    heading: theme === 'light' ? '#FF3366' : '#33CCFF',
    text: theme === 'light' ? '#333333' : '#f5f5f5',
    cardBg: theme === 'light' ? '#ffffff' : '#2d2d2d',
    gradient: `linear-gradient(90deg, #FF3366, #33CCFF)`,
    cardBorder: theme === 'light' ? 'rgba(255, 51, 102, 0.2)' : 'rgba(51, 204, 255, 0.2)',
  };
  
  return (
    <motion.div
      className="rounded-xl overflow-hidden h-full flex flex-col"
      style={{ 
        backgroundColor: teenColors.cardBg,
        boxShadow: theme === 'light' 
          ? `0 10px 25px -5px rgba(255, 51, 102, 0.15), 0 8px 10px -6px rgba(51, 204, 255, 0.1)`
          : `0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.2)`,
        border: `1px solid ${teenColors.cardBorder}`
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      whileHover={{ 
        y: -5,
        boxShadow: theme === 'light' 
          ? `0 20px 30px -10px rgba(255, 51, 102, 0.25), 0 10px 20px -6px rgba(51, 204, 255, 0.2)`
          : `0 20px 30px -10px rgba(0, 0, 0, 0.4), 0 10px 20px -6px rgba(0, 0, 0, 0.25)`
      }}
    >
      <div 
        className="h-2"
        style={{ background: teenColors.gradient }}
      />
      <div className="p-6 sm:p-7 flex-1">
        <h3 
          className="text-xl sm:text-2xl mb-5 font-bold"
          style={{ 
            fontFamily: "'Poppins', sans-serif",
            color: teenColors.heading 
          }}
        >
          À Propos de Notre Boutique
        </h3>
        
        <div style={{ fontFamily: "'Montserrat', sans-serif" }}>
          <p className="mb-4" style={{ color: teenColors.text }}>
            Bienvenue au Bazar Moderne, votre destination unique pour des produits importés introuvables ailleurs en France.
          </p>
          
          <p className="mb-4" style={{ color: teenColors.text }}>
            Notre boutique est spécialisée dans les snacks, boissons, et produits exclusifs directement importés d'Asie, offrant des saveurs uniques et des expériences gustatives exceptionnelles.
          </p>
          
          <p className="mb-4" style={{ color: teenColors.text }}>
            Nous proposons également une sélection de parfums rares et de produits de bien-être pour satisfaire tous vos sens.
          </p>
        </div>
        
        <motion.div 
          className="mt-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.a 
            href="/menu" 
            className="inline-flex items-center font-medium py-2 px-4 rounded-full"
            style={{ 
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              background: teenColors.gradient,
              color: 'white',
              boxShadow: `0 4px 10px rgba(255, 51, 102, 0.3), 0 2px 4px rgba(51, 204, 255, 0.2)`
            }}
            whileHover={{ 
              boxShadow: '0 6px 15px rgba(255, 51, 102, 0.4), 0 4px 6px rgba(51, 204, 255, 0.3)'
            }}
          >
            Découvrir nos produits
            <motion.span 
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
              className="inline-block ml-2"
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
}
