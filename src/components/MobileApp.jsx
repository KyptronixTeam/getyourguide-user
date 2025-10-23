import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Apple, Play } from 'lucide-react';

const MobileApp = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <div
      className="mobile-app-section"
      style={{
        width: '100%',
        maxWidth: '1920px',
        padding: '150px 40px',
        marginLeft: 'auto',
        marginRight: 'auto',
        background: '#FFFFFF'
      }}
    >
      <div
        style={{
          maxHeight : '500px',
          maxWidth: '1000px',
          marginLeft: 'auto',
          marginRight: 'auto',
          position: 'relative',
          overflow: 'visible',
          borderRadius: '32px',
          backgroundImage: 'url(/Background2.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Phone Mockup - Outside Card */}
        <motion.div
          className="device-mockup"
          initial={{ y: -600, opacity: 0 }}
          animate={isInView ? {
            y: [0, -15, 0],
            opacity: 1
          } : { y: -600, opacity: 0 }}
          transition={{
            y: {
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            },
            opacity: { duration: 0.5 }
          }}
          whileHover={{ scale: 1.02 }}
          style={{
            position: 'absolute',
            top: '-80px',
            left: '470px',
            width: '180px',
            height: 'auto',
            zIndex: 20
          }}
        >
          <img
            src="/phone.svg"
            alt="Phone Mockup"
            style={{
              width: '100%',
              height: 'auto',
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.2))'
            }}
          />
        </motion.div>

        {/* Laptop Mockup - Outside Card */}
        <motion.div
          className="device-mockup"
          initial={{ y: -700, opacity: 0 }}
          animate={isInView ? {
            y: [0, -20, 0],
            opacity: 1
          } : { y: -700, opacity: 0 }}
          transition={{
            y: {
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5
            },
            opacity: { duration: 0.5 }
          }}
          whileHover={{ scale: 1.02 }}
          style={{
            position: 'absolute',
            top: '-40px',
            right: '50px',
            width: '420px',
            height: 'auto',
            zIndex: 20
          }}
        >
          <img
            src="/laptop.svg"
            alt="Laptop Mockup"
            style={{
              width: '100%',
              height: 'auto',
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.2))'
            }}
          />
        </motion.div>
      {/* Decorative Pattern - Bottom Right */}
      <div
        className="decorative-pattern"
        style={{
          position: 'absolute',
          bottom: '60px',
          right: '120px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          zIndex: 1
        }}
      >
        {/* Two rows of chevrons */}
        <div style={{ display: 'flex', gap: '8px' }}>
          {[...Array(8)].map((_, i) => (
            <div
              key={`top-${i}`}
              style={{
                width: '20px',
                height: '20px',
                border: '3px solid #1E1E1E',
                borderLeft: 'none',
                borderTop: 'none',
                transform: 'rotate(-45deg)'
              }}
            />
          ))}
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          {[...Array(7)].map((_, i) => (
            <div
              key={`bottom-${i}`}
              style={{
                width: '20px',
                height: '20px',
                border: '3px solid #1E1E1E',
                borderLeft: 'none',
                borderTop: 'none',
                transform: 'rotate(-45deg)'
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content Container */}
      <div
        ref={sectionRef}
        className="mobile-app-container"
        style={{
          padding: '80px 60px',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          zIndex: 10
        }}
      >
        {/* Left Content */}
        <div className="mobile-app-content" style={{ flex: '0 0 50%', paddingRight: '60px' }}>
          {/* Small Badge */}
          <motion.div
            style={{
              display: 'inline-block',
              background: '#FFFFFF',
              borderRadius: '50px',
              padding: '10px 24px',
              marginBottom: '24px',
              Shadow: '0 2px 8px rgba(0,0,0,0.06)'
            }}
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            <span
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: '14px',
                fontWeight: 600,
                color: '#1E1E1E'
              }}
            >
              Install APP & Get discount code
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="app-heading"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '34px',
              fontWeight: 400,
              color: '#1E1E1E',
              lineHeight: '42px',
              marginBottom: '8px',
              letterSpacing: '-0.4px'
            }}
          >
            Discover Seamless
            <br />
            Travel with
          </motion.h1>

          <motion.h2
            className="app-subheading"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '34px',
              fontWeight: 800,
              color: '#FF5533',
              lineHeight: '42px',
              marginBottom: '18px',
              letterSpacing: '-0.4px'
            }}
          >
            GET YOUR GUIDE
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '14px',
              fontWeight: 400,
              color: '#6B7280',
              lineHeight: '22px',
              marginBottom: '28px',
              maxWidth: '440px'
            }}
          >
            Embark on a journey like never before with Get your guide your ultimate travel companion.
          </motion.p>

          {/* App Store Buttons */}
          <motion.div 
            className="app-buttons" 
            style={{ display: 'flex', gap: '16px' }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {/* Google Play Button */}
            <a href="#">
              <motion.img
                src="/playstore.svg"
                alt="Get it on Google Play"
                style={{ height: '50px', width: 'auto', cursor: 'pointer' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
            </a>

            {/* App Store Button */}
            <a href="#">
              <motion.img
                src="/app-store.svg"
                alt="Download on the App Store"
                style={{ height: '50px', width: 'auto', cursor: 'pointer' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
            </a>
          </motion.div>
        </div>


      </div>
      </div>

      <style jsx>{`
        /* Mobile Styles */
        @media (max-width: 768px) {
          .mobile-app-section {
            min-height: auto !important;
            padding: 60px 20px !important;
          }

          .mobile-app-section > div {
            max-height: none !important;
            max-width: 100% !important;
            padding: 0 !important;
            background-size: cover !important;
            background-position: center !important;
          }

          .decorative-pattern {
            display: none !important;
          }

          .device-mockup {
            display: none !important;
          }

          .mobile-app-container {
            flex-direction: column !important;
            padding: 40px 24px !important;
            text-align: center !important;
          }

          .mobile-app-content {
            flex: 1 !important;
            padding-right: 0 !important;
            max-width: 100% !important;
          }

          .mobile-app-content > div:first-child {
            margin-left: auto !important;
            margin-right: auto !important;
          }

          .app-heading {
            font-size: 28px !important;
            line-height: 36px !important;
          }

          .app-subheading {
            font-size: 28px !important;
            line-height: 36px !important;
          }

          .mobile-app-content p {
            margin-left: auto !important;
            margin-right: auto !important;
          }

          .app-buttons {
            flex-direction: row !important;
            align-items: center !important;
            gap: 12px !important;
            justify-content: center !important;
          }

          .app-buttons a img {
            height: 40px !important;
          }
        }

        /* Tablet Styles */
        @media (min-width: 769px) and (max-width: 1024px) {
          .mobile-app-section {
            padding: 80px 30px !important;
          }

          .mobile-app-section > div {
            max-height: none !important;
            max-width: 750px !important;
          }

          .decorative-pattern {
            display: none !important;
          }

          .device-mockup {
            display: none !important;
          }

          .mobile-app-container {
            padding: 50px 30px !important;
            flex-direction: column !important;
            text-align: center !important;
          }

          .mobile-app-content {
            flex: 1 !important;
            padding-right: 0 !important;
            max-width: 100% !important;
          }

          .mobile-app-content > div:first-child {
            margin-left: auto !important;
            margin-right: auto !important;
          }

          .mobile-app-content p {
            margin-left: auto !important;
            margin-right: auto !important;
          }

          .app-heading {
            font-size: 28px !important;
            line-height: 36px !important;
          }

          .app-subheading {
            font-size: 28px !important;
            line-height: 36px !important;
          }

          .app-buttons {
            justify-content: center !important;
          }

          .app-buttons a img {
            height: 45px !important;
          }
        }

        /* Desktop - Medium Screens */
        @media (min-width: 1025px) and (max-width: 1400px) {
          .mobile-app-container {
            padding-left: 40px !important;
            padding-right: 40px !important;
          }

          .mobile-app-content {
            flex: 0 0 500px !important;
            padding-right: 40px !important;
          }

          .app-heading,
          .app-subheading {
            font-size: 48px !important;
            line-height: 58px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default MobileApp;
