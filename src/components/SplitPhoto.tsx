"use client";

import { useRef, useState, useCallback } from "react";

export default function SplitPhoto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [splitPosition, setSplitPosition] = useState(50);
  const [isInteracting, setIsInteracting] = useState(false);

  const updateSplit = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSplitPosition(percent);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      setIsInteracting(true);
      updateSplit(e.clientX);
    },
    [updateSplit]
  );

  const handleMouseLeave = useCallback(() => {
    setIsInteracting(false);
    setSplitPosition(50);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (e.touches.length > 0) {
        setIsInteracting(true);
        updateSplit(e.touches[0].clientX);
      }
    },
    [updateSplit]
  );

  const handleTouchEnd = useCallback(() => {
    setIsInteracting(false);
    setSplitPosition(50);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-[300px] h-[400px] sm:w-[350px] sm:h-[466px] md:w-[400px] md:h-[533px] overflow-hidden rounded-2xl cursor-col-resize select-none mx-auto"
      style={{ touchAction: "none", backgroundColor: "#f1f5f9" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      id="hero-photo"
    >
      {/* Apenas a foto original, sem recorte ou camada de arte */}
      <img
        src="/images/foto-perfil.jpg"
        alt="Matheus — Engenheiro de Software"
        className="absolute inset-0 w-full h-full object-cover object-top"
        draggable={false}
      />

      {/* Labels */}
      <div
        className="absolute bottom-6 left-6 z-20 pointer-events-none"
        style={{
          opacity: splitPosition > 25 ? 1 : 0,
          transition: "opacity 200ms ease",
        }}
      >
        <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-bold rounded-full tracking-wider uppercase">
          Engineer
        </span>
      </div>
      <div
        className="absolute bottom-6 right-6 z-20 pointer-events-none"
        style={{
          opacity: splitPosition < 75 ? 1 : 0,
          transition: "opacity 200ms ease",
        }}
      >
        <span className="px-3 py-1.5 bg-slate-800/90 backdrop-blur-sm text-white text-xs font-bold rounded-full tracking-wider uppercase">
          Coder
        </span>
      </div>
    </div>
  );
}
