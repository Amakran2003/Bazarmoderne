import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

interface MenuHeaderProps {
  title: string;
}

export default function MenuHeader({ title }: MenuHeaderProps) {
  const { theme } = useTheme();
  
  // Teen-friendly vibrant colors
  const teenColors = {
    primary: '#FF3366', // Vibrant pink/red
    secondary: '#33CCFF', // Bright blue
    accent: '#FFCC00', // Bright yellow
  };

  return (
    <div className="relative mb-12">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center relative z-10"
        style={{ 
          fontFamily: "'Poppins', sans-serif",
          background: `-webkit-linear-gradient(45deg, ${teenColors.primary}, ${teenColors.secondary})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: theme === 'light' 
            ? "0px 1px 1px rgba(0, 0, 0, 0.1)" 
            : "0px 1px 1px rgba(0, 0, 0, 0.5)"
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>
      
      {/* Decorative underline */}
      <motion.div 
        className="h-1 w-24 mx-auto rounded-full mt-2"
        style={{ 
          background: `linear-gradient(90deg, ${teenColors.primary}, ${teenColors.secondary})`,
        }}
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 96, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      />
    </div>
  );
}
