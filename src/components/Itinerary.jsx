import { useState } from 'react';

const days = [
  {
    day: 'Día 1',
    date: '11 Junio',
    events: [
      { time: '08:30', title: 'Registro & Bienvenida', desc: 'Apertura de puertas y café de bienvenida.' },
      { time: '09:30', title: 'Devocional de Apertura', desc: 'Tiempo de oración y palabra para iniciar la cumbre.' },
      { time: '10:00', title: 'Keynote: Liderazgo con Propósito', desc: 'David Mendoza sobre los fundamentos del liderazgo cristiano.' },
      { time: '11:30', title: 'Panel: La Iglesia del Siglo XXI', desc: 'Líderes discuten cómo innovar sin perder la esencia.' },
      { time: '13:00', title: 'Almuerzo de Conexión', desc: 'Networking entre pastores y líderes.' },
      { time: '14:30', title: 'Taller: Estrategia Digital Ministerial', desc: 'Rebeca Torres comparte herramientas digitales para tu iglesia.' },
      { time: '17:00', title: 'Cierre del Día 1', desc: 'Resumen y anuncios.' },
    ],
  },
  {
    day: 'Día 2',
    date: '12 Junio',
    events: [
      { time: '08:30', title: 'Devocional Matutino', desc: 'Inicio del día con alabanza y palabra.' },
      { time: '09:30', title: 'Formando la Próxima Generación', desc: 'Josué Kim sobre el discipulado y liderazgo juvenil.' },
      { time: '11:00', title: 'Taller: Coaching de Equipos', desc: 'Ana Laura Cruz guía sesión práctica de liderazgo.' },
      { time: '12:30', title: 'Panel: Fe e Innovación Social', desc: 'Samuel Osei y otros líderes de impacto comunitario.' },
      { time: '14:00', title: 'Almuerzo & Expo Ministerial', desc: 'Recorrido por stands de recursos y ministerios.' },
      { time: '15:30', title: 'Workshop: Creatividad en la Adoración', desc: 'Cristina Vázquez sobre producción y arte creativa.' },
      { time: '18:00', title: 'Noche de Conexión', desc: 'Cena especial con líderes y conferencistas.' },
    ],
  },
  {
    day: 'Día 3',
    date: '13 Junio',
    events: [
      { time: '09:00', title: 'Devocional de Cierre', desc: 'Tiempo de reflexión y gratitud.' },
      { time: '10:00', title: 'Liderazgo en Tiempos de Cambio', desc: 'Panel de pastores sobre desafíos actuales del liderazgo.' },
      { time: '11:30', title: 'Taller: Planificación Estratégica para Iglesias', desc: 'Herramientas prácticas para el crecimiento ministerial.' },
      { time: '13:00', title: 'Almuerzo de Clausura', desc: 'Comida de despedida y networking final.' },
      { time: '14:30', title: 'Palabra de Cierre y Comisión', desc: 'Mensaje final y envío de los asistentes.' },
      { time: '16:00', title: 'Cierre de la Cumbre', desc: 'Fin del evento.' },
    ],
  },
];

export default function Itinerary() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="itinerary" className="py-28 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-highlight text-sm tracking-[0.25em] uppercase font-semibold">
            Agenda
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 text-white">
            Itinerario de la{' '}
            <span className="bg-gradient-to-r from-highlight to-accent bg-clip-text text-transparent">
              Conferencia
            </span>
          </h2>
        </div>

        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {days.map((d, i) => (
            <button
              key={d.day}
              onClick={() => setActiveDay(i)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeDay === i
                  ? 'bg-highlight text-primary shadow-[0_0_20px_rgba(245,158,11,0.4)]'
                  : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10'
              }`}
            >
              {d.day} — {d.date}
            </button>
          ))}
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-6">
            {days[activeDay].events.map((event, i) => (
              <div key={i} className="relative pl-12 md:pl-16 group">
                <div className="absolute left-2.5 md:left-6.5 top-2 w-3 h-3 rounded-full bg-highlight border-2 border-primary shadow-[0_0_10px_rgba(245,158,11,0.5)] group-hover:scale-125 transition-transform" />

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/[0.08] hover:border-highlight/30 transition-all duration-300">
                  <span className="text-highlight text-sm font-mono font-bold">
                    {event.time}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">
                    {event.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
