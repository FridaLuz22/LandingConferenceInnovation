import { useState } from 'react';

const days = [
  {
    day: 'Día 1',
    date: '11 Junio',
    events: [
      { time: '08:00 pm', title: 'Apertura', desc: 'Apertura de puertas para inicio del Congreso.' },
    ],
  },
  {
    day: 'Día 2',
    date: '12 Junio',
    events: [
      { time: '09:00 am', title: 'Conferencia 1', desc: 'Sin perder el fuego - Pr.Alfonso Quevedo.' },
      { time: '10:15 am', title: 'Conferencia 2', desc: 'Innovar o desaparecer - Rev.Dominic Yeo.' },
      { time: '12:00 pm', title: 'Conferencia 3', desc: 'Estructuras que frenan el poder - Pr. Eliseo de la Cruz.' },
      { time: '03:00 pm', title: 'Taller 1', desc: 'Primer Taller.' },
      { time: '08:00 pm', title: 'Noche de Gloria', desc: 'La iglesia de esta generación - Rev. Dominic Yeo.' },
    ],
  },
  {
    day: 'Día 3',
    date: '13 Junio',
    events: [
      { time: '09:00 am', title: 'Conferencia 4', desc: 'Ministros influyentes - Pr. Alfonso Quevedo.' },
      { time: '10:15 am', title: 'Conferencia 5', desc: 'El liderazgo innovador - Rev. Dominic Yeo.' },
      { time: '11:40 am', title: 'Conferencia 6', desc: 'La crisis silenciosa - Pr. Alfonso Quevedo.' },
      { time: '12:40 pm', title: 'Conferencia 7', desc: 'La iglesia que la sociedad necesita - Pr. Juan Colqui.' },
      { time: '03:30 pm', title: 'Panel Innova', desc: 'Identidad, nuevas generaciones, el futuro de la iglesia.' },
      { time: '08:00 pm,', title: 'Clausura del Congreso', desc: 'La unción del Espíritu Santo - Rev. Dominic Yeo.' },
    ],
  },
];

export default function Itinerary() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="itinerary" className="py-14 px-4 relative">
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
