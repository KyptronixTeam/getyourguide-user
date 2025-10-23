import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { MapPin, Calendar, Search } from 'lucide-react';

const Hero = () => {
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    controls.start('visible');
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [controls]);

  const parallax = (strength) => ({
    x: (mousePosition.x - window.innerWidth / 2) / strength,
    y: (mousePosition.y - window.innerHeight / 2) / strength
  });

  return (
    <div 
      className="hero-container relative overflow-hidden"
      style={{
        width: '100%',
        maxWidth: '1920px',
        height: '749px',
        marginTop: '30px',
        marginLeft: 'auto',
        marginRight: 'auto',
        background: '#FFFFFF'
      }}
    >
  <style>{`
        @media (max-width: 768px) {
          .hero-container { height: auto !important; min-height: 600px; padding: 60px 0 40px !important; overflow: visible !important; }
          .hero-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
          .hero-content { padding: 0 20px !important; }
          .hero-title { font-size: 32px !important; line-height: 42px !important; }
          .hero-subtitle { font-size: 14px !important; }
          .hero-search-wrap { max-width: 100% !important; width: 100% !important; }
          .hero-image-section { display: flex !important; justify-content: center !important; align-items: center !important; margin: 20px auto 0 !important; padding: 0 20px !important; position: relative !important; }
          .hero-image-section > img { width: 100% !important; max-width: 350px !important; height: auto !important; }
          .hero-image-section .absolute:nth-child(1), .hero-image-section .absolute:nth-child(2) { display: none !important; }
          .hero-image-section .absolute:nth-child(3) { top: 55% !important; left: 10px !important; transform: translateY(-50%) !important; }
          .hero-image-section .absolute:nth-child(3) img { max-width: 140px !important; }
          .hero-image-section .absolute:nth-child(5) { bottom: 20px !important; right: 10px !important; }
          .hero-image-section .absolute:nth-child(5) img { max-width: 140px !important; }
          .explore-btn { width: 180px !important; height: 44px !important; }
          .hero-vector:nth-child(3), .hero-vector:nth-child(4) { display: none !important; }
          .hero-vector:nth-child(5) { width: 120px !important; }
          .hero-vector:nth-child(6) { width: 140px !important; }
          .hero-vector:nth-child(7) { width: 200px !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-container { height: auto !important; min-height: 700px; padding: 60px 0 !important; }
          .hero-grid { gap: 30px !important; grid-template-columns: 1fr !important; }
          .hero-content { padding: 0 40px !important; }
          .hero-title { font-size: 42px !important; line-height: 56px !important; }
          .hero-subtitle { font-size: 14px !important; }
          .hero-search-wrap { max-width: 100% !important; width: 100% !important; }
          .hero-image-section { margin-top: 40px !important; justify-content: center !important; }
          .hero-image-section > img { max-width: 450px !important; height: auto !important; }
          .hero-image-section .absolute:nth-child(3) img { max-width: 160px !important; }
          .hero-image-section .absolute:nth-child(5) img { max-width: 160px !important; }
          .explore-btn { width: 200px !important; height: 48px !important; }
        }

        .hero-search-wrap { background: #FFF5F3; border-radius: 14px; padding: 12px; box-shadow: 0px 12px 30px rgba(14,14,14,0.06); display: flex; justify-content: center; box-sizing: border-box; }
        .hero-search-card { background: #FFFFFF; border-radius: 10px; display: flex; align-items: center; overflow: hidden; width: 100%; box-sizing: border-box; }
        .search-col { padding: 12px 16px; display: flex; align-items: center; gap: 10px; }
        .search-label { display: block; font-size: 12px; color: #9CA3AF; font-family: Manrope, sans-serif; margin-bottom: 4px; }
        .search-input { font-size: 14px; color: #1F2937; font-family: Manrope, sans-serif; font-weight: 600; border: none; outline: none; background: transparent; width: 100%; }
        .search-input::placeholder { color: #6B7280; font-weight: 500; }
        .search-divider { width: 1px; height: 48px; background: #F3E7E4; }
        .search-btn { padding: 12px 26px; background: #FF5533; color: #FFFFFF; border-radius: 10px; border: none; font-weight: 700; display: inline-flex; align-items: center; gap: 8px; cursor: pointer; margin-top: 3px; }

        @media (max-width: 768px) {
          .hero-search-card { flex-direction: column; align-items: stretch; }
          .search-divider { display: none; }
          .search-col { padding: 12px 16px; flex: 1 !important; min-width: 100% !important; }
          .search-col + .search-col { border-top: 1px solid #F3E7E4; }
          .hero-search-wrap { padding: 8px; }
          .search-col input { width: 100% !important; }
          .date-col > div { justify-content: space-between !important; }
          .search-btn { width: 100% !important; justify-content: center !important; padding: 14px !important; }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-search-card { flex-direction: column; align-items: stretch; }
          .search-divider { display: none; }
          .search-col { padding: 12px 16px; flex: 1 !important; min-width: 100% !important; }
          .search-col + .search-col { border-top: 1px solid #F3E7E4; }
          .search-col input { width: 100% !important; }
          .date-col > div { justify-content: space-between !important; }
          .search-btn { width: 100% !important; justify-content: center !important; padding: 14px !important; }
        }
      `}</style>



      {/* Plus Icon */}
      <motion.img
        src="/plus.svg"
        alt="Plus"
        className="absolute"
        style={{ top: '40%', left: '50px', transform: 'translateY(-50%)', width: '40px', height: 'auto', zIndex: 0, pointerEvents: 'none' }}
        initial={{ opacity: 0, rotate: -180, scale: 0 }}
        animate={{ opacity: 1, rotate: [0, 360], scale: 1 }}
        transition={{ 
          opacity: { duration: 0.8, delay: 0.2 },
          scale: { duration: 0.8, delay: 0.2 },
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' }
        }}
      />

      {/* Hero Camera - Top Right */}
      <motion.img
        src="/hero_camer.svg"
        alt="Camera"
        className="absolute"
        style={{ top: '80px', right: '100px', width: '60px', height: 'auto', zIndex: 0, pointerEvents: 'none' }}
        initial={{ opacity: 0, y: -30, rotate: -20 }}
        animate={{ opacity: 1, y: [0, -10, 0], rotate: 0 }}
        transition={{ 
          opacity: { duration: 0.8, delay: 0.4 },
          rotate: { duration: 0.8, delay: 0.4 },
          y: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }
        }}
      />

      {/* Hero Location - Bottom Left */}
      <motion.img
        src="/hero_location.svg"
        alt="Location"
        className="absolute"
        style={{ bottom: '100px', left: '80px', width: '80px', height: 'auto', zIndex: 0, pointerEvents: 'none' }}
        initial={{ opacity: 0, y: 30, scale: 0.5 }}
        animate={{ opacity: 1, y: [0, 10, 0], scale: 1 }}
        transition={{ 
          opacity: { duration: 0.8, delay: 0.6 },
          scale: { duration: 0.8, delay: 0.6, ease: 'backOut' },
          y: { duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }
        }}
      />

      {/* Top Left Vectors */}
      <motion.img
        src="/Vector 2.svg"
        alt="Vector 2"
        className="absolute hero-vector"
        style={{ top: '0px', left: '0px', width: '450px', height: 'auto', zIndex: 0, pointerEvents: 'none' }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />
      <motion.img
        src="/Vector 1.svg"
        alt="Vector 1"
        className="absolute hero-vector"
        style={{ top: '0px', left: '0px', width: '350px', height: 'auto', zIndex: 2, pointerEvents: 'none' }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      />

      {/* Bottom Right Vectors */}
      <motion.img
        src="/Vector 5.svg"
        alt="Vector 5"
        className="absolute hero-vector"
        style={{ bottom: '0px', right: '0px', width: '1000px', height: 'auto', zIndex: 1, pointerEvents: 'none' }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      />
      <motion.img
        src="/Vector 4.svg"
        alt="Vector 4"
        className="absolute hero-vector"
        style={{ bottom: '0px', right: '0px', width: '700px', height: 'auto', zIndex: 2, pointerEvents: 'none' }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      />
      <motion.img
        src="/Vector 3.svg"
        alt="Vector 3"
        className="absolute hero-vector"
        style={{ bottom: '0px', right: '0px', width: '500px', height: 'auto', zIndex: 3, pointerEvents: 'none' }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      />

      <div className="relative w-full h-full flex items-center" style={{ zIndex: 10 }}>
        <div className="hero-content max-w-7xl mx-auto px-8 w-full">
          <div className="hero-grid grid grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <motion.img
                src="/hero_explore_world_button.svg"
                alt="Explore the World"
                className="explore-btn"
                style={{ width: '216px', height: '52px', cursor: 'pointer', zIndex: 100, position: 'relative' }}
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />

              <motion.h1
                className="hero-title"
                style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 400, fontSize: '54px', lineHeight: '72px', color: '#1E1E1E', margin: 0 }}
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                Discover things to do{' '}
                <span style={{ display: 'block', marginTop: '6px' }}>wherever you're going</span>
              </motion.h1>

              <motion.p
                className="hero-subtitle"
                style={{ fontFamily: 'Manrope, sans-serif', fontSize: '15px', fontWeight: 400, lineHeight: '28px', color: '#9CA3AF' }}
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                Travel Without Limits Browse, Book, Explore
              </motion.p>

              <motion.div className="hero-search-wrap" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.6 }} style={{ width: 'fit-content', minHeight: '100px' }}>
                <div className="hero-search-card">
                  <div className="search-col" style={{ flex: 1, minWidth: '240px', maxWidth: '340px', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <label className="search-label">Search</label>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%' }}>
                      <MapPin style={{ width: '16px', height: '16px', color: '#9CA3AF', flexShrink: 0 }} />
                      <input type="text" placeholder="Find places and things to do" className="search-input" style={{ flex: 1 }} />
                    </div>
                  </div>

                  <div className="search-divider" />

                  <div className="search-col date-col" style={{ flex: 0.8, minWidth: '180px', maxWidth: '220px', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <label className="search-label">Check In</label>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%' }}>
                      <Calendar style={{ width: '16px', height: '16px', color: '#9CA3AF', flexShrink: 0 }} />
                      <input type="date" defaultValue="2024-01-02" className="search-input" style={{ flex: 1 }} />
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" style={{ flexShrink: 0 }}>
                        <path d="M1 1L6 6L11 1" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  <div className="search-divider" />

                  <div style={{ padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>
                    <motion.button className="search-btn" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '14px' }}>
                      <Search style={{ width: '14px', height: '14px' }} />
                      <span>Search</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Image Section */}
            <div className="hero-image-section relative flex items-center justify-center">
              {/* Hero Cloud */}
              <motion.img
                src="/hero_cloud.svg"
                alt="Cloud"
                className="absolute"
                style={{ top: '20%', left: '-80px', width: '70px', height: 'auto', zIndex: 0, pointerEvents: 'none' }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: [-80, -70, -80] }}
                transition={{ 
                  opacity: { duration: 1, delay: 0.5 },
                  x: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
                }}
              />

              {/* Hero Paper Plane */}
              <motion.img
                src="/hero_paper_plane.svg"
                alt="Paper Plane"
                className="absolute"
                style={{ top: '45%', left: '-100px', width: '55px', height: 'auto', zIndex: 0, pointerEvents: 'none' }}
                initial={{ opacity: 0, rotate: -45, x: -50, y: -50 }}
                animate={{ opacity: 1, rotate: [0, 5, 0], x: 0, y: 0 }}
                transition={{ 
                  opacity: { duration: 0.8, delay: 0.7 },
                  x: { duration: 0.8, delay: 0.7 },
                  y: { duration: 0.8, delay: 0.7 },
                  rotate: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }
                }}
              />

              {/* Rating Card */}
              <motion.div
                className="absolute z-20 rating-card"
                style={{ top: '50%', transform: 'translateY(-50%)', left: '-50px' }}
                initial={{ opacity: 0, y: -100, x: -50 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.img
                  src="/review.png"
                  alt="5.0 Stars Rating"
                  style={{ width: 'auto', height: 'auto', maxWidth: '200px', filter: 'drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.08))' }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                  whileHover={{ scale: 1.05, rotate: -2 }}
                />
              </motion.div>

              {/* Main Image */}
              <motion.img
                src="/tourist-with-thumb-up.png"
                alt="Traveler"
                className="relative z-10 rounded-3xl"
                style={{ width: '580px', height: '650px', objectFit: 'cover' }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.02 }}
              />

              {/* Hotline Card */}
              <motion.div
                className="absolute z-20 hotline-card"
                style={{ bottom: '80px', right: '10px' }}
                initial={{ opacity: 0, y: 60, x: 40 }}
                animate={{ opacity: 1, y: [0, -10, 0], x: 0 }}
                transition={{ 
                  opacity: { duration: 1, delay: 1.2 },
                  x: { duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] },
                  y: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 2.4 }
                }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="/hotline.png"
                  alt="Hotline Booking"
                  style={{ width: 'auto', height: 'auto', maxWidth: '200px', filter: 'drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.08))' }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
