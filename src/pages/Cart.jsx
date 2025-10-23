import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Star, Clock, Users, Calendar, Shield, CheckCircle, MapPin, Trash2, Globe
} from 'lucide-react';

const Cart = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'From Vik: Katla Ice Cave and Super Jeep Tour',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop',
      rating: 4.7,
      badge: 'Only 9 spots left',
      tourInfo: 'Tour with Departure from Vik and Afternoon Discount',
      date: 'Saturday, September 20, 2025 • 4:30 PM',
      guests: 'Adult',
      language: 'Language',
      freeCancellation: true,
      price: 17305.00
    }
  ]);

  const [previousItems] = useState([
    {
      id: 2,
      title: 'From Vik: Katla Ice Cave and Super jeep Tour',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop',
      rating: 4.7,
      tourInfo: 'Tour with Departure from Vik and Afternoon Discount',
      price: 17305.00
    }
  ]);

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <style>{`
        body {
          background-color: #FFFFFF;
        }
        .cart-page-container {
          font-family: 'Manrope', sans-serif;
          padding-top: 80px; /* Adjust if navbar height is different */
        }
        .cart-shell {
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px 16px 80px;
        }
        .cart-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          align-items: start;
          margin-top: 24px;
        }
        @media (min-width: 1024px) {
          .cart-grid {
            grid-template-columns: 2fr 1fr;
          }
        }
        .summary-aside {
          position: sticky;
          top: 100px; /* 80px navbar + 20px offset */
          height: fit-content;
        }
        .recommendations-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        @media (min-width: 640px) {
            .recommendations-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        @media (min-width: 1024px) {
            .recommendations-grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        .active-item-card-content, .previous-item-card-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        @media (min-width: 500px) {
          .active-item-card-content, .previous-item-card-content {
            flex-direction: row;
          }
        }

      `}</style>
      <div className="cart-page-container">
        <div className="cart-shell">
          {/* Header */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Shopping Cart
            </h1>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>We’ll hold your spot for</span>
              <span className="bg-orange-100 text-orange-600 rounded-lg px-3 py-1 font-bold">
                18:23
              </span>
              <span>Minutes</span>
            </div>
          </div>

          <div className="cart-grid">
            {/* LEFT COLUMN */}
            <div>
              <div className="mt-4 mb-3">
                <p className="font-bold text-gray-700">
                  Saturday, September 20
                </p>
              </div>

              {/* Active item card */}
              {cartItems.map((item, index) => (
                <motion.div 
                  key={item.id} 
                  className="bg-orange-50 border border-orange-200 rounded-xl overflow-hidden mb-4 shadow-sm"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="p-4">
                    <div className="active-item-card-content">
                      <motion.img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full sm:w-40 h-40 sm:h-auto object-cover rounded-lg flex-shrink-0"
                        initial={{ y: -200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 60, damping: 15, delay: 0.3 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      />
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={16} className={` ${i < Math.floor(item.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="font-bold text-sm">{item.rating}</span>
                        </div>
                        <h2 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h2>
                        <p className="text-sm text-gray-600 mb-4">{item.tourInfo}</p>
                        <div className="space-y-2 text-sm text-gray-700">
                          <p className="flex items-center gap-2"><Calendar size={16} className="text-orange-500" /> {item.date}</p>
                          <p className="flex items-center gap-2"><Users size={16} className="text-orange-500" /> {item.guests}</p>
                          <p className="flex items-center gap-2"><Globe size={16} className="text-orange-500" /> {item.language}</p>
                          {item.freeCancellation && (
                            <p className="flex items-center gap-2 font-bold text-green-600"><CheckCircle size={16} /> Free Cancellation</p>
                          )}
                        </div>
                      </div>
                      <button onClick={() => removeItem(item.id)} className="p-2 bg-white border rounded-lg self-start sm:self-center hover:bg-gray-100">
                        <Trash2 size={20} className="text-gray-500" />
                      </button>
                    </div>
                  </div>
                  <div className="bg-orange-500 text-white flex justify-between items-center px-4 py-3 text-sm">
                    <span className="font-bold">Total Amount : ₹{item.price.toFixed(2)}</span>
                    <span className="opacity-90 text-xs">All taxes and fees included</span>
                  </div>
                </motion.div>
              ))}

              {/* Previously in your cart */}
              <PreviousCartSection previousItems={previousItems} />
              
              {/* Based on your recent search */}
              <RecentSearchSection />
            </div>

            {/* RIGHT COLUMN */}
            <motion.aside 
              className="summary-aside"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Subtotal ({cartItems.length} item)</h3>
                <div className="mb-4">
                  <p className="text-gray-500 line-through">₹180</p>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-5xl font-extrabold text-gray-900">₹{Math.floor(subtotal)}</span>
                    <span className="text-gray-600">Per Person</span>
                  </div>
                  <div className="inline-block bg-yellow-100 text-yellow-800 font-bold text-sm px-3 py-1 rounded-md mt-3">
                    Instant Saving: ₹20
                  </div>
                </div>
                <p className="font-bold text-green-600 text-sm mb-4">All taxes and fees included</p>
                <button className="w-full py-4 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-600 transition-colors mb-5">
                  Go to Checkout
                </button>
                <div className="flex gap-4 p-4 bg-orange-50 border border-orange-200 rounded-lg mb-6">
                  <Calendar size={24} className="text-orange-500 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-sm text-gray-900">Free cancellation</p>
                    <p className="text-sm text-gray-600">Until 4:30 pm September 2025</p>
                  </div>
                </div>
                <h4 className="font-bold text-base text-gray-900 mb-4">Why book with us?</h4>
                <div className="space-y-3">
                  <p className="flex items-center gap-3 text-sm text-gray-700"><span className="flex items-center justify-center w-9 h-9 bg-orange-100 rounded-lg"><Shield size={20} className="text-orange-500"/></span> Secure Payment</p>
                  <p className="flex items-center gap-3 text-sm text-gray-700"><span className="flex items-center justify-center w-9 h-9 bg-orange-100 rounded-lg"><CheckCircle size={20} className="text-orange-500"/></span> No hidden costs</p>
                  <p className="flex items-center gap-3 text-sm text-gray-700"><span className="flex items-center justify-center w-9 h-9 bg-orange-100 rounded-lg"><Users size={20} className="text-orange-500"/></span> 24/7 customer support</p>
                </div>
                <motion.img 
                  src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&h=250&fit=crop" 
                  alt="Promo" 
                  className="w-full h-auto rounded-lg mt-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                />
              </div>
            </motion.aside>
          </div>
        </div>
      </div>
    </>
  );
};

const PreviousCartSection = ({ previousItems }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref}>
      <motion.div 
        className="mt-8 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="font-bold text-gray-700">Previously in your cart</h3>
      </motion.div>

      {previousItems.map((item, index) => (
        <motion.div 
          key={item.id} 
          className="bg-white border border-gray-200 rounded-xl p-4 mb-4 shadow-sm"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
          whileHover={{ scale: 1.02, y: -4 }}
        >
          <div className="previous-item-card-content">
            <motion.img 
              src={item.image} 
              alt={item.title} 
              className="w-full sm:w-40 h-40 sm:h-auto object-cover rounded-lg flex-shrink-0"
              initial={{ y: -200, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: -200, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 60, damping: 15, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            />
            <div className="flex-grow">
              <h2 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h2>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className={` ${i < Math.floor(item.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} />
                  ))}
                </div>
                <span className="font-bold text-sm">{item.rating}</span>
              </div>
              <div className="inline-flex items-center gap-2 p-2 bg-gray-100 border border-gray-200 rounded-lg text-sm text-gray-600 mb-4">
                <Clock size={16} className="text-gray-500" /> {item.tourInfo}
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <motion.button 
                  className="px-5 py-3 bg-orange-100 text-orange-600 font-bold rounded-lg hover:bg-orange-200 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Add back to cart
                </motion.button>
                <p className="font-bold text-sm text-gray-800 text-right sm:text-left">
                  Amount : ₹{item.price.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const RecentSearchSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="mt-12">
      <motion.h2 
        className="text-2xl font-extrabold text-gray-900 mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5 }}
      >
        Based on your recent search
      </motion.h2>
      <div className="recommendations-grid">
        {[1, 2, 3].map((n) => (
          <motion.div 
            key={n} 
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.5, delay: n * 0.15 }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <motion.img 
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=300&fit=crop" 
              alt="Paris" 
              className="w-full h-48 object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="p-4">
              <h3 className="font-bold text-base text-gray-900 h-14">Explore Paris alone with this expert guide to...</h3>
              <div className="text-sm text-gray-600 space-y-2 mt-2">
                <p className="flex items-center gap-2"><Clock size={16} className="text-gray-500" /> 10 hours</p>
                <p className="flex items-center gap-2"><MapPin size={16} className="text-gray-500" /> Pickup available</p>
                <p className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Certified by get your guide</p>
              </div>
              <div className="pt-4 mt-4 border-t">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-500">From</p>
                    <p className="font-extrabold text-xl text-gray-900">₹11,305.00</p>
                  </div>
                  <div className="flex items-center gap-1 font-bold">
                    <Star size={16} className="text-yellow-500 fill-yellow-500" /> 5.0
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1">9,843 reviews</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div 
        className="flex justify-center mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <button className="px-6 py-3 bg-gray-900 text-white rounded-full font-bold text-sm hover:bg-gray-700 transition-colors">Load More Tours</button>
      </motion.div>
    </div>
  );
};

export default Cart;

