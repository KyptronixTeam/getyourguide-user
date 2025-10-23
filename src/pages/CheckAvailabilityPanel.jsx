import React, { useState } from "react";

export default function CheckAvailabilityPanel({ visible, onClose }) {
  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: '56px',
        left: '0',
        width: '100vw',
        minHeight: '100vh',
        background: 'rgba(0,0,0,0.18)',
        zIndex: 50,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        overflowY: 'auto',
        paddingTop: '30px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
          width: "520px",
          margin: "40px auto",
          overflow: "hidden"
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* First Card */}
        <div style={{ borderRadius: "12px", border: "1px solid #EEE", margin: "16px 20px", background: "#FFF", overflow: "hidden" }}>
          <div style={{ background: "#FF5533", color: "#fff", borderRadius: "7px", fontWeight: 600, fontSize: "13px", padding: "3.5px 16px", textAlign: "left", margin: "12px 0 0 15px", display: "inline-block" }}>
            Only 6 Spots Left
          </div>
          <div style={{ padding: "20px" }}>
            <div style={{ fontWeight: 600, fontSize: "18px", marginBottom: "10px", color: "#232323" }}>
              Tour with Departure from Vik and Katla Ice Cave Visit
            </div>
            {/* Time, Guide, Location Row */}
            <div style={{ display: "flex", gap: "18px", marginBottom: "10px", color: "#FF5533" }}>
              <span style={{ fontSize: "15px", display: "flex", alignItems: "center", gap: "5px" }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#FF5533" strokeWidth="2"/><path d="M12 7v5l3 3" stroke="#FF5533" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                3 hours
              </span>
              <span style={{ fontSize: "15px", display: "flex", alignItems: "center", gap: "5px" }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="#FF5533" strokeWidth="2"/><path d="M6 19c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#FF5533" strokeWidth="2" strokeLinecap="round"/></svg>
                Guide: <span style={{ color: "#232323" }}>English</span>
              </span>
            </div>
            <div style={{ color: "#FF5533", fontSize: "15px", marginBottom: "16px", display: "flex", alignItems: "center", gap: "5px" }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M21 10.5a8.38 8.38 0 0 0-1.75-2.48A8.5 8.5 0 1 0 12 21c.3 0 .6-.02.89-.05A8.5 8.5 0 0 0 21 10.5z" stroke="#FF5533" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="3" stroke="#FF5533" strokeWidth="2"/></svg>
              Meet at: Vik, Vik, Iceland
            </div>
            <div style={{ color: "#232323", fontWeight: 500, fontSize: "14px", marginBottom: "12px" }}>
              Select a starting time<br />
              <span style={{ color: "#9ca3af", fontWeight: 400, fontSize: "13.5px" }}>Thursday, September 18, 2025</span>
            </div>
            {/* Time Slots */}
            <div style={{ display: "flex", gap: "12px", margin: "5px 0" }}>
              <button style={{ background: "#FF5533", color: "#fff", borderRadius: "20px", border: "none", fontSize: "15px", fontWeight: 700, padding: "6px 24px", cursor: "pointer" }}>
                10:00 AM
              </button>
              <button style={{ background: "#fff", color: "#FF5533", borderRadius: "20px", border: "1px solid #FF5533", fontSize: "15px", fontWeight: 700, padding: "6px 24px", cursor: "pointer" }}>
                13:45 PM
              </button>
            </div>
            <div style={{ color: "#FF5533", fontSize: "12px", fontWeight: 500, margin: "7px 0 5px 0" }}>
              Only 2 hours left to book
            </div>
            <div style={{ color: "#9ca3af", fontSize: "12px", fontWeight: 500, marginBottom: "4px" }}>
              Cancel before 10:00 AM on 17 September for all full refund
            </div>
          </div>
          {/* Price and Button Row */}
          <div style={{ background: "#FF5533", color: "#fff", padding: "16px 22px", borderRadius: "0 0 12px 12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ fontSize: "22px", fontWeight: 700 }}>₹21,871 Only</div>
            <button style={{
              background: "#fff",
              color: "#FF5533",
              fontWeight: 600,
              fontSize: "15px",
              padding: "9px 40px",
              borderRadius: "9999px",
              border: "none",
              cursor: "pointer"
            }}>Continue</button>
          </div>
          <div style={{ margin: "8px 22px", color: "#FF5533", fontSize: "13px", fontWeight: 500 }}>
            1 Adult<br />
            <span style={{ color: "#9ca3af", fontWeight: 400 }}>All taxes and fees included</span>
          </div>
        </div>
        {/* Second Card */}
        <div style={{ borderRadius: "12px", border: "1px solid #EEE", margin: "12px 20px", background: "#FFF", overflow: "hidden" }}>
          <div style={{ background: "#FF5533", color: "#fff", borderRadius: "7px", fontWeight: 600, fontSize: "13px", padding: "3.5px 16px", textAlign: "left", margin: "12px 0 0 15px", display: "inline-block" }}>
            Likely to sell out
          </div>
          <div style={{ padding: "20px" }}>
            <div style={{ fontWeight: 600, fontSize: "18px", marginBottom: "10px", color: "#232323" }}>
              Tour with Departure from Vik and Katla Ice Cave Visit
            </div>
            {/* Time, Guide, Location Row */}
            <div style={{ display: "flex", gap: "18px", marginBottom: "10px", color: "#FF5533" }}>
              <span style={{ fontSize: "15px", display: "flex", alignItems: "center", gap: "5px" }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#FF5533" strokeWidth="2"/><path d="M12 7v5l3 3" stroke="#FF5533" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                3 hours
              </span>
              <span style={{ fontSize: "15px", display: "flex", alignItems: "center", gap: "5px" }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="#FF5533" strokeWidth="2"/><path d="M6 19c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#FF5533" strokeWidth="2" strokeLinecap="round"/></svg>
                Guide: <span style={{ color: "#232323" }}>English</span>
              </span>
            </div>
            <div style={{ color: "#FF5533", fontSize: "15px", marginBottom: "16px", display: "flex", alignItems: "center", gap: "5px" }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M21 10.5a8.38 8.38 0 0 0-1.75-2.48A8.5 8.5 0 1 0 12 21c.3 0 .6-.02.89-.05A8.5 8.5 0 0 0 21 10.5z" stroke="#FF5533" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="3" stroke="#FF5533" strokeWidth="2"/></svg>
              Meet at: Vik, Vik, Iceland
            </div>
          </div>
          <div style={{ background: "#FF5533", color: "#fff", fontWeight: 600, padding: "9px 19px", borderRadius: "0 0 12px 12px", fontSize: "15px" }}>
            Next available date: Friday, September 19, 2025
          </div>
        </div>
      </div>
    </div>
  );
}
