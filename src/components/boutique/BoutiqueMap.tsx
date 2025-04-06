import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

interface BoutiqueMapProps {
  className?: string;
}

export default function BoutiqueMap({ className = '' }: BoutiqueMapProps) {
  const { theme } = useTheme();
  
  // Teen-friendly colors - matching the rest of the site
  const teenColors = {
    primary: '#FF3366', // Vibrant pink/red
    secondary: '#33CCFF', // Bright blue
    cardBorder: theme === 'light' ? 'rgba(255, 51, 102, 0.2)' : 'rgba(51, 204, 255, 0.2)',
  };

  return (
    <motion.div
      className={`rounded-lg overflow-hidden border ${className}`}
      style={{ 
        borderColor: teenColors.cardBorder,
        height: '300px'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1354.8334913599942!2d2.068775269693648!3d47.22309799819736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fadbd997f07f65%3A0x319f23b4d7bdca78!2s25%20Rue%20du%20Mar%C3%A9chal%20Joffre%2C%2018100%20Vierzon!5e0!3m2!1sfr!2sfr!4v1743948030850!5m2!1sfr!2sfr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Carte Le Bazar Moderne"
      ></iframe>
    </motion.div>
  );
}
