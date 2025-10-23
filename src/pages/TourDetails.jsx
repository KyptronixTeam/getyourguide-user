import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  MapPin, Star, Clock, Users, Heart, Share2, Calendar,
  Check, X, ChevronLeft, ChevronRight, Search, Video, Image as ImageIcon, ExternalLink
} from 'lucide-react';
import CheckAvailabilityPanel from './CheckAvailabilityPanel';
import PickupLocations from './PickupLocations';

// Custom CSS for better mobile experience
const customStyles = `
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .line-clamp-4 {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;


const TourDetails = () => {
  const { tourId } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState('02 January 2024');
  const [participants, setParticipants] = useState("Adult x 1");
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [date, setDate] = useState("");
  const [showPickup, setShowPickup] = useState(false);
   
  
 const tourCards = [
  {
    badge: "Only 6 Spots Left",
    badgeColor: "#FF5533",
    title: "Tour with Departure from Vik and Katla Ice Cave Visit",
    time: "3 hours",
    guide: "English",
    meet: "Vik, Vik, Iceland",
    date: "Thursday, September 18, 2025",
    times: ["10:00 AM", "13:45 PM"],
    price: "₹21,871 Only",
    qty: "1 Adult",
    extra: "All taxes and fees included"
  },
  {
    badge: "Likely to sell out",
    badgeColor: "#FF5533",
    title: "Tour with Departure from Vik and Katla Ice Cave Visit",
    time: "3 hours",
    guide: "English",
    meet: "Vik, Vik, Iceland",
    nextDate: "Friday, September 19, 2025"
  }
 ];


  const tourData = {
    1: {
      title: 'From Vik: Katla Ice Cave and Super Jeep Tour',
      provider: 'Originals by Get Your Guide',
      location: 'Vik, Iceland',
      rating: 4.7,
      reviews: '1,855 reviews',
      price: 48.25,
      duration: '2 days 3 nights',
      guests: '4-6 guests',
      badge: 'Great Deal',
      activityProvider: 'Activity Provider: Arctic Adventures',
      images: [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=800&h=600&fit=crop'
      ]
    }
  };

  const tour = tourData[tourId] || tourData[1];

  const highlights = [
    'Explore the incredible natural ice cave inside the famous Katla Volcano',
    'Professional Super Jeep tour with experienced guide',
    'Learn about the geological history of the area',
    'Small group experience for personalized attention',
    'All safety equipment provided'
  ];

  const included = [
    'Professional glacier guide',
    'All necessary safety equipment',
    'Super Jeep transportation',
    'Crampons and helmets',
    'Small group tour'
  ];

  const notIncluded = [
    'Food and drinks',
    'Hotel pickup and drop-off',
    'Personal expenses',
    'Gratuities (optional)'
  ];

  const customerReviews = [
    {
      id: 1,
      name: 'Sara Mohamed',
      location: 'Jakatar',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      rating: 5,
      title: 'The best booking system',
      review: "I've been using the hotel booking system for several years now, and it's become my go-to platform for planning my trips. The interface is user-friendly, and I appreciate the detailed information and real-time availability of hotels.",
      date: '2 weeks ago'
    },
    {
      id: 2,
      name: 'Atend John',
      location: 'Califonia',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      rating: 5,
      title: 'The best booking system',
      review: "I've been using the hotel booking system for several years now, and it's become my go-to platform for planning my trips. The interface is user-friendly, and I appreciate the detailed information and real-time availability of hotels.",
      date: '1 month ago'
    },
    {
      id: 3,
      name: 'Sara Mohamed',
      location: 'Jakatar',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      rating: 5,
      title: 'The best booking system',
      review: "I've been using the hotel booking system for several years now, and it's become my go-to platform for planning my trips. The interface is user-friendly, and I appreciate the detailed information and real-time availability of hotels.",
      date: '3 weeks ago'
    },
    {
      id: 4,
      name: 'Michael Chen',
      location: 'New York',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      rating: 5,
      title: 'Amazing experience!',
      review: "Absolutely loved this tour! The guide was knowledgeable and friendly. The ice cave was breathtaking and the super jeep ride was thrilling. Would definitely recommend to anyone visiting Iceland.",
      date: '1 week ago'
    }
  ];

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <style>{customStyles}</style>
      
      {/* Search Bar Section */}
       <div className="w-full bg-gradient-to-b from-orange-50 to-white pt-4 pb-6 mt-16 sm:pt-6 sm:pb-8 md:pt-8 md:pb-12 lg:pt-10 lg:pb-15">
         <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6">
           <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg border border-gray-100">
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 items-end">
               <div className="sm:col-span-2 lg:col-span-1">
                 <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-2 font-manrope">
                   Search
                 </label>
                 <div className="relative">
                   <MapPin className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                   <input
                     type="text"
                     placeholder="Find places and things to do"
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                     className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 border border-gray-300 rounded-lg sm:rounded-xl text-sm sm:text-base outline-none font-manrope text-gray-500 focus:border-orange-500 transition-colors"
                   />
                 </div>
               </div>

               <div>
                 <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-2 font-manrope">
                   Check In
                 </label>
                 <div className="relative">
                   <Calendar className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                   <select
                     value={selectedDate}
                     onChange={(e) => setSelectedDate(e.target.value)}
                     className="w-full pl-10 sm:pl-12 pr-8 sm:pr-10 py-3 sm:py-4 border border-gray-300 rounded-lg sm:rounded-xl text-sm sm:text-base outline-none font-manrope text-gray-900 appearance-none bg-white cursor-pointer focus:border-orange-500 transition-colors"
                   >
                     <option>02 January 2024</option>
                     <option>03 January 2024</option>
                     <option>04 January 2024</option>
                     <option>05 January 2024</option>
                   </select>
                   <ChevronRight className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 rotate-90 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 pointer-events-none" />
                 </div>
               </div>

               <button className="w-full sm:w-auto sm:col-span-2 lg:col-span-1 bg-orange-500 text-white border-none rounded-lg sm:rounded-xl text-sm sm:text-base font-bold cursor-pointer font-manrope flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 hover:bg-orange-600 hover:-translate-y-0.5 transition-all shadow-lg hover:shadow-xl">
                 <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                 <span className="hidden xs:inline">Search</span>
                 <span className="xs:hidden">Search</span>
               </button>
             </div>
           </div>
         </div>
       </div>

      {/* Main Content */}
       <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 pb-6 sm:pb-10 md:pb-15 lg:pb-20">

         <div className="inline-flex items-center gap-2 bg-red-100 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6">
           <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-600 rounded-full"></div>
           <span className="text-xs sm:text-sm font-semibold text-red-600 font-manrope">
             {tour.provider}
           </span>
         </div>

         <div className="mb-6 sm:mb-8">
           <div className="flex flex-col xl:flex-row justify-between items-start mb-4 gap-3 sm:gap-4">
             <div className="flex-1 min-w-0">
               <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight font-manrope">
                 {tour.title}
               </h1>
               <div className="flex flex-wrap items-center gap-3 sm:gap-6">
                 <div className="flex items-center gap-1.5 sm:gap-2">
                   <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                   <span className="text-base sm:text-lg font-bold font-manrope">
                     {tour.rating}
                   </span>
                   <span className="text-sm sm:text-base text-gray-500 font-manrope">
                     {tour.reviews}
                   </span>
                 </div>
                 <div className="text-sm sm:text-base text-gray-500 font-manrope">
                   • {tour.activityProvider}
                 </div>
               </div>
             </div>

             <div className="flex flex-col sm:flex-row gap-2 w-full xl:w-auto">
               <button className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-white border border-gray-300 rounded-lg text-xs sm:text-sm font-semibold font-manrope hover:bg-gray-50 hover:border-orange-500 transition-colors">
                 <Share2 className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                 Share
               </button>
               <button className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-white border border-gray-300 rounded-lg text-xs sm:text-sm font-semibold font-manrope hover:bg-red-50 hover:border-orange-500 transition-colors">
                 <Heart className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                 Wishlist
               </button>
               <button className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-white border border-gray-300 rounded-lg text-xs sm:text-sm font-semibold font-manrope hover:bg-gray-50 hover:border-orange-500 transition-colors">
                 Compare
                 <span className="bg-gray-100 rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-xs">
                   0
                 </span>
               </button>
             </div>
           </div>
         </div>

        {/* Image Gallery */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 mb-8 sm:mb-10 rounded-2xl sm:rounded-3xl overflow-hidden w-full">
           <div className="sm:col-span-2 lg:col-span-2 lg:row-span-2 relative cursor-pointer overflow-hidden min-h-64 sm:min-h-72 lg:min-h-96">
             <img
               src={tour.images[0]}
               alt="Main tour"
               className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
             />
             <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-black/70 backdrop-blur-md rounded-lg sm:rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-1.5 sm:gap-2 text-white text-xs sm:text-sm font-semibold font-manrope">
               <Video className="w-3 h-3 sm:w-4 sm:h-4" />
               Video
             </div>
           </div>

           {tour.images.slice(1, 3).map((image, index) => (
             <div
               key={index}
               className="relative cursor-pointer overflow-hidden rounded-lg sm:rounded-xl min-h-40 sm:min-h-48 md:min-h-36 lg:min-h-48"
             >
               <img
                 src={image}
                 alt={`Tour ${index + 2}`}
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
               />
             </div>
           ))}

           {tour.images.slice(3, 5).map((image, index) => (
             <div
               key={index}
               className="relative cursor-pointer overflow-hidden rounded-lg sm:rounded-xl min-h-40 sm:min-h-48 md:min-h-36 lg:min-h-48"
             >
               <img
                 src={image}
                 alt={`Tour ${index + 4}`}
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
               />
               {index === 1 && (
                 <div className="absolute inset-0 bg-black/60 flex items-center justify-center flex-col gap-1 sm:gap-2 text-white">
                   <ImageIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                   <span className="text-xl sm:text-2xl font-bold font-manrope">
                     +12
                   </span>
                 </div>
               )}
             </div>
           ))}
         </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8 items-start">
           <div className="xl:col-span-2 w-full overflow-hidden">
             {/* Description Section - Matching Screenshot */}
             <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 border border-gray-200">
               <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 font-manrope">
                 Description
               </h2>
               <p className="text-sm sm:text-base leading-relaxed text-gray-600 mb-4 font-manrope">
                 Quisque imperdiet dignissim enim dictum finibus. Sed consectetuer convallis enim eget laoreet. Aenean vitae nisl mollis, porta risus vel, dapibus lectus. Etiam ac suscipit eros, eget maximus.
               </p>
             </div>

            {/* About This Activity Section - Matching Screenshot with detailed list items */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 border border-gray-200">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 font-manrope">
                About this Activity
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-gray-600 mb-6 sm:mb-8 font-manrope">
                Quisque imperdiet dignissim enim dictum finibus. Sed consectetuer convallis enim eget laoreet. Aenean vitae nisl mollis, porta risus vel, dapibus lectus. Etiam ac suscipit eros, eget maximus.
              </p>

              {/* Free Cancellation */}
              <div className="mb-7 pb-7 border-b border-gray-200">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-4 h-4 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 font-manrope text-gray-900">
                      Free Cancellation
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-manrope m-0">
                      Cancel up to 24 hours in advance for a full refund
                    </p>
                  </div>
                </div>
              </div>

              {/* Reserve now & pay late */}
              <div className="mb-7 pb-7 border-b border-gray-200">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-4 h-4 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 font-manrope text-gray-900">
                      Reserve now & pay late
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-manrope m-0">
                      Keep your travel plans flexible — book your spot and pay nothing today.
                    </p>
                  </div>
                </div>
              </div>

              {/* Duration: 3 - 11 hours */}
              <div className="mb-7 pb-7 border-b border-gray-200">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 font-manrope text-gray-900">
                      Duration: 3 - 11 hours
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-manrope m-0">
                      Check availability to see starting times.
                    </p>
                  </div>
                </div>
              </div>

              {/* Live tour guide */}
              <div className="mb-7 pb-7 border-b border-gray-200">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 font-manrope text-gray-900">
                      Live tour guide
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-manrope m-0">
                      English
                    </p>
                  </div>
                </div>
              </div>

              {/* Pickup optional */}
              <div className="mb-7 pb-7 border-b border-gray-200">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 font-manrope text-gray-900">
                      Pickup optional
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-manrope m-0">
                      Pickup is available from the select hotels and bus spots. Due to traffic restrictions, pickup is not available from hotels in the city center nor from private AirBnBs. If your pickup location is not on the map please select the closest pickup point to your accommodation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Small group */}
              <div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 font-manrope text-gray-900">
                      Small group
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-manrope m-0">
                      Limited to 14 participants
                    </p>
                  </div>
                </div>
              </div>
            </div>




          </div>

          {/* Right Column - Booking Card */}
           <div className="w-full">
             <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl sticky top-4 sm:top-24 border border-gray-100 w-full max-w-md mx-auto">
               {/* Our Price Header */}
               <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-5 font-manrope">
                 Our Price
               </h3>

               {/* Price Display with Discount */}
               <div className="mb-3 sm:mb-4">
                 <div className="flex items-baseline gap-2 sm:gap-3 mb-2">
                   {/* Original Price - Strikethrough */}
                   <span className="text-lg sm:text-xl font-semibold text-gray-400 line-through font-manrope">
                     ${(tour.price * 1.5).toFixed(0)}
                   </span>

                   {/* Discounted Price */}
                   <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-none font-manrope">
                     ${tour.price}
                   </span>

                   {/* Per Person */}
                   <span className="text-sm sm:text-base font-medium text-gray-500 font-manrope">
                     Per Person
                   </span>
                 </div>

                 {/* Instant Saving Badge */}
                 <div className="inline-block bg-yellow-100 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md mb-4 sm:mb-6">
                   <span className="text-xs sm:text-sm font-semibold text-amber-800 font-manrope">
                     Instant Saving: ${((tour.price * 1.5) - tour.price).toFixed(0)}
                   </span>
                 </div>
               </div>

              {/* Check Availability Button */}
              <button className="w-full py-3 sm:py-4 bg-orange-500 text-white border-none rounded-lg sm:rounded-xl text-base sm:text-lg font-bold cursor-pointer mb-3 sm:mb-5 font-manrope hover:bg-orange-600 hover:-translate-y-0.5 transition-all shadow-lg hover:shadow-xl">
                Check Availability
              </button>

              {/* Reserve Now & Pay Later Message */}
              <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-orange-50 rounded-lg sm:rounded-xl border border-orange-100">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs sm:text-sm leading-relaxed text-gray-600 font-manrope m-0">
                    Reserve now & Pay later to book your spot and pay nothing today.{' '}
                    <button className="bg-transparent border-none text-orange-500 font-semibold cursor-pointer font-manrope p-0 text-xs sm:text-sm underline">
                      Read more
                    </button>
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-200 my-6"></div>

              {/* Tour Details */}
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <Clock className="w-5 h-5 text-gray-500" />
                  <div>
                    <div className="text-xs text-gray-500 font-manrope">Duration</div>
                    <div className="text-base font-semibold font-manrope">{tour.duration}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Users className="w-5 h-5 text-gray-500" />
                  <div>
                    <div className="text-xs text-gray-500 font-manrope">Group Size</div>
                    <div className="text-base font-semibold font-manrope">{tour.guests}</div>
                  </div>
                </div>
              </div>

              {/* Date Selector */}
              <div className="mb-4 sm:mb-6">
                <label className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 font-manrope">
                  Select Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-3.5 border border-gray-300 rounded-lg sm:rounded-xl text-sm sm:text-base outline-none font-manrope focus:border-orange-500 transition-colors"
                  />
                </div>
              </div>

              {/* Participants Counter */}
              <div className="mb-4 sm:mb-6">
                <label className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 font-manrope">
                  Participants
                </label>
                <div className="flex items-center justify-between p-2.5 sm:p-3 border border-gray-300 rounded-lg sm:rounded-xl">
                  <button
                    onClick={() => setParticipants(Math.max(1, participants - 1))}
                    className="w-8 h-8 sm:w-9 sm:h-9 bg-gray-100 border-none rounded-md sm:rounded-lg flex items-center justify-center cursor-pointer text-base sm:text-lg font-bold font-manrope hover:bg-gray-200 transition-colors"
                  >
                    -
                  </button>
                  <span className="text-base sm:text-lg font-semibold font-manrope">
                    {participants}
                  </span>
                  <button
                    onClick={() => setParticipants(participants + 1)}
                    className="w-8 h-8 sm:w-9 sm:h-9 bg-gray-100 border-none rounded-md sm:rounded-lg flex items-center justify-center cursor-pointer text-base sm:text-lg font-bold font-manrope hover:bg-gray-200 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Total Calculation */}
              <div className="p-3 sm:p-5 bg-gray-50 rounded-lg sm:rounded-xl mb-3 sm:mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-xs sm:text-sm text-gray-500 font-manrope">
                    ${tour.price} x {participants} {participants === 1 ? 'participant' : 'participants'}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold font-manrope">
                    ${(tour.price * participants).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between pt-2 sm:pt-3 border-t border-gray-200">
                  <span className="text-sm sm:text-base font-bold font-manrope">Total</span>
                  <span className="text-lg sm:text-xl font-bold text-orange-500 font-manrope">
                    ${(tour.price * participants).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Reserve Now Button */}
              <button className="w-full py-3 sm:py-4 bg-orange-500 text-white border-none rounded-lg sm:rounded-xl text-sm sm:text-base font-bold cursor-pointer mb-2 sm:mb-3 font-manrope hover:bg-orange-600 hover:-translate-y-0.5 transition-all shadow-lg hover:shadow-xl">
                Reserve Now
              </button>

              {/* Free Cancellation Note */}
              <p className="text-xs text-center text-gray-500 font-manrope m-0">
                You won't be charged yet
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Section - Full Width */}
         <div className="mt-10 sm:mt-15 mb-4 sm:mb-6 relative">
           <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-900 font-manrope">
             Highlighted review from Other Travelers
           </h2>

           <div className="relative">
             {/* Navigation Buttons */}
             <button
               onClick={() => {
                 const carousel = document.getElementById('reviews-carousel');
                 carousel.scrollLeft -= 324;
               }}
               className="absolute left-2 sm:left-4 lg:left-[-20px] top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 hidden sm:flex lg:flex"
               onMouseEnter={(e) => {
                 e.currentTarget.style.background = '#FF5533';
                 e.currentTarget.style.borderColor = '#FF5533';
                 const svg = e.currentTarget.querySelector('svg');
                 if (svg) svg.style.color = '#FFFFFF';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.background = '#FFFFFF';
                 e.currentTarget.style.borderColor = '#E5E7EB';
                 const svg = e.currentTarget.querySelector('svg');
                 if (svg) svg.style.color = '#1E1E1E';
               }}
             >
               <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-800" />
             </button>

             <button
               onClick={() => {
                 const carousel = document.getElementById('reviews-carousel');
                 carousel.scrollLeft += 324;
               }}
               className="absolute right-2 sm:right-4 lg:right-[-20px] top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 hidden sm:flex lg:flex"
               onMouseEnter={(e) => {
                 e.currentTarget.style.background = '#FF5533';
                 e.currentTarget.style.borderColor = '#FF5533';
                 const svg = e.currentTarget.querySelector('svg');
                 if (svg) svg.style.color = '#FFFFFF';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.background = '#FFFFFF';
                 e.currentTarget.style.borderColor = '#E5E7EB';
                 const svg = e.currentTarget.querySelector('svg');
                 if (svg) svg.style.color = '#1E1E1E';
               }}
             >
               <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-800" />
             </button>

            <div
              id="reviews-carousel"
              className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory hide-scrollbar"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitScrollbar: { display: 'none' }
              }}
            >
              {customerReviews.slice(0, 4).map((review) => (
                <div
                  key={review.id}
                  className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-7 transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1 hover:border-orange-500 flex flex-col snap-start min-w-0 w-72 sm:w-80 md:w-96"
                  style={{
                    minHeight: '280px',
                    maxHeight: '320px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.12)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = '#FF5533';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#E5E7EB';
                  }}
                >
                  <div className="flex gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-gray-100 flex-shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-2">
                        <div className="min-w-0 flex-1">
                          <h4 className="font-manrope font-bold text-sm sm:text-base text-gray-900 mb-1 truncate">
                            {review.name}
                          </h4>
                          <p className="font-manrope text-xs sm:text-sm text-gray-500 truncate">
                            {review.location}
                          </p>
                        </div>

                        <div className="flex gap-0.5 sm:gap-1 flex-shrink-0 ml-2">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 overflow-hidden">
                    <h5 className="font-manrope font-bold text-sm sm:text-base mb-2 sm:mb-3 text-gray-900 line-clamp-2">
                      {review.title}
                    </h5>

                    <p className="font-manrope text-xs sm:text-sm leading-relaxed text-gray-500 mb-2 sm:mb-3 line-clamp-3 sm:line-clamp-4">
                      {review.review}
                    </p>

                    <p className="font-manrope text-xs text-gray-400 mt-auto">
                      {review.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: '969px', margin: '0 auto' }}>
      {/* Header */}
      <h2
        style={{
          width: '969px',
          height: '26px',
          fontFamily: 'Manrope, sans-serif',
          fontWeight: 700,
          fontSize: '36px',
          lineHeight: '26px',
          letterSpacing: '0',
          color: '#050B20',
          marginBottom: '32px',
        }}
      >
        Select participants and date
      </h2>

      {/* Main Section */}
      <div
        className="flex items-center justify-between shadow-md"
        style={{
          background: '#FFEEEB',
          width: '685px',
          height: '75.75px',
          borderRadius: '80px',
          padding: '0 32px',
          margin: '0 auto',
        }}
      >
        {/* Participant Selector */}
        <div className="flex items-center relative" style={{ minWidth: '150px' }}>
          <svg width="24" height="24" fill="none" stroke="#DC2626" strokeWidth="1.5"><path d="M5.5 21v-2a4.5 4.5 0 0 1 9 0v2"/><circle cx="10" cy="7" r="4"/></svg>
          <button
            className="ml-2 font-semibold text-[#DC2626] flex items-center bg-transparent border-none outline-none cursor-pointer"
            onClick={() => setParticipants("Adult x 2")}
          >
            {participants}
            <svg className="ml-1" width="14" height="14"><path d="M5 8l5 5 5-5" stroke="#B7B7B7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
        {/* Divider */}
        <div style={{ width: '1px', height: '35px', background: '#E7CBC7', margin: '0 24px' }} />
        {/* Date Picker */}
        <div className="flex items-center relative" style={{ minWidth: '180px' }}>
          <svg width="22" height="22" fill="none" stroke="#DC2626" strokeWidth="1.5"><rect x="2.5" y="4.5" width="17" height="15" rx="3"/><path d="M7 2v4"/><path d="M15 2v4"/><path d="M2.5 9.5h17"/></svg>
          <input
            type="date"
            className="ml-2 text-gray-400 bg-transparent border-none outline-none"
            value={date}
            style={{ color: date ? "#DC2626" : "#9CA3AF" }}
            onChange={e => setDate(e.target.value)}
          />
          <svg className="ml-1" width="14" height="14"><path d="M5 8l5 5 5-5" stroke="#B7B7B7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        {/* Divider */}
        <div style={{ width: '1px', height: '35px', background: '#E7CBC7', margin: '0 24px' }} />
        {/* Button */}
        <button
          className="px-8 py-2 text-white font-semibold rounded-full flex items-center justify-center whitespace-nowrap"
          style={{
            background: '#FF5533',
            minWidth: '170px',
            fontSize: '1.1rem',
            borderRadius: '80px'
          }}
          onClick={() => setIsPanelVisible(!isPanelVisible)}
        >
          Check Availability
        </button>
      </div>
    </div>

    {/* Availability Panel Section */}
    {isPanelVisible && (
  <div
    style={{
      width: "963px",
      background: "#FFF6F5",
      border: "1px solid rgba(255, 85, 51, 0.5)",
      borderRadius: "16px",
      padding: "40px",
      margin: "20px auto 32px auto",
    }}
  >
    {/* FIX 1: Added 'i' as the second argument here */}
    {tourCards.map((tour, i) => (
      <div
        // FIX 2: Changed 'key' to 'i'
        key={i}
        style={{
          borderRadius: "12px",
          border: "1px solid #EEE",
          background: "#FFF",
          overflow: "hidden",
          // This line will now work
          marginBottom: i === 0 ? "32px" : "0",
        }}
      >
        <div
          style={{
            background: tour.badgeColor,
            color: "#fff",
            borderRadius: "7px",
            fontWeight: 600,
            fontSize: "13px",
            padding: "3.5px 16px",
            display: "inline-block",
            margin: "12px 0 0 15px",
          }}
        >
          {tour.badge}
        </div>
        <div style={{ padding: "20px" }}>
          <div
            style={{
              fontWeight: 600,
              fontSize: "18px",
              marginBottom: "10px",
              color: "#232323",
            }}
          >
            {tour.title}
          </div>
          <div
            style={{
              display: "flex",
              gap: "18px",
              marginBottom: "10px",
              color: "#FF5533",
            }}
          >
            <span>{tour.time}</span>
            <span>
              Guide: <span style={{ color: "#232323" }}>{tour.guide}</span>
            </span>
          </div>
          <div
            style={{
              color: "#FF5533",
              fontSize: "15px",
              marginBottom: "16px",
            }}
          >
            <span
              style={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={() => setShowPickup(true)}
            >
              Meet at: {tour.meet}
            </span>
          </div>

          {/* For first card, show time slots and full info */}
          {tour.date && (
            <>
              <div
                style={{
                  color: "#232323",
                  fontWeight: 500,
                  fontSize: "14px",
                  marginBottom: "12px",
                }}
              >
                Select a starting time
                <br />
                <span
                  style={{
                    color: "#9ca3af",
                    fontWeight: 400,
                    fontSize: "13.5px",
                  }}
                >
                  {tour.date}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  margin: "5px 0",
                }}
              >
                <button
                  style={{
                    background: "#FF5533",
                    color: "#fff",
                    borderRadius: "20px",
                    border: "none",
                    fontSize: "15px",
                    fontWeight: 700,
                    padding: "6px 24px",
                    cursor: "pointer",
                  }}
                >
                  {tour.times[0]}
                </button>
                <button
                  style={{
                    background: "#fff",
                    color: "#FF5533",
                    borderRadius: "20px",
                    border: "1px solid #FF5533",
                    fontSize: "15px",
                    fontWeight: 700,
                    padding: "6px 24px",
                    cursor: "pointer",
                  }}
                >
                  {tour.times[1]}
                </button>
              </div>
              <div
                style={{
                  color: "#FF5533",
                  fontSize: "12px",
                  fontWeight: 500,
                  margin: "7px 0 5px 0",
                }}
              >
                Only 2 hours left to book
              </div>
              <div
                style={{
                  color: "#9ca3af",
                  fontSize: "12px",
                  fontWeight: 500,
                  marginBottom: "4px",
                }}
              >
                Cancel before 10:00 AM on 17 September for all full refund
              </div>
              <div
                style={{
                  background: "#FF5533",
                  color: "#fff",
                  padding: "16px 22px",
                  borderRadius: "0 0 12px 12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ fontSize: "22px", fontWeight: 700 }}>
                  {tour.price}
                </div>
                <button
                  style={{
                    background: "#fff",
                    color: "#FF5533",
                    fontWeight: 600,
                    fontSize: "15px",
                    padding: "9px 40px",
                    borderRadius: "9999px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Continue
                </button>
              </div>
              <div
                style={{
                  margin: "8px 22px",
                  color: "#FF5533",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
              >
                {tour.qty}
                <br />
                <span style={{ color: "#9ca3af", fontWeight: 400 }}>
                  {tour.extra}
                </span>
              </div>
            </>
          )}

          {/* For second card, show next available date */}
          {tour.nextDate && (
            <div
              style={{
                background: "#FF5533",
                color: "#fff",
                fontWeight: 600,
                padding: "9px 19px",
                borderRadius: "0 0 12px 12px",
                fontSize: "15px",
              }}
            >
              Next available date: {tour.nextDate}
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
)}
<PickupLocations
        visible={showPickup}
        onClose={() => setShowPickup(false)}
      />
    <div className="bg-white py-10 sm:py-15 lg:py-20 mt-10 sm:mt-15 lg:mt-20">
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6">
    <div
    className="bg-orange-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8"
  >
  {/* Left Side - Title */}
  <div
    className="min-w-0 sm:min-w-32 lg:min-w-36 font-manrope font-bold text-lg sm:text-xl lg:text-2xl text-gray-900 mb-2 sm:mb-0"
  >
    Highlights
  </div>

  {/* Right Side - List */}
  <ul
    className="w-full flex flex-col gap-3 sm:gap-4 list-none p-0 m-0"
  >
    {[
      "Gaze at the natural wonders of Iceland's South Coast on a guided tour",
      "Step into the interior of the Katla natural ice cave at Kötlujökull Glacier",
      "Soak up the spectacular views of the majestic Mýrdalsjökull Ice Cap",
      "Travel off-road through Iceland’s volcanic landscapes in a Super Jeep",
      "Discover the South Coast’s storied history and geology with your guide"
    ].map((text, i) => (
      <li key={i} className="flex items-start gap-2 sm:gap-3 font-manrope text-sm sm:text-base lg:text-lg text-gray-900">
        {/* Check icon */}
        <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-orange-100 rounded-full flex-shrink-0 mt-0.5">
          <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 16 16" fill="none"><path d="M5 8.5L7 10.5L11 6.5" stroke="#FF5533" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
        <span className="leading-relaxed">{text}</span>
      </li>
    ))}
  </ul>
</div>
</div>
</div>


{/* Full Description Section */}
<div
  className="bg-orange-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 lg:gap-8 mx-auto mb-6 sm:mb-8 max-w-7xl"
>
  <div className="min-w-0 sm:min-w-32 lg:min-w-36 font-manrope font-bold text-lg sm:text-xl lg:text-2xl text-gray-900 mb-2 sm:mb-0">
    Full description
  </div>
  <div className="flex-1 font-manrope text-sm sm:text-base lg:text-lg text-gray-900 leading-relaxed">
    Discover southern Iceland's stunning ice caves on a guided tour from Vik or Reykjavik.<br/>
    Experience breathtaking views as you drive along the country's spectacular south coast<br/>
    <button className="bg-transparent border-none text-orange-500 font-semibold cursor-pointer font-manrope p-0 text-sm sm:text-base underline">
      See more
    </button>
  </div>
</div>

{/* Includes Section */}
<div
  className="bg-orange-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 lg:gap-8 mx-auto mb-6 sm:mb-8 max-w-7xl"
>
  <div className="min-w-0 sm:min-w-32 lg:min-w-36 font-manrope font-bold text-lg sm:text-xl lg:text-2xl text-gray-900 mb-2 sm:mb-0">
    Includes
  </div>
  <ul
    className="w-full flex flex-col gap-3 sm:gap-4 list-none p-0 m-0 font-manrope text-sm sm:text-base lg:text-lg text-gray-900"
  >
    {/* Includes List */}
    {[
      { text: "Expert glacier guide", type: "check" },
      { text: "Guided glacier hike", type: "check" },
      { text: "Visit to a natural ice cave", type: "check" },
      { text: "Safety equipment (specialized glacier crampons, helmet, harness)", type: "check" },
      { text: "Food and drinks", type: "cross" }
    ].map((item, i) => (
      <li key={i} className="flex items-center gap-2 sm:gap-3">
        <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-orange-100 rounded-full flex-shrink-0">
          {item.type === "check" ? (
            <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 16 16" fill="none"><path d="M5 8.5L7 10.5L11 6.5" stroke="#FF5533" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          ) : (
            <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 16 16" fill="none"><path d="M5 5L11 11" stroke="#FF5533" strokeWidth="2" strokeLinecap="round"/><path d="M11 5L5 11" stroke="#FF5533" strokeWidth="2" strokeLinecap="round"/></svg>
          )}
        </span>
        <span className="leading-relaxed">{item.text}</span>
      </li>
    ))}
  </ul>
</div>

{/* Exclude Section */}
<div
  className="bg-orange-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 lg:gap-8 mx-auto mb-6 sm:mb-8 max-w-7xl"
>
  <div className="min-w-0 sm:min-w-32 lg:min-w-36 font-manrope font-bold text-lg sm:text-xl lg:text-2xl text-gray-900 mb-2 sm:mb-0">
    Exclude
  </div>
  <ul
    className="w-full flex flex-col gap-3 sm:gap-4 list-none p-0 m-0 font-manrope text-sm sm:text-base lg:text-lg text-gray-900"
  >
    {/* Exclude List */}
    {[
      "Any clothing or hiking boots",
      "Entry to the lava tunnel on retry tours",
      "Hotel pickup and drop-off",
      "Parking fees",
      "Food and drinks"
    ].map((text, i) => (
      <li key={i} className="flex items-center gap-2 sm:gap-3">
        <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-orange-100 rounded-full flex-shrink-0">
          <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 16 16" fill="none"><path d="M5 5L11 11" stroke="#FF5533" strokeWidth="2" strokeLinecap="round"/><path d="M11 5L5 11" stroke="#FF5533" strokeWidth="2" strokeLinecap="round"/></svg>
        </span>
        <span className="leading-relaxed">{text}</span>
      </li>
    ))}
  </ul>
</div>





      {/* =========== IMPORTANT INFORMATION SECTIONS - FULL WIDTH =========== */}
      <div style={{ background: '#FFFFFF', padding: '60px 0', marginTop: '60px' }}>
        <div style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto', padding: '0 24px' }}>
          
          {/* Not Suitable for */}
          <div style={{ 
            background: '#FFF5F5',
            borderRadius: '16px',
            padding: '32px',
            marginBottom: '32px',
            border: '1px solid #FED7D7'
          }}>
            <h3 style={{ 
              fontSize: '24px', 
              fontWeight: 700, 
              marginBottom: '20px', 
              color: '#1E1E1E', 
              fontFamily: 'Manrope, sans-serif'
            }}>
              Not Suitable for
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <X style={{ width: 20, height: 20, color: '#DC2626' }} />
              <span style={{ 
                fontSize: '16px', 
                color: '#4B5563', 
                fontFamily: 'Manrope, sans-serif'
              }}>
                Children under 6 years
              </span>
            </div>
          </div>

          {/* Meeting Point */}
          <div style={{ 
            background: '#FFF5F5',
            borderRadius: '16px',
            padding: '32px',
            marginBottom: '32px',
            border: '1px solid #FED7D7'
          }}>
            <h3 style={{ 
              fontSize: '24px', 
              fontWeight: 700, 
              marginBottom: '20px', 
              color: '#1E1E1E', 
              fontFamily: 'Manrope, sans-serif'
            }}>
              Meeting Point
            </h3>
            <p style={{ 
              fontSize: '16px', 
              color: '#4B5563', 
              marginBottom: '20px',
              fontFamily: 'Manrope, sans-serif',
              lineHeight: '1.6'
            }}>
              Meet your guide at the bus parking lot behind the Icewear Magasin building, facing the sea. Look for the Arctic Adventures sign.
            </p>
            <button
              style={{
                background: 'transparent',
                border: 'none',
                color: '#FF5533',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'Manrope, sans-serif',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              Open in Google Maps
              <ExternalLink style={{ width: 16, height: 16 }} />
            </button>
          </div>

          {/* Important Information */}
          <div style={{ 
            background: '#FFF5F5',
            borderRadius: '16px',
            padding: '32px',
            marginBottom: '32px',
            border: '1px solid #FED7D7'
          }}>
            <h3 style={{ 
              fontSize: '24px', 
              fontWeight: 700, 
              marginBottom: '24px', 
              color: '#1E1E1E', 
              fontFamily: 'Manrope, sans-serif'
            }}>
              Important Information
            </h3>
            
            <h4 style={{ 
              fontSize: '20px', 
              fontWeight: 600, 
              marginBottom: '16px', 
              color: '#1E1E1E', 
              fontFamily: 'Manrope, sans-serif'
            }}>
              What to bring
            </h4>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px 32px',
              marginBottom: '32px'
            }}>
              {[
                'Comfortable shoes',
                'Hiking shoes',
                'Warm clothing',
                'Water',
                'Hat',
                'Gloves',
                'Snacks',
                'Rain gear'
              ].map((item, index) => (
                <div 
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}
                >
                  <Check style={{ width: 18, height: 18, color: '#FF5533', flexShrink: 0 }} />
                  <span style={{
                    fontSize: '16px',
                    color: '#4B5563',
                    fontFamily: 'Manrope, sans-serif'
                  }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <h4 style={{ 
              fontSize: '20px', 
              fontWeight: 600, 
              marginBottom: '16px', 
              color: '#1E1E1E', 
              fontFamily: 'Manrope, sans-serif'
            }}>
              Know before you go
            </h4>
            
            <p style={{ 
              fontSize: '16px', 
              color: '#4B5563', 
              marginBottom: '16px',
              fontFamily: 'Manrope, sans-serif',
              lineHeight: '1.6'
            }}>
              Ice caves are one of nature's most incredible wonders and part of what makes them so special is that they're always changing. The Katla Ice Cave can look a bit different from week to week (or even day to day), depending on the weather, temperature, and natural ice movement. That means the cave you visit might not
            </p>
            
            <button
              style={{
                background: 'transparent',
                border: 'none',
                color: '#FF5533',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'Manrope, sans-serif',
                padding: 0
              }}
            >
              See more
            </button>
          </div>
        </div>
      </div>
      {/* =========== END IMPORTANT INFORMATION SECTIONS =========== */}

      {/* =========== YOU MIGHT ALSO LIKE CAROUSEL SECTION =========== */}
<div style={{ 
  background: '#FFFFFF',
  padding: '60px 0',
  marginTop: '60px'
}}>
<div style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto', padding: '0 24px' }}>
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      marginBottom: '32px'
    }}>
      <h2 style={{
        fontFamily: 'Manrope, sans-serif',
        fontSize: '32px',
        fontWeight: 800,
        color: '#1E1E1E'
      }}>
        You Might Also Like
      </h2>
      <button
        style={{
          background: 'transparent',
          border: 'none',
          color: '#FF5533',
          fontSize: '16px',
          fontWeight: 600,
          cursor: 'pointer',
          fontFamily: 'Manrope, sans-serif',
          padding: 0
        }}
      >
        View All
      </button>
    </div>

    {/* Carousel Container */}
    <div style={{ position: 'relative' }}>
      {/* Tour Cards Carousel */}
      <div 
        id="tours-carousel"
        className="hide-scrollbar"
        style={{
          display: 'flex',
          gap: '24px',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          paddingBottom: '20px'
        }}
      >
        {[
          {
            id: 1,
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=250&fit=crop',
            badge: 'Water Activity',
            badgeColor: '#DBEAFE',
            badgeTextColor: '#1E40AF',
            title: 'California Sunset/Twilight Boat Cruise',
            provider: 'Originals by Get Your Guide',
            rating: 4.96,
            reviews: '(672 reviews)',
            duration: '2 days 3 nights',
            guests: '4-6 guest',
            price: 48.25
          },
          {
            id: 2,
            image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=250&fit=crop',
            badge: 'Adventure',
            badgeColor: '#D1FAE5',
            badgeTextColor: '#065F46',
            title: 'NYC: Food Tastings and Culture Tour',
            provider: 'Originals by Get Your Guide',
            rating: 4.96,
            reviews: '(1/2 reviews)',
            duration: '2 days 3 nights',
            guests: '4-6 guest',
            price: 17.32
          },
          {
            id: 3,
            image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=250&fit=crop',
            badge: 'Day Trip',
            badgeColor: '#DBEAFE',
            badgeTextColor: '#1E40AF',
            title: 'Grand Canyon Horseshoe Bend 2 days',
            provider: 'Originals by Get Your Guide',
            rating: 4.96,
            reviews: '(672 reviews)',
            duration: '2 days 3 nights',
            guests: '4-6 guest',
            price: 15.63
          },
          {
            id: 4,
            image: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=400&h=250&fit=crop',
            badge: 'Day Trip',
            badgeColor: '#DBEAFE',
            badgeTextColor: '#1E40AF',
            title: 'Grand Canyon Horseshoe Bend 2 days',
            provider: 'Originals by Get Your Guide',
            rating: 4.96,
            reviews: '(672 reviews)',
            duration: '2 days 3 nights',
            guests: '4-6 guest',
            price: 15.63
          }
        ].map((tour) => (
          <div 
            key={tour.id}
            style={{
              minWidth: '320px',
              maxWidth: '320px',
              background: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: '16px',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              flexShrink: 0
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.12)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {/* Image Container */}
            <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
              <img 
                src={tour.image}
                alt={tour.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              />
              
              {/* Badge */}
              <div style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                background: tour.badgeColor,
                color: tour.badgeTextColor,
                padding: '6px 12px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 600,
                fontFamily: 'Manrope, sans-serif'
              }}>
                {tour.badge}
              </div>

              {/* Heart Icon */}
              <button style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                width: '36px',
                height: '36px',
                background: '#FFFFFF',
                border: 'none',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#FEF2F2';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#FFFFFF';
              }}
              >
                <Heart style={{ width: 18, height: 18, color: '#6B7280' }} />
              </button>

              {/* Rating Badge */}
              <div style={{
                position: 'absolute',
                bottom: '12px',
                right: '12px',
                background: '#FFFFFF',
                padding: '6px 12px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }}>
                <Star style={{ width: 14, height: 14, color: '#FFC107', fill: '#FFC107' }} />
                <span style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  fontFamily: 'Manrope, sans-serif'
                }}>
                  {tour.rating}
                </span>
                <span style={{
                  fontSize: '12px',
                  color: '#6B7280',
                  fontFamily: 'Manrope, sans-serif'
                }}>
                  {tour.reviews}
                </span>
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: '16px' }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 700,
                marginBottom: '8px',
                fontFamily: 'Manrope, sans-serif',
                color: '#1E1E1E',
                lineHeight: '1.4',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                minHeight: '50px'
              }}>
                {tour.title}
              </h3>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                marginBottom: '12px'
              }}>
                <MapPin style={{ width: 14, height: 14, color: '#FF5533' }} />
                <span style={{
                  fontSize: '13px',
                  color: '#6B7280',
                  fontFamily: 'Manrope, sans-serif'
                }}>
                  {tour.provider}
                </span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '16px',
                paddingBottom: '16px',
                borderBottom: '1px solid #E5E7EB'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <Clock style={{ width: 14, height: 14, color: '#9CA3AF' }} />
                  <span style={{
                    fontSize: '13px',
                    color: '#6B7280',
                    fontFamily: 'Manrope, sans-serif'
                  }}>
                    {tour.duration}
                  </span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <Users style={{ width: 14, height: 14, color: '#9CA3AF' }} />
                  <span style={{
                    fontSize: '13px',
                    color: '#6B7280',
                    fontFamily: 'Manrope, sans-serif'
                  }}>
                    {tour.guests}
                  </span>
                </div>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <span style={{
                    fontSize: '24px',
                    fontWeight: 800,
                    color: '#1E1E1E',
                    fontFamily: 'Manrope, sans-serif'
                  }}>
                    ${tour.price}
                  </span>
                  <span style={{
                    fontSize: '14px',
                    color: '#9CA3AF',
                    fontFamily: 'Manrope, sans-serif'
                  }}>
                    {' '}/ person
                  </span>
                </div>
                <button
                  style={{
                    padding: '10px 20px',
                    background: '#FF5533',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: 'Manrope, sans-serif',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#E64522';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = '#FF5533';
                  }}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Navigation Arrows */}
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '12px',
      marginTop: '32px'
    }}>
      <button
        onClick={() => {
          const carousel = document.getElementById('tours-carousel');
          carousel.scrollLeft -= 344;
        }}
        style={{
          width: '48px',
          height: '48px',
          background: '#F3F4F6',
          border: 'none',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#FF5533';
          const svg = e.currentTarget.querySelector('svg');
          if (svg) svg.style.color = '#FFFFFF';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#F3F4F6';
          const svg = e.currentTarget.querySelector('svg');
          if (svg) svg.style.color = '#1E1E1E';
        }}
      >
        <ChevronLeft style={{ width: 20, height: 20, color: '#1E1E1E', transition: 'color 0.3s ease' }} />
      </button>
      <button
        onClick={() => {
          const carousel = document.getElementById('tours-carousel');
          carousel.scrollLeft += 344;
        }}
        style={{
          width: '48px',
          height: '48px',
          background: '#F3F4F6',
          border: 'none',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#FF5533';
          const svg = e.currentTarget.querySelector('svg');
          if (svg) svg.style.color = '#FFFFFF';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#F3F4F6';
          const svg = e.currentTarget.querySelector('svg');
          if (svg) svg.style.color = '#1E1E1E';
        }}
      >
        <ChevronRight style={{ width: 20, height: 20, color: '#1E1E1E', transition: 'color 0.3s ease' }} />
      </button>
    </div>
  </div>
</div>
{/* =========== END YOU MIGHT ALSO LIKE CAROUSEL SECTION =========== */}
{/* =========== CUSTOMER REVIEW SECTION =========== */}
<div style={{ 
  background: '#FAFAFA',
  padding: '60px 0',
  marginTop: '60px'
}}>
  <div style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto', padding: '0 24px' }}>
    
    {/* Section Header */}
    <h2 style={{
      fontFamily: 'Manrope, sans-serif',
      fontSize: '32px',
      fontWeight: 800,
      color: '#1E1E1E',
      marginBottom: '40px'
    }}>
      Customer Review
    </h2>

    {/* Overall Ratings */}
    <div style={{
      background: '#FFFFFF',
      borderRadius: '20px',
      padding: '32px',
      marginBottom: '32px',
      border: '1px solid #E5E7EB'
    }}>
      <h3 style={{
        fontFamily: 'Manrope, sans-serif',
        fontSize: '20px',
        fontWeight: 700,
        color: '#1E1E1E',
        marginBottom: '24px'
      }}>
        Overall ratings
      </h3>

      <div className="overall-rating-container" style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '40px', alignItems: 'start' }}>
        {/* Circular Rating */}
        <div className="circular-rating" style={{ 
          position: 'relative',
          width: '160px',
          height: '160px'
        }}>
          <svg width="100%" height="100%" viewBox="0 0 160 160" style={{ transform: 'rotate(-90deg)' }}>
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="#F3F4F6"
              strokeWidth="16"
            />
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="#FF5533"
              strokeWidth="16"
              strokeDasharray={`${(4.8 / 5) * 440} 440`}
              strokeLinecap="round"
            />
          </svg>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            width: '100%',
            padding: '0 10px'
          }}>
            <div style={{
              fontSize: '11px',
              color: '#FF5533',
              fontWeight: 600,
              fontFamily: 'Manrope, sans-serif',
              marginBottom: '4px',
              whiteSpace: 'nowrap'
            }}>
              Overall Rating
            </div>
            <div style={{
              fontSize: '36px',
              fontWeight: 800,
              color: '#FF5533',
              fontFamily: 'Manrope, sans-serif',
              lineHeight: '1'
            }}>
              4.8
            </div>
            <div style={{
              fontSize: '10px',
              color: '#9CA3AF',
              fontFamily: 'Manrope, sans-serif',
              whiteSpace: 'nowrap'
            }}>
              Out of 5
            </div>
          </div>
        </div>

        {/* Rating Breakdown */}
        <div className="rating-breakdown" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px'
        }}>
          {[
            { label: 'Guide', description: 'Quality of guides, value for money.', rating: 5.0 },
            { label: 'Value for Money', description: 'Was it worth the cost?', rating: 4.5 },
            { label: 'Transport & Accessibility', description: 'How easy it was to get around.', rating: 5.0 },
            { label: 'Safety & Cleanliness', description: 'Personal safety and hygiene standards.', rating: 5.0 },
            { label: 'Hospitality & Service', description: 'Friendliness of locals, staff, guides.', rating: 5.0 },
            { label: 'Kid-Friendly/Family-Friendly', description: 'Activities for children.', rating: 4.5 }
          ].map((item, index) => (
            <div key={index} className="rating-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <div className="rating-item-content" style={{ flex: 1 }}>
                <div style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#1E1E1E',
                  fontFamily: 'Manrope, sans-serif',
                  marginBottom: '4px'
                }}>
                  {item.label}
                </div>
                <div style={{
                  fontSize: '12px',
                  color: '#6B7280',
                  fontFamily: 'Manrope, sans-serif'
                }}>
                  {item.description}
                </div>
              </div>
              <div className="rating-item-score" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                marginLeft: '12px'
              }}>
                <Star style={{ width: 16, height: 16, color: '#FF5533', fill: '#FF5533' }} />
                <span style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#1E1E1E',
                  fontFamily: 'Manrope, sans-serif'
                }}>
                  {item.rating}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Customer Photos */}
    <div style={{
      background: '#FFFFFF',
      borderRadius: '20px',
      padding: '32px',
      marginBottom: '32px',
      border: '1px solid #E5E7EB'
    }}>
      <h3 style={{
        fontFamily: 'Manrope, sans-serif',
        fontSize: '20px',
        fontWeight: 700,
        color: '#1E1E1E',
        marginBottom: '24px'
      }}>
        Customer Photos
      </h3>

      <div className="customer-photos" style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr',
        gridTemplateRows: 'repeat(2, 180px)',
        gap: '12px'
      }}>
        {/* Large Photo */}
        <div style={{
          gridColumn: '1',
          gridRow: 'span 2',
          borderRadius: '16px',
          overflow: 'hidden',
          cursor: 'pointer'
        }}>
          <img
            src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=600&h=400&fit=crop"
            alt="Customer photo"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
        </div>

        {/* Small Photos */}
        {[1, 2, 3].map((i) => (
          <div key={i} style={{
            borderRadius: '16px',
            overflow: 'hidden',
            cursor: 'pointer'
          }}>
            <img
              src={`https://images.unsplash.com/photo-148372864238${i}-6c3bdd6c93e5?w=300&h=200&fit=crop`}
              alt={`Customer photo ${i}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            />
          </div>
        ))}

        {/* +128 More Photos */}
        <div style={{
          borderRadius: '16px',
          overflow: 'hidden',
          position: 'relative',
          cursor: 'pointer',
          background: 'rgba(0, 0, 0, 0.4)'
        }}>
          <img
            src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=300&h=200&fit=crop"
            alt="More photos"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'blur(2px)'
            }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{
              fontSize: '48px',
              fontWeight: 800,
              color: '#FFFFFF',
              fontFamily: 'Manrope, sans-serif'
            }}>
              +128
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* Reviews Section with Filter */}
    <div className="review-grid" style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '32px' }}>
      {/* Filter Sidebar */}
      <div className="review-filter" style={{
        background: '#FFFFFF',
        borderRadius: '20px',
        padding: '24px',
        border: '1px solid #E5E7EB',
        height: 'fit-content'
      }}>
        <h4 style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: '16px',
          fontWeight: 700,
          color: '#1E1E1E',
          marginBottom: '20px'
        }}>
          Filter
        </h4>

        {/* All Travels Type */}
        <div style={{ marginBottom: '24px' }}>
          <label style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            marginBottom: '12px'
          }}>
            <input
              type="checkbox"
              defaultChecked
              style={{
                width: '18px',
                height: '18px',
                accentColor: '#FF5533',
                cursor: 'pointer'
              }}
            />
            <span style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#FF5533',
              fontFamily: 'Manrope, sans-serif'
            }}>
              All Travels Type
            </span>
          </label>

          {['Couples', 'Group of friends', 'Solo travelers', 'Families'].map((type) => (
            <label key={type} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              marginBottom: '12px'
            }}>
              <input
                type="checkbox"
                style={{
                  width: '18px',
                  height: '18px',
                  accentColor: '#FF5533',
                  cursor: 'pointer'
                }}
              />
              <span style={{
                fontSize: '14px',
                color: '#6B7280',
                fontFamily: 'Manrope, sans-serif'
              }}>
                {type}
              </span>
            </label>
          ))}
        </div>

        {/* By Star Rating */}
        <div>
          <h5 style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: '14px',
            fontWeight: 600,
            color: '#1E1E1E',
            marginBottom: '12px'
          }}>
            By Star Rating
          </h5>

          {[5, 4, 3, 2, 1].map((stars) => (
            <label key={stars} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              marginBottom: '12px'
            }}>
              <input
                type="checkbox"
                style={{
                  width: '18px',
                  height: '18px',
                  accentColor: '#FF5533',
                  cursor: 'pointer'
                }}
              />
              <div style={{ display: 'flex', gap: '2px' }}>
                {[...Array(stars)].map((_, i) => (
                  <Star key={i} style={{ width: 14, height: 14, color: '#FF5533', fill: '#FF5533' }} />
                ))}
                {[...Array(5 - stars)].map((_, i) => (
                  <Star key={i} style={{ width: 14, height: 14, color: '#E5E7EB', fill: '#E5E7EB' }} />
                ))}
              </div>
              <span style={{
                fontSize: '14px',
                color: '#6B7280',
                fontFamily: 'Manrope, sans-serif'
              }}>
                {stars} stars
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Reviews List */}
      <div>
        {/* Search Bar */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '16px',
          padding: '16px 24px',
          marginBottom: '24px',
          border: '1px solid #E5E7EB',
          display: 'flex',
          gap: '16px'
        }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <Search style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: 20,
              height: 20,
              color: '#9CA3AF'
            }} />
            <input
              type="text"
              placeholder="Search reviews"
              style={{
                width: '100%',
                padding: '12px 12px 12px 44px',
                border: '1px solid #E5E7EB',
                borderRadius: '12px',
                fontSize: '14px',
                outline: 'none',
                fontFamily: 'Manrope, sans-serif'
              }}
            />
          </div>
          <button
            style={{
              padding: '12px 32px',
              background: '#FF5533',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'Manrope, sans-serif',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#E64522';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#FF5533';
            }}
          >
            Search
          </button>
        </div>

        {/* Review Items */}
        {[
          { name: 'Demo', date: 'November 30, 2023', rating: 4.7, text: 'Etiam sit amet ex pharetra, venenatis ante vehicula, gravida sapien. Fusce eleifend vulputate nibh, non cursus augue placerat pellentesque. Sed venenatis risus nec felis mollis.' },
          { name: 'Demo', date: 'November 30, 2023', rating: 4.7, text: 'Etiam sit amet ex pharetra, venenatis ante vehicula, gravida sapien. Fusce eleifend vulputate nibh, non cursus augue placerat pellentesque. Sed venenatis risus nec felis mollis.' },
          { name: 'Demo', date: 'November 30, 2023', rating: 4.7, text: 'Etiam sit amet ex pharetra, venenatis ante vehicula, gravida sapien. Fusce eleifend vulputate nibh, non cursus augue placerat pellentesque. Sed venenatis risus nec felis mollis.' },
          { name: 'Demo', date: 'December 16, 2023', rating: 5.0, text: 'qweqeqeq' },
          { name: 'Demo', date: 'December 16, 2023', rating: 5.0, text: 'qweqeqeq' }
        ].map((review, index) => (
          <div key={index} style={{
            background: '#FFFFFF',
            borderRadius: '16px',
            padding: '24px',
            marginBottom: '16px',
            border: '1px solid #E5E7EB'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <img
                  src={`https://i.pravatar.cc/48?img=${index + 1}`}
                  alt={review.name}
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }}
                />
                <div>
                  <div style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    color: '#1E1E1E',
                    fontFamily: 'Manrope, sans-serif',
                    marginBottom: '4px'
                  }}>
                    {review.name}
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: '#6B7280',
                    fontFamily: 'Manrope, sans-serif'
                  }}>
                    {review.date}
                  </div>
                </div>
              </div>
              <button style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '4px'
              }}>
                <div style={{
                  display: 'flex',
                  gap: '2px'
                }}>
                  <div style={{ width: '4px', height: '4px', background: '#9CA3AF', borderRadius: '50%' }}></div>
                  <div style={{ width: '4px', height: '4px', background: '#9CA3AF', borderRadius: '50%' }}></div>
                  <div style={{ width: '4px', height: '4px', background: '#9CA3AF', borderRadius: '50%' }}></div>
                </div>
              </button>
            </div>

            <div style={{ display: 'flex', gap: '4px', marginBottom: '12px' }}>
              {[...Array(Math.floor(review.rating))].map((_, i) => (
                <Star key={i} style={{ width: 16, height: 16, color: '#FF5533', fill: '#FF5533' }} />
              ))}
              <span style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#1E1E1E',
                fontFamily: 'Manrope, sans-serif',
                marginLeft: '8px'
              }}>
                {review.rating}
              </span>
            </div>

            <p style={{
              fontSize: '14px',
              lineHeight: '1.6',
              color: '#4B5563',
              fontFamily: 'Manrope, sans-serif',
              margin: 0
            }}>
              {review.text}
            </p>
          </div>
        ))}

        {/* See More Review Button */}
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <button
            style={{
              padding: '14px 40px',
              background: '#1E1E1E',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'Manrope, sans-serif',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#374151';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#1E1E1E';
            }}
          >
            <span style={{ fontSize: '20px' }}>⋮⋮⋮</span>
            See More Review
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
{/* =========== END CUSTOMER REVIEW SECTION =========== */}
{/* =========== NEWSLETTER SUBSCRIPTION SECTION =========== */}
<div className="bg-white py-10 sm:py-15 lg:py-20 mt-10 sm:mt-15 lg:mt-20">
  <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg lg:shadow-xl">
      {/* Left Side - Content */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 lg:p-12 xl:p-15 flex flex-col justify-center">
        {/* Badge */}
        <button className="bg-orange-500 hover:bg-orange-600 text-white border-none rounded-full px-4 py-2 sm:px-6 sm:py-3 text-sm font-semibold font-manrope cursor-pointer transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-xl w-fit mb-4 sm:mb-6">
          Join our newsletter
        </button>

        {/* Heading */}
        <h2 className="font-manrope font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-gray-900 mb-4 sm:mb-5 leading-tight">
          Discover the wonder of travel every week
        </h2>

        {/* Description */}
        <p className="font-manrope text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
          Get personalized travel inspiration, the latest travel hacks, and exclusive deals straight to your inbox.
        </p>

        {/* Email Input & Subscribe Button */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4">
          <input
            type="email"
            placeholder="Your Email"
            className="flex-1 px-4 py-3 sm:px-6 sm:py-4 border-none rounded-xl text-sm sm:text-base outline-none font-manrope bg-white/80 text-gray-400 placeholder-gray-400"
          />
          <button className="px-6 py-3 sm:px-8 sm:py-4 bg-orange-500 hover:bg-orange-600 text-white border-none rounded-xl text-sm sm:text-base font-bold cursor-pointer font-manrope transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-xl whitespace-nowrap">
            Subscribe
          </button>
        </div>

        {/* No ads text */}
        <p className="font-manrope text-xs sm:text-sm text-gray-500 m-0">
          No ads. No trails. No commitments
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="relative h-64 sm:h-80 lg:h-96 xl:h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop"
          alt="Travel destination"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</div>
{/* =========== END NEWSLETTER SUBSCRIPTION SECTION =========== */}
  {/* Privacy Disclaimer Text */}
  <div className="max-w-7xl mx-auto flex items-center justify-center px-3 sm:px-4 md:px-5 lg:px-6 py-4">
    <p className="font-manrope text-xs sm:text-sm text-gray-500 text-center leading-relaxed m-0 max-w-4xl">
      By signing up, you agree to receive promotional emails on activities and insider tips. You can unsubscribe or withdraw your consent at any time with future effect. For more information, read our{' '}
      <a
        href="/privacy"
        className="text-orange-500 underline font-semibold hover:text-orange-600 transition-colors"
      >
        Privacy statement
      </a>.
    </p>
  </div>
     {/* =========== TOP ATTRACTIONS & EXPERIENCES SECTION =========== */}
<div className="bg-gray-50 py-10 sm:py-15 lg:py-20 mt-10 sm:mt-15 lg:mt-20">
 <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6">

   {/* Top Attractions */}
   <div className="mb-8 sm:mb-12">
     <h3 className="font-manrope font-bold text-lg sm:text-xl text-gray-900 mb-4 sm:mb-5">
       Top Attractions in Southern Region, Iceland
     </h3>

     <div className="flex flex-wrap gap-2 sm:gap-3">
        {[
          { num: 1, name: 'Golden Circle' },
          { num: 2, name: 'Katla Ice Cave' },
          { num: 3, name: 'Langjökulsleider' },
          { num: 4, name: 'Reykjanes Peninsula' },
          { num: 5, name: 'Secret Lagoon' },
          { num: 6, name: 'Katla' },
          { num: 7, name: 'Sólheimajökull' },
          { num: 8, name: 'Reynisfjara Beach' },
          { num: 9, name: 'Iceland\'s Lava Show' },
          { num: 10, name: 'Eyjafjallajökull Volcano' },
          { num: 11, name: 'Jökulsárlón Glacier' }
        ].map((item) => (
          <div
            key={item.num}
            className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-200 cursor-pointer transition-all duration-300 hover:border-orange-500 hover:shadow-md"
          >
            <div className="bg-orange-500 text-white w-5 h-5 sm:w-6 sm:h-6 rounded-md flex items-center justify-center text-xs font-bold font-manrope flex-shrink-0">
              {item.num}
            </div>
            <span className="font-manrope text-xs sm:text-sm text-gray-900 font-medium">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* Experiences */}
    <div className="mb-8 sm:mb-12">
      <h3 className="font-manrope font-bold text-lg sm:text-xl text-gray-900 mb-4 sm:mb-5">
        Experiences in Southern Region, Iceland
      </h3>

      <div className="flex flex-wrap gap-2 sm:gap-3">
        {[
          { num: 1, name: 'Southern Region Iceland Horse riding' },
          { num: 2, name: 'Southern Region Iceland Horse riding' },
          { num: 3, name: 'Southern Region Iceland Horse riding' },
          { num: 4, name: 'Southern Region Iceland Horse riding' },
          { num: 5, name: 'Southern Region Iceland Horse riding' },
          { num: 6, name: 'Southern Region Iceland Horse riding' }
        ].map((item) => (
          <div
            key={item.num}
            className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-200 cursor-pointer transition-all duration-300 hover:border-orange-500 hover:shadow-md"
          >
            <div className="bg-orange-500 text-white w-5 h-5 sm:w-6 sm:h-6 rounded-md flex items-center justify-center text-xs font-bold font-manrope flex-shrink-0">
              {item.num}
            </div>
            <span className="font-manrope text-xs sm:text-sm text-gray-900 font-medium">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* Four Column Links */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 pt-8 sm:pt-10 border-t border-gray-200">
      {/* Column 1: Top Destinations */}
      <div>
        <h4 className="font-manrope font-bold text-sm sm:text-base text-gray-900 mb-3 sm:mb-4">
          Top Destinations
        </h4>
        <ul className="list-none p-0 m-0">
          {['London', 'Barcelona', 'Prague', 'Paris', 'Rome', 'Bucharest', 'Dubai'].map((city, index) => (
            <li key={index} className="mb-2 sm:mb-3">
              <a href="#" className="font-manrope text-xs sm:text-sm text-gray-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                {city}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 2: Top Attraction categories */}
      <div>
        <h4 className="font-manrope font-bold text-sm sm:text-base text-gray-900 mb-3 sm:mb-4">
          Top Attraction categories
        </h4>
        <ul className="list-none p-0 m-0">
          {[
            'Budapest Cruises & boat tours',
            'Amsterdam Cruises & boat tours',
            'Paris Cruises & boat tours',
            'Paris Family-friendly activities',
            'New Tickets to Opera Garnier tours',
            'London Harry Potter tours',
            'Venice Gondola tours'
          ].map((item, index) => (
            <li key={index} className="mb-2 sm:mb-3">
              <a href="#" className="font-manrope text-xs sm:text-sm text-gray-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 3: Popular Attractions */}
      <div>
        <h4 className="font-manrope font-bold text-sm sm:text-base text-gray-900 mb-3 sm:mb-4">
          Popular Attractions
        </h4>
        <ul className="list-none p-0 m-0">
          {[
            'Catacombs Bay',
            'Memorial and Museum Auschwitz-Birkenau',
            'Seine River',
            'Colosseum',
            'Warner Bros. Studio London',
            'London Harry Potter tours',
            'Louvre Museum'
          ].map((item, index) => (
            <li key={index} className="mb-2 sm:mb-3">
              <a href="#" className="font-manrope text-xs sm:text-sm text-gray-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 4: Great Price */}
      <div>
        <h4 className="font-manrope font-bold text-sm sm:text-base text-gray-900 mb-3 sm:mb-4">
          Great Price
        </h4>
        <ul className="list-none p-0 m-0">
          {['Amsterdam', 'Barcelona', 'Prague', 'Paris', 'London', 'Budapest', 'Dubai'].map((city, index) => (
            <li key={index} className="mb-2 sm:mb-3">
              <a href="#" className="font-manrope text-xs sm:text-sm text-gray-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                {city}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</div>
{/* =========== END TOP ATTRACTIONS & EXPERIENCES SECTION =========== */}
    </div>
  );
};

export default TourDetails;