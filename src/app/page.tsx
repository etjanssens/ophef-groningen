const locationColors: Record<string, string> = {
  "GL Pand": "bg-green-100 text-green-800",
  "PvdA Pand": "bg-red-100 text-red-800",
  "Circustent Babel": "bg-orange-100 text-orange-800",
  "De Loods": "bg-purple-100 text-purple-800",
  "Noorderhaven": "bg-blue-100 text-blue-800",
  "Buiten bij De Loods": "bg-purple-100 text-purple-800",
};

function LocationBadge({ name }: { name: string }) {
  const colors = locationColors[name] ?? "bg-gray-100 text-gray-700";
  return (
    <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded ${colors}`}>
      {name}
    </span>
  );
}

type Event = {
  id: string;
  title: string;
  timeEnd?: string;
  locations: string[];
  description?: string;
  signup: boolean;
};

type TimeSlot = {
  id: string;
  time: string;
  timeEnd?: string;
  events: Event[];
};

const schedule: TimeSlot[] = [
  {
    id: "hele-dag",
    time: "Hele dag",
    events: [
      {
        id: "tentoonstelling",
        title: "Tentoonstelling: 36 jaar GL & 80 jaar PvdA Groningen",
        locations: ["GL Pand", "PvdA Pand"],
        description: "Aan de muren van onze beide panden.",
        signup: false,
      },
    ],
  },
  {
    id: "10u",
    time: "10:00",
    timeEnd: "10:30",
    events: [
      {
        id: "huis-aan-huis-training",
        title: "Huis-aan-huis training voor nieuwe leden",
        locations: ["PvdA Pand"],
        description: "Training door Janny.",
        signup: true,
      },
    ],
  },
  {
    id: "11u",
    time: "11:00",
    events: [
      {
        id: "kindertent",
        title: "Kinder- en ouderworkshops",
        timeEnd: "16:00",
        locations: ["Circustent Babel"],
        signup: true,
      },
      {
        id: "huis-aan-huis-oosterpoort",
        title: "Huis-aan-huis in Oosterpoort",
        timeEnd: "13:00",
        locations: ["PvdA Pand"],
        description: "Start vanaf het PvdA pand.",
        signup: true,
      },
    ],
  },
  {
    id: "1130u",
    time: "11:30",
    timeEnd: "13:00",
    events: [
      {
        id: "pro-look",
        title: "Ga met een PRO look de zomer in!",
        locations: ["GL Pand"],
        description: "PRO armbandjes en t-shirts maken.",
        signup: true,
      },
    ],
  },
  {
    id: "12u",
    time: "12:00",
    timeEnd: "13:00",
    events: [
      {
        id: "fietstocht-1",
        title: "Sociaaldemocratische fietstocht",
        locations: [],
        signup: true,
      },
      {
        id: "wandeltocht-1",
        title: "Overwinning in de openbare ruimte — wandeltocht",
        locations: [],
        signup: true,
      },
    ],
  },
  {
    id: "1230u",
    time: "12:30",
    timeEnd: "14:00",
    events: [
      {
        id: "buffet",
        title: "Buffetlunch",
        locations: ["PvdA Pand"],
        signup: true,
      },
    ],
  },
  {
    id: "13u",
    time: "13:00",
    timeEnd: "14:30",
    events: [
      {
        id: "jasjes-tasjes",
        title: "Van jasjes naar tasjes",
        locations: ["Noorderhaven"],
        description: "Bij Shirley thuis.",
        signup: true,
      },
    ],
  },
  {
    id: "14u",
    time: "14:00",
    events: [
      {
        id: "proposters",
        title: "ProPosters maken met Minerva",
        timeEnd: "16:30",
        locations: ["De Loods"],
        description: "Bij Kees in de loods, Aduarderdiepsterweg.",
        signup: true,
      },
      {
        id: "fietstocht-2",
        title: "Sociaaldemocratische fietstocht",
        timeEnd: "15:00",
        locations: [],
        description: "2e ronde",
        signup: true,
      },
      {
        id: "wandeltocht-2",
        title: "Overwinning in de openbare ruimte — wandeltocht",
        timeEnd: "15:00",
        locations: [],
        description: "2e ronde",
        signup: true,
      },
      {
        id: "filmpremiere",
        title: "Filmpremière: 'Verschilmakers'",
        timeEnd: "16:00",
        locations: ["PvdA Pand"],
        description:
          "Politieke helden in jouw buurt. Welkomstwoord door Sharon Dijksma, gevolgd door première en nagesprek.",
        signup: true,
      },
      {
        id: "boek-presentatie",
        title: "Boek & Presentatie: Een portret van GroenLinks",
        timeEnd: "16:00",
        locations: ["GL Pand"],
        description: "Met Katinka Eikelenboom en special guests.",
        signup: true,
      },
    ],
  },
  {
    id: "15u",
    time: "15:00",
    timeEnd: "16:00",
    events: [
      {
        id: "koor",
        title: "Strijdliederen koor",
        locations: ["Noorderhaven"],
        description: "Bij Shirley thuis.",
        signup: true,
      },
    ],
  },
  {
    id: "1730u",
    time: "17:30",
    timeEnd: "20:00",
    events: [
      {
        id: "borrel-bbq",
        title: "Borrel & BBQ",
        locations: ["Buiten bij De Loods"],
        signup: false,
      },
    ],
  },
  {
    id: "20u",
    time: "20:00",
    timeEnd: "23:00",
    events: [
      {
        id: "feest",
        title: "Feest!",
        locations: ["De Loods"],
        description:
          "Openingsact om 20:15, gevolgd door Lörk (20:15–21:00) en Fatal Injection (21:00–23:00).",
        signup: false,
      },
    ],
  },
];

const donations = [
  { id: "steun", label: "Steunbijdrage", amount: "€10", description: "Voor wie wat minder ruimte heeft" },
  { id: "solidair", label: "Solidair", amount: "€20", description: "De standaardbijdrage" },
  { id: "vriend", label: "Vriendbijdrage", amount: "€35", description: "Een extra steun in de rug" },
  { id: "held", label: "Held", amount: "€50", description: "Voor wie het festival echt mogelijk maakt" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-[#D42B1E] text-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
          <span className="font-bebas text-2xl tracking-widest">De Ophef</span>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium tracking-wide">
            <a href="#programma" className="hover:underline">Programma</a>
            <a href="#de-ophef" className="hover:underline font-bold">17:00 DE OPHEF</a>
            <a href="#praktisch" className="hover:underline">Praktisch</a>
          </div>
          <a
            href="#doneer"
            className="bg-[#1E6B28] hover:bg-[#2A8A38] text-white font-bold text-sm px-4 py-1.5 rounded transition-colors"
          >
            Doneer
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-[#D42B1E] p-3 md:p-5">
        <div className="starburst relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-16 overflow-hidden">
          {/* Top label */}
          <p className="font-cinzel text-[#1E6B28] text-sm md:text-base tracking-[0.3em] uppercase mb-3 relative z-10">
            Festival
          </p>

          {/* Main title */}
          <h1
            className="font-bebas ophef-text-stroke text-[#1E6B28] leading-none relative z-10"
            style={{ fontSize: "clamp(5rem, 20vw, 14rem)" }}
          >
            De Ophef
          </h1>

          {/* Date bar */}
          <div className="relative z-10 mt-6 bg-[#D42B1E] text-white px-8 py-3 font-bebas text-2xl md:text-3xl tracking-widest">
            27 JUNI 2026 &nbsp;|&nbsp; 11:00 – 23:00
          </div>

          {/* Subtitle */}
          <p className="relative z-10 mt-5 text-[#0F0F0F] text-base md:text-lg max-w-md font-medium">
            Een dag vol politiek, cultuur en feest — in heel Groningen.
          </p>

          {/* CTAs */}
          <div className="relative z-10 mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href="#programma"
              className="bg-[#1E6B28] hover:bg-[#2A8A38] text-white font-bold px-8 py-3 text-lg rounded transition-colors shadow-lg"
            >
              Bekijk het programma
            </a>
            <a
              href="#doneer"
              className="bg-[#D42B1E] hover:bg-[#9B1B10] text-white font-bold px-8 py-3 text-lg rounded border-2 border-white transition-colors shadow-lg"
            >
              Doneer
            </a>
          </div>
        </div>
      </section>

      {/* PROGRAMMA */}
      <section id="programma" className="bg-[#FDF8EE] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-bebas text-5xl md:text-6xl text-[#D42B1E] tracking-wide mb-2">
            Programma
          </h2>
          <p className="text-gray-600 mb-10 text-sm md:text-base">
            Schrijf je in voor de onderdelen die jou aanspreken — sommige activiteiten zijn beperkt
            qua plek. Inschrijven kan via de knoppen bij elk onderdeel.
          </p>

          {/* Location legend */}
          <div className="flex flex-wrap gap-2 mb-10">
            {Object.entries(locationColors).map(([name, colors]) => (
              <span key={name} className={`text-xs font-medium px-2 py-1 rounded ${colors}`}>
                {name}
              </span>
            ))}
          </div>

          <div className="space-y-8">
            {schedule.map((slot) => (
              <div key={slot.id} className="flex gap-4 md:gap-8">
                {/* Time */}
                <div className="w-20 md:w-28 flex-shrink-0 pt-1">
                  <div className="font-bebas text-xl md:text-2xl text-[#D42B1E] leading-tight">
                    {slot.time}
                  </div>
                  {slot.timeEnd && (
                    <div className="text-xs text-gray-400">t/m {slot.timeEnd}</div>
                  )}
                </div>

                {/* Events */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3">
                  {slot.events.map((event) => (
                    <div
                      key={event.id}
                      className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm flex flex-col gap-2"
                    >
                      <p className="font-semibold text-sm md:text-base leading-snug">
                        {event.title}
                      </p>
                      {event.timeEnd && slot.time !== slot.timeEnd && (
                        <p className="text-xs text-gray-400">t/m {event.timeEnd}</p>
                      )}
                      {event.description && (
                        <p className="text-xs text-gray-500 leading-relaxed">
                          {event.description}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-1">
                        {event.locations.map((loc) => (
                          <LocationBadge key={loc} name={loc} />
                        ))}
                      </div>
                      {event.signup && (
                        <a
                          href="#"
                          className="mt-auto inline-block text-center bg-[#1E6B28] hover:bg-[#2A8A38] text-white text-xs font-bold px-3 py-1.5 rounded transition-colors"
                        >
                          Schrijf je in
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DE OPHEF — 17:00 HIGHLIGHT */}
      <section
        id="de-ophef"
        className="bg-[#D42B1E] p-3 md:p-5"
      >
        <div className="starburst relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto text-center py-20 px-6">
            <p className="font-cinzel text-white text-sm tracking-[0.3em] uppercase mb-4 opacity-90">
              Het hoogtepunt van de dag
            </p>
            <div className="font-bebas text-white text-[clamp(4rem,15vw,9rem)] leading-none ophef-text-stroke mb-2">
              De Ophef
            </div>
            <div className="font-bebas text-[#FDF8EE] text-5xl md:text-7xl tracking-widest mb-8">
              17:00
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-8 py-6 mb-8 max-w-lg mx-auto">
              <p className="text-white text-lg md:text-xl leading-relaxed font-medium">
                Een bijzonder ritueel dat het einde en het begin markeert.
              </p>
              <p className="text-white/80 mt-3 text-base">
                We willen zo veel mogelijk mensen erbij hebben. <strong className="text-white">Kom naar de circustent Babel.</strong>
              </p>
              <p className="text-white/60 mt-3 text-sm italic">
                Wat het precies is? Dat is een verrassing.
              </p>
            </div>
            <a
              href="#"
              className="inline-block bg-[#1E6B28] hover:bg-[#2A8A38] text-white font-bold px-10 py-4 text-xl rounded shadow-xl transition-colors"
            >
              Meld je aan
            </a>
            <div className="mt-4 text-white/60 text-sm">Circustent Babel · 27 juni · 17:00–17:30</div>
          </div>
        </div>
      </section>

      {/* DONEER */}
      <section id="doneer" className="bg-[#1E6B28] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-bebas text-5xl md:text-6xl text-white tracking-wide mb-3">
            Doe een bijdrage
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-10 text-base leading-relaxed">
            Festival De Ophef heeft geen tickets — maar dit allemaal organiseren is flink duur.
            Doe een financiële bijdrage en help ons dit festival mogelijk te maken.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {donations.map((tier) => (
              <a
                key={tier.id}
                href="#"
                className="group bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-xl p-5 text-center transition-all flex flex-col gap-2"
              >
                <span className="font-bebas text-4xl text-white group-hover:scale-110 transition-transform inline-block">
                  {tier.amount}
                </span>
                <span className="font-bold text-white text-sm">{tier.label}</span>
                <span className="text-white/60 text-xs leading-snug">{tier.description}</span>
              </a>
            ))}
          </div>

          <p className="text-white/50 text-sm">
            Je wordt doorgestuurd naar een betaalverzoek. Elke bijdrage telt.
          </p>
        </div>
      </section>

      {/* PRAKTISCH */}
      <section id="praktisch" className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-bebas text-5xl md:text-6xl text-[#D42B1E] tracking-wide mb-10">
            Praktisch
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-2">Datum & Tijd</h3>
              <p className="text-gray-600">
                Zaterdag 27 juni 2026<br />
                11:00 – 23:00
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Locaties</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Het festival speelt zich af op meerdere plekken in Groningen. Adressen per onderdeel
                volgen binnenkort.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Toegang</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Geen tickets nodig. Vrije toegang voor iedereen. Voor sommige onderdelen is
                inschrijving vereist vanwege de capaciteit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0F0F0F] text-white py-10 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <div className="font-bebas text-2xl text-white tracking-widest">Festival De Ophef</div>
          <div className="text-center">
            27 juni 2026 · Groningen
          </div>
          <div className="flex gap-4">
            <a href="https://groenlinks.nl" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GroenLinks Groningen
            </a>
            <a href="https://pvda.nl" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              PvdA Groningen
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
