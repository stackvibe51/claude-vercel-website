"use client";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>

      {/* Central glow source */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px]"
        style={{
          width: 320,
          height: 320,
          background: "radial-gradient(circle, rgba(139,92,246,0.35) 0%, rgba(59,130,246,0.15) 50%, transparent 75%)",
        }}
      />

      {/* Radar ripple rings — 6 rings staggered */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: 120,
            height: 120,
            border: "1px solid rgba(139,92,246,0.5)",
            boxShadow: "0 0 12px rgba(139,92,246,0.15)",
            animation: "radarRipple 5s cubic-bezier(0.2, 0.6, 0.4, 1) infinite",
            animationDelay: `${i * 0.85}s`,
          }}
        />
      ))}

      {/* Subtle floating orb — top */}
      <div
        className="absolute rounded-full blur-[140px] opacity-25"
        style={{
          width: 600,
          height: 600,
          background: "radial-gradient(circle, #8B5CF6 0%, transparent 65%)",
          top: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          animation: "floatOrb 10s ease-in-out infinite",
        }}
      />

      {/* Subtle floating orb — bottom left */}
      <div
        className="absolute rounded-full blur-[120px] opacity-15"
        style={{
          width: 400,
          height: 400,
          background: "radial-gradient(circle, #3B82F6 0%, transparent 65%)",
          bottom: "0%",
          left: "5%",
          animation: "floatOrb 13s ease-in-out infinite reverse",
        }}
      />

      {/* Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <style>{`
        @keyframes radarRipple {
          0%   { transform: translate(-50%, -50%) scale(0.5);  opacity: 0.7; }
          80%  { opacity: 0.05; }
          100% { transform: translate(-50%, -50%) scale(8);    opacity: 0; }
        }
        @keyframes floatOrb {
          0%, 100% { transform: translateX(-50%) translateY(0px)   scale(1); }
          50%       { transform: translateX(-50%) translateY(-30px) scale(1.06); }
        }
      `}</style>
    </div>
  );
}
