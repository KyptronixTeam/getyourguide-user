import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, UserCircle, Heart, Globe, BookOpen, MoreHorizontal, X, CheckCircle as CheckCircleIcon, Info } from 'lucide-react';

const SupplyPartnerForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState('company');
  const [employeeCount, setEmployeeCount] = useState('21-50');
  const [reservationSystem, setReservationSystem] = useState(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  const [formData, setFormData] = useState({
    brandName: '',
    website: '',
    registeredName: '',
    registeredEmail: '',
    currency: 'USD',
    loginEmail: '',
    password: '',
    termsAccepted: false,
    noEmailToVerify: false,
  });

  const [passwordCriteria, setPasswordCriteria] = useState({
    length: false,
    specialChar: false,
    number: false,
    uppercase: false,
    lowercase: false
  });

  const businessTypes = [
    { id: 'company', icon: Building2, title: 'As a registered company', description: 'Legally incorporated entities operating under formal business registration.' },
    { id: 'individual', icon: UserCircle, title: 'As a registered individual', description: 'Single person businesses operating under personal name.' },
    { id: 'nonprofit', icon: Heart, title: 'As a Non-Profit Organization', description: 'Mission-driven organizations operating for charitable or social purposes.' },
    { id: 'government', icon: Globe, title: 'As a Government Entity', description: 'State-owned or public organizations.' },
    { id: 'educational', icon: BookOpen, title: 'As an Educational Institution', description: 'Learning and training organizations providing educational services.' },
    { id: 'other', icon: MoreHorizontal, title: 'Other business type', description: 'Entities operating outside standard business registries' }
  ];

  // Detect user interaction to disable animations
  useEffect(() => {
    const handleInteraction = () => setHasInteracted(true);
    
    window.addEventListener('scroll', handleInteraction, { once: true, passive: true });
    window.addEventListener('click', handleInteraction, { once: true });
    window.addEventListener('touchstart', handleInteraction, { once: true, passive: true });
    window.addEventListener('keydown', handleInteraction, { once: true });
    window.addEventListener('wheel', handleInteraction, { once: true, passive: true });

    return () => {
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
      window.removeEventListener('wheel', handleInteraction);
    };
  }, []);

  const handlePasswordChange = useCallback((e) => {
    const pass = e.target.value;
    setFormData(prev => ({ ...prev, password: pass }));
    setPasswordCriteria({
      length: pass.length >= 8 && pass.length <= 30,
      specialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(pass),
      number: /\d/.test(pass),
      uppercase: /[A-Z]/.test(pass),
      lowercase: /[a-z]/.test(pass)
    });
  }, []);

  const isStep3Complete = formData.brandName && formData.loginEmail && formData.password && formData.termsAccepted && Object.values(passwordCriteria).every(Boolean);

  const handleContinue = () => {
    if(step === 1 && selectedOption) setStep(2);
    else if (step === 2 && reservationSystem) setStep(3);
    else if (step === 3 && isStep3Complete) {
      console.log('Form Submitted:', {
        businessType: selectedOption,
        employees: employeeCount,
        usesReservationSystem: reservationSystem,
        ...formData
      });
      alert('Congratulations! Your application is submitted.');
      navigate('/');
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const getSelectedBusiness = () => businessTypes.find(b => b.id === selectedOption);

  // Helper to conditionally disable animations
  const getAnimationProps = (defaultProps) => {
    if (hasInteracted) {
      return { initial: false, animate: false };
    }
    return defaultProps;
  };

  const FormWrapper = ({ children }) => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 font-['Manrope'] z-50">
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-4000 { animation-delay: -4s; }
        .overflow-y-auto::-webkit-scrollbar { display: none; }
        .step3-scrollbar::-webkit-scrollbar { width: 8px; display: block; }
        .step3-scrollbar::-webkit-scrollbar-thumb { background: #FF5533; border-radius: 4px; }
        .step3-scrollbar::-webkit-scrollbar-track { background: #FFF5F2; }
      `}</style>
      <div className="absolute top-[-20%] left-[-15%] w-[40vw] h-[40vw] bg-gradient-to-r from-[#FF5533] to-[#FF8A65] rounded-full opacity-20 blur-3xl animate-blob"></div>
      <div className="absolute bottom-[-20%] right-[-15%] w-[40vw] h-[40vw] bg-gradient-to-r from-[#FF8A65] to-[#FF5533] rounded-full opacity-20 blur-3xl animate-blob animation-delay-4000"></div>
      <div className="w-full max-w-[95vw] sm:max-w-3xl lg:max-w-5xl bg-white rounded-xl shadow-2xl flex flex-col lg:flex-row z-10 max-h-[90vh] relative">
        <button onClick={() => navigate('/')} className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors z-20">
          <X className="w-5 h-5 text-gray-700" />
        </button>
        <div className={`w-full lg:w-1/2 p-3 sm:p-4 md:p-6 flex flex-col overflow-y-auto ${step === 3 ? 'step3-scrollbar' : ''}`} style={step === 3 ? { scrollbarWidth: 'thin', scrollbarColor: '#FF5533 #FFF5F2' } : { scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {children}
        </div>
        <div className="hidden lg:flex lg:w-1/2 p-4 items-center justify-center relative">
          <div className="w-full h-full rounded-xl relative overflow-hidden shadow-inner">
            <AnimatePresence mode="wait">
              <motion.img
                key={step}
                src={step === 1 ? "/Mask group.png" : "/Step2.png"}
                alt="Supplier Portal Illustration"
                className="absolute inset-0 w-full h-full object-cover"
                {...getAnimationProps({
                  initial: { opacity: 0, scale: 1.1, y: 50 },
                  animate: { opacity: 1, scale: 1, y: 0 },
                  exit: { opacity: 0, scale: 0.9, y: -50 },
                  transition: { duration: 0.6, ease: "easeOut" }
                })}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );

  const Step1 = () => (
    <motion.div 
      className="w-full max-w-lg mx-auto"
      key="step1"
      {...getAnimationProps({
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.5 }
      })}
    >
      <motion.img 
        src="/logo.svg.png" 
        alt="Logo" 
        className="h-8 sm:h-10 w-auto mb-2 sm:mb-3"
        {...getAnimationProps({
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.1 }
        })}
      />
      <motion.div 
        className="flex items-center justify-between mb-2 sm:mb-3"
        {...getAnimationProps({
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.2 }
        })}
      >
        <h1 className="text-sm sm:text-base font-bold text-gray-900">Join us as a supply partner</h1>
        <span className="text-[10px] sm:text-xs font-semibold text-gray-500 whitespace-nowrap">Step 1 of 3</span>
      </motion.div>
      <motion.div 
        className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-3"
        {...getAnimationProps({
          initial: { opacity: 0, x: -20 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.4, delay: 0.3 }
        })}
      >
        <h2 className="text-xs sm:text-sm font-semibold text-gray-800">How do you run your business?</h2>
        <button className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 border-gray-400 flex items-center justify-center text-gray-500 font-bold text-[8px] sm:text-[10px]">i</button>
      </motion.div>
      <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
        {businessTypes.map((option, index) => {
          const Icon = option.icon;
          const isSelected = selectedOption === option.id;
          return (
            <motion.button 
              key={option.id} 
              onClick={() => setSelectedOption(option.id)}
              className={`w-full p-2 rounded-lg border-2 flex items-start gap-3 text-left transition-all ${
                isSelected ? 'border-orange-500 bg-orange-50' : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
              {...getAnimationProps({
                initial: { opacity: 0, x: -30 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.4, delay: 0.4 + index * 0.1 }
              })}
              whileHover={!hasInteracted ? { scale: 1.02, x: 5 } : {}}
              whileTap={!hasInteracted ? { scale: 0.98 } : {}}
            >
              <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isSelected ? 'text-orange-500' : 'text-gray-600'}`} />
              <div>
                <h3 className={`text-sm font-bold mb-1.5 ${isSelected ? 'text-orange-900' : 'text-gray-900'}`}>{option.title}</h3>
                <p className={`text-xs leading-tight ${isSelected ? 'text-orange-800' : 'text-gray-500'}`}>{option.description}</p>
              </div>
            </motion.button>
          );
        })}
      </div>
      <motion.div 
        className="flex items-center justify-between gap-2"
        {...getAnimationProps({
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 1 }
        })}
      >
        <p className="text-[10px] sm:text-xs text-gray-600">Already have an account? <a href="/supplier-signup" className="font-bold text-orange-500 hover:underline">Log in</a></p>
        <motion.button 
          onClick={handleContinue} 
          disabled={!selectedOption}
          className="px-4 sm:px-5 py-2 rounded-lg font-bold text-xs text-white transition-all disabled:bg-gray-300 disabled:cursor-not-allowed bg-orange-500 hover:bg-orange-600 whitespace-nowrap"
          whileHover={!hasInteracted ? { scale: 1.05 } : {}}
          whileTap={!hasInteracted ? { scale: 0.95 } : {}}
        >
          Continue
        </motion.button>
      </motion.div>
    </motion.div>
  );
  
  const Step2 = () => {
    const selectedBusiness = getSelectedBusiness();
    if (!selectedBusiness) return null;
    const Icon = selectedBusiness.icon;
    return (
      <motion.div 
        className="w-full max-w-lg mx-auto"
        key="step2"
        {...getAnimationProps({
          initial: { opacity: 0, x: -50 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.5 }
        })}
      >
        <motion.img 
          src="/logo.svg.png" 
          alt="Logo" 
          className="h-8 sm:h-10 w-auto mb-2 sm:mb-3"
          {...getAnimationProps({
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.4, delay: 0.1 }
          })}
        />
        <motion.div 
          className="flex items-center justify-between mb-2 sm:mb-3"
          {...getAnimationProps({
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.4, delay: 0.2 }
          })}
        >
          <h1 className="text-sm sm:text-base font-bold text-gray-900">Join us as a supply partner</h1>
          <span className="text-[10px] sm:text-xs font-semibold text-gray-500 whitespace-nowrap">Step 2 of 3</span>
        </motion.div>
        
        <motion.div 
          className="mb-3 sm:mb-4"
          {...getAnimationProps({
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.4, delay: 0.3 }
          })}
        >
          <h2 className="text-xs sm:text-sm font-semibold text-gray-800 mb-2">How do you run your business?</h2>
          <div className="w-full p-3 rounded-lg border-2 flex items-start gap-3 text-left bg-orange-50 border-orange-500">
            <Icon className="w-5 h-5 mt-0.5 flex-shrink-0 text-orange-500" />
            <div>
              <h3 className="text-sm font-bold text-orange-900 mb-1.5">{selectedBusiness.title}</h3>
              <p className="text-xs text-orange-800">{selectedBusiness.description}</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="mb-3 sm:mb-4"
          {...getAnimationProps({
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.4, delay: 0.4 }
          })}
        >
          <h2 className="text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">How many employees does your company have?</h2>
          <div className="flex flex-wrap items-center gap-2">
            {['Up to 2', '3 - 10', '11 - 20', '21 - 50', '+50'].map(count => (
              <button 
                key={count} 
                onClick={() => setEmployeeCount(count)}
                className={`px-3 sm:px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  employeeCount === count ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {count}
              </button>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="mb-4 sm:mb-6"
          {...getAnimationProps({
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.4, delay: 0.5 }
          })}
        >
          <h2 className="text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">Do you use a reservation system to manage your products?</h2>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setReservationSystem('yes')}
              className={`flex-1 py-3 rounded-lg font-bold text-sm border-2 transition-all ${
                reservationSystem === 'yes' ? 'bg-orange-500 border-orange-500 text-white' : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
              }`}
            >
              Yes
            </button>
            <button 
              onClick={() => setReservationSystem('no')}
              className={`flex-1 py-3 rounded-lg font-bold text-sm border-2 transition-all ${
                reservationSystem === 'no' ? 'bg-orange-500 border-orange-500 text-white' : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
              }`}
            >
              No
            </button>
          </div>
        </motion.div>

        <motion.div 
          className="space-y-3"
          {...getAnimationProps({
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.4, delay: 0.6 }
          })}
        >
          <motion.button 
            onClick={handleContinue} 
            disabled={!reservationSystem}
            className="w-full py-3 rounded-lg text-sm font-bold text-white transition-all disabled:bg-gray-300 disabled:cursor-not-allowed bg-orange-500 hover:bg-orange-600"
            whileHover={!hasInteracted ? { scale: 1.02 } : {}}
            whileTap={!hasInteracted ? { scale: 0.98 } : {}}
          >
            Continue
          </motion.button>
          <motion.button 
            onClick={handleBack}
            className="w-full py-3 rounded-lg text-sm font-bold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all"
            whileHover={!hasInteracted ? { scale: 1.02 } : {}}
            whileTap={!hasInteracted ? { scale: 0.98 } : {}}
          >
            Back
          </motion.button>
        </motion.div>
        <motion.p 
          className="text-xs text-gray-600 text-center mt-4"
          {...getAnimationProps({
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.4, delay: 0.7 }
          })}
        >
          Already have an account? <a href="/supplier-signup" className="font-bold text-orange-500 hover:underline">Log in</a>
        </motion.p>
      </motion.div>
    );
  };

  const PasswordCriterion = React.memo(({ text, met }) => (
    <div className={`flex items-center gap-1.5 text-xs ${met ? 'text-green-600' : 'text-gray-500'}`}>
      <CheckCircleIcon size={14} fill={met ? 'currentColor' : 'none'} strokeWidth={met ? 2: 1.5} />
      <span>{text}</span>
    </div>
  ));

  const Step3 = React.memo(() => (
    <motion.div 
      className="w-full max-w-lg mx-auto"
      key="step3"
      {...getAnimationProps({
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.5 }
      })}
    >
      <motion.img 
        src="/logo.svg.png" 
        alt="Logo" 
        className="h-8 sm:h-10 w-auto mb-3"
        {...getAnimationProps({
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.1 }
        })}
      />
      <motion.div 
        className="flex items-center justify-between mb-4"
        {...getAnimationProps({
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.2 }
        })}
      >
        <h1 className="text-sm sm:text-base font-bold text-gray-900">Join us as a supply partner</h1>
        <span className="text-[10px] sm:text-xs font-semibold text-gray-500">Step 3 of 3</span>
      </motion.div>

      <motion.form 
        className="space-y-3 text-sm"
        {...getAnimationProps({
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.5, delay: 0.3 }
        })}
      >
        <div>
          <label className="font-semibold text-gray-700">Company's brand/public name</label>
          <input 
            type="text" 
            placeholder="GetYourGuide Tours Pvt Ltd." 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500" 
            value={formData.brandName} 
            onChange={(e) => {
              const newValue = e.target.value;
              setFormData(prev => ({...prev, brandName: newValue}));
            }} 
          />
        </div>
        <div>
          <label className="font-semibold text-gray-700">Enter your website</label>
          <p className="text-xs text-gray-500 mb-1">You can add a website where your business has already been rated (e.g., Google Maps, TripAdvisor, or your own website).</p>
          <input 
            type="text" 
            placeholder="Enter your website" 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500" 
            value={formData.website} 
            onChange={(e) => {
              const newValue = e.target.value;
              setFormData(prev => ({...prev, website: newValue}));
            }} 
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="font-semibold text-gray-700">Company's registered name</label>
            <input 
              type="text" 
              placeholder="Email address" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500" 
              value={formData.registeredName} 
              onChange={(e) => {
                const newValue = e.target.value;
                setFormData(prev => ({...prev, registeredName: newValue}));
              }} 
            />
          </div>
          <div>
            <label className="font-semibold text-gray-700">Preferred currency to be paid in</label>
            <select 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 bg-white" 
              value={formData.currency} 
              onChange={(e) => setFormData(prev => ({...prev, currency: e.target.value}))}
            >
              <option>USD</option><option>EUR</option><option>GBP</option><option>INR</option>
            </select>
          </div>
        </div>
        <div>
          <label className="font-semibold text-gray-700">Email address</label>
          <p className="text-xs text-gray-500 mb-1">You'll use this to log in to your account.</p>
          <input 
            type="email" 
            placeholder="Email address" 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500" 
            value={formData.loginEmail} 
            onChange={(e) => setFormData(prev => ({...prev, loginEmail: e.target.value}))} 
          />
        </div>
        <div>
          <label className="font-semibold text-gray-700">Password</label>
          <input 
            type="password" 
            placeholder="Enter your password" 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500" 
            value={formData.password} 
            onChange={handlePasswordChange} 
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
          <PasswordCriterion text="Between 8 and 30 characters" met={passwordCriteria.length} />
          <PasswordCriterion text="Number (123) and one special character (#,?,!)" met={passwordCriteria.number && passwordCriteria.specialChar} />
          <PasswordCriterion text="Include a uppercase (ABC) and lowercase (abc) letters" met={passwordCriteria.uppercase && passwordCriteria.lowercase} />
          <PasswordCriterion text="Cannot contain your email" met={!formData.password || !formData.loginEmail || !formData.password.includes(formData.loginEmail.split('@')[0])} />
        </div>
        <div className="pt-2">
          <label className="flex items-start gap-2 text-xs text-gray-600">
            <input 
              type="checkbox" 
              className="mt-0.5" 
              checked={formData.termsAccepted} 
              onChange={(e) => setFormData(prev => ({...prev, termsAccepted: e.target.checked}))} 
            />
            <span>I have read and agree to the supplier <a href="#" className="text-orange-500 underline">Terms and Conditions</a> and the <a href="#" className="text-orange-500 underline">Privacy Policy</a>.</span>
          </label>
          <div className="mt-3 p-3 rounded-md border flex items-center gap-2" style={{ background: '#FFF5F2', borderColor: '#FFE5DF' }}>
            <Info className="w-5 h-5 flex-shrink-0 text-orange-500" />
            <p className="text-sm text-orange-500">
              You'll receive an email to verify your account after registering.
            </p>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg text-center py-4 text-gray-500 text-sm font-semibold">CAPTCHA Placeholder</div>

        <motion.div 
          className="space-y-2 pt-2"
          {...getAnimationProps({
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.4, delay: 0.5 }
          })}
        >
          <motion.button 
            type="button" 
            onClick={handleContinue} 
            disabled={!isStep3Complete} 
            className="w-full py-3 rounded-lg text-sm font-bold text-white transition-all disabled:bg-gray-300 disabled:cursor-not-allowed bg-orange-500 hover:bg-orange-600"
            whileHover={!hasInteracted ? { scale: 1.02 } : {}}
            whileTap={!hasInteracted ? { scale: 0.98 } : {}}
          >
            Continue
          </motion.button>
          <motion.button 
            type="button" 
            onClick={handleBack} 
            className="w-full py-3 rounded-lg text-sm font-bold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all"
            whileHover={!hasInteracted ? { scale: 1.02 } : {}}
            whileTap={!hasInteracted ? { scale: 0.98 } : {}}
          >
            Back
          </motion.button>
        </motion.div>
        <motion.p 
          className="text-xs text-gray-600 text-center pt-2"
          {...getAnimationProps({
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.4, delay: 0.7 }
          })}
        >
          Already have an account? <a href="/supplier-signup" className="font-bold text-orange-500 hover:underline">Log in</a>
        </motion.p>
      </motion.form>
    </motion.div>
  ));

  return (
    <FormWrapper>
      <AnimatePresence mode="wait">
        {step === 1 && <Step1 key="step1" />}
        {step === 2 && <Step2 key="step2" />}
        {step === 3 && <Step3 key="step3" />}
      </AnimatePresence>
    </FormWrapper>
  );
};

export default SupplyPartnerForm;
