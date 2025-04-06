import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ContactInfo() {
  const { theme } = useTheme();
  
  // Teen-friendly colors
  const teenColors = {
    primary: '#FF3366',
    secondary: '#33CCFF',
    accent: '#FFCC00',
    cardBg: theme === 'light' ? '#ffffff' : '#2d2d2d',
    text: theme === 'light' ? '#333333' : '#f5f5f5',
    textMuted: theme === 'light' ? '#666666' : '#a1a1a1',
    gradient: `linear-gradient(90deg, #FF3366, #33CCFF)`,
    cardBorder: theme === 'light' ? 'rgba(255, 51, 102, 0.2)' : 'rgba(51, 204, 255, 0.2)',
  };
  
  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" style={{ color: 'white' }} />,
      title: "Adresse",
      content: "25 Rue du Maréchal Joffre, 18100 Vierzon"
    },
    {
      icon: <Phone className="w-5 h-5" style={{ color: 'white' }} />,
      title: "Téléphone",
      content: "+33 1 23 45 67 89"
    },
    {
      icon: <Mail className="w-5 h-5" style={{ color: 'white' }} />,
      title: "Email",
      content: "contact@lebazarmoderne.fr"
    },
    {
      icon: <Clock className="w-5 h-5" style={{ color: 'white' }} />,
      title: "Horaires",
      content: "Lun-Dim: 11h30-23h00"
    }
  ];
  
  return (
    <motion.div
      className="rounded-xl overflow-hidden h-full flex flex-col"
      style={{ 
        backgroundColor: teenColors.cardBg,
        boxShadow: theme === 'light' 
          ? `0 10px 25px -5px rgba(255, 51, 102, 0.15), 0 8px 10px -6px rgba(51, 204, 255, 0.1)`
          : `0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.2)`,
        border: `1px solid ${teenColors.cardBorder}`
      }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div 
        className="h-2"
        style={{ background: teenColors.gradient }}
      />
      <div className="p-6 sm:p-8">
        <h2 
          className="text-xl sm:text-2xl font-bold mb-6"
          style={{ 
            fontFamily: "'Poppins', sans-serif",
            color: teenColors.primary
          }}
        >
          Infos de Contact
        </h2>
        
        <div className="space-y-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          {/* Contact information */}
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
              >
                <div 
                  className="mt-1 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: teenColors.gradient }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 
                    className="text-base font-medium mb-1"
                    style={{ color: theme === 'light' ? teenColors.primary : '#fff' }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: teenColors.text }}>{item.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Map */}
          <motion.div
            className="rounded-lg overflow-hidden h-48 sm:h-56 mt-6 border"
            style={{ borderColor: teenColors.cardBorder }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1354.8334913599942!2d2.068775269693648!3d47.22309799819736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fadbd997f07f65%3A0x319f23b4d7bdca78!2s25%20Rue%20du%20Mar%C3%A9chal%20Joffre%2C%2018100%20Vierzon!5e0!3m2!1sfr!2sfr!4v1743948030850!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte Le Bazar Moderne"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
