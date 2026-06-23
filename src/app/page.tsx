import Image from "next/image";

const locationColors: Record<string, string> = {
  "GL Pand": "bg-green-100 text-green-800",
  "PvdA Pand": "bg-red-100 text-red-800",
  "Circustent Babel": "bg-orange-100 text-orange-800",
  "De Loods van Kees": "bg-purple-100 text-purple-800",
  "Noorderhaven": "bg-blue-100 text-blue-800",
};

const locationAddresses: Record<string, string> = {
  "GL Pand": "Coehoornsingel 87",
  "PvdA Pand": "Haddingestraat 10",
  "Circustent Babel": "Neutronstraat 3",
  "De Loods van Kees": "Friesestraatweg 448",
  "Noorderhaven": "adres volgt",
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

const festivalIntro = `Nog twee maanden en dan zijn GroenLinks en PvdA opgegaan in PRO. Reden voor een feest; om wat geweest is en om wat nieuw is. Dat doen we niet zomaar, dat moet legendarisch worden! Daarom organiseren we op zaterdag 27 juni de hele dag Festival de Ophef. Een dag waarop we nog één keer achteromkijken naar, stil staan bij en vieren van 80 jaar PvdA en 36 jaar GroenLinks in Groningen. En een avond om de oprichting van de nieuwe partij en het begin van de zomer te vieren!`;

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
    timeEnd: "13:00",
    events: [
      {
        id: "huis-aan-huis",
        title: "Huis-aan-Huizen in de Oosterpoort",
        locations: ["PvdA Pand"],
        description: "10:00–10:30 workshop · 10:30–13:00 huis-aan-huizen (aansluitend lunch in het PvdA Pand!). Altijd al eens mee willen lopen, maar tot nu toe niet gedurfd of is het er niet van gekomen? Dit is je kans! Vooraf een korte, interactieve workshop over wat huis-aan-huizen inhoudt en hoe je dit het beste aanpakt. Je eerste keer? Dan word je gekoppeld aan een doorgewinterde huis-aan-huizer. Tip: Kom op de fiets! Adres: Haddingestraat 10.",
        signup: true,
      },
    ],
  },
  {
    id: "11u",
    time: "11:00",
    timeEnd: "12:00",
    events: [
      {
        id: "fietstocht-1",
        title: "Langs sporen van de sociaaldemocratie in Groningen",
        locations: [],
        description: "Onder begeleiding van Jan R. Lunsing fietsen maximaal tien deelnemers langs historische sporen — van één van de oprichters van de SDAP tot het PvdA Pand, waar de volgende stappen worden gezet. Start: Begraafplaats Esserveld. Ook ronde 2 om 14:00.",
        signup: true,
      },
      {
        id: "wandeltocht-1",
        title: "Overwinningen in de openbare ruimte",
        locations: [],
        description: "Wandel- en fietstocht langs grote en kleine projecten die het wonen en leven in onze gemeente mooier, leuker, veiliger, gezonder én groener hebben gemaakt. Van Dudok aan het diep tot het Zuiderplantsoen. Start: volgt. Ook ronde 2 om 14:00.",
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
        description: "Tie dye t-shirts maken in de nieuwe PRO kleuren én friendship bracelets (Taylor Swift stijl) met PRO/PROTEST leuzen. Zo ga je als een pro de linkse zomer in! Shirts niet inbegrepen — neem een wit katoenen t-shirt mee.",
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
        title: "Workshop: Van jasjes naar tasjes",
        locations: ["Noorderhaven"],
        description: "De groene en rode jasjes hebben we flink op voorraad en gaan we straks minder dragen. Geef ze een nieuw leven als tasje, etui of eigen ontwerp! Patronen en ideeën worden geleverd. Neem je naaimachine, lockmachine en naaigerei (knopen, ritsen) mee als je die hebt. Adres volgt na aanmelding.",
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
        title: "PRO-Posters maken met Minerva",
        timeEnd: "16:30",
        locations: ["De Loods van Kees"],
        description: "Samen met Kees Hermanides en Minerva-studenten posters maken én drukken voor de gloednieuwe partij. In de kleuren en thema's van onze beweging maak jij knallers — voor onze panden, je slaapkamer of kantoor! Adres: Friesestraatweg 448.",
        signup: true,
      },
      {
        id: "fietstocht-2",
        title: "Langs sporen van de sociaaldemocratie in Groningen",
        timeEnd: "15:00",
        locations: [],
        description: "Ronde 2. Onder begeleiding van Jan R. Lunsing fietsen maximaal tien deelnemers langs historische sporen. Start: Begraafplaats Esserveld.",
        signup: true,
      },
      {
        id: "wandeltocht-2",
        title: "Overwinningen in de openbare ruimte",
        timeEnd: "15:00",
        locations: [],
        description: "Ronde 2. Wandel- en fietstocht langs bijzondere projecten die het leven in Groningen mooier, groener en veiliger maakten. Start: volgt.",
        signup: true,
      },
      {
        id: "filmpremiere",
        title: "Filmpremière: 'Verschilmakers — politieke helden in jouw buurt'",
        timeEnd: "16:00",
        locations: ["PvdA Pand"],
        description: "Prijswinnend documentairemaker Arnold van Bruggen volgt vier PvdA-wethouders: Pieter Paul Slikker, Casper Gelderblom, Marianne Poelman en Dennis de Vries. Gemaakt ter gelegenheid van het 125-jarig bestaan van het CLB. Aansluitend gesprek met Groningse wethouders Carine Bloemhoff en Rik van Niejenhuis. Adres: Haddingestraat 10.",
        signup: true,
      },
      {
        id: "boek-presentatie",
        title: "Een portret van GroenLinks",
        timeEnd: "16:00",
        locations: ["GL Pand"],
        description: "Inloop 14:00, start 14:30. Aan de hand van het nieuwe boek 'Een portret van GroenLinks: persoonlijke verhalen uit de partij' kijken we terug op 36 jaar GroenLinks in Groningen. Met speciale gasten zoals Katinka Eikelenboom, Farah Karimi en Gladys Meijas. Het boek is in beperkte oplage te koop voor €20.",
        signup: true,
      },
    ],
  },
  {
    id: "1430u",
    time: "14:30",
    timeEnd: "16:30",
    events: [
      {
        id: "kinderen",
        title: "Een topmiddag voor kinderen!",
        locations: ["Circustent Babel"],
        description: "Kom samen met je (klein)kind naar het Kinderprogramma en doe mee met verschillende activiteiten! Voor alle leeftijden, waarbij je zelf je (klein)kind begeleidt. Kom bouwen, kom knutselen, kom luisteren! • 14:30–16:00: Bouw je mee aan de stad van de toekomst? Met karton, duplo en houten treinrails — en je eigen fantasie natuurlijk! • 14:45–15:15: Voorleeshalfuurtje met PRO-fractielid Justine Jones, met een selectie boeken die passen bij PRO’s idealen. • 15:30–16:00: Afvalvrij leven met kinderen — maak je eigen klei met PRO-fractieondersteuner Sam Veeman (zelf een bakje meenemen!). Adres: Neutronstraat 3.",
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
        title: "Workshop: Zing je mee?",
        locations: ["Noorderhaven"],
        description: "Of je nu een volleerde zanger bent of alleen onder de douche zingt — iedereen is welkom! We studeren in korte tijd een uniek, krachtig en revolutionair PRO lied in, dat we 's avonds met het publiek delen. Ben je erbij om het dak eraf te zingen? Adres volgt na aanmelding.",
        signup: true,
      },
    ],
  },
  {
    id: "17u",
    time: "17:00",
    timeEnd: "17:30",
    events: [
      {
        id: "de-ophef",
        title: "DE OPHEF",
        locations: ["Circustent Babel"],
        description: "Na een divers programma komen we samen en gaan we gezamenlijk een nieuwe periode tegemoet. Dit bijzondere moment wordt gemarkeerd door een bijzondere verrassing! Wat dat is? Tsja: bijzijn is meemaken voor deze unieke belevenis!",
        signup: false,
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
        locations: ["Circustent Babel"],
        description: "Er wordt gebarbecued en we heffen het glas met elkaar.",
        signup: true,
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
        locations: ["Circustent Babel"],
        description: "De voetjes van de vloer tijdens de spetterende afsluiting van de dag!",
        signup: true,
      },
    ],
  },
];

