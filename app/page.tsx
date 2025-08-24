"use client";
import React, { useRef } from "react";

export default function LandingPage() {
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleCTA = () => {
    if (overlayRef.current) {
      overlayRef.current.style.opacity = "1";
      // No redirect - show the sold out message instead
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
      {/* Fade overlay with sold out message */}
      <div
        ref={overlayRef}
        style={{
          position: "fixed",
          inset: 0,
          background: "linear-gradient(135deg, #000 0%, #111 50%, #000 100%)",
          opacity: 0,
          transition: "opacity 0.8s",
          zIndex: 50,
          pointerEvents: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div className="sold-out-content">
          <div className="glitch-text">SOLD OUT</div>
          <div className="mystery-text">
            BUT SOMETHING<br />
            <span className="emphasis">EXTRAORDINARY</span><br />
            IS BREWING...
          </div>
          <div className="hint-text">
            The next drop will redefine luxury
          </div>
          <div className="coming-soon">
            STAY CONNECTED
          </div>
        </div>
      </div>

      {/* Logo */}
      <div
        className="luyoo-logo"
        style={{
          position: "absolute",
          top: 40,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
      >
        <img
          src="/pictures/logo.png"
          alt="Luyoo Logo"
          style={{
            width: 180,
            filter: "drop-shadow(0 0 24px rgba(255,255,255,0.3))",
          }}
        />
      </div>

      {/* Split background (desktop default) */}
      <div className="video-grid">
        <div className="video-col">
          <video
            src="https://imgur.com/HZYtZAa.mp4"
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline={true}
            preload="auto"
            className="lux-video"
            onLoadedData={(e) => e.target.play()}
          />
          <video
            src="https://imgur.com/YEBznO4.mp4"
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline={true}
            preload="auto"
            className="lux-video"
            onLoadedData={(e) => e.target.play()}
          />
        </div>

        <div className="video-col">
          <video
            src="https://imgur.com/AFO5yGL.mp4"
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline={true}
            preload="auto"
            className="lux-video"
            onLoadedData={(e) => e.target.play()}
          />
          <video
            src="https://imgur.com/ZcdB8hl.mp4"
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline={true}
            preload="auto"
            className="lux-video"
            onLoadedData={(e) => e.target.play()}
          />
        </div>
      </div>

      {/* CTA Button */}
      <div className="cta-wrap">
        <button onClick={handleCTA} className="lux-cta">
          WELCOME TO OUR WORLD →
        </button>
      </div>

      {/* Styles */}
      <style>
        {`
          .video-grid {
            display: flex;
            height: 100vh;
          }
          .video-col {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding: 32px;
          }
          .lux-video {
            width: 100%;
            height: 50%;
            object-fit: cover;
            border-radius: 12px;
            box-shadow: 0 0 24px #222;
          }

          .cta-wrap {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 20;
          }
          .lux-cta {
            padding: 20px 40px;
            font-size: 1.6rem;
            font-weight: bold;
            letter-spacing: 0.5px;
            color: #e8e8e8;
            background: rgba(20, 20, 20, 0.85);
            border: 1px solid rgba(200, 200, 200, 0.4);
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.4s ease;
            backdrop-filter: blur(10px);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          }
          .lux-cta:hover {
            color: #fff;
            border-color: rgba(220, 220, 220, 0.7);
            background: rgba(30, 30, 30, 0.9);
            box-shadow: 0 0 25px rgba(200, 200, 200, 0.2);
            transform: translateY(-2px);
          }

          /* ---- SOLD OUT OVERLAY STYLES ---- */
          .sold-out-content {
            max-width: 600px;
            padding: 0 20px;
            animation: fadeInUp 1.2s ease-out 0.3s both;
          }

          .glitch-text {
            font-size: 4rem;
            font-weight: 900;
            letter-spacing: 4px;
            color: #ff6b6b;
            margin-bottom: 40px;
            text-shadow: 
              2px 0 #ff6b6b,
              -2px 0 #4ecdc4,
              0 0 20px rgba(255, 107, 107, 0.5);
            animation: glitch 2s infinite;
          }

          .mystery-text {
            font-size: 2.2rem;
            font-weight: 300;
            color: #e8e8e8;
            line-height: 1.4;
            margin-bottom: 30px;
            letter-spacing: 1px;
          }

          .emphasis {
            color: #ffd700;
            font-weight: 700;
            text-shadow: 0 0 15px rgba(255, 215, 0, 0.4);
          }

          .hint-text {
            font-size: 1.3rem;
            color: #999;
            font-style: italic;
            margin-bottom: 50px;
            opacity: 0;
            animation: fadeIn 1s ease-out 1.5s both;
          }

          .coming-soon {
            font-size: 1.1rem;
            color: #ccc;
            letter-spacing: 2px;
            font-weight: 500;
            opacity: 0;
            animation: pulse 2s infinite, fadeIn 1s ease-out 2s both;
          }

          @keyframes glitch {
            0%, 100% { transform: translateX(0); }
            10% { transform: translateX(-2px) skew(-1deg); }
            20% { transform: translateX(2px) skew(1deg); }
            30% { transform: translateX(-1px); }
            40% { transform: translateX(1px); }
            50% { transform: translateX(-2px); }
            60% { transform: translateX(2px); }
            70% { transform: translateX(-1px); }
            80% { transform: translateX(1px); }
            90% { transform: translateX(-2px); }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }

          /* ---- MOBILE: 2x2 Grid with optimized CTA ---- */
          @media (max-width: 768px) {
            .video-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-template-rows: 1fr 1fr;
              gap: 8px;
              padding: 100px 16px 60px;
              height: 100vh;
            }
            .video-col {
              padding: 0;
              display: contents; /* flatten children into grid */
            }
            .lux-video {
              width: 100%;
              height: 100%;
              aspect-ratio: 9 / 16;
            }
            .luyoo-logo img {
              width: 120px !important;
            }
            .cta-wrap {
              position: fixed;
              top: auto;
              bottom: 40px;
              left: 50%;
              transform: translateX(-50%);
              width: calc(100% - 32px);
              max-width: 300px;
            }
            .lux-cta {
              font-size: 1.1rem;
              padding: 16px 32px;
              width: 100%;
              border-width: 1px;
              background: rgba(15, 15, 15, 0.9);
              backdrop-filter: blur(15px);
              box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
            }
            .glitch-text {
              font-size: 2.5rem;
              letter-spacing: 2px;
              margin-bottom: 30px;
            }
            .mystery-text {
              font-size: 1.6rem;
              margin-bottom: 25px;
            }
            .hint-text {
              font-size: 1.1rem;
              margin-bottom: 40px;
            }
            .coming-soon {
              font-size: 1rem;
              letter-spacing: 1.5px;
            }
          }

          /* Extra small screens */
          @media (max-width: 480px) {
            .cta-wrap {
              bottom: 30px;
              width: calc(100% - 24px);
            }
            .lux-cta {
              font-size: 1rem;
              padding: 14px 28px;
              letter-spacing: 0.3px;
            }
          }
        `}
      </style>
    </div>
  );
}