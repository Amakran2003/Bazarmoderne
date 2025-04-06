/**
 * NewsSection Component
 * 
 * Displays latest news and updates for the restaurant.
 * Features:
 * - Animated cards with hover effects
 * - Theme-aware styling with different appearances in light and dark modes
 * - Links to relevant menu items or other pages
 * - Background decorations with animated elements
 * 
 * Imported by:
 * - Home.tsx
 */
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { newsItems } from '../../data/menuData';
import { useTheme } from '../../context/ThemeContext';

export default function NewsSection() {
  const { theme } = useTheme();

  // Teen-friendly colors - matching the rest of the site
  const teenColors = {
    primary: '#FF3366', // Vibrant pink/red
    secondary: '#33CCFF', // Bright blue
    accent: '#FFCC00', // Bright yellow
    heading: theme === 'light' ? '#FF3366' : '#FF3366', // Consistent heading color
    text: theme === 'light' ? '#333333' : '#f5f5f5',
    cardBg: theme === 'light' ? '#ffffff' : '#2d2d2d',
    gradient: `linear-gradient(90deg, #FF3366, #33CCFF)`,
    cardBorder: theme === 'light' ? 'rgba(255, 51, 102, 0.2)' : 'rgba(51, 204, 255, 0.2)',
    sectionBg: theme === 'light' ? '#f9f5f0' : '#1a1a1a',
  };

  return (
    <motion.section 
      className="py-12 relative overflow-hidden"
      style={{ 
        backgroundColor: teenColors.sectionBg,
        zIndex: 0 
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background details */}
      <motion.div 
        className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-opacity-5 blur-3xl"
        style={{ backgroundColor: teenColors.primary }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-opacity-5 blur-3xl"
        style={{ backgroundColor: teenColors.secondary }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2"
            style={{ 
              fontFamily: "'Poppins', sans-serif", 
              color: teenColors.heading,
              textShadow: theme === 'dark' ? "0px 1px 2px rgba(0, 0, 0, 0.5)" : "none" 
            }}>
            Nos Nouveautés
          </h2>
          <div className="flex justify-center mb-8">
            <motion.div 
              className="h-1 w-20 rounded-full"
              style={{ background: teenColors.gradient }}
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>
        
        <div className="max-w-2xl mx-auto relative z-10">
          {newsItems.map((news, index) => (
            <Link
              key={news.id}
              to={news.link}
              onClick={() => window.scrollTo(0, 0)}
              className="block mb-8 last:mb-0"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  zIndex: 100,
                  boxShadow: theme === 'light' 
                    ? `0 15px 30px -5px rgba(255, 51, 102, 0.25), 0 10px 10px -5px rgba(51, 204, 255, 0.2)`
                    : "0 15px 30px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.25)"
                }}
                className="rounded-xl overflow-hidden group"
                style={{ 
                  backgroundColor: teenColors.cardBg,
                  willChange: 'transform',
                  border: `1px solid ${teenColors.cardBorder}`,
                  boxShadow: theme === 'light' 
                    ? `0 4px 6px -1px rgba(255, 51, 102, 0.15), 0 2px 4px -1px rgba(51, 204, 255, 0.1)` 
                    : "0 4px 8px rgba(0, 0, 0, 0.4)" 
                }}
              >
                <div className="relative">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-48 sm:h-56 md:h-64 object-cover"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  />
                  <motion.div 
                    className="absolute bottom-4 right-4 px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: teenColors.gradient,
                      color: 'white',
                      fontFamily: "'Montserrat', sans-serif",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.15)"
                    }}
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {news.date}
                  </motion.div>
                </div>
                
                <div className="p-5">
                  <div className="mb-3">
                    <h3 
                      className="text-lg sm:text-xl font-bold mb-2"
                      style={{ 
                        fontFamily: "'Poppins', sans-serif",
                        color: teenColors.heading,
                        textShadow: theme === 'dark' ? "0px 1px 1px rgba(0, 0, 0, 0.5)" : "none" 
                      }}>
                      {news.title}
                    </h3>
                    <div 
                      className="w-10 h-1 rounded-full"
                      style={{ background: teenColors.gradient }} 
                    />
                  </div>
                  <p 
                    className="text-sm sm:text-base"
                    style={{ 
                      fontFamily: "'Montserrat', sans-serif",
                      color: teenColors.text 
                    }}>
                    {news.description}
                  </p>
                  
                  <div className="mt-4">
                    <span 
                      className="inline-flex items-center text-sm sm:text-base font-medium group-hover:underline"
                      style={{ 
                        fontFamily: "'Montserrat', sans-serif",
                        color: teenColors.heading,
                        textShadow: theme === 'dark' ? "0px 1px 1px rgba(0, 0, 0, 0.5)" : "none" 
                      }}
                    >
                      En savoir plus 
                      <motion.span 
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                        className="inline-block ml-1"
                      >
                        →
                      </motion.span>
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
