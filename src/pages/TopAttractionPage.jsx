import React, { useState } from "react";
import styled from "styled-components";

// --- STYLED COMPONENTS ---

const Page = styled.div`
  background: #fff;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  font-family: "Manrope", sans-serif;
`;

// Added padding-top to push content below a potential fixed navbar
const MainContent = styled.div`
  padding: 0 20px;
  padding-top: 80px; /* Adjust this value based on your actual navbar height */

  @media (min-width: 768px) {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 40px;
    padding-top: 100px; /* Adjust if navbar height changes on larger screens */
  }
`;

// Adjusted Heading margin to remove top margin, now handled by MainContent padding-top
const Heading = styled.h1`
  font-family: "Manrope", sans-serif;
  font-weight: 800;
  font-size: 28px;
  line-height: 1.4;
  color: #1e1e1e;
  opacity: 0.6;
  margin: 0 0 20px 0; /* Removed top margin */

  @media (min-width: 768px) {
    font-size: 32px;
    margin: 0 0 24px 0; /* Removed top margin */
  }
`;


const FilterRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const FilterScroll = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 10px;

  & button {
    margin-right: 10px;
  }

  @media (min-width: 768px) {
    width: auto;
  }
`;

const SortButtons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-start;

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const ResultsCount = styled.div`
  margin-top: 15px;
  font-size: 13px;
  color: #555;
`;

const TourGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 30px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const LoadMoreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 205px;
  height: 52px;
  border-radius: 50px;
  background: #1e1e1e;
  border: none;
  color: #fff;
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  margin: 40px auto;
`;

const SightsContainer = styled.div`
  margin-top: 40px;
`;

const SightsHeading = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 26px;
  }
`;

const SightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

const PromoBanner = styled.div`
  border-radius: 20px;
  overflow: hidden;
  margin: 40px 0;
  position: relative;
  /* Corrected background syntax: Added url() */
  background: url('/topAttractionRomePart.png') center/cover no-repeat;
  height: 250px;

  @media (min-width: 768px) {
    height: 400px;
    margin: 40px auto;
    border-radius: 30px;
    max-width: 1440px;
  }
`;

const PromoBannerOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(30, 30, 30, 0.42);
  z-index: 1;
`;

const NewsletterBox = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  background: #e2f6ff;
  border: 1px solid #e8e6e4;
  border-radius: 32px;
  margin: 20px 0;
  overflow: hidden;

  @media (min-width: 768px) {
    flex-direction: row;
    margin: 40px auto;
  }
`;

const NewsletterContent = styled.div`
  flex: 1;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    padding: 48px 40px;
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }
`;

const NewsletterInput = styled.input`
  padding: 16px 24px;
  border-radius: 24px;
  border: none;
  font-size: 16px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: 320px;
  }
`;

const NewsletterSubmit = styled.button`
  background: #ff5533;
  color: #fff;
  border: none;
  border-radius: 24px;
  padding: 16px 30px;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
`;

const NewsletterImage = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    flex: 1;
    min-width: 0;
    display: flex;
    align-items: stretch;
  }
`;

const PrivacyText = styled.div`
  font-size: 14px;
  text-align: center;
  padding: 0 10px;
  color: #737373;
  margin: 36px 0;

  @media (min-width: 768px) {
    font-size: 16px;
    text-align: left;
    padding: 0;
  }
`;

const SearchesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 60px 0;

  @media (min-width: 768px) {
    margin: 100px 0;
  }
`;

// Updated SearchesGrid to better accommodate potentially wider cards
const SearchesGrid = styled.div`
  display: grid;
  /* Adjust minmax if cards need more space, e.g., 350px or 400px */
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px; /* Increased gap slightly */
`;


const ListsContainer = styled.div`
  background: #fff6f5;
  border-radius: 20px;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin: 40px 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 30px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ListColumn = styled.div`
  width: 100%;
`;

