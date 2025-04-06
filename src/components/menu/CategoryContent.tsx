import { motion } from 'framer-motion';
import { MenuCategory } from '../../data/menuData';
import MenuItem from './MenuItem';

interface CategoryContentProps {
  category: MenuCategory;
  highlightedItem: string | null;
  highlightedItemRef: React.RefObject<HTMLDivElement>;
}

export default function CategoryContent({ category, highlightedItem, highlightedItemRef }: CategoryContentProps) {
  return (
    <motion.div
      key={category.name}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.items.map((item, itemIndex) => (
          <MenuItem 
            key={`${item.id}-${itemIndex}`}
            item={item}
            index={itemIndex}
            isHighlighted={item.id === highlightedItem}
            highlightedItemRef={item.id === highlightedItem ? highlightedItemRef : null}
          />
        ))}
      </div>
    </motion.div>
  );
}
