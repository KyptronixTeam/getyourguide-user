import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { MapPin, Star, Clock, Users, Heart, ArrowRight } from 'lucide-react';

const FeaturedTours = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('For you');
  const headerRef = useRef(null);
  const toursRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });
  const isToursInView = useInView(toursRef, { once: true, amount: 0.1 });

  const tabs = [
    { id: 'For you', label: 'For you', icon: '✨' },
    { id: 'Culture', label: 'Culture', icon: '🏛️' },
    { id: 'Food', label: 'Food', icon: '🍽️' },
    { id: 'Nature', label: 'Nature', icon: '🏔️' },
    { id: 'Sports', label: 'Sports', icon: '⚽' }
  ];

  const tours = [
    {
      id: 1,
      title: 'California Sunset/Twilight Boat Cruise',
      provider: 'Originals by Get Your Guide',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      duration: '2 days 3 nights',
      rating: 4.96,
      reviews: 672,
      price: 48.25,
      badge: 'Water Activity',
      guests: '4-6 guest',
      category: 'Water Activity'
    },
    {
      id: 2,
      title: 'NYC: Food Tastings and Culture Tour',
      provider: 'Originals by Get Your Guide',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop',
      duration: '2 days 3 nights',
      rating: 4.96,
      reviews: 672,
      price: 17.32,
      badge: 'Adventure',
      guests: '4-6 guest',
      category: 'Adventure'
    },
    {
      id: 3,
      title: 'Grand Canyon Horseshoe Bend 2 days',
      provider: 'Originals by Get Your Guide',
      image: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=600&h=400&fit=crop',
      duration: '2 days 3 nights',
      rating: 4.96,
      reviews: 672,
      price: 15.63,
      badge: 'Day Trip',
      guests: '4-6 guest',
      category: 'Day Trip'
    }
  ];

  const handleDetailsClick = (tourId) => {
    navigate(`/details/${tourId}`);
  };

  const handleBookNowClick = (tourId) => {
    // You can add booking logic here
    navigate(`/details/${tourId}`);
  };

  return (
    <div
      className="py-8 md:py-16 bg-white"
      style={{ width: '100%', maxWidth: '1920px', marginLeft: 'auto', marginRight: 'auto', position: 'relative', overflow: 'visible' }}
    >
      <style>{`
        @media (max-width: 768px) {
          .featured-header { flex-direction: column; align-items: flex-start !important; gap: 20px; }
          .featured-title { font-size: 32px !important; }
          .featured-tabs { flex-wrap: wrap; }
          .tour-grid { grid-template-columns: 1fr !important; max-width: 100% !important; width: 100% !important; }
          .tour-card { width: 100% !important; max-width: 100% !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .featured-title { font-size: 36px !important; }
          .tour-grid { grid-template-columns: repeat(2, 1fr) !important; max-width: 100% !important; width: 100% !important; }
          .tour-card { width: 100% !important; max-width: 100% !important; }
        }
      `}</style>
      {/* Centered decorative SVG behind content */}
      <img
        src="/offer_desgn.svg"
        alt="Offer design"
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          width: '100%',
          height: 'auto',
          maxWidth: 'none',
          opacity: 1,
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div 
          ref={headerRef}
          className="featured-header flex justify-between items-start mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isHeaderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2
              className="featured-title"
              style={{ fontFamily: 'Manrope, sans-serif', fontSize: '48px', fontWeight: 800, color: '#1E1E1E', marginBottom: '12px' }}
            >
              Our Featured <span style={{ color: '#FF5533' }}>Tours</span>
            </h2>
            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '16px', fontWeight: 400, color: '#6B7280' }}>
              Favorite destinations based on customer reviews
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="featured-tabs flex gap-3">
            {tabs.map((tab, index) => (
              <motion.img
                key={tab.id}
                src={index === 0 ? '/Button.svg' : `/Button-${index}.svg`}
                alt={tab.label}
                onClick={() => setActiveTab(tab.id)}
                initial={{ opacity: 0, y: -30, scale: 0.8 }}
                animate={isHeaderInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -30, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                whileHover={{ scale: 1.12}}
                whileTap={{ scale: 0.95 }}
                style={{
                  cursor: 'pointer',
                  height: '44px',
                  width: 'auto'
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Continue Planning */}
        <div className="mb-12">
          <h3 style={{ fontFamily: 'Manrope, sans-serif', fontSize: '32px', fontWeight: 800, color: '#1E1E1E', marginBottom: '32px' }}>
            Continue Planning
          </h3>

          {/* Grid */}
          <div
            ref={toursRef}
            className="tour-grid"
            style={{
              width: '1248px',
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px'
            }}
          >
            {tours.map((tour, index) => (
              <motion.div
                key={tour.id}
                className="tour-card group"
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                animate={isToursInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.8 }}
                transition={{ type: 'spring', stiffness: 60, damping: 15, delay: index * 0.15 }}
                whileHover={{ scale: 1.03, y: -8, boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)' }}
                style={{
                  width: '390px',
                  borderRadius: '30px',
                  overflow: 'hidden',
                  background: '#FFFFFF',
                  border: '1px solid #E4E6E8',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
              >
                {/* One unified wrapper ensures no visual gap */}
                <div style={{ position: 'relative', width: '100%', height: '280px' }}>
                  <img
                    src={tour.image}
                    alt={tour.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />

                  {/* Top-left badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 20,
                      left: 20,
                      background: '#FFFFFF',
                      borderRadius: 999,
                      padding: '10px 20px',
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: 14,
                      fontWeight: 600,
                      color: '#02A6EE'
                    }}
                  >
                    {tour.badge}
                  </div>

                  {/* Top-right heart */}
                  <button
                    style={{
                      position: 'absolute',
                      top: 20,
                      right: 20,
                      width: 40,
                      height: 40,
                      background: '#FFFFFF',
                      borderRadius: '50%',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    <Heart style={{ width: 20, height: 20, color: '#1E1E1E' }} />
                  </button>

                  {/* Rating pill - bottom right on image */}
                  <div
                    style={{
                      position: 'absolute',
                      right: 20,
                      bottom: -20,
                      background: '#FFFFFF',
                      borderRadius: '20px',
                      padding: '8px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      boxShadow: '0 6px 16px rgba(0,0,0,0.15)'
                    }}
                  >
                    <Star style={{ width: 16, height: 16, color: '#FFC107', fill: '#FFC107' }} />
                    <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: 14, fontWeight: 700, color: '#1E1E1E' }}>
                      {tour.rating}
                    </span>
                    <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: 12, color: '#6B7280' }}>
                      ({tour.reviews} reviews)
                    </span>
                  </div>
                </div>

                {/* Content directly after image: no margins on top, unified card */}
                <div 
                  style={{
                    padding: 24,
                    borderRadius: 30,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: 20,
                      fontWeight: 800,
                      color: '#1E1E1E',
                      lineHeight: '28px',
                      marginBottom: 12
                    }}
                  >
                    {tour.title}
                  </h3>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 16, }}>
                    <MapPin style={{ width: 16, height: 16, color: '#FF5533' }} />
                    <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: 14, color: '#FF5533' }}>
                      {tour.provider}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <Clock style={{ width: 16, height: 16, color: '#9CA3AF' }} />
                      <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: 14, color: '#6B7280' }}>
                        {tour.duration}
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <Users style={{ width: 16, height: 16, color: '#9CA3AF' }} />
                      <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: 14, color: '#6B7280' }}>
                        {tour.guests}
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 20, borderTop: '1px solid #E4E6E8' }}>
                    <div>
                      <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: 28, fontWeight: 800, color: '#1E1E1E' }}>
                        ${tour.price}
                      </span>
                      <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: 14, color: '#9CA3AF', marginLeft: 6 }}>
                        / person
                      </span>
                    </div>

                    <div style={{ display: 'flex', gap: 12 }}>
                      <button
                        onClick={() => handleDetailsClick(tour.id)}
                        style={{
                          padding: '12px 24px',
                          background: '#FF5533',
                          color: '#FFFFFF',
                          border: 'none',
                          borderRadius: 999,
                          fontFamily: 'Manrope, sans-serif',
                          fontSize: 14,
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = '#E64522'}
                        onMouseLeave={(e) => e.currentTarget.style.background = '#FF5533'}
                      >
                        Details
                      </button>
                      <img 
                        src="/Link.svg" 
                        alt="Share" 
                        onClick={() => handleBookNowClick(tour.id)}
                        style={{ width: 44, height: 44, cursor: 'pointer' }} 
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button
            style={{
              padding: '16px 48px',
              background: '#1E1E1E',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: 999,
              fontFamily: 'Manrope, sans-serif',
              fontSize: 16,
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Load More Tours
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedTours;
