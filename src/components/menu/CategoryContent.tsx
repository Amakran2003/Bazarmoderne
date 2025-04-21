import { motion } from 'framer-motion';
import { MenuCategory } from '../../types/products';
import MenuItem from './MenuItem';

interface CategoryContentProps {
  category: MenuCategory;
  highlightedItem: string | null;
  highlightedItemRef: React.RefObject<HTMLDivElement>;
}

export default function CategoryContent({ category, highlightedItem, highlightedItemRef }: CategoryContentProps) {
  // Check if category has items
  if (!category.items || category.items.length === 0) {
    return (
      <motion.div
        key={category.name}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center py-20"
      >
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Aucun produit disponible dans cette catégorie pour le moment.
        </p>
      </motion.div>
    );
  }

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
