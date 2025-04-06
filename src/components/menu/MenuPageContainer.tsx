import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

interface MenuPageContainerProps {
  children: React.ReactNode;
}

export default function MenuPageContainer({ children }: MenuPageContainerProps) {
  const { theme } = useTheme();
  
  // Teen-friendly colors
  const teenColors = {
    primary: '#FF3366',
    secondary: '#33CCFF',
    accent: '#FFCC00',
  };

  return (
    <div className="pb-24 lg:pb-12 relative overflow-hidden">
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

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {children}
      </div>
    </div>
  );
}
