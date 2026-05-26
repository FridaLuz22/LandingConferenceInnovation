import { useState } from 'react';

export default function Register() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="register" className="py-28 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-lg mx-auto relative z-10">
        <div className="text-center mb-10">
          <span className="text-accent text-sm tracking-[0.25em] uppercase font-semibold">
            Registro
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 text-white">
            Asegura tu{' '}
            <span className="bg-gradient-to-r from-accent to-highlight bg-clip-text text-transparent">
              lugar
            </span>
          </h2>
          <p className="text-gray-400 mt-4">
            Cupo limitado. Regístrate hoy y sé parte de esta cumbre
            transformadora.
          </p>
        </div>

        {submitted ? (
          <div className="text-center bg-white/5 border border-accent/30 rounded-2xl p-12 backdrop-blur-sm">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              ¡Registrado!
            </h3>
            <p className="text-gray-300">
              Te enviaremos la confirmación a tu correo electrónico.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Nombre completo
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                placeholder="tu@correo.com"
              />
            </div>
            <div>
              <label htmlFor="church" className="block text-sm font-medium text-gray-300 mb-2">
                Iglesia / Ministerio
              </label>
              <input
                id="church"
                type="text"
                className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                placeholder="Opcional"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-primary font-bold py-4 rounded-xl text-lg hover:bg-accent/90 transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
            >
              Inscribirme
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