const FORM_BASE =
  "https://docs.google.com/forms/d/e/1FAIpQLSduTAq9fcfvUPA-tbZYDWTRYFa8lWjgd5oVPj75pjSnaLZ1-w/viewform?usp=pp_url";

// Pre-fill URLs: elke knop opent het form met het juiste vakje al aangevinkt.
// Veld-IDs gevonden via de gepubliceerde form-structuur:
//   ochtend   → entry.610504630
//   lunch     → entry.2064543520
//   middag    → entry.1995003765
//   avond     → entry.1376698863
const formUrls: Record<string, string> = {
  "huis-aan-huis":    `${FORM_BASE}&entry.610504630=10u-1030u%3A+huis-aan-huis+training&entry.610504630=11u-13u%3A+huis-aan-huis+in+de+Oosterpoort`,
  "pro-look":         `${FORM_BASE}&entry.610504630=1130u-13u%3A+Ga+met+een+PRO+look+de+zomer+in!`,
  "fietstocht-1":     `${FORM_BASE}&entry.610504630=12u-13u%3A+Langs+de+sporen+van+de+sociaaldemocratie`,
  "wandeltocht-1":    `${FORM_BASE}&entry.610504630=12u-13u%3A+Overwinningen+in+de+openbare+ruimte`,
  "buffet":           `${FORM_BASE}&entry.2064543520=Ik+lunch+graag+mee!`,
  "jasjes-tasjes":    `${FORM_BASE}&entry.1995003765=13u-1430u%3A+Van+jasjes+naar+tasjes`,
  "proposters":       `${FORM_BASE}&entry.1995003765=14u-1630u%3A+PRO-Posters+maken+met+Minerva`,
  "fietstocht-2":     `${FORM_BASE}&entry.1995003765=14u-15u%3A+Langs+de+sporen+van+de+sociaaldemocratie`,
  "wandeltocht-2":    `${FORM_BASE}&entry.1995003765=14u-15u%3A+Overwinningen+in+de+openbare+ruimte`,
  "filmpremiere":     `${FORM_BASE}&entry.1995003765=14u-16u%3A+Verschilmakers+%E2%80%93+politieke+helden+in+jouw+buurt`,
  "boek-presentatie": `${FORM_BASE}&entry.1995003765=14u-16u%3A+Een+portret+van+GroenLinks`,
  "kinderen":         `${FORM_BASE}&entry.1995003765=1430u-1630u%3A+Kinderworkshop+%22...%22`,
  "circus":           `${FORM_BASE}&entry.1995003765=1430u-1630u+Circus+workshop+ouder-kind`,
  "koor":             `${FORM_BASE}&entry.1995003765=15u-16u%3A+zing+je+mee+in+het+koor%3F`,
  "borrel-bbq":       `${FORM_BASE}`,
  "feest":            `${FORM_BASE}&entry.1376698863=20u-23u%3A+Feest!`,
};

