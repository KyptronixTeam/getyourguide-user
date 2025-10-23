import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Facebook, Twitter, Youtube, Linkedin, Instagram, MapPin } from 'lucide-react';

const Footer = () => {
  const footerRef = useRef(null);
  const paymentRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.1 });
  const isPaymentInView = useInView(paymentRef, { once: true, amount: 0.3 });

  const servicesLinks = [
    'Contact',
    'Legal Notice',
    'Privacy Policy',
    'Cookies and Marketing Preferences',
    'General Terms and Conditions',
    'Information according to the Digital Services Act'
  ];

  const workWithUsLinks = [
    'Sitemap',
    'Do not Sell or Share my Personal Information',
    'As a Supply Partner',
    'As a Content Creator',
    'As an Affiliate Partner'
  ];

  const companyLinks = [
    'About Us',
    'Careers',
    'Blog',
    'Press',
    'Gift card',
    'Explorer'
  ];

  const paymentMethods = [
    { name: 'PayPal', image: '/paypal.png' },
    { name: 'Stripe', image: '/stripe.png' },
    { name: 'Mastercard', image: '/master.png' },
    { name: 'masterCard', image: '/mastercard.png' },
    { name: 'iDeal', image: '/deal.png' },
    { name: 'Bancontact', image: '/bancontact.png' },
    { name: 'Discover', image: '/discover.png' },
    { name: 'JCB', image: '/jcb.png' },
    { name: 'Klarna', image: '/klarna.png' },
    { name: 'American Express', image: '/american.png' },
    { name: 'Google Pay', image: '/googlePay.png' },
    { name: 'Revolut', image: '/revolut.png' },
    { name: 'Visa', image: '/visa.png' },
    { name: 'Apple Pay', image: '/iphonePay.png' }
  ];

  const socialIcons = [
    { Icon: Youtube, color: '#FF5533', label: 'YouTube' },
    { Icon: Facebook, color: '#FF5533', label: 'Facebook' },
    { Icon: Twitter, color: '#FF5533', label: 'Twitter' },
    { Icon: Youtube, color: '#FF5533', label: 'YouTube' },
    { Icon: MapPin, color: '#FF5533', label: 'Pinterest' },
    { Icon: Linkedin, color: '#FF5533', label: 'LinkedIn' }
  ];

  const PaymentIcon = ({ name, image, index, isInView }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
        transition={{ type: 'spring', stiffness: 60, damping: 15, delay: 0.5 + index * 0.05 }}
        style={{
          width: '56px',
          height: '36px',
          background: '#FFFFFF',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)', // Corrected 'Shadow' to 'boxShadow'
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          overflow: 'hidden',
          padding: '4px'
        }}
        title={name}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.12)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.08)';
        }}
      >
        <img 
          src={image} 
          alt={name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </motion.div>
    );
  };

  return (
    <footer
      style={{
        width: '100%',
        maxWidth: '1920px',
        height: 'auto',
        minHeight: '707px',
        marginLeft: 'auto',
        marginRight: 'auto',
        background: '#FFFFFF',
        borderTop: '1px solid #E5E5E5',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .footer-content { padding: 40px 20px !important; }
          .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .payment-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .footer-bottom { flex-direction: column; align-items: flex-start !important; }
          .footer-bottom-links { flex-direction: column; gap: 12px !important; }
          .footer-bg-light { display: none !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .footer-content { padding: 50px 40px !important; }
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 40px !important; }
          .payment-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>

      {/* Landmark Silhouettes Background - Bottom (SVG) */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '200px',
          opacity: 0.06,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <svg
          viewBox="0 0 1920 200"
          style={{ width: '100%', height: '100%' }}
          preserveAspectRatio="none"
        >
          <g fill="#FF5533">
            <polygon points="640,200 620,120 625,120 630,40 632,40 635,120 640,120 660,200" />
            <rect x="420" y="80" width="30" height="120" />
            <rect x="425" y="60" width="20" height="20" />
            <ellipse cx="260" cy="120" rx="60" ry="40" />
            <rect x="240" y="120" width="40" height="80" />
            <ellipse cx="1090" cy="140" rx="80" ry="60" />
            <polygon points="577,200 575,100 573,80 577,60 581,80 579,100 577,200" />
            <circle cx="577" cy="55" r="8" />
            <polygon points="1310,200 1305,120 1300,110 1305,100 1315,100 1320,110 1315,120 1310,200" />
            <ellipse cx="1455" cy="120" rx="50" ry="30" />
            <rect x="1430" y="120" width="50" height="80" />
            <polygon points="180,200 175,80 185,80 190,200" transform="skewX(-5)" />
            <circle cx="490" cy="120" r="45" fill="none" stroke="#FF5533" strokeWidth="4" />
            <path d="M 0,160 Q 50,140 100,160 L 100,200 L 0,200 Z" />
            <polygon points="720,200 680,130 760,130" />
            <rect x="0" y="200" width="1920" height="10" fill="#FF5533" opacity="0.3" />
          </g>
        </svg>
      </div>

      {/* Footer Background Image (light city) */}
      <motion.img
        src="/footer.png"
        alt="City background"
        className="footer-bg-light"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.8 }}
        style={{
          position: 'absolute',
          top: '397px',
          left: 0,
          width: '1920px',
          height: '310px',
          opacity: 1,
          zIndex: 1,
          pointerEvents: 'none',
          objectFit: 'cover'
        }}
      />
      
      {/* Darker City Background Image */}
      <motion.img
        src="/footerDrakerImage.png" 
        alt="Darker city skyline"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '230px',
          objectFit: 'cover',
          opacity: 1,
          zIndex: 2,
          pointerEvents: 'none'
        }}
      />

      {/* Landmark Silhouettes Background - Bottom (SVG) - Duplicate removed */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '200px',
          opacity: 0.06,
          zIndex: 0,
          pointerEvents: 'none',
          display: 'none'
        }}
      >
        <svg
          viewBox="0 0 1920 200"
          style={{ width: '100%', height: '100%' }}
          preserveAspectRatio="none"
        >
          {/* Landmark silhouettes - simplified iconic shapes */}
          {/* Note: The polygons/rects here should ideally be part of your SVG file
                     rather than individual JSX elements for better performance/maintainability
                     if this SVG is complex. For simple shapes, this is fine. */}
          <g fill="#FF5533">
            {/* Eiffel Tower */}
            <polygon points="640,200 620,120 625,120 630,40 632,40 635,120 640,120 660,200" />
            
            {/* Big Ben */}
            <rect x="420" y="80" width="30" height="120" />
            <rect x="425" y="60" width="20" height="20" />
            
            {/* Taj Mahal */}
            <ellipse cx="260" cy="120" rx="60" ry="40" />
            <rect x="240" y="120" width="40" height="80" />
            
            {/* Colosseum */}
            <ellipse cx="1090" cy="140" rx="80" ry="60" />
            
            {/* Space Needle */}
            <polygon points="577,200 575,100 573,80 577,60 581,80 579,100 577,200" />
            <circle cx="577" cy="55" r="8" />
            
            {/* Statue of Liberty */}
            <polygon points="1310,200 1305,120 1300,110 1305,100 1315,100 1320,110 1315,120 1310,200" />
            
            {/* Capitol Building */}
            <ellipse cx="1455" cy="120" rx="50" ry="30" />
            <rect x="1430" y="120" width="50" height="80" />
            
            {/* Leaning Tower */}
            <polygon points="180,200 175,80 185,80 190,200" transform="skewX(-5)" />
            
            {/* Ferris Wheel */}
            <circle cx="490" cy="120" r="45" fill="none" stroke="#FF5533" strokeWidth="4" />
            
            {/* Bridge */}
            <path d="M 0,160 Q 50,140 100,160 L 100,200 L 0,200 Z" />
            
            {/* Pyramids */}
            <polygon points="720,200 680,130 760,130" />
            
            {/* Ground */}
            <rect x="0" y="200" width="1920" height="10" fill="#FF5533" opacity="0.3" />
          </g>
        </svg>
      </div>

      {/* Main Content */}
      <div
        ref={footerRef}
        className="footer-content"
        style={{
          maxWidth: '1400px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingTop: '60px',
          paddingLeft: '80px',
          paddingRight: '80px',
          paddingBottom: '40px',
          position: 'relative',
          zIndex: 10 // Ensure main content is always on top
        }}
      >
        {/* Logo */}
        <motion.div 
          style={{ marginBottom: '50px' }}
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/logo.svg"
            alt="Get Your GuideTours"
            style={{
              width: '134px',
              height: '36px',
              objectFit: 'contain'
            }}
          />
        </motion.div>

        {/* Links Grid */}
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '60px',
            marginBottom: '60px'
          }}
        >
          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Changed to y for animation
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: '18px',
                fontWeight: 700,
                color: '#1E1E1E',
                marginBottom: '24px'
              }}
            >
              Services
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {servicesLinks.map((link, index) => (
                <li key={index} style={{ marginBottom: '12px' }}>
                  <a
                    href="#"
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '14px',
                      fontWeight: 400,
                      color: '#6B7280',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#FF5533'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#6B7280'}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Work With Us */}
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Changed to y for animation
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: '18px',
                fontWeight: 700,
                color: '#1E1E1E',
                marginBottom: '24px'
              }}
            >
              Work With Us
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {workWithUsLinks.map((link, index) => (
                <li key={index} style={{ marginBottom: '12px' }}>
                  <a
                    href="#"
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '14px',
                      fontWeight: 400,
                      color: '#6B7280',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#FF5533'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#6B7280'}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Changed to y for animation
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: '18px',
                fontWeight: 700,
                color: '#1E1E1E',
                marginBottom: '24px'
              }}
            >
              Company
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {companyLinks.map((link, index) => (
                <li key={index} style={{ marginBottom: '12px' }}>
                  <a
                    href="#"
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '14px',
                      fontWeight: 400,
                      color: '#6B7280',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#FF5533'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#6B7280'}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Payments & Social */}
          <motion.div
            ref={paymentRef}
            initial={{ opacity: 0, y: 50 }} // Changed to y for animation
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isPaymentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: '18px',
                fontWeight: 700,
                color: '#1E1E1E',
                marginBottom: '24px'
              }}
            >
              Payments
            </motion.h3>
            <div 
              className="payment-grid"
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(5, 1fr)', 
                gap: '8px',
                marginBottom: '32px',
                maxWidth: '320px'
              }}
            >
              {paymentMethods.map((method, index) => (
                <PaymentIcon key={index} name={method.name} image={method.image} index={index} isInView={isPaymentInView} />
              ))}
            </div>

            <h4
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: '18px',
                fontWeight: 700,
                color: '#1E1E1E',
                marginBottom: '16px'
              }}
            >
              Follow us
            </h4>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {socialIcons.map(({ Icon, label }, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={label}
                  style={{
                    width: '40px',
                    height: '40px',
                    background: '#F3F4F6',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#FF5533';
                    e.currentTarget.querySelector('svg').style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#F3F4F6';
                    e.currentTarget.querySelector('svg').style.color = '#FF5533';
                  }}
                >
                  <Icon style={{ width: '20px', height: '20px', color: '#FF5533', transition: 'color 0.3s ease' }} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            borderTop: '1px solid #E5E5E5',
            paddingTop: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px'
          }}
        >
          <p
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '14px',
              fontWeight: 400,
              color: '#6B7280',
              margin: 0
            }}
          >
            © 2025 GET YOUR GUIDE Inc. All rights reserved.
          </p>
          <div className="footer-bottom-links" style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
            {['Terms', 'Privacy policy', 'Legal notice', 'Accessibility'].map((link, index) => (
              <a
                key={index}
                href="#"
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  color: '#6B7280',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FF5533'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#6B7280'}
              >
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;