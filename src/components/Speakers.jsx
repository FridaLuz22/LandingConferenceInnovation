const speakers = [
  {
    name: 'Pr. Juan Colqui',
    role: 'Pastor Nacional de las Asambleas de Dios del Perú',
    bio: 'Un hombre de Dios que guiado a la iglesia con una profunda convicción en el poder de la oración y la intercesión como fundamento del avivamiento.',
    image: '/image/colqui.jpeg',
    topics: ['Liderazgo', 'Pastoral'],
  },
  {
    name: 'Pra. Jeanette Cerna',
    role: 'Pastora principal de CERFAB-Paramonga',
    bio: 'Cuenta con mas de 40 años de ministerio recorriendo el Perú predicando la palabra de Dios.',
    image: '/image/yanet.jpeg',
    topics: ['Liderazgo', 'Pastoral'],
  },
  {
    name: 'Rev.Alfonso Quevedo',
    role: 'Presidente del Concilio de Las Asambleas de Dios, Colombia',
    bio: 'Ministro ordenado en pleno ejercicio de la labor pastoral, con capacidad para la formación de ministros en el área bíblica.',
    image: '/image/quevedo.jpeg',
    topics: ['Liderazgo', 'Pastoral'],
  },
  {
    name: 'Rev. Dominic Yeo',
    role: 'Presidente Mundial de las Asambleas de Dios, Singapur',
    bio: 'Transformado por Dios en su juventud lleva el corazón de ver a la iglesia cumplir su llamado en cada nación.',
    image: '/image/dominic.jpeg',
    topics: ['Liderazgo', 'Pastoral'],
  },
];

export default function Speakers() {
  return (
    <section id="speakers" className="py-14 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent text-sm tracking-[0.25em] uppercase font-semibold">
            Conferencistas
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 text-white">
            Conoce a los{' '}
            <span className="bg-gradient-to-r from-accent to-highlight bg-clip-text text-transparent">
              líderes
            </span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Pastores, innovadores y visionarios que están transformando sus
            comunidades desde la fe.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.map((speaker) => (
            <article
              key={speaker.name}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-accent/40 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 via-transparent to-highlight/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-white/10 group-hover:ring-accent/50 transition-all mb-5">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                  {speaker.name}
                </h3>
                <p className="text-accent/80 text-sm font-medium mt-1">
                  {speaker.role}
                </p>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  {speaker.bio}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {speaker.topics.map((topic) => (
                    <span
                      key={topic}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute top-4 right-4 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full text-accent/20">
                  <path
                    d="M10 90 L90 10 M30 90 L90 30 M50 90 L90 50 M70 90 L90 70 M90 90 L90 90"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
