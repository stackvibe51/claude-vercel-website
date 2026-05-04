"use client";

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const CALENDLY_URL = "https://calendly.com/stackvibe51/30min";

export default function CalendlyButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const open = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    }
  };

  return (
    <button onClick={open} className={className}>
      {children}
    </button>
  );
}
