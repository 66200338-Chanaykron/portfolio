import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [showScreen, setShowScreen] = useState(true);

  // Smooth Sine Wave:
  // Starts at mid-height (300).
  // Amplitude +/- 60px.
  // One full cycle 0-1440.
  const waveSvg = encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 600" preserveAspectRatio="none">
        <path fill="#ffffff" d="M0,300 Q360,200 720,300 T1440,300 L1440,600 L0,600 Z" />
    </svg>
  `);
  
  const waveUrl = `url("data:image/svg+xml,${waveSvg}")`;

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShowScreen(false);
            setTimeout(onComplete, 800);
          }, 500);
          return 100;
        }
        return prev + 0.5;
      });
    }, 15);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {showScreen && (
        <motion.div
           className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#111] text-white overflow-hidden"
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className="relative">
            {/* Base Text (Dark Grey - Visible) */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-[#333] tracking-tighter uppercase select-none relative z-0">
              Chanatkon
            </h1>

            {/* Liquid Fill Overlay */}
            <motion.h1 
              className="absolute top-0 left-0 text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase select-none w-full z-10"
              style={{
                color: 'transparent',
                backgroundImage: waveUrl,
                backgroundSize: '200% 200%',
                backgroundRepeat: 'repeat-x',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                backgroundPosition: `0% ${count}%`,
              }}
              animate={{
                backgroundPositionX: ["0%", "200%"],
              }}
              transition={{
                backgroundPositionX: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              Chanatkon
            </motion.h1>
            
            {/* Loading Percentage */}
            <div className="absolute -bottom-8 right-0 text-sm font-mono text-gray-400">
              loading... {Math.floor(count)}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
