import React, { useState } from 'react';

/* ----- Insider guides data - UPDATE IMAGE SOURCE ----- */
const guides = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  // --- UPDATE THIS IMAGE URL to match your Screenshot 2025-10-23 115710.jpg ---
  image:
    'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80', // Placeholder - Replace!
  title: 'Explore Paris alone with this expert guide to …',
  excerpt:
    'Paris is the ultimate solo travel playground: full of charm, culture, and unforgettable experiences you can…',
  author: 'Carla',
  date: 'Aug 31, 2025'
}));

/* ----- Insider guides card - REVISED ----- */
// This card component uses flexbox to avoid fixed heights and extra spacing
/* ----- Insider guides card - REVISED with SVG Arrow ----- */
function GuideCard({ data, active, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        // width: 466, // Let grid control width
        // height: 547, // REMOVED fixed height
        borderRadius: 32,
        border: '1px solid #E4E6E8',
        background: (active || isHovered) ? '#FFF9F8' : '#FFFFFF',
        overflow: 'hidden',
        textAlign: 'left',
        cursor: 'pointer',
        boxShadow: '0 1px 8px rgba(0,0,0,0.04)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'background 160ms ease',
      }}
    >
      {/* Image */}
      <div style={{ width: '100%', height: 230, overflow: 'hidden', flexShrink: 0 }}>
        <img
          src={data.image}
          alt={data.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Body */}
      <div
        style={{
          padding: '18px 18px 16px 18px',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'space-between'
        }}
      >
        {/* Top Content (Title & Excerpt) */}
        <div>
          <h3 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: 16, color: '#1E1E1E', margin: '0 0 10px 0', letterSpacing: '.2px', lineHeight: '22px' }} >
            {data.title}
          </h3>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 400, fontSize: 13, color: '#6B7280', lineHeight: '20px', margin: 0 }} >
            {data.excerpt}
          </p>
        </div>

        {/* Meta + CTA dot */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 14 }} >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#6B7280', fontSize: 12 }} >
            <span style={{ fontWeight: 600 }}>{data.author}</span>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#D1D5DB' }} />
            <span>{data.date}</span>
          </div>

          {/* --- MODIFIED SPAN TO IMG --- */}
          <span
            style={{
              width: 34,
              height: 34,
              borderRadius: '50%',
              background: active ? '#FF5533' : '#FFE9E5',
              // color removed, use filter for SVG if needed
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 160ms ease',
            }}
          >
            <img
              src="/Vector.svg" // Path to your SVG in the public folder
              alt="Arrow"
              style={{
                width: '16px', // Adjust size as needed
                height: '16px', // Adjust size as needed
                // If your SVG doesn't automatically take the parent color, you might need filters:
                // filter: active ? 'brightness(0) invert(1)' : 'none', // Makes SVG white when background is orange
                // If the SVG is orange by default, you might not need the inactive state filter.
                // Test this part based on how your Vector.svg is created.
              }}
            />
          </span>
           {/* --- END MODIFICATION --- */}

        </div>
      </div>
    </button>
  );
}

