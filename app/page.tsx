"use client";
import React, { useRef } from "react";

export default function LandingPage() {
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleCTA = () => {
    if (overlayRef.current) {
      overlayRef.current.style.opacity = "1";
      setTimeout(() => {
        // Replace with navigation to your main store page
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

      {/* Logo */}
      <div
        style={{
          position: "absolute",
          top: 40,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="/pictures/logo.jpg"
          alt="Luyoo Logo"
          style={{
            width: 180,
            filter: "drop-shadow(0 0 32px #ff00cc) drop-shadow(0 0 8px #fff)",
          }}
        />
      </div>

      {/* Split background */}
      <div
        style={{
          display: "flex",
          height: "100vh",
        }}
      >
        {/* Left column: Portrait videos */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            padding: "32px 8px 32px 32px",
          }}
        >
          <video
            src="https://imgur.com/HZYtZAa.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "50%",
              objectFit: "cover",
              borderRadius: "16px",
              boxShadow: "0 0 32px #222",
            }}
          />
          <video
            src="https://imgur.com/YEBznO4.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "50%",
              objectFit: "cover",
              borderRadius: "16px",
              boxShadow: "0 0 32px #222",
            }}
          />
        </div>

        {/* Right column: Landscape videos */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            padding: "32px 32px 32px 8px",
          }}
        >
          <video
            src="https://imgur.com/AFO5yGL.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "50%",
              objectFit: "cover",
              borderRadius: "16px",
              boxShadow: "0 0 32px #222",
            }}
          />
          <video
            src="https://imgur.com/ZcdB8hl.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "50%",
              objectFit: "cover",
              borderRadius: "16px",
              boxShadow: "0 0 32px #222",
            }}
          />
        </div>
      </div>

      {/* CTA Button */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 20,
        }}
      >
        <button
          onClick={handleCTA}
          style={{
            padding: "24px 48px",
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#fff",
            background: "linear-gradient(90deg, #ff00cc 0%, #333 100%)",
            border: "none",
            borderRadius: "32px",
            boxShadow:
              "0 0 32px #ff00cc, 0 0 8px #fff, 0 0 2px #ff00cc inset",
            textShadow: "0 0 8px #ff00cc, 0 0 2px #fff",
            cursor: "pointer",
            transition: "box-shadow 0.2s, filter 0.2s",
            animation: "pulse 1.2s infinite",
          }}
          onMouseEnter={e =>
            (e.currentTarget.style.filter = "brightness(1.2) drop-shadow(0 0 16px #ff00cc)")
          }
          onMouseLeave={e =>
            (e.currentTarget.style.filter = "none")
          }
        >
          WELCOME TO OUR WORLD &rarr;
        </button>
      </div>

      {/* Neon pulse animation */}
      <style>
        {`
          @keyframes pulse {
            0% { box-shadow: 0 0 32px #ff00cc, 0 0 8px #fff; }
            50% { box-shadow: 0 0 64px #ff00cc, 0 0 16px #fff; }
            100% { box-shadow: 0 0 32px #ff00cc, 0 0 8px #fff; }
          }
        `}
      </style>
    </div>
  );
}