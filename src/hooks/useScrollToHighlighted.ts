import { useEffect, useRef } from 'react';

export default function useScrollToHighlighted(
  highlightedItemId: string | null,
  activeCategory: string,
  dependencies: any[] = []
) {
  const highlightedItemRef = useRef<HTMLDivElement>(null);
  const initialScrollAttemptedRef = useRef(false);
  
  useEffect(() => {
    // Reset scroll attempt flag when dependencies change
    initialScrollAttemptedRef.current = false;
    
    // Skip if no item is highlighted
    if (!highlightedItemId) return;
    
    const attemptScroll = (delay: number) => {
      setTimeout(() => {
        // Try direct method first
        const element = document.getElementById(highlightedItemId);
        if (element) {
          console.log(`Found element with ID ${highlightedItemId}, scrolling to it`);
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
          });
        } else if (highlightedItemRef.current) {
          console.log('Using ref to scroll to highlighted item');
          highlightedItemRef.current.scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
          });
        } else {
          console.log(`Could not find element with ID ${highlightedItemId}`);
          // If we haven't tried the fallback delay yet, try again with a longer delay
          if (delay < 1500 && !initialScrollAttemptedRef.current) {
            attemptScroll(1500);
            initialScrollAttemptedRef.current = true;
          }
        }
      }, delay);
    };
    
    // First attempt with short delay
    attemptScroll(600);
  }, [highlightedItemId, activeCategory, ...dependencies]);
  
  return highlightedItemRef;
}