// ----- Page Component (TripInspiration) remains the same -----
// Make sure the TripInspiration component imports and uses this updated GuideCard
function TripInspiration() {
  const [activeId, setActiveId] = useState(1); // Keep first active by default if desired

  return (
    // Adjust pt-[62px] based on your actual fixed navbar height
    <div className="pt-[62px]">
      {/* --- Hero Section --- */}
      <div
        className="relative w-full mx-auto overflow-hidden"
        style={{
          maxWidth: '1920px',
          height: '700px', // Standard hero height
          // Make sure this image name matches your file in the public folder
          backgroundImage: 'url(/parisTopImage.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
       >
         {/* Gradient overlay */}
         <div
           className="absolute inset-0"
           style={{
             background: 'linear-gradient(180deg, rgba(29,29,29,0) 0%, rgba(55,53,53,0.6) 100%)',
             opacity: 0.6 // Adjust opacity to make background visible
           }}
         />
         {/* Heading block - Positioned absolutely near the top */}
         <div
           className="absolute left-1/2 -translate-x-1/2 text-center text-white px-4"
           style={{
                top: '30%', // Adjust vertical position (e.g., '25%', '150px')
                zIndex: 10,
                width: '90%', // Prevent text getting too wide on large screens
                maxWidth: '800px' // Further constraint if needed
            }}
         >
           <h1
             className="text-5xl md:text-7xl font-bold" // Using Tailwind for responsive font size
             style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, color: 'white' }}
           >
             <span style={{ color: '#FF5533' }}>Paris</span> Travel Guide
           </h1>
         </div>
       </div>


      {/* --- Guide Description Section --- */}
       <section style={{ width: '100%', maxWidth: 1440, margin: '60px auto 0 auto', padding: '0 16px' }} > {/* Added top margin */}
           <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 28, color: '#1E1E1E', margin: '0 0 16px 0', borderBottom: '1px solid #E5E7EB', paddingBottom: 8, width: 'fit-content' }} >
               Guide Description
           </h2>
           {/* Responsive grid for description */}
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px 30px', marginBottom: 40 }} >
               <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 16, lineHeight: '24px', color: '#374151', margin: 0 }} >
                   Dive into the ultimate guide to Paris, your passport to discovering the magic of the French
                   capital, from the iconic Eiffel Tower to the quaint cobblestone streets of Montmartre.
                   Whether marveling at the Mona Lisa in the Louvre, cruising along the Seine at sunset, maxing
                   your credit card on the Champs-Élysées, or sipping champagne at a sidewalk cafe in
                   Saint-Germain-des-Prés is top of your to-do list, you’ll find the best way to experience it
                   right here.
               </p>
               <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 16, lineHeight: '24px', color: '#374151', margin: 0 }} >
                   Art lovers will revel in Paris’ world-class museums and galleries.
                   The Musée d’Orsay’s impressionist masterpieces and the Centre Pompidou’s modern art collection
                   are just the beginning. Traveling with kids? Disneyland Paris offers a day of enchantment,
                   while the city’s peaceful, beautiful parks are great for picnics and fun activities.
               </p>
           </div>
           {/* Video */}
            <div style={{ width: '100%', position: 'relative', borderRadius: 16, overflow: 'hidden', aspectRatio: '16 / 9', background: '#E5E7EB', marginBottom: 40 }} >
                <img src="/video-thumbnail.jpg" alt="Paris video" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }} />
                <button aria-label="Play video" style={{ position: 'absolute', inset: 0, margin: 'auto', width: 72, height: 72, borderRadius: '50%', background: 'rgba(255,255,255,0.86)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2, boxShadow: '0 6px 18px rgba(0,0,0,0.18)', border: 'none', cursor: 'pointer' }} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="#FF5533"> <path d="M8 5v14l11-7z" /> </svg>
                </button>
            </div>
            {/* Bottom text */}
             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px 30px' }} >
                 <div style={{ display: 'grid', gap: 20 }}>
                     <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 16, lineHeight: '24px', color: '#374151', margin: 0 }} > Trips to Versailles or Champagne are within easy reach and make for the perfect romantic day out if you can bear to tear yourself away from the City of Love — just be back in time for a trip to the top of the sparkling Eiffel Tower and a late-night candlelit dinner. </p>
                     <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 16, lineHeight: '24px', color: '#374151', margin: 0 }} > Parisian cuisine is an adventure in itself. Croissants, cheese, wine, and exquisite French bistro cooking are a must but don’t skip the city’s brilliant Asian, North African, and Middle Eastern restaurants. </p>
                 </div>
                 <div>
                     <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 16, lineHeight: '24px', color: '#374151', margin: 0 }} > This guide is the ultimate resource for an extraordinary time in Paris. Whether you&apos;re seeking romance, culture, family fun, or food heaven, Paris is ready to captivate your heart and all your senses. </p>
                 </div>
             </div>
       </section>

      {/* ----- Insider guides section - REVISED ----- */}
      <section style={{ width: '100%', maxWidth: 1440, margin: '60px auto 40px auto', padding: '0 16px' }}> {/* Adjusted margins */}
        {/* Title - Aligned Left */}
        <h2
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontWeight: 800,
            fontSize: 24,
            color: '#1E1E1E',
            margin: '0 0 24px 0', // Margin below title
          }}
        >
          Insider guides
        </h2>

        {/* Cards grid: Responsive */}
        <div
          style={{
            display: 'grid',
            // Use auto-fit, adjust minmax for target size (~466px on large screens)
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', // Min 350px, allows ~3 cards on 1224px+
            gap: 20,
          }}
        >
          {guides.map((g) => (
            <GuideCard
              key={g.id}
              data={g}
              active={activeId === g.id}
              onClick={() => setActiveId(g.id)}
            />
          ))}
        </div>
 {/* Load more */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
        <button
          style={{
            width: 205.39, // Keep original width or adjust if needed
            height: 52,
            borderRadius: 50,
            background: '#1E1E1E',
            border: 'none',
            color: '#fff',
            fontFamily: 'Manrope, sans-serif',
            fontWeight: 700,
            fontSize: 16,
            cursor: 'pointer',
            // --- ADDED FLEX STYLES ---
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px', // Adjust gap between icon and text
            padding: '0 20px', // Add some padding if width is auto
            transition: 'background 0.2s ease', // Keep hover transition
          }}
           onMouseOver={(e) => { // Keep hover effect
               const target = e.currentTarget; // Type assertion if using TS
               target.style.background = '#333';
            }}
            onMouseOut={(e) => {
               const target = e.currentTarget; // Type assertion if using TS
               target.style.background = '#1E1E1E';
           }}
        >
          {/* --- ADDED SVG IMAGE --- */}
          <img
            src="/SVGTourbutton.svg" // Path to your SVG in public folder
            alt="" // Decorative icon
            style={{
              width: '25px',  // Your specified width
              height: '24px', // Your specified height
              // Optional: If SVG isn't white, you might need a filter
              // filter: 'brightness(0) invert(1)'
            }}
          />
          {/* --- Text wrapped in span --- */}
          <span>Load More Tours</span>
        </button>
      </div>
      {/* ----- END OF INSIDER GUIDES SECTION ----- */}
      </section>
    </div>
  );
}

export default TripInspiration;