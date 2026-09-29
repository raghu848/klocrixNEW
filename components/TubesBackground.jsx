'use client'

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../lib/utils';

// Random colours from the logo palette: mostly reds/orange, occasionally a stripe colour
const randomColors = (count) => {
  const warmShades = ["#E63825", "#D9331F", "#B12D21", "#ED8529"];
  const stripeShades = ["#F1C524", "#33AB4C", "#0B7E9B", "#D02162"];

  return new Array(count).fill(0).map(() => {
    const palette = Math.random() > 0.2 ? warmShades : stripeShades;
    return palette[Math.floor(Math.random() * palette.length)];
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
            colors: ["#E63825", "#D9331F", "#ED8529", "#B12D21", "#D02162"], // Logo reds/orange + magenta
            lights: {
              intensity: 200,
              colors: ["#E63825", "#ED8529", "#B12D21", "#F1C524"] // Logo reds/orange + yellow
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

    // The effect follows the cursor, so only load the ~200KB WebGL bundle once the mouse moves.
    // This keeps it off the main thread during initial load.
    const onFirstMove = () => initTubes();
    window.addEventListener('pointermove', onFirstMove, { once: true, passive: true });

    return () => {
      mounted = false;
      window.removeEventListener('pointermove', onFirstMove);
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
