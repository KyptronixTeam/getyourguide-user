import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Promotions = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const promotions = [
    {
      title: 'We Make Every Trips Special',
      subtitle: 'Limited Offers',
      bgColor: '#2E7FF8',
      image: '/offer1.svg',
      hasGraphics: true
    },
    {
      title: 'Buy 1, Get 1 Free Attractions',
      subtitle: 'Limited Offers',
      bgColor: '#FFD88D',
      image: '/offer2.svg',
      hasGraphics: false
    },
    {
      title: 'Buy 1, Get 1 Free Attractions',
      subtitle: 'Limited Offers',
      bgColor: '#7DD3F0',
      image: '/offer3.svg',
      hasGraphics: false
    }
  ];

  return (
    <div 
      className="promotions-section"
      style={{
        width: '100%',
        maxWidth: '1920px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: '20px',
        paddingBottom: '64px',
        background: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '50%',
          backgroundImage: 'url(/Section.svg)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left bottom',
          opacity: 1,
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div 
        ref={sectionRef}
        className="promotions-container"
        style={{
          width: '1248px',
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'flex',
          gap: '24px',
          position: 'relative',
          zIndex: 1
        }}
      >
        {promotions.map((promo, index) => (
          <motion.div
            key={index}
            className="promo-card"
            style={{
              flex: 1,
              height: '292px',
              borderRadius: '32px',
              overflow: 'hidden',
              position: 'relative',
              cursor: 'pointer'
            }}
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 70, damping: 15, delay: index * 0.15 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <img
              src={promo.image}
              alt={promo.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                pointerEvents: 'none'
              }}
            />
            <button
              onClick={() => console.log(`View More clicked for ${promo.title}`)}
              style={{
                position: 'absolute',
                bottom: '30px',
                left: '30px',
                width: '140px',
                height: '50px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                zIndex: 10
              }}
              aria-label="View More"
            />
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        /* Mobile Styles */
        @media (max-width: 768px) {
          .promotions-section {
            padding-top: 48px !important;
            padding-bottom: 48px !important;
          }

          .promotions-container {
            width: 100% !important;
            padding: 0 16px !important;
            flex-direction: column !important;
            gap: 20px !important;
          }

          .promo-card {
            height: 280px !important;
            border-radius: 24px !important;
          }

          .promo-content {
            padding: 32px 24px !important;
          }

          .promo-title {
            font-size: 22px !important;
            line-height: 30px !important;
            max-width: 200px !important;
          }
        }

        /* Tablet Styles */
        @media (min-width: 769px) and (max-width: 1024px) {
          .promotions-section {
            padding-top: 56px !important;
            padding-bottom: 56px !important;
          }

          .promotions-container {
            width: 100% !important;
            padding: 0 24px !important;
            flex-wrap: wrap !important;
            gap: 20px !important;
          }

          .promo-card {
            flex: 0 0 calc(50% - 8px) !important;
            height: 280px !important;
          }

          .promo-card:last-child {
            flex: 0 0 100% !important;
          }

          .promo-title {
            font-size: 24px !important;
            line-height: 32px !important;
          }
        }

        /* Desktop Styles */
        @media (min-width: 1025px) and (max-width: 1400px) {
          .promotions-container {
            width: 95% !important;
            max-width: 1200px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Promotions;
