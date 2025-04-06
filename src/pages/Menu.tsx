import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { menuCategories } from '../data/menuData';
import { motion } from 'framer-motion';

// Import components
import MenuHeader from '../components/menu/MenuHeader';
import CategoryNav from '../components/menu/CategoryNav';
import MobileNav from '../components/menu/MobileNav';
import CategoryContent from '../components/menu/CategoryContent';
import MenuPageContainer from '../components/menu/MenuPageContainer';

// Import hooks
import useScrollToHighlighted from '../hooks/useScrollToHighlighted';

export default function Menu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const itemParam = searchParams.get('item');
  
  const [activeCategory, setActiveCategory] = useState('Boissons');
  const [highlightedItem, setHighlightedItem] = useState<string | null>(null);
  // Track whether we've already scrolled to this item
  const scrolledToItemRef = useRef<string | null>(null);
  
  // Use our custom hook to handle scrolling
  const highlightedItemRef = useScrollToHighlighted(
    // Only pass the item ID if we haven't scrolled to it yet
    highlightedItem && highlightedItem !== scrolledToItemRef.current ? highlightedItem : null,
    activeCategory
  );
  
  useEffect(() => {
    document.title = "Nos Produits | Le Bazar Moderne";
    
    // Update active category from URL parameter
    if (categoryParam) {
      const categoryExists = menuCategories.some(cat => cat.name === categoryParam);
      if (categoryExists) {
        setActiveCategory(categoryParam);
      }
    }
    
    // Set highlighted item from URL parameter
    if (itemParam) {
      setHighlightedItem(itemParam);
      console.log('Item to highlight:', itemParam);
    }
  }, [categoryParam, itemParam]);

  // Record that we've scrolled to this item when it changes
  useEffect(() => {
    if (highlightedItem) {
      scrolledToItemRef.current = highlightedItem;
    }
  }, [highlightedItem]);

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    
    // Always reset highlighted item when changing categories
    setHighlightedItem(null);
    
    // Remove the item param from URL when changing categories
    if (itemParam) {
      const newParams = new URLSearchParams(searchParams);
      newParams.delete('item');
      
      // If we came from a URL with a category, update it
      if (categoryParam) {
        newParams.set('category', category);
      }
      
      setSearchParams(newParams);
    }
    
    window.scrollTo(0, 0);
  };

  return (
    <MenuPageContainer>
      {/* Page Header */}
      <MenuHeader title={activeCategory} />

      {/* Desktop Category Navigation */}
      <CategoryNav 
        menuCategories={menuCategories}
        activeCategory={activeCategory}
        handleCategoryChange={handleCategoryChange}
      />

      {/* Category Content */}
      <motion.div 
        className="space-y-8"
        transition={{ staggerChildren: 0.07 }}
      >
        {menuCategories
          .filter(category => category.name === activeCategory)
          .map((category) => (
            <CategoryContent 
              key={category.name}
              category={category}
              highlightedItem={highlightedItem}
              highlightedItemRef={highlightedItemRef}
            />
          ))}
      </motion.div>

      {/* Mobile Navigation */}
      <MobileNav 
        menuCategories={menuCategories}
        activeCategory={activeCategory}
        handleCategoryChange={handleCategoryChange}
      />
    </MenuPageContainer>
  );
}