import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const PaymentMethods = () => {
  const [isHovered, setIsHovered] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const paymentLogos = [
    '/paypal.png',
    '/stripe.png',
    '/visa.png',
    '/master.png',
    '/deal.png',
    '/bancontact.png',
    '/discover.png',
    '/jcb.png',
    '/klarna.png',
    '/american.png',
    '/googlePay.png',
    '/revolut.png',
    '/iphonePay.png'
  ];

  // Define scatter positions for each logo
  const scatterPositions = [
    { x: -400, y: -30, rotate: -15 },
    { x: -350, y: 20, rotate: 10 },
    { x: -280, y: -25, rotate: -8 },
    { x: -200, y: 30, rotate: 12 },
    { x: -120, y: -20, rotate: -10 },
    { x: -50, y: 25, rotate: 5 },
    { x: 0, y: -30, rotate: 0 },
    { x: 50, y: 25, rotate: -5 },
    { x: 120, y: -20, rotate: 10 },
    { x: 200, y: 30, rotate: -12 },
    { x: 280, y: -25, rotate: 8 },
    { x: 350, y: 20, rotate: -10 },
    { x: 400, y: -30, rotate: 15 }
  ];

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  // Logo animation variants - slide from right to left
  const logoVariants = (index) => ({
    hidden: {
      x: 1000,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 0.8,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 20,
        delay: index * 0.08
      }
    }
  });

  // Hover animation
  const hoverVariants = {
    rest: {
      scale: 1,
      y: 0,
      opacity: 0.8,
      filter: 'grayscale(20%) drop-shadow(0 0 0 transparent)'
    },
    hover: {
      scale: 1.15,
      y: -5,
      opacity: 1,
      filter: 'grayscale(0%) drop-shadow(0 5px 15px rgba(255, 85, 51, 0.3))',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 17
      }
    }
  };

  return (
    <motion.div 
      className="payment-methods-container"
      initial={{ background: 'rgba(255, 85, 51, 0.1)' }}
      animate={{
        background: [
          'rgba(255, 85, 51, 0.1)',
          'rgba(255, 85, 51, 0.15)',
          'rgba(255, 85, 51, 0.1)'
        ]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
      style={{
        width: '100%',
        maxWidth: '1920px',
        height: '173px',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderTop: '1px solid #E4E6E8',
        borderBottom: '1px solid #E4E6E8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 1,
        overflow: 'hidden'
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .payment-methods-container { 
            height: auto !important; 
            padding: 30px 0 !important; 
          }
          .payment-logos-wrapper { 
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 20px !important;
            padding: 0 20px !important;
            justify-items: center !important;
          }
          .payment-logo { 
            height: 28px !important; 
            width: auto !important; 
            max-width: 80px !important; 
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .payment-methods-container { 
            height: auto !important; 
            padding: 40px 0 !important; 
          }
          .payment-logos-wrapper { 
            flex-wrap: wrap !important; 
            gap: 32px !important; 
            padding: 0 40px !important;
          }
          .payment-logo { 
            height: 32px !important; 
          }
        }
      `}</style>

      <motion.div 
        ref={ref}
        className="payment-logos-wrapper"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '48px',
          padding: '0 60px',
          width: '100%',
          maxWidth: '1400px',
          flexWrap: 'nowrap',
          position: 'relative'
        }}
      >
        {paymentLogos.map((logo, index) => (
          <motion.img
            key={index}
            src={logo}
            alt={`Payment method ${index + 1}`}
            className="payment-logo"
            custom={index}
            variants={logoVariants(index)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover="hover"
            onHoverStart={() => setIsHovered(index)}
            onHoverEnd={() => setIsHovered(null)}
            style={{
              height: '22px',
              width: 'auto',
              objectFit: 'contain',
              flexShrink: 0,
              cursor: 'pointer'
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default PaymentMethods;
