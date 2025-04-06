import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export default function ContactForm() {
  const { theme } = useTheme();
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
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
  
  // Handle form submission with Formspree
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch("https://formspree.io/f/xgvaezyd", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        setFormStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };
  
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
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
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
          Envoyez-nous un message
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-5" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          <div>
            <label 
              htmlFor="name" 
              className="block font-medium mb-1"
              style={{ color: teenColors.text }}
            >
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Votre nom"
              required
              className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-${teenColors.primary} transition`}
              style={{ 
                backgroundColor: theme === 'light' ? '#fff' : '#1e1e1e',
                borderColor: teenColors.cardBorder,
                color: teenColors.text
              }}
            />
          </div>
          
          <div>
            <label 
              htmlFor="email" 
              className="block font-medium mb-1"
              style={{ color: teenColors.text }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="votre.email@exemple.com"
              required
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition"
              style={{ 
                backgroundColor: theme === 'light' ? '#fff' : '#1e1e1e',
                borderColor: teenColors.cardBorder,
                color: teenColors.text
              }}
            />
          </div>
          
          <div>
            <label 
              htmlFor="subject" 
              className="block font-medium mb-1"
              style={{ color: teenColors.text }}
            >
              Sujet
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Sujet de votre message"
              required
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition"
              style={{ 
                backgroundColor: theme === 'light' ? '#fff' : '#1e1e1e',
                borderColor: teenColors.cardBorder,
                color: teenColors.text
              }}
            />
          </div>
          
          <div>
            <label 
              htmlFor="message" 
              className="block font-medium mb-1"
              style={{ color: teenColors.text }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Écrivez votre message ici..."
              required
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition"
              style={{ 
                backgroundColor: theme === 'light' ? '#fff' : '#1e1e1e',
                borderColor: teenColors.cardBorder,
                color: teenColors.text
              }}
            ></textarea>
          </div>
          
          <motion.button
            type="submit"
            className="px-6 py-3 rounded-full font-medium transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            style={{
              background: teenColors.gradient,
              color: 'white',
              boxShadow: `0 4px 10px rgba(255, 51, 102, 0.3), 0 2px 4px rgba(51, 204, 255, 0.2)`
            }}
            whileHover={{ 
              boxShadow: '0 6px 15px rgba(255, 51, 102, 0.4), 0 4px 6px rgba(51, 204, 255, 0.3)',
              scale: 1.02
            }}
            whileTap={{ scale: 0.98 }}
            disabled={formStatus === 'submitting'}
          >
            {formStatus === 'submitting' ? 'Envoi en cours...' : 'Envoyer'}
          </motion.button>
          
          {formStatus === 'success' && (
            <motion.div
              className="mt-5 p-3 rounded-lg"
              style={{ 
                backgroundColor: 'rgba(52, 211, 153, 0.1)', 
                border: '1px solid rgba(52, 211, 153, 0.2)',
                color: '#10B981'
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Message envoyé avec succès ! Nous vous répondrons très bientôt.
            </motion.div>
          )}
          
          {formStatus === 'error' && (
            <motion.div
              className="mt-5 p-3 rounded-lg"
              style={{
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                color: '#EF4444'
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Une erreur s'est produite. Veuillez réessayer ou nous contacter directement par téléphone.
            </motion.div>
          )}
        </form>
      </div>
    </motion.div>
  );
}
