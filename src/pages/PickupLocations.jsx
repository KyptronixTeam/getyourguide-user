import React from "react";

export default function PickupLocations({ visible, onClose }) {
  if (!visible) return null;

  return (
    // This outer div is the "pop-up" overlay
    <div
      onClick={onClose} // Clicking the background will close the modal
      style={{
        position: "fixed", // Position it relative to the viewport
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
        zIndex: 1000, // Ensure it's on top of all other content
        display: "flex", // Use flexbox to center the content
        alignItems: "center",
        justifyContent: "center",
        padding: "20px", // Add some padding for small screens
      }}
    >
      {/* This is your component content */}
      <div
        onClick={(e) => e.stopPropagation()} // Prevents clicks inside from closing the modal
        style={{
          background: "#FFF6F5",
          borderRadius: "16px",
          border: "1px solid rgba(255,85,51,0.5)",
          width: "966px",
          maxWidth: "100%", // Ensure it doesn't overflow the screen width
          maxHeight: "90vh", // Prevent it from being too tall
          overflowY: "auto", // Allow scrolling if content is too tall
          position: "relative",
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            padding: "28px 0 0 0",
            fontWeight: 700,
            fontSize: "22px",
            color: "#232323",
            fontFamily: "Manrope, sans-serif",
            paddingLeft: "50px", // Add padding to avoid close button
            paddingRight: "50px", // Add padding to avoid close button
          }}
        >
          Pickup locations
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "18px",
              right: "26px",
              background: "none",
              border: "none",
              fontSize: "26px",
              color: "#4B4B4B",
              cursor: "pointer",
            }}
          >
            ×
          </button>
        </div>

        {/* Search Row */}
        <div
          style={{
            width: "90%",
            margin: "24px auto 12px auto",
            display: "flex",
            alignItems: "center",
            background: "#fff",
            borderRadius: "24px",
            padding: "7px 14px",
            border: "1px solid #eee",
          }}
        >
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" stroke="#D1D5DB" strokeWidth="2" />
            <path
              d="M21 21l-3.5-3.5"
              stroke="#D1D5DB"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <input
            type="text"
            placeholder="Enter your accommodation address"
            style={{
              border: "none",
              outline: "none",
              background: "none",
              padding: "10px 8px",
              fontSize: "15px",
              width: "100%",
              fontFamily: "Manrope, sans-serif",
            }}
          />
          <button
            style={{
              background: "#FF5533",
              color: "#fff",
              fontWeight: 600,
              borderRadius: "24px",
              border: "none",
              padding: "8px 32px",
              fontSize: "16px",
              marginLeft: "10px",
              cursor: "pointer",
            }}
          >
            Search
          </button>
        </div>

        {/* Info */}
        <div
          style={{
            margin: "0 36px 9px 36px",
            display: "flex",
            alignItems: "flex-start",
            gap: "7px",
            color: "#353535",
            fontSize: "15px",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" style={{ marginTop: 3 }}>
            <circle cx="10" cy="10" r="10" fill="#FF5533" opacity="0.12" />
            <path
              d="M6 10l3 3 5-5"
              stroke="#FF5533"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>
            You can get picked up from these 20 locations. You’ll choose your
            location during checkout.
          </span>
        </div>

        {/* --- MAP SECTION (FIXED) --- */}
        <div
          style={{
            margin: "0 28px 0 28px",
            background: "#e8eeee",
            height: "340px",
            borderRadius: "16px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#555",
            fontSize: "18px",
          }}
        >
          {/* I replaced the broken URL with a working placeholder.
              You will need to replace this 'src' with your real map URL or component. */}
          <img
            src="https://via.placeholder.com/800x400.png?text=Your+Map+Will+Load+Here"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="Pickup Locations Map"
          />
        </div>
        {/* --- END MAP SECTION --- */}

        {/* Pickup Note */}
        <div
          style={{
            color: "#4B4B4B",
            background: "none",
            fontSize: "13.8px",
            fontFamily: "Manrope, sans-serif",
            padding: "18px 36px 0 36px",
          }}
        >
          Pickup is available from the select hotels and bus spots. Due to
          traffic restrictions, pickup is not available from hotels in the city
          center nor from private AirBnBs. If your pickup location is not on the
          map please select the closest pickup point to your accommodation.
        </div>

        {/* Dropoff Point */}
        <div
          style={{
            borderTop: "1px solid #E4E4E4",
            margin: "24px 36px 0 36px",
            padding: "18px 0 18px 0", // Added padding-bottom for spacing
          }}
        >
          <span
            style={{
              fontWeight: 700,
              color: "#232323",
              fontSize: "15px",
            }}
          >
            Drop-off point
          </span>
          <span
            style={{
              marginLeft: 8,
              fontWeight: 400,
              color: "#232323",
              fontSize: "14.5px",
            }}
          >
            Same as pick point
          </span>
        </div>
      </div>
    </div>
  );
}