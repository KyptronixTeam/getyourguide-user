import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { 
  Heart, Clock, MapPin, Star, Info, X, Facebook, Twitter, Youtube, 
  Instagram, Linkedin
} from 'lucide-react';

const WishlistCard = ({ item, index, removeFromWishlist }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div 
      ref={cardRef}
      className="wishlist-card" 
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -4 }}
      style={{
        background: '#FFFFFF',
        borderRadius: '20px',
        overflow: 'hidden',
        border: '1px solid #E5E7EB',
        display: 'grid',
        gridTemplateColumns: '350px 1fr',
        gap: '0',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
      }}
    >
      {/* Image Section */}
      <motion.div 
        className="wishlist-image" 
        style={{ position: 'relative', height: '100%', overflow: 'hidden' }}
        initial={{ y: -300, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: -300, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 60, damping: 15, delay: 0.1 }}
      >
        <motion.img 
          src={item.image}
          alt={item.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Likely to sell out badge */}
        {item.likelyToSellOut && (
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              background: '#FFFFFF',
              padding: '6px 12px',
              borderRadius: '8px',
              fontSize: '12px',
              fontWeight: 600,
              color: '#1E1E1E',
              fontFamily: 'Manrope, sans-serif',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
            }}>
            Likely to sell out
          </motion.div>
        )}

        {/* Heart button (remove) */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => removeFromWishlist(item.id)}
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            width: '36px',
            height: '36px',
            background: '#FFFFFF',
            border: 'none',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
          }}
        >
          <Heart style={{ width: 18, height: 18, color: '#FF5533', fill: '#FF5533' }} />
        </motion.button>
      </motion.div>

      {/* Content Section */}
      <motion.div 
        className="wishlist-card-content" 
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ 
          padding: '24px 28px',
          background: '#FFF9F5',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
        {/* Top Section */}
        <div>
          {/* Category Badge */}
          <div style={{
            display: 'inline-block',
            background: item.categoryColor,
            color: item.categoryTextColor,
            padding: '6px 14px',
            borderRadius: '6px',
            fontSize: '12px',
            fontWeight: 600,
            fontFamily: 'Manrope, sans-serif',
            marginBottom: '12px'
          }}>
            {item.category}
          </div>

          {/* Title */}
          <h3 className="wishlist-card-title" style={{
            fontSize: '20px',
            fontWeight: 700,
            color: '#1E1E1E',
            fontFamily: 'Manrope, sans-serif',
            marginBottom: '14px',
            lineHeight: '1.3'
          }}>
            {item.title}
          </h3>

          {/* Details Row */}
          <div className="wishlist-details" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px',
            marginBottom: '12px',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Clock style={{ width: 14, height: 14, color: '#FF5533' }} />
              <span style={{ fontSize: '13px', color: '#4B5563', fontFamily: 'Manrope, sans-serif' }}>
                {item.duration}
              </span>
            </div>
            <span style={{ color: '#D1D5DB' }}>•</span>
            <span style={{ fontSize: '13px', color: '#4B5563', fontFamily: 'Manrope, sans-serif' }}>
              {item.skipLine}
            </span>
            <span style={{ color: '#D1D5DB' }}>•</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <MapPin style={{ width: 14, height: 14, color: '#FF5533' }} />
              <span style={{ fontSize: '13px', color: '#4B5563', fontFamily: 'Manrope, sans-serif' }}>
                {item.pickupAvailable}
              </span>
            </div>
          </div>

          {/* Rating */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <div style={{ display: 'flex', gap: '2px' }}>
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  style={{ 
                    width: 14, 
                    height: 14, 
                    color: i < Math.floor(item.rating) ? '#FFC107' : '#E5E7EB',
                    fill: i < Math.floor(item.rating) ? '#FFC107' : '#E5E7EB'
                  }} 
                />
              ))}
            </div>
            <span style={{ fontSize: '14px', fontWeight: 600, color: '#1E1E1E', fontFamily: 'Manrope, sans-serif' }}>
              {item.rating}
            </span>
            <span style={{ fontSize: '13px', color: '#6B7280', fontFamily: 'Manrope, sans-serif' }}>
              {item.reviews}
            </span>
          </div>

          {/* Provider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
            <MapPin style={{ width: 14, height: 14, color: '#FF5533' }} />
            <span style={{ fontSize: '13px', color: '#FF5533', fontFamily: 'Manrope, sans-serif', fontWeight: 600 }}>
              {item.provider}
            </span>
          </div>
        </div>

        {/* Bottom Section - Price */}
        <div className="wishlist-price-section">
          <div style={{ 
            fontSize: '12px', 
            color: '#6B7280', 
            marginBottom: '6px',
            fontFamily: 'Manrope, sans-serif'
          }}>
            From
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
            <span className="wishlist-price" style={{
              fontSize: '28px',
              fontWeight: 800,
              color: '#1E1E1E',
              fontFamily: 'Manrope, sans-serif'
            }}>
              ₹{item.price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
            </span>
            <span style={{
              fontSize: '14px',
              color: '#6B7280',
              fontFamily: 'Manrope, sans-serif'
            }}>
              per person
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const WishlistSubscribe = () => (
  <div
    className="wishlist-subscribe-box"
    style={{
      width: 1224,
      height: 486,
      background: '#E2F6FF',
      border: '1px solid #E8E6E4',
      borderRadius: 32,
      opacity: 1,
      margin: '48px auto',
      display: 'flex',
      overflow: 'hidden',
      position: 'relative',
      boxSizing: 'border-box',
      maxWidth: '100%',
    }}
  >
    <div className="subscribe-content" style={{ flex: 1, padding: '48px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <button className="subscribe-badge" style={{
        background: '#FF5533',
        color: '#fff',
        border: 'none',
        borderRadius: 24,
        padding: '12px 32px',
        fontWeight: 600,
        fontSize: 18,
        marginBottom: 24,
        cursor: 'pointer',
        alignSelf: 'flex-start',
      }}>Join our newsletter</button>
      <h2 className="subscribe-title" style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: '#222' }}>
        Discover the wonder of travel every week
      </h2>
      <p className="subscribe-text" style={{ fontSize: 18, color: '#222', marginBottom: 32 }}>
        Get personalized travel inspiration, the latest travel hacks, and exclusive deals straight to your inbox.
      </p>
      <form className="subscribe-form" style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
        <input
          type="email"
          placeholder="Your Email"
          className="subscribe-input"
          style={{
            padding: '16px 24px',
            borderRadius: 24,
            border: 'none',
            fontSize: 18,
            width: 320,
            marginRight: 16,
            background: '#fff',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          }}
        />
        <button type="submit" className="subscribe-button" style={{
          background: '#FF5533',
          color: '#fff',
          border: 'none',
          borderRadius: 24,
          padding: '16px 40px',
          fontWeight: 600,
          fontSize: 18,
          cursor: 'pointer',
        }}>Subscribe</button>
      </form>
      <span className="subscribe-note" style={{ fontSize: 16, color: '#888' }}>
        No ads. No trails. No commitments
      </span>
    </div>
    <div className="subscribe-image" style={{ flex: 1, minWidth: 0, display: 'flex', alignItems: 'stretch' }}>
      <img
        src="/sideImage.png"
        alt="Travel inspiration"
        style={{
          width: '100%',
          maxWidth: 611,
          height: '100%',
          maxHeight: 484,
          opacity: 1,
          borderTopRightRadius: 32,
          borderBottomRightRadius: 32,
          objectFit: 'cover',
        }}
      />
    </div>
  </div>
);

