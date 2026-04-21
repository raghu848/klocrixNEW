'use client'

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../lib/utils';

// Helper for randomized blue/red colors
const randomColors = (count) => {
  return new Array(count)
    .fill(0)
    .map((_, i) => {
      // Make the first and last colors red (outer lines), and the rest blue (inner majority)
      if (i === 0 || i === count - 1) {
        // Red hues
        const r = Math.floor(Math.random() * 100 + 155); // 155-255
        return "#" + ((1 << 24) + (r << 16) + (0 << 8) + 0).toString(16).slice(1);
      } else {
        // Blue hues
        const b = Math.floor(Math.random() * 100 + 155); // 155-255
        const g = Math.floor(Math.random() * 50); // slight teal/cyan variations
        return "#" + ((1 << 24) + (0 << 16) + (g << 8) + b).toString(16).slice(1);
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

    const initTubes = async () => {
      if (!canvasRef.current) return;

      try {
        // Bypass Webpack's static analysis to use native browser dynamic import
        const importUrl = 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js';
        const module = await new Function('url', 'return import(url)')(importUrl);
        const TubesCursor = module.default;

        if (!mounted) return;

        const app = TubesCursor(canvasRef.current, {
          sleepRadiusX: 200,      // Range of automatic X movement when idle
          sleepRadiusY: 200,      // Range of automatic Y movement when idle
          sleepTimeCoefX: 0.001,  // Speed of automatic X movement
          sleepTimeCoefY: 0.0015, // Speed of automatic Y movement
          tubes: {
            // Majority blue, with red at the edges
            colors: [
              "#dc2626", // Red
              "#2563eb", "#1d4ed8", "#1e40af", "#3b82f6", 
              "#2563eb", "#1d4ed8", "#1e40af", "#3b82f6",
              "#b91c1c"  // Red
            ], 
            lights: {
              intensity: 70,
              colors: [
                "#dc2626", "#1d4ed8", "#2563eb", "#1e40af", 
                "#3b82f6", "#1d4ed8", "#1e40af", "#b91c1c"
              ] 
            }
          }
        });

        tubesRef.current = app;
        setIsLoaded(true);

      } catch (error) {
        console.error("Failed to load TubesCursor:", error);
      }
    };

    initTubes();

    return () => {
      mounted = false;
      if (tubesRef.current && typeof tubesRef.current.destroy === 'function') {
        tubesRef.current.destroy();
      }
    };
  }, []);

  const handleClick = () => {
    if (!enableClickInteraction || !tubesRef.current) return;
    
    const colors = randomColors(10);
    const lightsColors = randomColors(8);
    
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