const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff6f5;
  border-radius: 20px;
  padding: 20px;
  gap: 30px;
  margin: 40px 0;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ReviewsChart = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReviewsList = styled.div`
  flex: 1;
  overflow: hidden;
`;

// --- STYLED COMPONENTS for RecentSearchCard ---
const StyledRecentSearchCard = styled.div`
  background: #fff;
  border-radius: 32px;
  border: 1px solid #E4E6E8;
  box-shadow: 0 0.5px 3px rgba(50, 50, 50, 0.04);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 516px; /* Your specified height */
  width: 100%; /* Take available grid space */
  max-width: 466px; /* Your specified max width */
  margin: 0 auto; /* Center in grid cell if space allows */
`;

const CardImageContainer = styled.div`
    width: 100%;
    height: 350px; /* Adjusted - choose a height that works visually */
    overflow: hidden;
    position: relative;
`;

const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;

const CardDetails = styled.div`
  padding: 20px 25px;
  flex: 1;
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: 30px; /* Your spec */
  border-bottom-right-radius: 30px; /* Your spec */
`;

const CardTitle = styled.div`
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 8px;
  color: #101015;
  line-height: 1.4;
`;

const CardDesc = styled.div`
  color: #737373;
  font-size: 14px;
  margin-bottom: 16px;
  line-height: 1.5;
  flex-grow: 1; /* Pushes button down */
`;

const CardButton = styled.button`
  background: #FF5533;
  color: #fff;
  border: none;
  border-radius: 13px;
  padding: 6px 15px;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  align-self: flex-start;
`;
// --- END STYLED COMPONENTS for RecentSearchCard ---


