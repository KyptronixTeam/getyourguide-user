import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import axios from 'axios';
import { notification } from 'antd';
import { useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL;

const LoginSignup = ({ isOpen, onClose, onLoginSuccess }) => {
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [acceptOffers, setAcceptOffers] = useState(true);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [isExistingUser, setIsExistingUser] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  if (!isOpen) return null;

  const hasEmail = email.trim().length > 0;

  const handleSignup = async () => {
    try {
      const response = await axios.post(`${API_URL}/api/auth/signup`, {
        email,
        firstName,
        lastName,
        password,
        confirmPassword
      });
      
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      api.success({
        message: `Welcome, ${response.data.user.name}!`,
        description: 'Welcome to Get Your Guide Tour',
        placement: 'top',
        duration: 3
      });
      
      setTimeout(() => onClose(), 500);
    } catch (error) {
      api.error({
        message: 'Signup Failed',
        description: error.response?.data?.message || 'Signup failed',
        placement: 'topRight'
      });
    }
  };

  const handleContinueWithEmail = async () => {
    if (hasEmail) {
      try {
        const response = await axios.post(`${API_URL}/api/auth/check-email`, { email });
        setIsExistingUser(response.data.exists);
        setShowSignupForm(true);
      } catch (error) {
        api.error({
          message: 'Error',
          description: 'Error checking email',
          placement: 'topRight'
        });
      }
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_URL}/api/auth/login`, {
        username: email,
        password
      });
      
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      const userName = response.data.user.name;
      
      onClose();
      navigate('/');
      
      setTimeout(() => {
        if (onLoginSuccess) onLoginSuccess(userName);
      }, 300);
    } catch (error) {
      api.error({
        message: 'Login Failed',
        description: error.response?.data?.message || 'Login failed',
        placement: 'topRight'
      });
    }
  };

  // Animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.9,
      y: 20
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25,
        mass: 0.5
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.95,
      y: 10,
      transition: { duration: 0.2 }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.4,
        ease: 'easeOut'
      }
    })
  };

  const socialButtonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.4 + custom * 0.05,
        type: 'spring',
        stiffness: 400,
        damping: 20
      }
    })
  };

  const formFieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1]
      }
    }),
    exit: {
      opacity: 0,
      x: 20,
      transition: { duration: 0.2 }
    }
  };

  return (
    <>
      {contextHolder}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4" 
          onClick={onClose}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <style>{`
            .login-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          
          <motion.div 
            className="relative w-full max-w-md max-h-[95vh] overflow-y-auto bg-white rounded-2xl shadow-2xl login-scrollbar" 
            onClick={(e) => e.stopPropagation()} 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.button 
              onClick={onClose} 
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors z-10"
              initial={{ opacity: 0, rotate: -90, scale: 0 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 300, damping: 20 }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <div className="p-8">
              <motion.h2 
                className="text-2xl font-extrabold text-gray-900 mb-2 font-['Manrope']"
                custom={0}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
              >
                Log in or sign up
              </motion.h2>

              <motion.p 
                className="text-sm text-gray-600 mb-6 leading-relaxed font-['Manrope']"
                custom={1}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
              >
                Check out more easily and access your tickets on any device
              </motion.p>

              <motion.div 
                className="flex items-start gap-3 mb-6"
                custom={2}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.input 
                  type="checkbox" 
                  id="offers" 
                  checked={acceptOffers} 
                  onChange={(e) => setAcceptOffers(e.target.checked)} 
                  className="w-4 h-4 mt-0.5 rounded border-gray-300 text-orange-500 focus:ring-orange-500 cursor-pointer" 
                  whileTap={{ scale: 0.9 }}
                />
                <label htmlFor="offers" className="text-sm text-gray-700 leading-tight cursor-pointer font-['Manrope']">
                  Send me discounts and other offers by email
                </label>
              </motion.div>

              <motion.div 
                className="flex justify-between gap-3 mb-6"
                initial="hidden"
                animate="visible"
              >
                {[0, 1, 2, 3].map((index) => (
                  <motion.button 
                    key={index}
                    custom={index}
                    variants={socialButtonVariants}
                    className="flex-1 h-12 flex items-center justify-center rounded-full border-2 border-orange-500 bg-white hover:bg-orange-50 transition-all"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {index === 0 && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#FF5533"/></svg>
                    )}
                    {index === 1 && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" fill="#FF5533"/></svg>
                    )}
                    {index === 2 && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#FF5533"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#FF5533"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FF5533"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#FF5533"/></svg>
                    )}
                    {index === 3 && (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M15.751 2h2.852L12.366 9.5L19.5 18h-5.733l-4.467-5.839L3.9 18H1.047l6.618-7.563L0 2h5.88l4.037 5.337L15.751 2zm-1.002 14.375h1.58L5.376 3.6H3.673l11.076 12.775z" fill="#FF5533"/></svg>
                    )}
                  </motion.button>
                ))}
              </motion.div>

              <motion.div 
                className="mb-4"
                custom={3}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
              >
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 font-['Manrope']">
                  Email address
                </label>
                <motion.input 
                  type="email" 
                  id="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Email address" 
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 bg-gray-100 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:bg-white outline-none transition-all text-sm font-['Manrope']"
                  whileFocus={{ scale: 1.01 }}
                />
              </motion.div>

              <AnimatePresence mode="wait">
                {!showSignupForm ? (
                  <motion.button 
                    key="continue-btn"
                    onClick={handleContinueWithEmail} 
                    className={`w-full py-3 rounded-xl font-bold text-base transition-all mb-4 font-['Manrope'] ${!hasEmail ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-orange-100 text-orange-600 hover:bg-orange-200'}`}
                    custom={4}
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Continue with email
                  </motion.button>
                ) : (
                  <motion.div 
                    key="signup-form"
                    className="space-y-4 mb-4"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {!isExistingUser && (
                      <>
                        <motion.div custom={0} variants={formFieldVariants}>
                          <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-1 font-['Manrope']">First Name</label>
                          <motion.input 
                            type="text" 
                            id="firstName" 
                            value={firstName} 
                            onChange={(e) => setFirstName(e.target.value)} 
                            placeholder="First Name" 
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all text-sm font-['Manrope']"
                            whileFocus={{ scale: 1.01 }}
                          />
                        </motion.div>
                        
                        <motion.div custom={1} variants={formFieldVariants}>
                          <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-1 font-['Manrope']">Last Name</label>
                          <motion.input 
                            type="text" 
                            id="lastName" 
                            value={lastName} 
                            onChange={(e) => setLastName(e.target.value)} 
                            placeholder="Last Name" 
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all text-sm font-['Manrope']"
                            whileFocus={{ scale: 1.01 }}
                          />
                        </motion.div>
                      </>
                    )}
                    
                    <motion.div custom={isExistingUser ? 0 : 2} variants={formFieldVariants}>
                      <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1 font-['Manrope']">{isExistingUser ? 'Password' : 'Enter Password'}</label>
                      <motion.input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder={isExistingUser ? 'Password' : 'Enter Password'}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all text-sm font-['Manrope']"
                        whileFocus={{ scale: 1.01 }}
                      />
                    </motion.div>
                    
                    {!isExistingUser && (
                      <motion.div custom={3} variants={formFieldVariants}>
                        <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-1 font-['Manrope']">Confirm Password</label>
                        <motion.input 
                          type="password" 
                          id="confirmPassword" 
                          value={confirmPassword} 
                          onChange={(e) => setConfirmPassword(e.target.value)} 
                          placeholder="Confirm Password" 
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all text-sm font-['Manrope']"
                          whileFocus={{ scale: 1.01 }}
                        />
                      </motion.div>
                    )}
                    
                    <motion.button 
                      onClick={isExistingUser ? handleLogin : handleSignup}
                      custom={isExistingUser ? 1 : 4}
                      variants={formFieldVariants}
                      className="w-full py-3 rounded-xl font-bold text-base transition-all bg-orange-500 text-white hover:bg-orange-600 font-['Manrope']"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isExistingUser ? 'Login' : 'Sign Up'}
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.p 
                className="text-xs text-gray-600 leading-tight font-['Manrope'] text-center"
                custom={5}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
              >
                By creating an account, you agree to our{' '}
                <a href="#" className="text-orange-500 font-semibold hover:underline">Terms and Conditions</a>
                {' and '}
                <a href="#" className="text-orange-500 font-semibold hover:underline">Privacy Policy</a>
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LoginSignup;
