"use client";
import React, { useRef } from "react";

export default function LandingPage() {
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleCTA = () => {
    if (overlayRef.current) {
      overlayRef.current.style.opacity = "1";
      setTimeout(() => {
        window.location.href = "/store";
      }, 800);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        position: "relative",
        overflow: "hidden",
        background: "#111",
      }}
    >
      {/* Fade overlay */}
      <div
        ref={overlayRef}
        style={{
          position: "fixed",
          inset: 0,
          background: "#000",
          opacity: 0,
          transition: "opacity 0.8s",
          zIndex: 50,
          pointerEvents: "none",
        }}
      />

      {/* Logo - top center, above videos */}
      <div className="logo-container">
        <img
          src="/pictures/logo.jpg"
          alt="Luyoo Logo"
          className="logo"
        />
      </div>

      {/* Split background */}
      <div className="split-bg">
        {/* Left column: Portrait videos */}
        <div className="video-col">
          <video
            src="/videos/vid1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="video"
          />
          <video
            src="/videos/vid2.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="video"
          />
        </div>

        {/* Right column: Landscape videos */}
        <div className="video-col">
          <video
            src="/videos/vid3.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="video"
          />
          <video
            src="/videos/vid4.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="video"
          />
        </div>
      </div>

      {/* CTA Button */}
      <div className="cta-container">
        <button
          onClick={handleCTA}
          className="cta-btn"
        >
          WELCOME TO OUR WORLD &rarr;
        </button>
      </div>

      {/* Styles */}
      <style>{`
        .logo-container {
          position: absolute;
          top: 32px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 100;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .logo {
          width: 180px;
          height: auto;
          filter: drop-shadow(0 0 32px #ff00cc) drop-shadow(0 0 8px #fff) drop-shadow(0 0 64px #ff00cc);
          background: transparent;
          transition: width 0.3s;
        }
        .split-bg {
          display: flex;
          height: 100vh;
          gap: 24px;
          padding-top: 120px;
        }
        .video-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding-left: 32px;
          padding-right: 32px;
        }
        .video {
          width: 100%;
          height: 50%;
          object-fit: cover;
          border-radius: 24px;
          box-shadow: 0 0 32px #222;
          background: #000;
        }
        .cta-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 200;
        }
        .cta-btn {
          padding: 24px 48px;
          font-size: 2rem;
          font-weight: bold;
          color: #fff;
          background: linear-gradient(90deg, #ff00cc 0%, #333 100%);
          border: none;
          border-radius: 32px;
          box-shadow: 0 0 32px #ff00cc, 0 0 8px #fff, 0 0 2px #ff00cc inset;
          text-shadow: 0 0 8px #ff00cc, 0 0 2px #fff;
          cursor: pointer;
          transition: box-shadow 0.2s, filter 0.2s;
          animation: pulse 1.2s infinite;
        }
        .cta-btn:hover {
          filter: brightness(1.2) drop-shadow(0 0 16px #ff00cc);
          animation: flicker 0.3s infinite;
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 32px #ff00cc, 0 0 8px #fff; }
          50% { box-shadow: 0 0 64px #ff00cc, 0 0 16px #fff; }
          100% { box-shadow: 0 0 32px #ff00cc, 0 0 8px #fff; }
        }
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @media (max-width: 900px) {
          .split-bg {
            flex-direction: column;
            gap: 12px;
            padding: 80px 8px 8px 8px;
            height: auto;
          }
          .video-col {
            padding: 0;
            gap: 12px;
          }
          .video {
            height: 180px;
            border-radius: 16px;
          }
          .cta-btn {
            font-size: 1.2rem;
            padding: 16px 24px;
            border-radius: 20px;
          }
          .logo {
            width: 120px;
            top: 16px;
          }
        }
      `}</style>
    </div>
  ); // <-- This closes the return statement
} // <-- This closes the function