const Wishlist = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      title: 'Explore Paris alone with this expert guide to ...',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&h=400&fit=crop',
      category: 'Day Trip',
      categoryColor: '#FFE8D9',
      categoryTextColor: '#FF5533',
      duration: '10 hours',
      skipLine: 'Skip the line',
      pickupAvailable: 'Pickup available',
      rating: 4.7,
      reviews: '(577 reviews)',
      provider: 'Originals by Get Your Guide',
      price: 11305.00,
      likelyToSellOut: true
    },
    {
      id: 2,
      title: 'From Las Vegas: VIP Los Angeles/Hollywood Day Trip',
      image: 'https://images.unsplash.com/photo-1499591934245-40b55745b905?w=500&h=400&fit=crop',
      category: 'Day Trip',
      categoryColor: '#FFE8D9',
      categoryTextColor: '#FF5533',
      duration: '10 hours',
      skipLine: 'Skip the line',
      pickupAvailable: 'Pickup available',
      rating: 4.7,
      reviews: '(572 reviews)',
      provider: 'Originals by Get Your Guide',
      price: 11305.00,
      likelyToSellOut: true
    },
    {
      id: 3,
      title: 'From Las Vegas: VIP Los Angeles/Hollywood Day Trip',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop',
      category: 'Adventure',
      categoryColor: '#FFE8D9',
      categoryTextColor: '#FF5533',
      duration: '10 hours',
      skipLine: 'Skip the line',
      pickupAvailable: 'Pickup available',
      rating: 4.7,
      reviews: '(577 reviews)',
      provider: 'Originals by Get Your Guide',
      price: 11305.00,
      likelyToSellOut: true
    },
    {
      id: 4,
      title: 'From Las Vegas: VIP Los Angeles/Hollywood Day Trip',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=400&fit=crop',
      category: 'Water Activity',
      categoryColor: '#FFE8D9',
      categoryTextColor: '#FF5533',
      duration: '10 hours',
      skipLine: 'Skip the line',
      pickupAvailable: 'Pickup available',
      rating: 4.7,
      reviews: '(572 reviews)',
      provider: 'Originals by Get Your Guide',
      price: 11305.00,
      likelyToSellOut: true
    },
    {
      id: 5,
      title: 'Explore Paris alone with this expert guide to ...',
      image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=500&h=400&fit=crop',
      category: 'Day Trip',
      categoryColor: '#FFE8D9',
      categoryTextColor: '#FF5533',
      duration: '10 hours',
      skipLine: 'Skip the line',
      pickupAvailable: 'Pickup available',
      rating: 4.7,
      reviews: '(577 reviews)',
      provider: 'Originals by Get Your Guide',
      price: 11305.00,
      likelyToSellOut: true
    }
  ]);

  const removeFromWishlist = (id) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
  };

  return (
    <div className="wishlist-page" style={{ width: '100%', minHeight: '100vh', background: '#FAFAFA' }}>
      {/* Header */}
      <motion.div 
        className="wishlist-header" 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ 
        background: '#FFFFFF', 
        borderBottom: '1px solid #E5E7EB',
        padding: '24px 0',
        marginTop: '70px'
      }}>
        <div className="wishlist-header-content" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <h1 className="wishlist-title" style={{
            fontSize: '32px',
            fontWeight: 800,
            color: '#1E1E1E',
            fontFamily: 'Manrope, sans-serif',
            marginBottom: '8px'
          }}>
            Your Wishlist
          </h1>
          <p style={{
            fontSize: '14px',
            color: '#6B7280',
            fontFamily: 'Manrope, sans-serif'
          }}>
            {wishlistItems.length} items
          </p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="wishlist-content" style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 24px' }}>
        {/* Saved locally notice */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
          background: '#FEE2E2',
          border: '1px solid #FCA5A5',
          borderRadius: '12px',
          padding: '16px 20px',
          marginBottom: '32px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <Info style={{ width: 20, height: 20, color: '#DC2626', flexShrink: 0 }} />
          <span style={{ 
            fontSize: '14px', 
            color: '#DC2626',
            fontFamily: 'Manrope, sans-serif',
            fontWeight: 500
          }}>
            Saved locally on this device
          </span>
        </motion.div>

        {/* Wishlist Items */}
        <div className="wishlist-items" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {wishlistItems.map((item, index) => (
            <WishlistCard key={item.id} item={item} index={index} removeFromWishlist={removeFromWishlist} />
          ))}
        </div>

        {/* Newsletter/Subscribe component */}
        <WishlistSubscribe />
      </div>

      <style jsx>{`
        /* Mobile Styles */
        @media (max-width: 768px) {
          .wishlist-header {
            margin-top: 60px !important;
            padding: 16px 0 !important;
          }

          .wishlist-header-content {
            padding: 0 16px !important;
          }

          .wishlist-title {
            font-size: 24px !important;
          }

          .wishlist-content {
            padding: 24px 16px !important;
          }

          .wishlist-items {
            gap: 16px !important;
          }

          .wishlist-card {
            grid-template-columns: 1fr !important;
            border-radius: 16px !important;
          }

          .wishlist-image {
            height: 200px !important;
          }

          .wishlist-card-content {
            padding: 20px !important;
          }

          .wishlist-card-title {
            font-size: 18px !important;
          }

          .wishlist-details {
            gap: 8px !important;
          }

          .wishlist-price {
            font-size: 24px !important;
          }

          .wishlist-subscribe-box {
            flex-direction: column !important;
            height: auto !important;
            border-radius: 20px !important;
            margin: 32px auto !important;
          }

          .subscribe-content {
            padding: 24px 20px !important;
          }

          .subscribe-badge {
            font-size: 14px !important;
            padding: 10px 24px !important;
            margin-bottom: 16px !important;
          }

          .subscribe-title {
            font-size: 22px !important;
            margin-bottom: 12px !important;
          }

          .subscribe-text {
            font-size: 14px !important;
            margin-bottom: 20px !important;
          }

          .subscribe-form {
            flex-direction: column !important;
            width: 100% !important;
            margin-bottom: 12px !important;
          }

          .subscribe-input {
            width: 100% !important;
            margin-right: 0 !important;
            margin-bottom: 12px !important;
            font-size: 16px !important;
            padding: 14px 20px !important;
          }

          .subscribe-button {
            width: 100% !important;
            font-size: 16px !important;
            padding: 14px 32px !important;
          }

          .subscribe-note {
            font-size: 14px !important;
          }

          .subscribe-image {
            display: none !important;
          }
        }

        /* Tablet Styles */
        @media (min-width: 769px) and (max-width: 1024px) {
          .wishlist-header {
            margin-top: 65px !important;
          }

          .wishlist-title {
            font-size: 28px !important;
          }

          .wishlist-content {
            padding: 28px 20px !important;
          }

          .wishlist-card {
            grid-template-columns: 300px 1fr !important;
          }

          .wishlist-image {
            height: 220px !important;
          }

          .wishlist-card-content {
            padding: 20px 24px !important;
          }

          .wishlist-card-title {
            font-size: 18px !important;
          }

          .wishlist-price {
            font-size: 24px !important;
          }
        }

        /* Desktop - Small Screens */
        @media (min-width: 1025px) and (max-width: 1280px) {
          .wishlist-card {
            grid-template-columns: 320px 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Wishlist;
