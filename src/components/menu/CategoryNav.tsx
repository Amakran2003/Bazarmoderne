import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { MenuCategory } from '../../data/menuData';

interface CategoryNavProps {
  menuCategories: MenuCategory[];
  activeCategory: string;
  handleCategoryChange: (category: string) => void;
}

export default function CategoryNav({ menuCategories, activeCategory, handleCategoryChange }: CategoryNavProps) {
  const { theme } = useTheme();
  
  // Teen-friendly colors
  const teenColors = {
    primary: '#FF3366',
    secondary: '#33CCFF',
    accent: '#FFCC00',
    background: theme === 'light' ? '#ffffff' : '#1e1e1e',
  };
  
  return (
    <div className="hidden lg:flex justify-center mb-10 gap-4 flex-wrap">
      {menuCategories.map((category) => (
        <motion.button
          key={category.name}
          className="px-5 py-2 rounded-full font-medium transition-all duration-300 relative overflow-hidden"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            background: activeCategory === category.name 
              ? `linear-gradient(90deg, ${teenColors.primary}, ${teenColors.secondary})`
              : teenColors.background,
            color: activeCategory === category.name ? '#ffffff' : theme === 'light' ? '#333333' : '#ffffff',
            border: activeCategory === category.name ? 'none' : `2px solid ${teenColors.primary}40`,
            boxShadow: activeCategory === category.name 
              ? `0 4px 10px rgba(255, 51, 102, 0.3), 0 2px 4px rgba(51, 204, 255, 0.2)`
              : 'none'
          }}
          onClick={() => handleCategoryChange(category.name)}
          whileHover={{ 
            y: -3, 
            boxShadow: '0 6px 15px rgba(255, 51, 102, 0.25), 0 4px 6px rgba(51, 204, 255, 0.15)',
            scale: 1.03
          }}
          whileTap={{ scale: 0.97 }}
        >
          {/* Active category shine effect */}
          {activeCategory === category.name && (
            <motion.span 
              className="absolute inset-0 opacity-0"
              style={{
                background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)`,
                transform: 'skewX(-20deg) translateX(-100%)',
              }}
              animate={{
                opacity: [0, 0.5, 0],
                translateX: ['-100%', '200%', '200%']
              }}
              transition={{
                repeat: Infinity,
                repeatDelay: 2,
                duration: 1.5,
                ease: "easeInOut",
              }}
            />
          )}
          
          {category.name}
        </motion.button>
      ))}
    </div>
  );
}
