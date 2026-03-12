"use client";

import { useEffect, useState } from "react";

export default function AnimatedBackground({ isKawaii }: { isKawaii: boolean }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div 
      className={`fixed inset-0 overflow-hidden pointer-events-none -z-10 transition-colors duration-1000 ${
        isKawaii ? "bg-[#f1dfdd]" : "bg-[#0f0505]"
      }`}
    >
      <div 
        className={`absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full mix-blend-screen filter blur-[100px] animate-blob transition-all duration-1000 ${
          isKawaii ? "opacity-0 scale-50" : "bg-[#e00020] opacity-40 scale-100"
        }`}
      />
      <div 
        className={`absolute top-[40%] -right-[10%] w-[40vw] h-[40vw] rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000 transition-all duration-1000 ${
           isKawaii ? "opacity-0 scale-50" : "bg-[#7a5060] opacity-30 scale-100"
        }`}
      />
      <div 
        className={`absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full mix-blend-screen filter blur-[130px] animate-blob animation-delay-4000 transition-all duration-1000 ${
           isKawaii ? "opacity-0 scale-50" : "bg-[#ff003c] opacity-20 scale-100"
        }`}
      />

      <div 
        className={`absolute -top-[10%] -left-[20%] w-[60vw] h-[60vw] rounded-full mix-blend-multiply filter blur-[100px] animate-blob transition-all duration-1000 ${
          !isKawaii ? "opacity-0 scale-50" : "bg-[#ff9a9e] opacity-60 scale-100"
        }`}
      />
      <div 
        className={`absolute top-[20%] -right-[20%] w-[50vw] h-[50vw] rounded-full mix-blend-multiply filter blur-[120px] animate-blob animation-delay-2000 transition-all duration-1000 ${
          !isKawaii ? "opacity-0 scale-50" : "bg-[#fecfef] opacity-80 scale-100"
        }`}
      />
      <div 
        className={`absolute -bottom-[30%] left-[10%] w-[70vw] h-[70vw] rounded-full mix-blend-multiply filter blur-[130px] animate-blob animation-delay-4000 transition-all duration-1000 ${
          !isKawaii ? "opacity-0 scale-50" : "bg-[#eeaac3] opacity-50 scale-100"
        }`}
      />

      <div 
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none" 
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
        }}
      />
    </div>
  );
}
