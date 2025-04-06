import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export default function ContactForm() {
  const { theme } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Teen-friendly colors with fixed values instead of template literals
  const teenColors = {
    primary: '#FF3366', // Vibrant pink/red
    secondary: '#33CCFF', // Bright blue
    accent: '#FFCC00', // Bright yellow
    heading: theme === 'light' ? '#FF3366' : '#FF3366', // Consistent heading color
    text: theme === 'light' ? '#333333' : '#f5f5f5',
    cardBg: theme === 'light' ? '#ffffff' : '#2d2d2d',
    cardBorder: theme === 'light' ? 'rgba(255, 51, 102, 0.2)' : 'rgba(51, 204, 255, 0.2)',
  };

  // Set CSS variables to avoid template literals in the styles
  useEffect(() => {
    document.documentElement.style.setProperty('--contact-form-ring-color', '#FF3366');
    document.documentElement.style.setProperty('--contact-text-color', teenColors.text);
    document.documentElement.style.setProperty('--contact-bg-color', theme === 'light' ? '#fff' : '#1e1e1e');
    document.documentElement.style.setProperty('--contact-border-color', teenColors.cardBorder);
  }, [theme, teenColors.text, teenColors.cardBorder]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };
  
  return (
    <div className="max-w-2xl mx-auto">
      <motion.h2
        className="text-2xl sm:text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ 
          fontFamily: "'Poppins', sans-serif",
          color: teenColors.primary
        }}
      >
        Envoyez-nous un message
      </motion.h2>
      
      <form onSubmit={handleSubmit} className="space-y-5" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        <div>
          <label 
            htmlFor="name" 
            className="block font-medium mb-1"
            style={{ color: 'var(--contact-text-color)' }}
          >
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Votre nom"
            required
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2"
            style={{ 
              backgroundColor: 'var(--contact-bg-color)',
              borderColor: 'var(--contact-border-color)',
              color: 'var(--contact-text-color)'
            }}
          />
        </div>
        
        <div>
          <label 
            htmlFor="email" 
            className="block font-medium mb-1"
            style={{ color: 'var(--contact-text-color)' }}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="votre.email@exemple.com"
            required
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2"
            style={{ 
              backgroundColor: 'var(--contact-bg-color)',
              borderColor: 'var(--contact-border-color)',
              color: 'var(--contact-text-color)'
            }}
          />
        </div>
        
        <div>
          <label 
            htmlFor="subject" 
            className="block font-medium mb-1"
            style={{ color: 'var(--contact-text-color)' }}
          >
            Sujet
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Sujet de votre message"
            required
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2"
            style={{ 
              backgroundColor: 'var(--contact-bg-color)',
              borderColor: 'var(--contact-border-color)',
              color: 'var(--contact-text-color)'
            }}
          />
        </div>
        
        <div>
          <label 
            htmlFor="message" 
            className="block font-medium mb-1"
            style={{ color: 'var(--contact-text-color)' }}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Écrivez votre message ici..."
            required
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2"
            style={{ 
              backgroundColor: 'var(--contact-bg-color)',
              borderColor: 'var(--contact-border-color)',
              color: 'var(--contact-text-color)'
            }}
          />
        </div>
        
        <div className="pt-2">
          {!isSubmitting && !isSubmitted && (
            <motion.button
              type="submit"
              className="w-full py-3 rounded-lg font-medium text-white transition"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ 
                background: `linear-gradient(90deg, ${teenColors.primary}, ${teenColors.secondary})`,
                boxShadow: `0 4px 10px rgba(255, 51, 102, 0.2)`
              }}
            >
              Envoyer
            </motion.button>
          )}
          
          {isSubmitting && (
            <motion.div 
              className="w-full py-3 rounded-lg font-medium text-white flex justify-center items-center"
              style={{ 
                background: `linear-gradient(90deg, ${teenColors.primary}, ${teenColors.secondary})`,
                opacity: 0.8
              }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Envoi en cours...
            </motion.div>
          )}
          
          {isSubmitted && (
            <motion.div 
              className="w-full py-3 rounded-lg font-medium text-white text-center"
              style={{ backgroundColor: '#22c55e' }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Message envoyé avec succès !
            </motion.div>
          )}
        </div>
      </form>
    </div>
  );
}
