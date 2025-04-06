/**
 * NewsletterSection Component
 * 
 * Newsletter signup section with teen-friendly design and featured product display.
 */
import { useState } from 'react';
import { motion } from 'framer-motion';
import ThemedButton from '../common/ThemedButton';
import { useTheme } from '../../context/ThemeContext';

export default function NewsletterSection() {
  const { theme } = useTheme();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Updated featured product - using Red Bull Orange from Boissons category
  const featuredProduct = {
    name: "Red Bull Orange Edition",
    description: "Boisson énergisante Red Bull saveur orange importée du Japon",
    price: "4,90€",
    image: "https://sweetandsoda.fr/uploads/media/OUd9yMQIFFzzHhqyve2M2TV3PmZwCbQzLfwNzwK9.png",
    discount: "10%"
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background decorations */}
      <motion.div 
        className="absolute top-10 right-10 w-40 h-40 rounded-full opacity-10 blur-3xl -z-10"
        style={{ 
          background: 'radial-gradient(circle at center, #FF3366 0%, transparent 70%)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-10 left-10 w-40 h-40 rounded-full opacity-10 blur-3xl -z-10"
        style={{ 
          background: 'radial-gradient(circle at center, #33CCFF 0%, transparent 70%)'
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Newsletter Form */}
          <motion.div 
            className="lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={`rounded-xl p-6 sm:p-8 ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-800'} shadow-md relative overflow-hidden`}>
              <h2 
                className="text-2xl sm:text-3xl font-bold mb-4" 
                style={{ 
                  fontFamily: "'Poppins', sans-serif",
                  color: '#FF3366'
                }}
              >
                Restez informé des nouveautés
              </h2>
              <p className="mb-6">
                Inscrivez-vous à notre newsletter et recevez des promotions exclusives sur nos Red Bulls importés !
              </p>
              
              <form onSubmit={handleSubmit} className="relative z-10">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Votre adresse email"
                    className={`flex-1 px-4 py-3 rounded-lg border ${
                      theme === 'light' ? 'border-gray-300 focus:border-pink-500' : 'border-gray-600 bg-gray-700 focus:border-pink-400'
                    } focus:outline-none transition-colors duration-200`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <div className="sm:block">
                    {!isSubmitting && !isSubmitted && (
                      <ThemedButton to="" variant="primary">
                        S'abonner
                      </ThemedButton>
                    )}
                    {isSubmitting && (
                      <motion.div 
                        className="inline-block px-6 sm:px-8 py-3 rounded-full font-medium transition-all duration-300 
                          text-base relative overflow-hidden bg-gradient-to-r from-pink-500 to-blue-400 text-white"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        Traitement...
                      </motion.div>
                    )}
                    {isSubmitted && (
                      <motion.div 
                        className="inline-block px-6 sm:px-8 py-3 rounded-full font-medium transition-all duration-300 
                          text-base relative overflow-hidden bg-green-500 text-white"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                      >
                        Merci ! ✓
                      </motion.div>
                    )}
                  </div>
                </div>
              </form>
              
              <div className="absolute right-0 bottom-0 w-32 h-32 opacity-10" style={{ 
                background: 'radial-gradient(circle at bottom right, #33CCFF, transparent 70%)',
              }}></div>
            </div>
          </motion.div>
          
          {/* Featured Product - Now from Boissons category */}
          <motion.div 
            className="lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={`rounded-xl overflow-hidden ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} shadow-lg relative h-full`}>
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-red-500 text-white text-xs font-bold uppercase py-1 px-3 rounded-full shadow-md">
                  {featuredProduct.discount} de réduction
                </div>
              </div>
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <motion.img 
                  src={featuredProduct.image} 
                  alt={featuredProduct.name} 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold" style={{ color: '#FF3366' }}>{featuredProduct.name}</h3>
                <p className="mt-2 text-sm">{featuredProduct.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <span className="text-lg font-bold">{featuredProduct.price}</span>
                    <del className="ml-2 text-sm text-gray-500">5,50€</del>
                  </div>
                  <ThemedButton to="/menu?category=Boissons&item=redbull-orange" variant="secondary">
                    En savoir plus
                  </ThemedButton>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