// --- DATA (Keep as is) ---
const topDestinationsData = [ { icon: "🇳🇱", name: "Amsterdam" }, { icon: "🇪🇸", name: "Barcelona" }, { icon: "🇨🇿", name: "Prague" }, { icon: "🇫🇷", name: "Paris" }, { icon: "🇬🇧", name: "London" }, { icon: "🇭🇺", name: "Budapest" }, { icon: "🇦🇪", name: "Dubai" }, ]; const topAttractionCategoriesData = [ { icon: "🇭🇺", name: "Budapest Cruises & boat tours" }, { icon: "🇳🇱", name: "Amsterdam Cruises & boat tours" }, { icon: "🇫🇷", name: "Paris Cruises & boat tours" }, { icon: "🌳", name: "Paris Family-friendly activities" }, { icon: "🇩🇪", name: "Berlin Cruises & boat tours" }, { icon: "🇬🇧", name: "London Harry Potter tours" }, { icon: "🇮🇹", name: "Venice Gondola tours" }, ]; const popularAttractionsData = [ { icon: "🇪🇸", name: "Caminito del Rey" }, { icon: "🇵🇱", name: "Memorial and Museum Auschwitz-Birkenau" }, { icon: "🇫🇷", name: "Seine River" }, { icon: "🇮🇹", name: "Colosseum" }, { icon: "🇬🇧", name: "Warner Bros. Studio London" }, { icon: "🇬🇧", name: "London Harry Potter tours" }, { icon: "🇫🇷", name: "Louvre Museum" }, ]; const greatPriceData = [ { icon: "🇳🇱", name: "Amsterdam" }, { icon: "🇪🇸", name: "Barcelona" }, { icon: "🇨🇿", name: "Prague" }, { icon: "🇫🇷", name: "Paris" }, { icon: "🇬🇧", name: "London" }, { icon: "🇭🇺", name: "Budapest" }, { icon: "🇦🇪", name: "Dubai" }, ]; const reviewsData = [ { name: "Kelly", date: "November 30, 2023", rating: 4.7, text: "Etiam sit amet ex pharetra, venenatis ante vehicula, gravida sapien. Fusce eleifend vulputate nibh, non cursus augue placerat pellentesque. Sed venenatis risus nec felis mollis.", avatar: "https://i.pravatar.cc/40?img=1", }, { name: "Jorge", date: "November 30, 2023", rating: 4.7, text: "Etiam sit amet ex pharetra, venenatis ante vehicula, gravida sapien. Fusce eleifend vulputate nibh, non cursus augue placerat pellentesque. Sed venenatis risus nec felis mollis.", avatar: "https://i.pravatar.cc/40?img=2", }, { name: "Hamilton Yesid", date: "November 30, 2023", rating: 4.7, text: "Etiam sit amet ex pharetra, venenatis ante vehicula, gravida sapien. Fusce eleifend vulputate nibh, non cursus augue placerat pellentesque. Sed venenatis risus nec felis mollis.", avatar: "https://i.pravatar.cc/40?img=3", }, ]; const recentSearches = [ { img: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=400&q=80", title: "Rome: Colosseum & Forum with Audio Guide App–Optional Arena", desc: "Our tour dives into ancient Rome with audio guide to the Colosseum, Roman Forum, and Palatine Hill. Tour these iconic places...", link: "Keep Reading", }, { img: "https://images.unsplash.com/photo-1552832230-c01979360fde?auto=format&fit=crop&w=400&q=80", title: "Vatican Museums, Sistine Chapel & St. Peter's Basilica Tour", desc: "Discover masterpieces of art in the Vatican Museums and Sistine Chapel. Explore St. Peter's Basilica with an expert guide.", link: "Keep Reading", }, { img: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=400&q=80", title: "Florence: Duomo, David & Uffizi Gallery Small Group Tour", desc: "Experience the best of Florence in one day. Skip-the-line access to see Michelangelo's David and masterpieces at the Uffizi.", link: "Keep Reading", }, ]; const attractionsRome = [ "Odeion Circei", "Katla Ice Cave", "Landmannalaugar", "Raufarholshellir", "Secret Lagoon", "Kata", "SchönbrunnPalast", "Reynisfjara Beach", "Icelands Lava Show", "Egyptian capital Wallaton", "Kerid Crater", ]; const experiencesColosseum = [ "Southern Region Iceland Horse riding", "Southern Region Iceland Horse riding", "Southern Region Iceland Horse riding", "Southern Region Iceland Horse riding", "Southern Region Iceland Horse riding", "Southern Region Iceland Horse riding", ]; const toursItaly = [ "Southern Region Iceland Horse riding", "Southern Region Iceland Horse riding", "Southern Region Iceland Horse riding", "Southern Region Iceland Horse riding", "Southern Region Iceland Horse riding", "Southern Region Iceland Horse riding", ]; const topSights = [ { img: "https://images.unsplash.com/photo-1528493366314-e42a43f22ddd?auto=format&fit=crop&w=800&q=80", title: "Pantheon, Rome", sub: "659 activities", }, { img: "https://images.unsplash.com/photo-1505763928130-b4a78783a39e?auto=format&fit=crop&w=800&q=80", title: "Trevi Fountain, Rome", sub: "432 activities", }, { img: "https://images.unsplash.com/photo-1518002440381-d581b0a010de?auto=format&fit=crop&w=800&q=80", title: "St. Peter's Basilica, Vatican", sub: "781 activities", }, { img: "https://images.unsplash.com/photo-1550191054-c6b039f3adaf?auto=format&fit=crop&w=800&q=80", title: "Spanish Steps, Rome", sub: "312 activities", }, ]; const filters = [ { text: "Guided Tours", width: 142 }, { text: "Entry Tickets", width: 142 }, { text: "WorkShops", width: 129 }, { text: "Private Tours", width: 142 }, { text: "Walking Tours", width: 148 }, { text: "Hop-on Hop-off", width: 161 }, { text: "Vintage fiat 500", width: 164 }, { text: "BikeTours", width: 115 }, ];

// --- HELPER COMPONENTS ---

function Pill({ num, text, style }) { return ( <div style={{ display: "inline-flex", alignItems: "center", color: "#fff", fontWeight: 700, borderRadius: 10, fontSize: 15, minWidth: 32, height: 32, padding: "0px 14px", marginRight: 10, justifyContent: "center", ...style }} > {num} </div> ); }
function ListItem({ icon, name }) { return ( <li style={{ display: "flex", alignItems: "center", marginBottom: "10px", fontSize: "14px", color: "#555", }} > <span style={{ marginRight: "8px", fontSize: "18px" }}>{icon}</span> <a href="#" style={{ textDecoration: "underline", color: "inherit", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", }} > {name} </a> </li> ); }
const StarRating = ({ rating }) => { const fullStars = Math.floor(rating); const hasHalfStar = rating % 1 !== 0; const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); return ( <div style={{ display: "flex", alignItems: "center", color: "#FF5533" }}> {[...Array(fullStars)].map((_, i) => ( <span key={`full-${i}`} style={{ fontSize: "16px", marginRight: "2px" }}> ★ </span> ))} {hasHalfStar && ( <span key="half" style={{ fontSize: "16px", marginRight: "2px" }}> ★ </span> )} {[...Array(emptyStars)].map((_, i) => ( <span key={`empty-${i}`} style={{ fontSize: "16px", marginRight: "2px", color: "#E0E0E0" }} > ☆ </span> ))} <span style={{ marginLeft: "6px", fontSize: "14px", fontWeight: 600, color: "#555", }} > {rating.toFixed(1)} </span> </div> ); };
const ReviewItem = ({ review }) => { return ( <div style={{ display: "flex", flexDirection: "column", paddingBottom: "20px", marginBottom: "20px", borderBottom: "1px solid #EEE", }} > <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px", }} > <div style={{ display: "flex", alignItems: "center" }}> <img src={review.avatar} alt={review.name} style={{ width: 40, height: 40, borderRadius: "50%", marginRight: 12, }} /> <div> <div style={{ fontWeight: 600, fontSize: "15px", color: "#333" }}> {review.name} </div> <div style={{ fontSize: "13px", color: "#777" }}>{review.date}</div> </div> </div> <button style={{ background: "none", border: "none", fontSize: "24px", color: "#AAA", cursor: "pointer", }} > ... </button> </div> <div style={{ marginBottom: "10px" }}> <StarRating rating={review.rating} /> </div> <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.6, margin: 0 }}> {review.text} </p> </div> ); };
// Removed old function
function TopSightCard({ img, title, sub }) { return ( <div style={{ width: "100%", height: 417, borderRadius: 12, border: "1px solid #EEE", background: "#fff", overflow: "hidden", position: "relative", boxShadow: "0 1px 4px rgba(30,30,30,0.02)", }} > <img src={img} alt={title} style={{ width: "100%", height: 355, objectFit: "cover", }} /> <div style={{ position: "absolute", left: 0, right: 0, bottom: 10, padding: "0 16px", }} > <div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 12px rgba(30,30,30,0.07)", padding: "13px 17px 10px 17px", display: "flex", flexDirection: "column", }} > <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 2 }}> {title} </div> <div style={{ fontWeight: 400, fontSize: 13, color: "#767676" }}> {sub} </div> </div> <button style={{ position: "absolute", right: 20, bottom: 16, background: "#fff0f0", border: "none", borderRadius: "50%", width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 3px rgba(250,0,0,0.02)", cursor: "pointer", }} > <span style={{ color: "#ff5533", fontSize: 21, fontWeight: 700 }}> {"→"} </span> </button> </div> </div> ); }
function TourCard() { return ( <div style={{ width: "100%", background: "#fff", border: "1px solid #E4E6E8", borderRadius: 32, boxSizing: "border-box", display: "flex", flexDirection: "column", overflow: "hidden", fontFamily: "Manrope, sans-serif", }} > <div style={{ height: 232, background: "#e7eef4", overflow: "hidden", position: "relative", }} > <img src="https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=800&q=80" alt="Colosseum, Roman Forum & Palatine Hill Guided Tour" style={{ width: "100%", height: "100%", objectFit: "cover", }} /> <button style={{ position: "absolute", top: 15, right: 19, background: "#fff", borderRadius: "50%", border: "none", width: 32, height: 32, boxShadow: "0 1px 6px rgba(50,50,50,0.05)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", }} > <svg width="20" height="20" fill="none" stroke="#999" strokeWidth="1.5" viewBox="0 0 24 24" > <path d="M16.5 3.5c-1.74 0-3.41 0.95-4.38 2.44C11.91 4.45 10.24 3.5 8.5 3.5 5.42 3.5 3 5.92 3 9c0 3.3 2.4 5.97 7.55 10.54a2.25 2.25 0 0 0 2.9 0C18.6 14.96 21 12.29 21 9c0-3.08-2.42-5.5-5.5-5.5Z" /> </svg> </button> <span style={{ position: "absolute", top: 16, left: 24, zIndex: 2, background: "#fff7f3", color: "#FF5533", borderRadius: 13, fontWeight: 700, fontSize: 13, padding: "4px 13px", border: "none", }} > Top rated </span> </div> <div style={{ flex: 1, padding: "26px 22px 18px 22px", display: "flex", flexDirection: "column", }} > <div style={{ color: "#232323", fontWeight: 800, fontSize: 19, margin: "0 0 13px 0", letterSpacing: ".2px", }} > Colosseum, Roman Forum &<br /> Palatine Hill Guided Tour </div> <div style={{ color: "#888", fontSize: 14, lineHeight: "20px", marginBottom: 6, }} > <span style={{ marginRight: 14 }}>2.5 Hours</span> <span style={{ marginRight: 14 }}>Skip the line</span> <span>Small group</span> </div> <div style={{ fontSize: 15, color: "#999", marginBottom: 6, }} > <span style={{ display: "inline-flex", alignItems: "center" }}> Certified by get your guide </span> </div> <div style={{ display: "flex", alignItems: "center", marginBottom: 13, }} > <div style={{ background: "#111", color: "#fff", borderRadius: 7, fontSize: 13, fontWeight: 700, padding: "4px 11px", marginRight: 10, }} > Likely to sell out </div> <div style={{ color: "#FF5533", fontSize: 13, fontWeight: 600, }} > Booked 172 times yesterday </div> </div> <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px", }} > <div> <span style={{ color: "#222", fontSize: 13 }}>From</span> <span style={{ fontWeight: 700, fontSize: 18, marginLeft: 4 }}> ₹11,305.00 </span> <span style={{ color: "#222", fontSize: 13, marginLeft: 4 }}> per person </span> </div> <div style={{ display: "flex", alignItems: "center", color: "#FF5533", fontWeight: 700, fontSize: 15, }} > <span style={{ fontSize: 18, marginRight: 3 }}>★</span>5.0 <span style={{ color: "#999", fontWeight: 400, fontSize: 13, marginLeft: 3, }} > 9,843 reviews </span> </div> </div> </div> </div> ); }
const FilterIcon = () => ( <svg width="18" height="18" style={{ marginRight: 8 }} fill="none" viewBox="0 0 18 18" > <rect x="2" y="4" width="14" height="2" rx="1" fill="#fff" opacity=".7" /> <rect x="5" y="8" width="8" height="2" rx="1" fill="#fff" opacity=".7" /> <rect x="7" y="12" width="4" height="2" rx="1" fill="#fff" opacity=".7" /> </svg> );
const SortIcon = () => ( <svg width="18" height="18" style={{ marginRight: 8 }} fill="none" viewBox="0 0 18 18" > <g stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" > <path d="M9 4v10M12 7l3 3-3 3" /> <path d="M6 11l-3-3 3-3" /> </g> </svg> );
const overallRating = 4.8; const totalReviews = "424,024 reviews"; const radius = 90; const circumference = 2 * Math.PI * radius; const strokeDashoffset = circumference - (overallRating / 5) * circumference;

// --- MAIN PAGE COMPONENT ---
export default function TopAttractionPage() {
  const [activeAttraction, setActiveAttraction] = useState(null);
  const [activeExperience, setActiveExperience] = useState(null);
  const [activeTour, setActiveTour] = useState(null);

  return (
    <Page>
      <MainContent>
        <Heading>Explore Rome</Heading>

        {/* --- Filter Row --- */}
        <FilterRow>
             <FilterScroll> {filters.map((f) => ( <button key={f.text} style={{ minWidth: f.width, height: 46, borderRadius: 50, border: "1px solid #FF5533", background: "rgba(255,85,51,0.10)", padding: "12px 20px", fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: 16, color: "#FF5533", cursor: "pointer", flexShrink: 0, }} > {f.text} </button> ))} </FilterScroll>
             <SortButtons> <button style={{ width: 110, height: 38, borderRadius: 50, border: "none", background: "#FF5533", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontFamily: "Manrope, sans-serif", fontSize: 16, cursor: "pointer", boxShadow: "0px 2px 8px rgba(255,85,51,0.06)", }} > <FilterIcon /> Filter </button> <button style={{ width: 110, height: 38, borderRadius: 50, border: "none", background: "#FF5533", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontFamily: "Manrope, sans-serif", fontSize: 16, cursor: "pointer", boxShadow: "0px 2px 8px rgba(255,85,51,0.06)", }} > <SortIcon /> Sort by </button> </SortButtons>
        </FilterRow>
        <ResultsCount>500+ results : Colosseum</ResultsCount>

        {/* --- Tour Grid --- */}
        <TourGrid> <TourCard /> <TourCard /> <TourCard /> <TourCard /> <TourCard /> <TourCard /> </TourGrid>
        <LoadMoreButton>Load More Tours</LoadMoreButton>

        {/* --- Sights Section --- */}
        <SightsContainer>
             <SightsHeading>Top Sight Near Colosseum</SightsHeading>
             <SightsGrid> {topSights.map((c, i) => ( <TopSightCard key={i} {...c} /> ))} </SightsGrid>
             <div style={{ display: "flex", gap: 20, marginTop: 30, justifyContent: "center", }} > <button style={{ width: 40, height: 40, borderRadius: "50%", border: "none", background: "#FFEEEE", color: "#FF5533", fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 5px rgba(255,85,51,0.06)", }} > &larr; </button> <button style={{ width: 40, height: 40, borderRadius: "50%", border: "none", background: "#FFEEEE", color: "#FF5533", fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 5px rgba(255,85,51,0.06)", }} > &rarr; </button> </div>
        </SightsContainer>
      </MainContent>

      {/* --- Promo Banner --- */}
      <PromoBanner> <PromoBannerOverlay /> </PromoBanner>

      {/* --- Second Main Content Area --- */}
      <MainContent>
        {/* --- Newsletter --- */}
        <NewsletterBox>
             <NewsletterContent> <button style={{ background: "#FF5533", color: "#fff", border: "none", borderRadius: 24, padding: "12px 32px", fontWeight: 600, fontSize: 18, marginBottom: 24, cursor: "pointer", alignSelf: "flex-start", }} > Join our newsletter </button> <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: "#222", }} > Discover the wonder of travel every week </h2> <p style={{ fontSize: 18, color: "#222", marginBottom: 32 }}> Get personalized travel inspiration, the latest travel hacks, and exclusive deals straight to your inbox. </p> <NewsletterForm> <NewsletterInput type="email" placeholder="Your Email" /> <NewsletterSubmit type="submit">Subscribe</NewsletterSubmit> </NewsletterForm> <span style={{ fontSize: 16, color: "#888", marginTop: 16 }}> No ads. No trails. No commitments </span> </NewsletterContent>
             <NewsletterImage> <img src="/sideImage.png" alt="Travel inspiration" style={{ width: "100%", height: "100%", objectFit: "cover", borderTopRightRadius: 32, borderBottomRightRadius: 32, }} /> </NewsletterImage>
        </NewsletterBox>
        <PrivacyText> By signing up, you agree to receive promotional emails ... <span style={{ fontWeight: 700 }}>Privacy statement</span>. </PrivacyText>

        {/* --- Searches Section --- */}
        <SearchesContainer>
          <div style={{ fontSize: 22, fontWeight: 700 }}> Based on your recent search </div>
          {/* --- UPDATED SearchesGrid with Styled Component Card --- */}
          <SearchesGrid>
            {recentSearches.map((r, idx) => (
              <StyledRecentSearchCard key={idx}>
                  <CardImageContainer>
                    <CardImage src={r.img} alt={r.title} />
                  </CardImageContainer>
                  <CardDetails>
                    <CardTitle>{r.title}</CardTitle>
                    <CardDesc>{r.desc}</CardDesc>
                    <CardButton>{r.link}</CardButton>
                  </CardDetails>
              </StyledRecentSearchCard>
            ))}
          </SearchesGrid>
          {/* --- END UPDATED SearchesGrid --- */}


          {/* --- Attractions Section with Click Handler --- */}
          <div style={{ fontSize: 18, fontWeight: 700, marginTop: 40 }}>
            Top Attractions in Rome
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {attractionsRome.map((attr, idx) => {
              const isActive = activeAttraction === idx;
              const itemStyle = { border: `1px solid ${isActive ? '#FF5533' : '#ddd'}`, borderRadius: '12px', padding: '4px 8px 4px 4px', marginRight: '10px', marginBottom: '10px', display: 'inline-flex', alignItems: 'center', cursor: 'pointer', backgroundColor: isActive ? '#FF5533' : '#FFF6F5', color: isActive ? '#fff' : '#555', transition: 'background-color 0.2s ease, border-color 0.2s ease', };
              const pillStyle = { backgroundColor: isActive ? '#E54D2E' : '#FF5533' };
              return ( <div key={idx} style={itemStyle} onClick={() => setActiveAttraction(idx)} > <Pill num={idx + 1} style={pillStyle} /> <span style={{ fontWeight: 500, fontSize: 15, alignSelf: "center" }}> {attr} </span> </div> );
            })}
          </div>

          {/* --- Experiences Section with Click Handler --- */}
          <div style={{ fontSize: 18, fontWeight: 700, marginTop: 20 }}>
            Experiences in Colosseum
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {experiencesColosseum.map((ex, idx) => {
              const isActive = activeExperience === idx;
              const itemStyle = { border: `1px solid ${isActive ? '#FF5533' : '#ddd'}`, borderRadius: '12px', padding: '4px 8px 4px 4px', marginRight: '10px', marginBottom: '10px', display: 'inline-flex', alignItems: 'center', cursor: 'pointer', backgroundColor: isActive ? '#FF5533' : '#FFF6F5', color: isActive ? '#fff' : '#555', transition: 'background-color 0.2s ease, border-color 0.2s ease', };
              const pillStyle = { backgroundColor: isActive ? '#E54D2E' : '#FF5533' };
              return ( <div key={idx} style={itemStyle} onClick={() => setActiveExperience(idx)} > <Pill num={idx + 1} style={pillStyle}/> <span style={{ fontWeight: 500, fontSize: 15, alignSelf: "center" }}> {ex} </span> </div> );
            })}
          </div>

          {/* --- Tours Section with Click Handler --- */}
          <div style={{ fontSize: 18, fontWeight: 700, marginTop: 20 }}>
            Tours in Italy
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {toursItaly.map((tour, idx) => {
              const isActive = activeTour === idx;
              const itemStyle = { border: `1px solid ${isActive ? '#FF5533' : '#ddd'}`, borderRadius: '12px', padding: '4px 8px 4px 4px', marginRight: '10px', marginBottom: '10px', display: 'inline-flex', alignItems: 'center', cursor: 'pointer', backgroundColor: isActive ? '#FF5533' : '#FFF6F5', color: isActive ? '#fff' : '#555', transition: 'background-color 0.2s ease, border-color 0.2s ease', };
              const pillStyle = { backgroundColor: isActive ? '#E54D2E' : '#FF5533' };
              return ( <div key={idx} style={itemStyle} onClick={() => setActiveTour(idx)} > <Pill num={idx + 1} style={pillStyle}/> <span style={{ fontWeight: 500, fontSize: 15, alignSelf: "center" }}> {tour} </span> </div> );
            })}
          </div>
        </SearchesContainer>

        {/* --- Reviews Section --- */}
        <ReviewsContainer>
             <ReviewsChart> <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#333", marginBottom: "20px", }} > Overall ratings </h2> <div style={{ position: "relative", width: radius * 2 + 20, height: radius * 2 + 20, }} > <svg width="100%" height="100%" viewBox={`0 0 ${radius * 2 + 20} ${radius * 2 + 20}`} style={{ transform: "rotate(-90deg)" }} > <circle cx={radius + 10} cy={radius + 10} r={radius} fill="none" stroke="#FEE2E2" strokeWidth="16" /> <circle cx={radius + 10} cy={radius + 10} r={radius} fill="none" stroke="#FF5533" strokeWidth="16" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} strokeLinecap="round" /> </svg> <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", }} > <div style={{ fontSize: "13px", color: "#777", marginBottom: "4px", }} > ({totalReviews}) </div> <div style={{ fontSize: "48px", fontWeight: 800, color: "#FF5533", lineHeight: 1, }} > {overallRating.toFixed(1)} </div> <div style={{ fontSize: "14px", color: "#777", marginTop: "4px" }} > Out of 5 </div> </div> </div> </ReviewsChart>
             <ReviewsList> {reviewsData.map((review, index) => ( <ReviewItem key={index} review={review} /> ))} </ReviewsList>
        </ReviewsContainer>

        {/* --- Footer Lists --- */}
        <ListsContainer>
             <ListColumn> <h4 style={{ fontWeight: 700, fontSize: "18px", marginBottom: "10px", color: "#333", }} > Top Destinations </h4> <ul style={{ listStyle: "none", padding: 0, margin: 0 }}> {topDestinationsData.map((item, index) => ( <ListItem key={index} icon={item.icon} name={item.name} /> ))} </ul> </ListColumn>
             <ListColumn> <h4 style={{ fontWeight: 700, fontSize: "18px", marginBottom: "10px", color: "#333", }} > Top Attraction categories </h4> <ul style={{ listStyle: "none", padding: 0, margin: 0 }}> {topAttractionCategoriesData.map((item, index) => ( <ListItem key={index} icon={item.icon} name={item.name} /> ))} </ul> </ListColumn>
             <ListColumn> <h4 style={{ fontWeight: 700, fontSize: "18px", marginBottom: "10px", color: "#333", }} > Popular Attractions </h4> <ul style={{ listStyle: "none", padding: 0, margin: 0 }}> {popularAttractionsData.map((item, index) => ( <ListItem key={index} icon={item.icon} name={item.name} /> ))} </ul> </ListColumn>
             <ListColumn> <h4 style={{ fontWeight: 700, fontSize: "18px", marginBottom: "10px", color: "#333", }} > Great Price </h4> <ul style={{ listStyle: "none", padding: 0, margin: 0 }}> {greatPriceData.map((item, index) => ( <ListItem key={index} icon={item.icon} name={item.name} /> ))} </ul> </ListColumn>
        </ListsContainer>
      </MainContent>
    </Page>
  );
}