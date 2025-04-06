import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { MenuItem as MenuItemType } from '../../data/menuData';

interface MenuItemProps {
  item: MenuItemType;
  index: number;
  isHighlighted: boolean;
  highlightedItemRef: React.RefObject<HTMLDivElement> | null;
}

export default function MenuItem({ item, index, isHighlighted, highlightedItemRef }: MenuItemProps) {
  const { theme } = useTheme();
  
  // Teen-friendly colors
  const teenColors = {
    primary: '#FF3366',
    secondary: '#33CCFF',
    accent: '#FFCC00',
    cardBg: theme === 'light' ? '#ffffff' : '#2d2d2d',
    textColor: theme === 'light' ? '#333333' : '#f5f5f5',
    textMuted: theme === 'light' ? '#666666' : '#a1a1a1'
  };
  
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
        isHighlighted ? `ring-2 ring-opacity-70 ring-[${teenColors.primary}]` : ''
      }`}
      style={{
        backgroundColor: teenColors.cardBg,
        boxShadow: isHighlighted
          ? `0 10px 25px -5px rgba(255, 51, 102, 0.5), 0 8px 10px -6px rgba(51, 204, 255, 0.25)`
          : theme === 'light'
            ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            : '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.18)',
        transform: isHighlighted ? 'scale(1.02)' : 'scale(1)',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
      }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.075
      }}
      whileHover={{ 
        y: -5,
        boxShadow: theme === 'light' 
          ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          : '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.18)'
      }}
    >
      {/* Image container with overlay */}
      <div 
        className={`relative ${isBeverage ? 'bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900' : ''}`}
        style={{ 
          height: isBeverage ? '240px' : '208px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}
      >
        <img 
          src={item.image} 
          alt={item.name}
          className={isBeverage 
            ? "h-full py-4 object-contain" 
            : "w-full h-full object-cover"}
          style={{
            maxHeight: isBeverage ? '100%' : 'none',
            maxWidth: isBeverage ? '90%' : 'none'
          }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      <div className="flex-1 p-5">
        <div className="mb-2 flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold"
                style={{ 
                  color: teenColors.primary, 
                  fontFamily: "'Montserrat', sans-serif"
                }}>
              {item.name}
            </h3>
            {/* Display size if available */}
            {item.size && (
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 mt-1 inline-block"
                    style={{ color: teenColors.textMuted }}>
                {item.size}
              </span>
            )}
          </div>
          <motion.div 
            className="px-3 py-1 rounded-full text-sm font-semibold"
            style={{ 
              background: `linear-gradient(90deg, ${teenColors.primary}, ${teenColors.secondary})`,
              color: 'white' 
            }}
            whileHover={{ scale: 1.05 }}
          >
            {item.price}
          </motion.div>
        </div>

        <p className="text-sm mt-2" 
           style={{ 
             color: teenColors.textMuted,
             fontFamily: "'Montserrat', sans-serif"
          }}>
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
