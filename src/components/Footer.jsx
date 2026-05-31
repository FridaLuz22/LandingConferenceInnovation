export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-black">
            <span className="bg-gradient-to-r from-accent to-highlight bg-clip-text text-transparent">
              Congreso de Liderazgo
            </span>{' '}
            <span className="text-white">Innovación</span>
          </h3>
          <p className="text-gray-400 text-sm mt-3 leading-relaxed">
            Un evento donde líderes cristianos se reúnen para aprender,
            conectarse y ser inspirados a transformar su comunidad desde la fe.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Enlaces</h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: 'Conferencistas', href: '#speakers' },
              { label: 'Agenda', href: '#itinerary' },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Contacto</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Av. Amazonas 1006 - Casa de Dios, Tingo Maria - Perú
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +51 933 401 503
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Congreso de Liderazgo e Innovación. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
