import { useEffect, useRef, useState, useCallback } from 'react';

const stats = [
  { label: 'Conferencistas', value: '30+' },
  { label: 'Líderes presentes', value: '1,200+' },
  { label: 'Países', value: '12+' },
  { label: 'Días', value: '3' },
];

function useCountdown(target) {
  const calc = useCallback(() => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }, [target]);

  const [remaining, setRemaining] = useState(calc);

  useEffect(() => {
    const id = setInterval(() => setRemaining(calc()), 1000);
    return () => clearInterval(id);
  }, [calc]);

  return remaining;
}

export default function Hero() {
  const canvasRef = useRef(null);
  const countdown = useCountdown(new Date('2026-06-11T00:00:00'));

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      r: Math.random() * 2 + 1,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(6, 182, 212, 0.5)';
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${1 - dist / 140})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const pad = (n) => String(n).padStart(2, '0');

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary pointer-events-none" />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <span className="inline-block text-accent text-sm tracking-[0.25em] uppercase font-semibold mb-6 border border-accent/30 rounded-full px-5 py-2 backdrop-blur-sm bg-accent/5">
          11, 12 y 13 Junio 2026 · Perú
        </span>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-4">
          <span className="bg-gradient-to-r from-white via-accent to-highlight bg-clip-text text-transparent">
            Congreso de Liderazgo
          </span>
          <br />
          <span className="text-white">e Innovación 2026</span>
        </h1>

        <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed font-light">
          Lidera con propósito, innova con fe. Tres días para fortalecer tu
          liderazgo, conectar con visionarios y transformar tu comunidad.
        </p>

        <div className="flex justify-center gap-5 sm:gap-8 mb-12">
          {[
            { label: 'Días', value: countdown.days },
            { label: 'Horas', value: countdown.hours },
            { label: 'Minutos', value: countdown.minutes },
            { label: 'Segundos', value: countdown.seconds },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-accent tabular-nums leading-none">
                {pad(item.value)}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm mt-1 uppercase tracking-wider">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#register"
            className="group relative inline-flex items-center gap-2 bg-accent text-primary font-bold px-8 py-4 rounded-full text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.5)]"
          >
            <span className="relative z-10">Asegura tu lugar</span>
            <span className="relative z-10 group-hover:translate-x-1 transition-transform">
              →
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-highlight opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <a
            href="#itinerary"
            className="text-white border border-white/20 px-8 py-4 rounded-full text-lg hover:bg-white/5 transition-colors"
          >
            Ver agenda
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl md:text-4xl font-black text-accent">
                {s.value}
              </p>
              <p className="text-gray-400 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
