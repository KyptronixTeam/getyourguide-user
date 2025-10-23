import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Star, X } from 'lucide-react';

// A simple SVG for the airplane icon
const AirplaneIcon = ({ className }) => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M21.4399 2.56L12.0199 11.98" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21.4399 2.56L14.8199 21.44L12.0199 11.98L2.55994 9.18L21.4399 2.56Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


const BecomeASupplier = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    setIsLoading(true);
    
    // Simulate login API call
    setTimeout(() => {
      setIsLoading(false);
      // Set login state to true to show success view
      setIsLoggedIn(true);
    }, 1500);
  };

  // Render a success/dashboard view upon successful login
  if (isLoggedIn) {
    return (
      <div className="min-h-screen w-full bg-[#1A1A1A] flex items-center justify-center p-4 font-['Manrope']">
        <div className="bg-white p-12 rounded-2xl shadow-xl text-center max-w-md animate-fade-in-up">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Login Successful!</h1>
          <p className="text-gray-600 mb-8">Welcome to your supplier dashboard.</p>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="w-full py-3 bg-[#FF5533] text-white rounded-xl font-bold text-base hover:bg-[#E64522] active:scale-[0.98] transition-all"
          >
            Log Out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 font-['Manrope'] z-50">
      {/* Adding styles directly in a style tag for broader compatibility */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-4000 { animation-delay: -4s; }
        
        @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
      `}</style>

      {/* Decorative background blobs */}
      <div className="absolute top-[-20%] left-[-15%] w-[40vw] h-[40vw] bg-gradient-to-r from-[#FF5533] to-[#FF8A65] rounded-full opacity-20 blur-3xl animate-blob"></div>
      <div className="absolute bottom-[-20%] right-[-15%] w-[40vw] h-[40vw] bg-gradient-to-r from-[#FF8A65] to-[#FF5533] rounded-full opacity-20 blur-3xl animate-blob animation-delay-4000"></div>

      {/* Main Login Card */}
      <div className="w-full max-w-4xl bg-white rounded shadow-2xl flex flex-col lg:flex-row z-10 overflow-hidden max-h-[90vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={() => navigate('/')}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-20"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>
        
        {/* Left Side - Login Form */}
        <div className="w-full lg:w-1/2 p-4 sm:p-6 flex flex-col justify-center">
          <div className="w-full max-w-sm mx-auto">
            {/* Logo */}
            <motion.div 
className="mb-4"
initial={{ opacity: 0, y: -20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
>
              <img src="/logo.svg.png" alt="Get Your Guide Tours Logo" className="h-10 w-auto" />
            </motion.div>

            {/* Title */}
            <motion.div 
className="mb-4 sm:mb-6"
initial={{ opacity: 0, x: -30 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.5, delay: 0.1 }}
>
              <h1 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-1 leading-tight">
                Log in to the supplier Portal
              </h1>
              <p className="text-xs sm:text-sm text-gray-500">
                Manage your business with real-time insights and easy access tools.
              </p>
            </motion.div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              {/* Email Field */}
              <motion.div
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, delay: 0.2 }}
>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-semibold text-gray-600 mb-2"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="w-full px-1 py-3 bg-transparent border-b-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#FF5533] transition-all"
                  required
                />
              </motion.div>

              {/* Password Field */}
              <motion.div
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, delay: 0.3 }}
>
                <label 
                  htmlFor="password" 
                  className="block text-sm font-semibold text-gray-600 mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full px-1 py-3 bg-transparent border-b-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#FF5533] transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </motion.div>

              {/* Forget Password Link */}
              <motion.div 
className="text-right -mt-2"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.5, delay: 0.4 }}
>
                <a 
                  href="#" 
                  className="text-sm font-semibold text-gray-500 hover:text-[#FF5533] transition-colors"
                >
                  Forget password?
                </a>
              </motion.div>

              {/* Login Button */}
              <motion.button
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, delay: 0.5 }}
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-[#FF5533] text-white rounded-xl font-bold text-base hover:bg-[#E64522] hover:shadow-lg hover:shadow-orange-200 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Logging in...</span>
                  </>
                ) : (
                  'Log in'
                )}
              </motion.button>
            </form>

            {/* Sign Up Link */}
            <motion.div 
className="mt-4 text-center"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.5, delay: 0.6 }}
>
              <p className="text-sm text-gray-500">
                Don't have an account?{' '}
                <button 
                  onClick={() => navigate('/supplier-portal')} 
                  className="font-bold text-[#FF5533] hover:underline"
                >
                  Sign up now
                </button>
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Right Side - Image Composition */}
        <div className="hidden lg:flex lg:w-1/2 p-4 items-center justify-center relative">
            <div className="w-full h-full rounded relative overflow-hidden shadow-inner">
                <motion.img 
                    src="/Mask group.png" 
                    alt="Supplier Portal Illustration"
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>

                {/* Floating Elements */}
                <motion.div
initial={{ opacity: 0, x: 50, y: -50 }}
animate={{ opacity: 1, x: 0, y: 0 }}
transition={{ duration: 0.6, delay: 0.3 }}
>
                <AirplaneIcon className="absolute top-12 right-12 text-white/90" />
                </motion.div>
                <motion.div
initial={{ opacity: 0, x: 50, y: -50 }}
animate={{ opacity: 1, x: 0, y: 0 }}
transition={{ duration: 0.6, delay: 0.4 }}
>
                <AirplaneIcon className="absolute top-20 right-24 text-white/70" />
                </motion.div>
                <motion.div
initial={{ opacity: 0, x: 50, y: -50 }}
animate={{ opacity: 1, x: 0, y: 0 }}
transition={{ duration: 0.6, delay: 0.5 }}
>
                <AirplaneIcon className="absolute top-16 right-36 text-white/50" />
                </motion.div>
                {/* Dashed lines */}
                <div className="absolute top-24 right-24 w-16 h-12 border-t-2 border-r-2 border-dashed border-white/50 rounded-tr-full opacity-70"></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeASupplier;

