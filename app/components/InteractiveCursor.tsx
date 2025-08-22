'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

export default function InteractiveCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Throttle mouse movement for better performance
    requestAnimationFrame(() => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    });
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => setIsHovering(false), []);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave]);

  if (!isHovering) return null;

  return (
    <div className="fixed top-0 left-0 pointer-events-none z-50">
      {/* Combined cursor with single transform for better performance */}
      <motion.div
        className="relative"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
          mass: 0.3,
        }}
        style={{
          transform: 'translate3d(0, 0, 0)', // Force hardware acceleration
        }}
      >
        {/* Outer ring */}
        <div className="absolute w-8 h-8 border border-purple-400 rounded-full opacity-50" />
        
        {/* Main cursor */}
        <div className="absolute top-2 left-2 w-4 h-4 bg-purple-500 rounded-full" />
        
        {/* Cursor trail */}
        <div className="absolute top-3 left-3 w-2 h-2 bg-blue-400 rounded-full" />
      </motion.div>
    </div>
  );
}
