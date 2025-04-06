import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { MenuCategory } from '../../data/menuData';

interface MobileNavProps {
  menuCategories: MenuCategory[];
  activeCategory: string;
  handleCategoryChange: (category: string) => void;
}

export default function MobileNav({ menuCategories, activeCategory, handleCategoryChange }: MobileNavProps) {
  const { theme } = useTheme();
  
  // Teen-friendly colors
  const teenColors = {
    primary: '#FF3366',
    secondary: '#33CCFF',
    accent: '#FFCC00',
    background: theme === 'light' 
      ? 'rgba(255, 255, 255, 0.95)' 
      : 'rgba(30, 30, 30, 0.95)',
    borderColor: theme === 'light' 
      ? 'rgba(255, 51, 102, 0.2)' 
      : 'rgba(51, 204, 255, 0.2)',
  };
  
  return (
    <motion.nav 
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden border-t backdrop-blur-md"
      style={{
        backgroundColor: teenColors.background,
        borderColor: teenColors.borderColor,
        boxShadow: '0 -4px 10px rgba(0,0,0,0.1)'
      }}
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-screen-xl mx-auto px-2">
        <div className="flex justify-around py-3 overflow-x-auto">
          {menuCategories.map((category) => (
            <motion.button
              key={category.name}
              className="flex flex-col items-center px-2 sm:px-3 py-2 transition-all whitespace-nowrap"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                color: activeCategory === category.name 
                  ? activeCategory === category.name
                    ? teenColors.primary
                    : theme === 'light' ? '#1a1a1a' : '#ffffff' 
                  : theme === 'light' ? '#666666' : '#a1a1a1'
              }}
              onClick={() => handleCategoryChange(category.name)}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xs sm:text-sm font-medium">{category.name}</span>
              {activeCategory === category.name && (
                <motion.div
                  className="h-1 rounded-full mt-1"
                  style={{ 
                    background: `linear-gradient(90deg, ${teenColors.primary}, ${teenColors.secondary})`,
                    width: '50%',
                  }}
                  layoutId="mobileActiveIndicator"
                  transition={{ type: 'spring', duration: 0.5 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
