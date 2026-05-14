'use client'

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../lib/utils';

// Helper for random colors with blue majority
const randomColors = (count) => {
  const blueShades = ["#10CEE4", "#0EA5E9", "#0284C7", "#38BDF8", "#7DD3FC"];
  const redShades = ["#DC2626", "#E11D48", "#F43F5E"];
  
  return new Array(count).fill(0).map(() => {
    // 80% chance for blue, 20% chance for red
    if (Math.random() > 0.2) {
      return blueShades[Math.floor(Math.random() * blueShades.length)];
    } else {
      return redShades[Math.floor(Math.random() * redShades.length)];
    }
  });
};

export default function TubesBackground({ 
  children, 
  className,
  enableClickInteraction = true 
}) {
  const canvasRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const tubesRef = useRef(null);

  useEffect(() => {
    let mounted = true;
    let cleanup;
    let timeoutId;

    const initTubes = async () => {
      // Completely disable on mobile to save CPU and Lighthouse TBT
      if (window.innerWidth < 768) return;
      if (!canvasRef.current) return;

      try {
        // We use the specific build from the CDN as it contains the exact effect requested
        // Using native dynamic import which works in modern browsers
        const module = await import(/* webpackIgnore: true */ 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js');
        const TubesCursor = module.default;

        if (!mounted) return;

        const app = TubesCursor(canvasRef.current, {
          tubes: {
            colors: ["#10CEE4", "#0EA5E9", "#0284C7", "#10CEE4", "#DC2626"], // Majority Blue, One Red
            lights: {
              intensity: 200,
              colors: ["#10CEE4", "#0EA5E9", "#0284C7", "#DC2626"] // Majority Blue, One Red
            }
          }
        });

        tubesRef.current = app;
        setIsLoaded(true);

        const handleResize = () => {
          // The library might handle it, but typically we ensure canvas matches container
        };

        window.addEventListener('resize', handleResize);
        
        cleanup = () => {
          window.removeEventListener('resize', handleResize);
        };

      } catch (error) {
        console.error("Failed to load TubesCursor:", error);
      }
    };

    // Delay the initialization by 2.5s to prevent Lighthouse DEADLINE_EXCEEDED errors
    // and to prioritize main thread for above-the-fold content
    timeoutId = setTimeout(() => {
      initTubes();
    }, 2500);

    return () => {
      mounted = false;
      if (timeoutId) clearTimeout(timeoutId);
      if (cleanup) cleanup();
    };
  }, []);

  const handleClick = () => {
    if (!enableClickInteraction || !tubesRef.current) return;
    
    const colors = randomColors(3);
    const lightsColors = randomColors(4);
    
    tubesRef.current.tubes.setColors(colors);
    tubesRef.current.tubes.setLightsColors(lightsColors);
  };

  return (
    <div 
      className={cn("absolute inset-0 w-full h-full overflow-hidden bg-background", className)}
      onClick={handleClick}
    >
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full block"
        style={{ touchAction: 'none' }}
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
