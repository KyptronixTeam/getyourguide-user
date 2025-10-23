import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PopularDestinations = () => {
  const scrollRef = useRef(null);
  const mobileScrollRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) {
        setVisibleCount(10);
      } else if (window.innerWidth <= 1024) {
        setVisibleCount(5);
      } else {
        setVisibleCount(10);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const destinations = [
    {
      name: 'Eiffel Tower',
      tours: '356 Tours',
      image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&h=600&fit=crop',
      width: '111px',
      height: '200.33px',
    },
    {
      name: 'Machu Picchu',
      tours: '356 Tours',
      image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&h=600&fit=crop',
      width: '111px',
      height: '200px',
    },
    {
      name: 'Great Wall',
      tours: '356 Tours',
      image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&h=600&fit=crop',
      width: '101px',
      height: '200px',
    },
    {
      name: 'Statue of Liberty',
      tours: '356 Tours',
      image: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=800&h=600&fit=crop',
      width: '115px',
      height: '200px',
    },
    {
      name: 'Taj Mahal',
      tours: '356 Tours',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop',
      width: '111px',
      height: '200px',
    },
    {
      name: 'Opera House',
      tours: '356 Tours',
      image: 'https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?w=800&h=600&fit=crop',
      width: '101px',
      height: '200px',
    },
    {
      name: 'Colosseum',
      tours: '356 Tours',
      image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop',
      width: '111px',
      height: '200px',
    },
    {
      name: 'Grand Canyon',
      tours: '356 Tours',
      image: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=800&h=600&fit=crop',
      width: '101px',
      height: '200px',
    },
    {
      name: 'Santorini',
      tours: '356 Tours',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop',
      width: '111px',
      height: '200px',
    },
    {
      name: 'Mount Fuji',
      tours: '356 Tours',
      image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&h=600&fit=crop',
      width: '105px',
      height: '200px',
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div 
      className="py-16 bg-white popular-destinations-section"
      style={{
        width: '100%',
        maxWidth: '1920px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 
            className="popular-destinations-title"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '48px',
              fontWeight: 800,
              color: '#1E1E1E',
              marginBottom: '16px'
            }}
          >
            Popular <span style={{ color: '#FF5533' }}>Destinations</span>
          </h2>
          <p 
            className="popular-destinations-subtitle"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '18px',
              fontWeight: 400,
              color: '#6B7280'
            }}
          >
            Navigate the Globe with Confidence
          </p>
        </div>

        {/* Horizontal Carousel */}
        <div className="relative destinations-container" style={{ position: 'relative' }}>
          {!isMobile && (
            <>
              <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 transition-all hover:scale-110 nav-arrow nav-arrow-left"
                style={{
                  width: '48px',
                  height: '48px',
                  background: '#FFFFFF',
                  borderRadius: '50%',
                  boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <ChevronLeft style={{ width: '24px', height: '24px', color: '#1E1E1E' }} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 transition-all hover:scale-110 nav-arrow nav-arrow-right"
                style={{
                  width: '48px',
                  height: '48px',
                  background: '#FFFFFF',
                  borderRadius: '50%',
                  boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <ChevronRight style={{ width: '24px', height: '24px', color: '#1E1E1E' }} />
              </button>
            </>
          )}
          
          <div className="destinations-wrapper" style={{ position: 'relative' }}>
            <div
              ref={(el) => {
                scrollRef.current = el;
                sectionRef.current = el;
              }}
              className="overflow-x-auto scrollbar-hide destinations-scroll"
              style={{
                display: 'flex',
                gap: '24px',
                padding: '40px 0 20px 20px',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
            {destinations.slice(0, visibleCount).map((dest, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 cursor-pointer destination-item"
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', width: '100px' }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div
                  className={index % 2 === 0 ? 'dest-odd' : 'dest-even'}
                  style={{
                    width: '100px',
                    height: '145px',
                    borderRadius: '50px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    flexShrink: 0,
                    transition: 'box-shadow 0.3s ease'
                  }}
                >
                  <img
                    src={dest.image}
                    alt={dest.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1E1E1E', whiteSpace: 'nowrap', margin: 0 }}>
                    {dest.name}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#6B7280', whiteSpace: 'nowrap', margin: 0 }}>
                    {dest.tours}
                  </p>
                </div>
              </motion.div>
            ))}
            </div>
            {!isMobile && (
              <>
                <div className="fade-left" style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: '80px',
                  background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
                  pointerEvents: 'none',
                  zIndex: 5
                }} />
                <div className="fade-right" style={{
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  bottom: 0,
                  width: '80px',
                  background: 'linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
                  pointerEvents: 'none',
                  zIndex: 5
                }} />
              </>
            )}
          </div>
        </div>
      </div>

      {/* Hide Scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar,
        .mobile-carousel::-webkit-scrollbar {
          display: none;
        }

        .destination-item:hover .dest-odd {
          box-shadow: 0 -8px 24px #FF5533, 0 4px 12px rgba(0,0,0,0.1) !important;
        }

        .destination-item:hover .dest-even {
          box-shadow: 0 8px 24px #02A6EE, 0 4px 12px rgba(0,0,0,0.1) !important;
        }

        .destinations-wrapper {
          position: relative;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .popular-destinations-section {
            padding: 48px 0 !important;
          }
          
          .popular-destinations-title {
            font-size: 28px !important;
            line-height: 1.2 !important;
          }
          
          .popular-destinations-subtitle {
            font-size: 15px !important;
          }
          
          .nav-arrow {
            display: none !important;
          }
        }

        /* Tablet Styles */
        @media (min-width: 769px) and (max-width: 1024px) {
          .popular-destinations-section {
            padding: 48px 0 !important;
          }
          
          .popular-destinations-title {
            font-size: 32px !important;
          }
          
          .popular-destinations-subtitle {
            font-size: 15px !important;
          }
          
          .destinations-container {
            height: auto !important;
          }
          
          .destinations-scroll {
            gap: 18px !important;
            padding: 30px 0 20px 15px !important;
          }
          
          .nav-arrow {
            display: none !important;
          }
          
          .fade-left, .fade-right {
            display: none !important;
          }
          
          .destination-item {
            width: 90px !important;
          }
          
          .dest-odd, .dest-even {
            width: 90px !important;
            height: 130px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PopularDestinations;

