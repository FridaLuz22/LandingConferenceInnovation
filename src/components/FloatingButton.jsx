import { useState, useEffect } from 'react';

export default function FloatingButton() {
  const [visible, setVisible] = useState(false);
  const phone = "+51933401503";
  const message = "Hola, me gustaría inscribirme para el Congreso de Innovación. ¿Podrían darme la información para continuar?";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
    >
      <a
        href={url} target="_blank"
        className="group flex items-center gap-3 bg-accent text-primary font-bold px-6 py-4 rounded-full shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:scale-105 transition-all duration-300"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
        Inscribirme
        <span className="group-hover:translate-x-1 transition-transform">
          →
        </span>
      </a>
    </div>
  );
}
