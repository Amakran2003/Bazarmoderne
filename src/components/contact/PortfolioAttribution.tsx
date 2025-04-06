import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function PortfolioAttribution() {
  const { theme } = useTheme();
  
  // Teen-friendly colors
  const teenColors = {
    primary: '#FF3366',
    secondary: '#33CCFF',
    accent: '#FFCC00',
    text: theme === 'light' ? '#666666' : '#a1a1a1',
    link: '#FF3366',
    cardBg: theme === 'light' ? '#ffffff' : '#2d2d2d',
  };
  
  // Replace these with your actual information
  const developerInfo = {
    name: "Abderrazaq",
    githubUrl: "https://github.com/yourusername",
    linkedinUrl: "https://linkedin.com/in/yourusername",
    avatarUrl: "https://avatars.githubusercontent.com/u/145991267?v=4" // Using the specific GitHub avatar URL
  };
  
  return (
    <motion.div
      className="text-center mt-16 pt-8 border-t"
      style={{ 
        fontFamily: "'Montserrat', sans-serif",
        color: teenColors.text,
        borderColor: theme === 'light' ? '#e5e7eb' : '#2d3748'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
    >
      <div className="flex flex-col items-center justify-center">
        <motion.div 
          className="mb-4 relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <img 
            src={developerInfo.avatarUrl} 
            alt={developerInfo.name}
            className="w-16 h-16 rounded-full object-cover border-2"
            style={{ borderColor: teenColors.primary }}
          />
        </motion.div>
        
        <p className="mb-3 text-sm">
          Site conçu et développé par <span style={{ fontWeight: 600, color: teenColors.link }}>{developerInfo.name}</span> pour Le Bazar Moderne
        </p>
        
        <div className="flex items-center justify-center space-x-4 mt-2">
          <motion.a 
            href={developerInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full"
            style={{
              backgroundColor: theme === 'light' ? '#f4f4f5' : '#3f3f46',
            }}
            whileHover={{ 
              scale: 1.1,
              backgroundColor: theme === 'light' 
                ? 'rgba(255, 51, 102, 0.1)'
                : 'rgba(51, 204, 255, 0.2)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" style={{ color: teenColors.primary }} />
          </motion.a>
          
          <motion.a 
            href={developerInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full"
            style={{
              backgroundColor: theme === 'light' ? '#f4f4f5' : '#3f3f46',
            }}
            whileHover={{ 
              scale: 1.1,
              backgroundColor: theme === 'light' 
                ? 'rgba(255, 51, 102, 0.1)'
                : 'rgba(51, 204, 255, 0.2)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-5 h-5" style={{ color: teenColors.primary }} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
