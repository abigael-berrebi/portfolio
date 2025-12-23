import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HouseConstruction() {
  const containerRef = useRef(null);
  

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const gridOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const groundWidth = useTransform(scrollYProgress, [0, 0.2], ["0%", "100%"]);
  const wallsPath = useTransform(scrollYProgress, [0.15, 0.4], [0, 1]);
  const roofPath = useTransform(scrollYProgress, [0.35, 0.6], [0, 1]);
  const fillOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const detailsScale = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-[#f4f4f5]">
      
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">

        <motion.div style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }} className="absolute top-20 text-center z-10">
            <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-gray-800">CONCEPT &<br/>CONSTRUCTION</h2>
            <p className="mt-2 text-sm font-mono text-gray-500">Scrollez pour construire</p>
        </motion.div>

        <div className="relative w-[500px] h-[500px] md:w-[800px] md:h-[600px]">
            <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
                
                <motion.pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse" style={{ opacity: gridOpacity }}>
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                </motion.pattern>
                <motion.rect width="100%" height="100%" fill="url(#grid)" style={{ opacity: gridOpacity }} />

                <motion.line x1="0" y1="350" x2="400" y2="350" stroke="#18181b" strokeWidth="4" style={{ pathLength: groundWidth }} />

                <g transform="translate(100, 150)">
                    
                    <motion.path 
                        d="M0 100 L0 200 L200 200 L200 100 L100 0 Z" 
                        fill="#d4d4d8"
                        style={{ opacity: fillOpacity }}
                    />

                    <motion.path 
                        d="M0 200 L0 100 M200 200 L200 100 M0 200 L200 200"
                        fill="none" stroke="#18181b" strokeWidth="3" strokeLinecap="square"
                        style={{ pathLength: wallsPath }}
                    />

                    <motion.path 
                        d="M0 100 L100 0 L200 100" 
                        fill="none" stroke="#18181b" strokeWidth="3" strokeLinecap="square"
                        style={{ pathLength: roofPath }}
                    />

                    <motion.circle 
                        cx="100" cy="60" r="15" 
                        fill="#fff" stroke="#18181b" strokeWidth="2"
                        style={{ scale: detailsScale }}
                    />

                    <motion.rect 
                        x="80" y="140" width="40" height="60" 
                        fill="#fff" stroke="#18181b" strokeWidth="2"
                        style={{ scaleY: detailsScale, originY: 1 }}
                    />
                    
                    <motion.rect 
                        x="20" y="120" width="30" height="40" 
                        fill="none" stroke="#18181b" strokeWidth="1"
                        style={{ opacity: detailsScale }}
                    />
                     <motion.rect 
                        x="150" y="120" width="30" height="40" 
                        fill="none" stroke="#18181b" strokeWidth="1"
                        style={{ opacity: detailsScale }}
                    />
                </g>
            </svg>
        </div>

        <div className="absolute right-6 md:right-12 top-1/4 bottom-1/4 w-[2px] bg-gray-200">
            <motion.div 
                className="w-full bg-black"
                style={{ height: progressHeight, transformOrigin: "top" }}
            />
            <div className="absolute top-0 -left-4 text-[10px] font-mono text-gray-400">00</div>
            <div className="absolute top-1/2 -left-4 text-[10px] font-mono text-gray-400">02</div>
            <div className="absolute bottom-0 -left-4 text-[10px] font-mono text-gray-400">04</div>
        </div>

      </div>
    </div>
  );
}