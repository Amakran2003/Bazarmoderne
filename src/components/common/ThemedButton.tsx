/**
 * ThemedButton Component
 * 
 * Reusable styled button component with teen-friendly styling.
 * Features:
 * - Two variants: primary (filled) and secondary (outlined)
 * - Animation effects on hover and click
 * - Vibrant colors that appeal to teen audiences
 * - Advanced hover effects
 * - Router Link integration
 */
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

interface ThemedButtonProps {
  to: string;
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
}

export default function ThemedButton({ to, variant, children }: ThemedButtonProps) {
  const { theme } = useTheme();
  
  // Teen-friendly colors
  const teenColors = {
    primary: '#FF3366', // Vibrant pink/red
    secondary: '#33CCFF', // Bright blue
    accent: '#FFCC00', // Bright yellow
  };
  
  // Common button classes
  const baseClasses = "inline-block px-6 sm:px-8 py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base md:text-lg relative overflow-hidden group";
  
  // Determine classes based on variant and theme
  const variantClasses = variant === 'primary' 
    ? `text-white hover:shadow-lg ${
        theme === 'dark' ? 'shadow-lg shadow-[#FF3366]/20' : ''
      }`
    : `border-2 ${
        theme === 'dark' 
          ? 'bg-[#1e1e1e] hover:bg-[#2a2a2a]' 
          : 'bg-white hover:bg-gray-50'
      }`;
    
  // Button styles
  const buttonStyles = {
    background: variant === 'primary' 
      ? `linear-gradient(90deg, ${teenColors.primary}, ${teenColors.secondary})`
      : 'transparent',
    borderColor: variant === 'secondary' ? teenColors.primary : 'transparent',
    color: variant === 'secondary' ? teenColors.primary : '#ffffff',
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 600,
    boxShadow: variant === 'primary' 
      ? `0 4px 10px rgba(255, 51, 102, 0.3), 0 2px 4px rgba(51, 204, 255, 0.2)` 
      : 'none',
  };
    
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }} 
      whileTap={{ scale: 0.95 }}
      className="relative"
    >
      <Link 
        to={to} 
        className={`${baseClasses} ${variantClasses}`}
        style={buttonStyles}
      >
        {/* Button shine effect */}
        <motion.span 
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          style={{
            background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)`,
            transform: 'skewX(-20deg) translateX(-100%)',
            transition: 'transform 0.8s ease, opacity 0.3s ease',
          }}
          animate={{
            transform: ['translateX(-100%) skewX(-20deg)', 'translateX(200%) skewX(-20deg)'],
          }}
          transition={{
            repeat: Infinity,
            repeatDelay: 1.5,
            duration: 1.5,
            ease: "easeInOut",
          }}
        />
        
        {/* Text content */}
        <span className="relative z-10">
          {children}
        </span>
      </Link>
    </motion.div>
  );
}
