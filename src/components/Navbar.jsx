import React, { useState } from 'react';
// Import Link along with useNavigate
import { useNavigate, Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Heart, ShoppingCart, Globe, User } from 'lucide-react';
import { notification } from 'antd';
import LoginSignup from '../pages/Signup';

const Navbar = () => {
  const [api, contextHolder] = notification.useNotification();
  const [isOpen, setIsOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [isSignupOpen]);

  const handleLoginSuccess = (userName) => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    api.success({
      message: `Welcome, ${userName}!`,
      description: 'Welcome to Get Your Guide Tour',
      placement: 'bottomRight',
      duration: 3
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setShowDropdown(false);
  };

  // Custom Circle Dollar Icon Component
  const CircleDollar = ({ className, style }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 6v12M9 8.5h4.5a1.5 1.5 0 0 1 0 3h-3a1.5 1.5 0 0 0 0 3H15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white"
      style={{
        height: '62px',
        borderBottom: '1px solid #F2F4F6',
        boxShadow: '0px 8px 20px 0px rgba(0, 0, 0, 0.05)'
      }}
    >
      <div className="max-w-[1920px] mx-auto h-full px-8 flex items-center justify-between lg:justify-evenly">

        {/* Left Side - Logo + Navigation */}
        <div className="flex items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center"> {/* Use Link for home too */}
            <img
              src="/logo.svg"
              alt="Get Your GuideTours"
              style={{
                width: '134px',
                height: '36px',
                objectFit: 'contain'
              }}
            />
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center ml-12">
            {/* --- MODIFIED LINK HERE --- */}
            <Link // Changed from <a>
              to="/placetoSee" // Changed href to to
              className="flex items-center px-4 py-5 hover:bg-gray-50 transition-colors"
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 500,
                fontSize: '14px',
                color: '#1E1E1E'
              }}
            >
              Places to see
              <ChevronDown className="w-4 h-4 ml-1" /> {/* Added ml-1 for spacing */}
            </Link>
            {/* --- END MODIFICATION --- */}


            <a // Keep as <a> if these are dropdown triggers, not direct links yet
              href="#"
              className="flex items-center gap-1 px-4 py-5 hover:bg-gray-50 transition-colors"
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 500,
                fontSize: '14px',
                color: '#1E1E1E'
              }}
            >
              Things to do
              <ChevronDown className="w-4 h-4" />
            </a>

          <Link
          to="/trip-inspiration"
          className="flex items-center gap-1 px-4 py-5 hover:bg-gray-50 transition-colors"
          style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 500, fontSize: '14px', color: '#1E1E1E' }}
          >
          Trip inspiration
          <ChevronDown className="w-4 h-4" />
          </Link>
          </nav>
        </div>

        {/* --- Right Side (No changes needed here for this request) --- */}
        <div className="hidden lg:flex items-center gap-4">
           {/* Become a Supplier Button */}
           <button onClick={() => navigate('/supplier-signup')} className="px-6 rounded-full hover:bg-gray-800 transition-all" style={{ background: '#1A1A1A', fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '14px', color: '#FFFFFF', height: '40px' }} > Become a Supplier </button>
           {/* Heart Icon */}
           <button onClick={() => navigate('/wishlist', { state: { fromOtherPage: window.location.pathname !== '/wishlist' } })} className="icon-button w-10 h-10 flex items-center justify-center rounded-full transition-all" style={{ background: 'transparent' }} aria-label="Wishlist" > <Heart className="w-5 h-5" style={{ strokeWidth: '1.5px', stroke: '#FF5533', fill: 'none' }} /> </button>
           {/* Cart Icon */}
           <button onClick={() => navigate('/cart', { state: { fromOtherPage: window.location.pathname !== '/cart' } })} className="icon-button w-10 h-10 flex items-center justify-center rounded-full transition-all" style={{ background: 'transparent' }} aria-label="Cart" > <ShoppingCart className="w-5 h-5" style={{ strokeWidth: '1.5px', stroke: '#FF5533', fill: 'none' }} /> </button>
           {/* Globe Icon */}
           <button className="icon-button w-10 h-10 flex items-center justify-center rounded-full transition-all" style={{ background: 'transparent' }} aria-label="Language" > <Globe className="w-5 h-5" style={{ strokeWidth: '1.5px', stroke: '#FF5533', fill: 'none' }} /> </button>
           {/* Circle Dollar Icon */}
           <button className="icon-button w-10 h-10 flex items-center justify-center rounded-full transition-all" style={{ background: 'transparent' }} aria-label="Currency" > <CircleDollar className="w-5 h-5" style={{ color: '#FF5533' }} /> </button>
           {/* Login Button */}
           {user ? (
             <div className="relative">
               <button onClick={() => setShowDropdown(!showDropdown)} className="px-4 py-2 rounded-full font-semibold transition-all hover:bg-gray-100" style={{ fontFamily: 'Manrope, sans-serif', fontSize: '14px', color: '#1E1E1E' }}>
                 {user.name}
               </button>
               {showDropdown && (
                 <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg z-50 overflow-hidden" style={{ background: '#FFEEEB' }}>
                   <button onClick={handleLogout} className="w-full px-4 py-2 text-left transition-all" style={{ fontFamily: 'Manrope, sans-serif', fontSize: '14px', color: '#1E1E1E', background: 'transparent' }} onMouseEnter={(e) => { e.currentTarget.parentElement.style.background = '#FF5533'; e.currentTarget.style.color = '#FFFFFF'; }} onMouseLeave={(e) => { e.currentTarget.parentElement.style.background = '#FFEEEB'; e.currentTarget.style.color = '#1E1E1E'; }}>
                     Logout
                   </button>
                 </div>
               )}
             </div>
           ) : (
             <button onClick={() => setIsSignupOpen(true)} className="transition-all hover:scale-105" style={{ height: '40px', display: 'flex', alignItems: 'center' }} > <img src="/loginbutton.svg" alt="Login/Signup" style={{ height: '40px', width: 'auto', cursor: 'pointer' }} /> </button>
           )}
        </div>

        {/* --- Mobile Menu Button --- */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2" > {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />} </button>
      </div>

      {/* --- Mobile Menu --- */}
      <div className="lg:hidden bg-white border-t border-gray-200 shadow-xl overflow-hidden transition-all duration-300 ease-in-out" style={{ maxHeight: isOpen ? '500px' : '0', opacity: isOpen ? 1 : 0 }} >
         <div className="px-6 py-4 space-y-3">
             {/* Use Link for mobile too */}
             <Link to="/placetoSee" onClick={() => setIsOpen(false)} className="block py-3 text-gray-700 font-medium">Places to see</Link>
             <Link to="#" onClick={() => setIsOpen(false)} className="block py-3 text-gray-700 font-medium">Things to do</Link>
             <Link to="/trip-inspiration" onClick={() => setIsOpen(false)} className="block py-3 text-gray-700 font-medium">Trip inspiration</Link>

             <div className="pt-4 border-t space-y-3">
                 <button onClick={() => { setIsOpen(false); navigate('/supplier-signup'); }} className="w-full px-6 py-3 text-white rounded-full font-bold" style={{ background: '#1A1A1A' }} > Become a Supplier </button>
                 <div className="flex justify-center gap-3">
                     <button onClick={() => { setIsOpen(false); navigate('/wishlist', { state: { fromOtherPage: window.location.pathname !== '/wishlist' } }); }} className="icon-button-mobile w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'transparent' }} > <Heart className="w-5 h-5" style={{ stroke: '#FF5533' }} /> </button>
                     <button onClick={() => { setIsOpen(false); navigate('/cart', { state: { fromOtherPage: window.location.pathname !== '/cart' } }); }} className="icon-button-mobile w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'transparent' }} > <ShoppingCart className="w-5 h-5" style={{ stroke: '#FF5533' }} /> </button>
                     <button className="icon-button-mobile w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'transparent' }} > <Globe className="w-5 h-5" style={{ stroke: '#FF5533' }} /> </button>
                     <button className="icon-button-mobile w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'transparent' }} > <CircleDollar className="w-5 h-5" style={{ color: '#FF5533' }} /> </button>
                 </div>
                 {user ? (
                   <div className="space-y-2">
                     <button className="w-full flex items-center justify-center gap-3 py-3 rounded-full" style={{ background: '#FF55331A', fontFamily: 'Manrope, sans-serif', fontWeight: 600, color: '#FF5533' }} > <User className="w-5 h-5" style={{ stroke: '#FF5533' }} /> {user.name} </button>
                     <button onClick={() => { setIsOpen(false); handleLogout(); }} className="w-full py-3 rounded-full font-semibold transition-colors" style={{ background: '#FFEEEB', color: '#1E1E1E', fontFamily: 'Manrope, sans-serif' }} onMouseEnter={(e) => e.currentTarget.style.background = '#FF5533'} onMouseLeave={(e) => e.currentTarget.style.background = '#FFEEEB'}>Logout</button>
                   </div>
                 ) : (
                   <button onClick={() => { setIsOpen(false); setIsSignupOpen(true); }} className="w-full flex items-center justify-center gap-3 py-3 rounded-full" style={{ background: '#FF55331A', fontFamily: 'Manrope, sans-serif', fontWeight: 600 }} > <User className="w-5 h-5" style={{ stroke: '#FF5533' }} /> Login/Signup </button>
                 )}
             </div>
         </div>
      </div>

      {/* CSS for Hover Effects */}
      <style jsx>{`
        .icon-button:hover { background: rgba(255, 85, 51, 0.1) !important; }
        .icon-button-mobile:active { background: rgba(255, 85, 51, 0.1) !important; }
      `}</style>

      {/* Signup Modal */}
      {contextHolder}
      <LoginSignup isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} onLoginSuccess={handleLoginSuccess} />
    </header>
  );
};

export default Navbar;