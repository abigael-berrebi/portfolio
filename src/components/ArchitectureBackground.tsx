import React from 'react';
import { motion } from 'framer-motion';

export default function ArchitectureBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#f4f4f5]">
      
      <div 
        className="absolute inset-0 opacity-[0.4]"
        style={{
            backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)',
            backgroundSize: '40px 40px'
        }}
      />

      <motion.div 
        animate={{ x: ["0vw", "100vw"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 bottom-0 w-[1px] bg-gray-300 opacity-50"
      />
      
      <motion.div 
        animate={{ y: ["0vh", "100vh"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: 5 }}
        className="absolute left-0 right-0 h-[1px] bg-gray-300 opacity-50"
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] border border-gray-300 rounded-full opacity-30 border-dashed"
      />

      <motion.div
        animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
            opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] left-[10%] w-64 h-96 border border-gray-400 opacity-20"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 5, repeat: Infinity, repeatDelay: 10 }}
        className="absolute top-1/4 left-1/3 font-mono text-[10px] text-gray-400 tracking-widest"
      >
        ELEVATION NORD — 1:100
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 6, repeat: Infinity, repeatDelay: 15 }}
        className="absolute bottom-1/3 right-1/4 font-mono text-[10px] text-gray-400 tracking-widest"
      >
        COUPE AA — REF 2025
      </motion.div>

    </div>
  );
}