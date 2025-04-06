import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { MenuItem as MenuItemType } from '../../data/menuData';
import { useEffect } from 'react';

interface MenuItemProps {
  item: MenuItemType;
  index: number;
  isHighlighted: boolean;
  highlightedItemRef: React.RefObject<HTMLDivElement> | null;
}

export default function MenuItem({ item, index, isHighlighted, highlightedItemRef }: MenuItemProps) {
  const { theme } = useTheme();
  
  // Teen-friendly colors - using hard-coded values
  const teenColors = {
    primary: '#FF3366',
    secondary: '#33CCFF',
    accent: '#FFCC00',
    cardBg: theme === 'light' ? '#ffffff' : '#2d2d2d',
    textColor: theme === 'light' ? '#333333' : '#f5f5f5',
    textMuted: theme === 'light' ? '#666666' : '#a1a1a1'
  };
  
  // Set CSS variables to avoid template literals
  useEffect(() => {
    document.documentElement.style.setProperty('--menu-item-ring-color', '#FF3366');
    document.documentElement.style.setProperty('--menu-highlight-shadow', 
      '0 10px 25px -5px rgba(255, 51, 102, 0.5), 0 8px 10px -6px rgba(51, 204, 255, 0.25)');
  }, []);
  
  // Check if this is a beverage item
  const isBeverage = item.category === 'Boissons' || 
                     (item.id && (item.id.includes('redbull') || 
                                 item.id.includes('fanta') || 
                                 item.id.includes('drink')));
  
  return (
    <motion.div
      key={`${item.id}-${index}`}
      id={item.id}
      ref={isHighlighted ? highlightedItemRef : null}
      className={`rounded-xl overflow-hidden flex flex-col relative ${
        isHighlighted ? 'ring-2 ring-opacity-70' : ''
      }`}
      style={{
        backgroundColor: teenColors.cardBg,
        boxShadow: isHighlighted
          ? 'var(--menu-highlight-shadow)' 
          : theme === 'light'
            ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            : '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.18)',
        borderColor: isHighlighted ? '#FF3366' : 'transparent',
        maxWidth: '380px',
        width: '100%'
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.05
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.3 }
      }}
    >
      <div className="relative">
        <div className="relative aspect-square overflow-hidden">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          
          {/* Size badge for beverages */}
          {isBeverage && item.size && (
            <div className="absolute top-2 left-2 bg-gray-900/70 text-white text-xs font-bold px-2 py-1 rounded-full">
              {item.size}
            </div>
          )}
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold mb-1" style={{ color: teenColors.primary }}>
          {item.name}
        </h3>
        
        <p className="text-sm mb-4 flex-grow" style={{ color: teenColors.textColor }}>
          {item.description}
        </p>
        
        <div className="flex justify-between items-center mt-auto">
          <span className="font-bold" style={{ color: teenColors.primary }}>
            {item.price}
          </span>
          
          <button 
            className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
            style={{ 
              backgroundColor: teenColors.primary + '20', // 20% opacity
              color: teenColors.primary 
            }}
          >
            Détails
          </button>
        </div>
      </div>
    </motion.div>
  );
}
