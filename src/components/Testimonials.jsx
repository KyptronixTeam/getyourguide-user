import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });
  const isCardsInView = useInView(cardsRef, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 3 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= testimonials.length - 3 ? 0 : prev + 1));
  };

  const testimonials = [
    {
      name: 'Sara Mohamed',
      location: 'Jakatar',
      rating: 5,
      text: "I've been using the hotel booking system for several years now, and it's become my go-to platform for planning my trips. The interface is user-friendly, and I appreciate the detailed information and real-time availability of hotels.",
      image: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      name: 'Atend John',
      location: 'California',
      rating: 5,
      text: "I've been using the hotel booking system for several years now, and it's become my go-to platform for planning my trips. The interface is user-friendly, and I appreciate the detailed information and real-time availability of hotels.",
      image: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
      name: 'Sara Mohamed',
      location: 'Jakatar',
      rating: 5,
      text: "I've been using the hotel booking system for several years now, and it's become my go-to platform for planning my trips. The interface is user-friendly, and I appreciate the detailed information and real-time availability of hotels.",
      image: 'https://randomuser.me/api/portraits/women/3.jpg'
    },
    {
      name: 'John Doe',
      location: 'New York',
      rating: 5,
      text: "I've been using the hotel booking system for several years now, and it's become my go-to platform for planning my trips. The interface is user-friendly, and I appreciate the detailed information and real-time availability of hotels.",
      image: 'https://randomuser.me/api/portraits/men/4.jpg'
    },
    {
      name: 'Emily Chen',
      location: 'Singapore',
      rating: 5,
      text: "Amazing experience! The booking process was seamless and the customer support team was incredibly helpful. I found the perfect hotel for my family vacation.",
      image: 'https://randomuser.me/api/portraits/women/5.jpg'
    },
    {
      name: 'Michael Brown',
      location: 'London',
      rating: 5,
      text: "Best travel platform I've ever used. The variety of options and competitive prices make it my first choice for all my business trips.",
      image: 'https://randomuser.me/api/portraits/men/6.jpg'
    }
  ];

  return (
    <div
      className="testimonials-section"
      style={{
        width: '100%',
        maxWidth: '1920px',
        height: 'auto',
        minHeight: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
        background: '#FFEEEB',
        borderBottom: '1px solid #E5E5E5',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '0px',
        paddingBottom: '80px'
      }}
    >
      {/* Decorative Graphics - Left Side */}
      <motion.div
        className="decorative-left"
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '320px',
          height: '400px',
          zIndex: 1
        }}
        initial={{ opacity: 0, x: -100, rotate: -15 }}
        animate={{ opacity: 0.8, x: 0, rotate: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
      >
        <motion.img
          src="/testimonial_suitecase.svg"
          alt="Suitcase"
          style={{
            width: '100%',
            height: '100%',
            paddingLeft: '40px',
            scale: 1.2,
            objectFit: 'contain'
          }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Decorative Graphics - Right Side */}
      <motion.div
        className="decorative-right"
        style={{
          position: 'absolute',
          right: '40px',
          top: '60px',
          width: '180px',
          height: '180px',
          zIndex: 1
        }}
        initial={{ opacity: 0, scale: 0, rotate: 180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: 'backOut' }}
      >
        <motion.img
          src="/testimonial_arrow.svg"
          alt="Decorative Arrow"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
          animate={{ rotate: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Content Container */}
      <div
        className="testimonials-content"
        style={{
          maxWidth: '1400px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '40px',
          paddingRight: '40px',
          position: 'relative',
          zIndex: 10
        }}
      >
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="testimonials-header"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '60px',
            paddingTop: '60px',
            paddingLeft: '60px',
            paddingRight: '60px'
          }}
          initial={{ opacity: 0, y: -50 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div>
            <motion.h2
              className="testimonials-title"
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: '48px',
                fontWeight: 400,
                color: '#1E1E1E',
                marginBottom: '16px',
                letterSpacing: '-0.5px'
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isHeaderInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              They Love{' '}
              <motion.span
                style={{
                  color: '#FF5533',
                  fontWeight: 800
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={isHeaderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                GET YOUR GUIDE
              </motion.span>
            </motion.h2>
            <motion.p
              className="testimonials-subtitle"
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: '16px',
                fontWeight: 400,
                color: '#6B7280'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              What our clients are saying about us?
            </motion.p>
          </div>

          {/* Navigation Buttons */}
          <div
            className="testimonials-nav"
            style={{
              display: 'flex',
              gap: '12px'
            }}
          >
          <motion.button
            onClick={handlePrev}
            style={{
              width: '48px',
              height: '48px',
              background: '#FFFFFF',
              border: '1px solid #E5E5E5',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
            }}
            whileHover={{ scale: 1.1, boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft style={{ width: '24px', height: '24px', color: '#1E1E1E' }} />
          </motion.button>
          <motion.button
            onClick={handleNext}
            style={{
              width: '48px',
              height: '48px',
              background: '#FFFFFF',
              border: '1px solid #E5E5E5',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
            }}
            whileHover={{ scale: 1.1, boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight style={{ width: '24px', height: '24px', color: '#1E1E1E' }} />
          </motion.button>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div
          ref={cardsRef}
          className="testimonials-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            maxWidth: '1300px',
            marginLeft: '25%'
          }}
        >
          {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
            <motion.div
              key={`${currentIndex}-${index}`}
              className="testimonial-card group"
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: '24px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                cursor: 'pointer',
                width: '320px',
                minHeight: '380px',
                display: 'flex',
                flexDirection: 'column'
              }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -8, boxShadow: '0 12px 40px rgba(0,0,0,0.15)' }}
            >
              <h3
                className="testimonial-card-title"
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#1E1E1E',
                  marginBottom: '16px'
                }}
              >
                The best booking system
              </h3>

              <p
                className="testimonial-text"
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  color: '#6B7280',
                  lineHeight: '24px',
                  marginBottom: '24px',
                  flex: 1
                }}
              >
                {testimonial.text}
              </p>

              <div
                className="testimonial-footer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div className="testimonial-user-info" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <img
                    className="testimonial-avatar"
                    src={testimonial.image}
                    alt={testimonial.name}
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }}
                  />
                  <div>
                    <h4
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: '16px',
                        fontWeight: 600,
                        color: '#1E1E1E',
                        marginBottom: '4px'
                      }}
                    >
                      {testimonial.name}
                    </h4>
                    <p
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: '13px',
                        fontWeight: 400,
                        color: '#9CA3AF'
                      }}
                    >
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                <div className="testimonial-rating" style={{ display: 'flex', gap: '4px' }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      style={{
                        width: '18px',
                        height: '18px',
                        fill: '#FFC107',
                        color: '#FFC107'
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Mobile Styles */
        @media (max-width: 768px) {
          .testimonials-section {
            padding-top: 48px !important;
            padding-bottom: 48px !important;
            min-height: auto !important;
          }

          .decorative-left,
          .decorative-right {
            display: none !important;
          }

          .testimonials-content {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }

          .testimonials-header {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 24px !important;
            margin-bottom: 32px !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            padding-top: 40px !important;
          }

          .testimonials-title {
            font-size: 28px !important;
            line-height: 36px !important;
          }

          .testimonials-subtitle {
            font-size: 14px !important;
          }

          .testimonials-nav {
            width: 100% !important;
            justify-content: center !important;
          }

          .testimonials-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
            margin-left: 0 !important;
            max-width: 100% !important;
          }

          .testimonial-card {
            width: 100% !important;
            max-width: 100% !important;
            min-height: auto !important;
            padding: 20px !important;
          }

          .testimonial-card-title {
            font-size: 18px !important;
            margin-bottom: 12px !important;
          }

          .testimonial-text {
            font-size: 14px !important;
            line-height: 22px !important;
            margin-bottom: 20px !important;
          }

          .testimonial-footer {
            flex-direction: row !important;
            align-items: center !important;
          }

          .testimonial-user-info {
            flex: 1 !important;
          }

          .testimonial-avatar {
            width: 40px !important;
            height: 40px !important;
          }

          .testimonial-rating {
            flex-shrink: 0 !important;
          }
        }

        /* Tablet Styles */
        @media (min-width: 769px) and (max-width: 1024px) {
          .testimonials-section {
            padding-top: 48px !important;
            padding-bottom: 48px !important;
          }

          .decorative-left,
          .decorative-right {
            display: none !important;
          }

          .testimonials-content {
            padding-left: 30px !important;
            padding-right: 30px !important;
          }

          .testimonials-header {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 20px !important;
            margin-bottom: 40px !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            padding-top: 40px !important;
          }

          .testimonials-title {
            font-size: 32px !important;
            line-height: 40px !important;
          }

          .testimonials-subtitle {
            font-size: 15px !important;
          }

          .testimonials-nav {
            width: 100% !important;
            justify-content: center !important;
          }

          .testimonials-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
            margin-left: 0 !important;
            max-width: 100% !important;
          }

          .testimonial-card {
            width: 100% !important;
            max-width: 100% !important;
            padding: 24px !important;
          }

          .testimonial-card-title {
            font-size: 18px !important;
          }
        }

        /* Desktop - Medium Screens */
        @media (min-width: 1025px) and (max-width: 1400px) {
          .testimonials-content {
            max-width: 1200px !important;
          }

          .testimonials-grid {
            max-width: 1100px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
