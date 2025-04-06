import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import BoutiqueHeader from '../components/boutique/BoutiqueHeader';
import AboutCard from '../components/boutique/AboutCard';
import BoutiqueMap from '../components/boutique/BoutiqueMap';

const locations = [
  {
    id: 1,
    name: 'Le Bazar Moderne Vierzon',
    address: '25 Rue du Maréchal Joffre, 18100 Vierzon',
    hours: 'Lun-Dim: 11h30-23h00',
    phone: '01 23 45 67 89',
    image: 'https://images.unsplash.com/photo-1555992336-03a23c7b20ee?auto=format&fit=crop&w=800&q=80'
  }
];

export default function Boutique() {
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
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <BoutiqueHeader />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Location information card (inline instead of as a component) */}
        <motion.div
          key={locations[0].id}
          className="rounded-xl overflow-hidden h-full"
          style={{ 
            backgroundColor: teenColors.cardBg,
            boxShadow: theme === 'light' 
              ? `0 10px 25px -5px rgba(255, 51, 102, 0.15), 0 8px 10px -6px rgba(51, 204, 255, 0.1)`
              : `0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.2)`,
            border: `1px solid ${teenColors.cardBorder}`
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ 
            y: -5,
            boxShadow: theme === 'light' 
              ? `0 20px 30px -10px rgba(255, 51, 102, 0.25), 0 10px 20px -6px rgba(51, 204, 255, 0.2)`
              : `0 20px 30px -10px rgba(0, 0, 0, 0.4), 0 10px 20px -6px rgba(0, 0, 0, 0.25)`
          }}
        >
          <div className="relative">
            <img
              src={locations[0].image}
              alt={locations[0].name}
              className="w-full h-64 sm:h-80 object-cover"
            />
            <div 
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
            />
          </div>
          
          <div className="p-5 sm:p-7">
            <h3 
              className="text-xl sm:text-2xl mb-4 sm:mb-5 font-bold"
              style={{ 
                fontFamily: "'Poppins', sans-serif",
                color: teenColors.heading 
              }}
            >
              {locations[0].name}
            </h3>
            
            <div 
              className="space-y-3 sm:space-y-4 text-sm sm:text-base"
              style={{ 
                fontFamily: "'Montserrat', sans-serif",
                color: teenColors.text 
              }}
            >
              <div className="flex items-center gap-3">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: teenColors.gradient }}
                >
                  <MapPin 
                    className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" 
                    style={{ color: 'white' }} 
                  />
                </div>
                <span className="line-clamp-2">{locations[0].address}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: teenColors.gradient }}
                >
                  <Clock 
                    className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" 
                    style={{ color: 'white' }} 
                  />
                </div>
                <span>{locations[0].hours}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: teenColors.gradient }}
                >
                  <Phone 
                    className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" 
                    style={{ color: 'white' }} 
                  />
                </div>
                <span>{locations[0].phone}</span>
              </div>
            </div>
          </div>
        </motion.div>
        
        <AboutCard />
      </div>
      
      <div className="mt-10">
        <motion.h3
          className="text-xl sm:text-2xl font-bold mb-4"
          style={{ 
            fontFamily: "'Poppins', sans-serif",
            color: teenColors.heading,
            textShadow: theme === 'light' 
              ? "2px 2px 4px rgba(0, 0, 0, 0.1)" 
              : "2px 2px 4px rgba(0, 0, 0, 0.5)"
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Notre Emplacement
        </motion.h3>
        
        <BoutiqueMap />
      </div>
    </div>
  );
}
