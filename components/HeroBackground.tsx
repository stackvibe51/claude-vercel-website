"use client";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* Ripple rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {[1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className="absolute rounded-full border border-purple-500/20"
            style={{
              width: `${i * 220}px`,
              height: `${i * 220}px`,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              animation: `ripple 4s ease-out infinite`,
              animationDelay: `${(i - 1) * 1}s`,
            }}
          />
        ))}
      </div>

      {/* Floating gradient orbs */}
      <div
        className="absolute rounded-full blur-[120px] opacity-30"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)",
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          animation: "floatOrb 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute rounded-full blur-[100px] opacity-20"
        style={{
          width: 360,
          height: 360,
          background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)",
          bottom: "10%",
          left: "10%",
          animation: "floatOrb 10s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute rounded-full blur-[80px] opacity-15"
        style={{
          width: 280,
          height: 280,
          background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)",
          top: "40%",
          right: "8%",
          animation: "floatOrb 12s ease-in-out infinite",
          animationDelay: "2s",
        }}
      />

      <style>{`
        @keyframes ripple {
          0%   { transform: translate(-50%, -50%) scale(0.6); opacity: 0.6; }
          100% { transform: translate(-50%, -50%) scale(1.8); opacity: 0; }
        }
        @keyframes floatOrb {
          0%, 100% { transform: translateY(0px) scale(1); }
          50%       { transform: translateY(-40px) scale(1.08); }
        }
      `}</style>
    </div>
  );
}
