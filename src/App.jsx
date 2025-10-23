import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PaymentMethods from './components/PaymentMethods';
import PopularDestinations from './components/PopularDestinations';
import FeaturedTours from './components/FeaturedTours';
import Promotions from './components/Promotions';
import Testimonials from './components/Testimonials';
import MobileApp from './components/MobileApp';
import Footer from './components/Footer';
import TourDetails from './pages/TourDetails';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import SupplierSignup from './pages/SupplierSignup';
import SupplierPortals from './pages/SupplierPortals';
import TopAttractionPage from './pages/TopAttractionPage';
import TripInspiration from './pages/TripInspiration.jsx';


// Home Page Component
const HomePage = () => {
  return (
    <>
      <Hero />
      <PaymentMethods />
      <PopularDestinations />
      <FeaturedTours />
      <Promotions />
      <Testimonials />
      <MobileApp />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white" style={{ overflowX: 'hidden', scrollBehavior: 'smooth' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:tourId" element={<TourDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/placetoSee" element={<TopAttractionPage />} />
          <Route path="/trip-inspiration" element={<TripInspiration />} />
          <Route path="/supplier-signup" element={<><HomePage /><SupplierSignup /></>} />
          <Route path="/supplier-portal" element={<><HomePage /><SupplierPortals /></>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