const donations = [
  { id: "15", label: "15 euro", href: "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=SpKSr4_ySoKDzPauErmoNg" },
  { id: "30", label: "30 euro", href: "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=tf8wVXwPQqKZcLCywTqh6g" },
  { id: "vrij", label: "Kies zelf een bedrag", href: "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=30Pz9Q4pQbS8yoK5rG1DzA" },
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
            <a href="#doneer" className="hover:underline">Doneer</a>
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
      <section className="w-full min-h-screen flex flex-col items-center justify-center py-12 px-4">
        <Image
          src="/poster2.png"
          alt="Festival De Ophef — 27 juni 2026, 11:00–23:00, Groningen"
          width={620}
          height={1009}
          className="w-full max-w-xs sm:max-w-sm md:max-w-md drop-shadow-2xl"
          priority
        />
        <div className="flex flex-wrap gap-4 mt-8 justify-center">
          <a
            href="#programma"
            className="bg-[#1E6B28] hover:bg-[#2A8A38] text-white font-bold px-8 py-3 text-lg rounded transition-colors shadow-xl"
          >
            Bekijk het programma
          </a>
          <a
            href="#doneer"
            className="bg-white hover:bg-gray-100 text-[#D42B1E] font-bold px-8 py-3 text-lg rounded transition-colors shadow-xl"
          >
            Doneer
          </a>
        </div>
      </section>

      {/* PROGRAMMA */}
      <section id="programma" className="py-16 px-4">
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl">
          <h2 className="font-bebas text-5xl md:text-6xl text-[#D42B1E] tracking-wide mb-4">
            Programma
          </h2>
          <p className="text-gray-800 mb-6 text-base md:text-lg leading-relaxed">
            {festivalIntro}
          </p>
          <div className="border-t border-gray-200 pt-6 mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              Sommige activiteiten zijn beperkt qua plek — meld je aan via het formulier.
            </p>
            <a
              href={FORM_BASE}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-[#1E6B28] hover:bg-[#2A8A38] text-white font-bold px-6 py-2.5 rounded transition-colors shadow text-sm"
            >
              Schrijf je in voor activiteiten
            </a>
          </div>

          {/* Location legend */}
          <div className="flex flex-wrap gap-2 mb-10">
            {Object.entries(locationColors).map(([name, colors]) => (
              <span key={name} className={`text-xs font-medium px-2 py-1 rounded ${colors}`}>
                {name}{locationAddresses[name] ? ` · ${locationAddresses[name]}` : ""}
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
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* DONEER */}
      <section id="doneer" className="py-16 px-4">
        <div className="max-w-4xl mx-auto bg-[#1E6B28]/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl text-center">
          <h2 className="font-bebas text-5xl md:text-6xl text-white tracking-wide mb-3">
            Doe een bijdrage
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-10 text-base leading-relaxed">
            Festival De Ophef heeft geen tickets, maar dit allemaal organiseren is flink duur.
            Doe een financiële bijdrage en help ons dit festival mogelijk te maken. Alle bijdragen
            zijn natuurlijk welkom. Met gemiddeld 15 euro per persoon zijn we al bijna uit de kosten!
            Mocht het niet lukken, uiteraard ook geen probleem.
          </p>

          <div className="grid grid-cols-3 gap-4 mb-8 max-w-lg mx-auto">
            {donations.map((tier) => (
              <a
                key={tier.id}
                href={tier.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-xl p-5 text-center transition-all flex flex-col gap-2"
              >
                <span className="font-bebas text-2xl text-white group-hover:scale-110 transition-transform inline-block">
                  {tier.label}
                </span>
              </a>
            ))}
          </div>

          <p className="text-white/50 text-sm">
            Je wordt doorgestuurd naar een betaalverzoek. Elke bijdrage telt.
          </p>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="bg-black/75 backdrop-blur-sm text-white py-10 px-4">
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
