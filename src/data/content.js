export const benefits = [
  {
    title: 'Three countries, one crossing',
    text: "The route takes you across the Adriatic by plane and back — Italy, Croatia, Montenegro. Most European trips stay on one coast. This one doesn't. Lakes and peaks, then Venice, then the sea opens up.",
  },
  {
    title: 'Lake Como as the launchpad',
    text: "Arrive Friday, two full days on the water before the mountains call. Menaggio as base, boat taxis between villages, villa gardens in Bellagio — the lake as a perfect first act before everything accelerates.",
  },
  {
    title: 'Two earned mountain days',
    text: "Seceda's ridgeline, Lago di Carezza's emerald mirror, one night at altitude with legendary donuts. Enough Dolomites to feel them — then Venice waits, and after Venice, Croatia.",
  },
  {
    title: 'Venice — where we cross the sea',
    text: "Two days in the canals, then Thursday's one-way flight east. Drop the rental here and leave Italy briefly — we come back to it, better for having gone.",
  },
  {
    title: 'Dubrovnik & the Adriatic',
    text: "Marble Old Town streets, city walls at sunset, Plaža Banje swims, fresh seafood terraces — plus a certain Iron Throne for the nerd in me and sunshine for you.",
  },
  {
    title: 'Montenegro by boat',
    text: "A day across the Bay of Kotor to Herceg Novi — another coastline, another country, back by evening without packing up our Dubrovnik base.",
  },
  {
    title: 'Back to Italy — Puglia',
    text: "After Croatia, we land in Bari. A decompression stretch on the Adriatic heel — white cliffs at Polignano, orecchiette made in open doorways. The south before the south runs out.",
  },
  {
    title: 'Three days on the Amalfi',
    text: "Vesuvius, Pompeii, Positano, Capri — the Italian farewell. Three days is exactly enough to feel the coast without burning out on beautiful.",
  },
  {
    title: 'One-way all the way',
    text: 'Every flight and train moves us forward — no loops, no retracing. We can slow down anywhere without the trip falling apart.',
  },
  {
    title: 'Thursday out, Saturday home',
    textBefore: 'Leave August 27 so we land into magic, not jet lag — and fly home September 12 so ',
    strong: 'Sunday the 13th',
    textAfter: ' is ours to unpack and breathe before the week begins again.',
  },
];

export const calendarDays = [
  { dayName: 'Wed', dayDate: 'Aug 26', dayLabel: "You work — I've got prep covered", variant: 'sage' },
  { dayName: 'Thu', dayDate: 'Aug 27', dayLabel: 'We depart', variant: 'highlight' },
  { dayName: 'Fri', dayDate: 'Aug 28', dayLabel: 'Arrive in Milan & drive to Lake Como' },
  { dayName: 'Fri–Sun', dayDate: 'Aug 28–30', dayLabel: 'Lake Como weekend' },
  { dayName: 'Sun–Mon', dayDate: 'Aug 30–Sep 1', dayLabel: 'Hiking the Dolomites' },
  { dayName: 'Tue', dayDate: 'Sep 1', dayLabel: 'Drive to Venice' },
  { dayName: 'Tue–Thu', dayDate: 'Sep 1–3', dayLabel: 'Explore the floating city' },
  { dayName: 'Thu', dayDate: 'Sep 3', dayLabel: 'One-way flight to Dubrovnik' },
  { dayName: 'Thu–Sun', dayDate: 'Sep 3–6', dayLabel: 'Dubrovnik + Montenegro' },
  { dayName: 'Sun', dayDate: 'Sep 6', dayLabel: 'One-way flight back to Italy — Bari' },
  { dayName: 'Sun–Wed', dayDate: 'Sep 6–9', dayLabel: 'Puglia, Adriatic coast' },
  { dayName: 'Wed', dayDate: 'Sep 9', dayLabel: 'Flight or train to Naples' },
  { dayName: 'Wed–Fri', dayDate: 'Sep 9–11', dayLabel: 'Amalfi Coast' },
  { dayName: 'Sat', dayDate: 'Sep 12', dayLabel: 'Fly home from Naples', variant: 'highlight' },
  { dayName: 'Sun', dayDate: 'Sep 13', dayLabel: 'Recovery day — together', variant: 'sage' },
];

export const timelineItems = [
  { num: '1', text: 'Milan → Lake Como — Friday, August 28 arrive & drive north · weekend August 28–30' },
  { num: '2', text: 'Scenic drive → Dolomites — Sunday, August 30 · hike Sunday–Monday, August 30–September 1' },
  { num: '3', text: 'Venice — drive Tuesday, September 1 · explore September 1–3 · drop the car' },
  { num: '4', text: 'Dubrovnik, Croatia — flight Thursday, September 3 · Old Town September 3–6' },
  { num: '5', text: 'Day trip → Herceg Novi, Montenegro — during our Dubrovnik stay' },
  { num: '6', text: 'Bari & the Adriatic coast — flight back to Italy, Sunday, September 6 · Puglia September 6–9' },
  { num: '7', text: 'Naples & the Amalfi Coast — Wednesday, September 9 · coast September 9–11' },
  { num: '8', text: 'Fly home from Naples — Saturday, September 12 · Sunday, September 13 to recover' },
];

export const destinations = [
  {
    id: 'lake-como',
    eyebrow: 'Stop 1 · The adventure begins',
    title: 'Lake Como',
    lead: "Friday we land in Milan and drive north. By evening we're in Menaggio, the Alps mirrored on the water. Two days to exhale and get your bearings before everything accelerates — mountains next, then Venice, then Croatia. But here, right now, there's only the lake.",
    highlights: [
      'Menaggio as base — quieter than Bellagio, better access',
      'Boat taxis between villages — Varenna, Bellagio, Lenno',
      "Jump off the bridge at Nesso — I'll go first, I promise",
      'Villa del Balbianello & Villa Melzi gardens',
      'Sunset gelato in Varenna before we rest up for the drive',
    ],
    proposed: 'August 28–30 · Friday, arrive from Milan · two days on the water before the mountains',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Sentiero_del_Viandante_DSC_6340_%2814020554463%29.jpg/1280px-Sentiero_del_Viandante_DSC_6340_%2814020554463%29.jpg',
    imageAlt: 'Lake Como shoreline with mountains and villages',
  },
  {
    id: 'drive-refugio-friedrich-august',
    className: 'alt',
    reverse: true,
    eyebrow: 'Stop 2 · Last road before the sea',
    title: 'Drive to Rifugio Friedrich August',
    lead: "Sunday we leave the lake and take the great alpine route north — dipping into Switzerland past glacial lakes, then back into Italy through the mountain passes. This is the last long drive of the trip. After Venice, we're on planes and ferries. Make it count.",
    highlights: [
      'The Swiss alpine pass — windows down, phones away',
      'Last dinner with the car — canederli and speck in a mountain hut',
      'Settle into Rifugio Friedrich August — peaks that rise like cathedrals',
      "The drive sets the tone: we're not rushing, but we're moving",
    ],
    proposed: 'Sunday, August 30 · scenic drive (4h 20m) from Como through Switzerland to the Dolomites',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Faloria_Cortina_d%27Ampezzo_10.jpg/960px-Faloria_Cortina_d%27Ampezzo_10.jpg',
    imageAlt: "Dolomite peaks near Cortina d'Ampezzo",
  },
  {
    id: 'dolomites',
    eyebrow: 'Stop 3 · Mountain days',
    title: 'The Italian Dolomites',
    lead: "Two days in the peaks before Venice calls. Seceda's ridgeline when the morning light hits the rock faces, Lago di Carezza's emerald water, one night at altitude with the rifugio to ourselves. We move on Tuesday — but the Dolomites stay with you.",
    highlights: [
      "Seceda ridgeline hike — the famous 'ocean of peaks' panorama",
      'Lago di Carezza (Karersee) — the rainbow lake, a 20-minute loop',
      'Less crowded trails — we pick times and paths the tour groups miss',
      'One night at Rifugio Friedrich August + their legendary donuts',
      'Packed and moving by Tuesday — Venice is a short drive',
    ],
    proposed: 'Sunday–Monday, August 30–September 1 · two mountain days · drive to Venice Tuesday',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Geislergruppe.jpg/1280px-Geislergruppe.jpg',
    imageAlt: 'Geisler peaks, Dolomites near Seceda',
  },
  {
    id: 'venice',
    className: 'alt',
    reverse: true,
    eyebrow: 'Stop 4 · The pivot point',
    title: 'Venice',
    lead: "Tuesday we drive in and drop the car for good. Two days in the canals — gondolas, cicchetti, bacari with house wine that costs nothing — and then Thursday we fly east. Croatia is waiting on the other side of the Adriatic. Venice is where the trip turns.",
    highlights: [
      "Drop the rental for good — from here it's boats and planes",
      'Gondola at golden hour through the quiet back canals',
      "St. Mark's Basilica & Doge's Palace — worth booking ahead",
      'Cicchetti crawl through the bacaro bars of Cannaregio',
      'Thursday: one-way flight across the Adriatic to Dubrovnik',
    ],
    proposed: 'September 1–3 · Tuesday–Thursday in the floating city · fly to Croatia Thursday',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Venezia_aerial_view.jpg/1280px-Venezia_aerial_view.jpg',
    imageAlt: 'Aerial view of Venice',
  },
  {
    id: 'dubrovnik',
    eyebrow: "Stop 5 · King's Landing",
    title: 'Dubrovnik, Croatia',
    lead: "Thursday's one-way flight to the Adriatic — then three nights in one of Europe's most dramatic cities. We walk the walls at sunset, claim a spot on Plaža Banje, eat fresh seafood on terraces above the sea. And yes — I'll sit on the Iron Throne like the GoT fan I will never stop being.",
    highlights: [
      'Old Town Dubrovnik — limestone streets, sea on every side',
      'Iron Throne & Lovrijenac Fortress — Game of Thrones filming locations',
      'City walls walk at sunset — the best view in the Adriatic',
      'Plaža Banje beach — swim, dry off, go back in',
      'Croatian wine and fresh fish on a terrace above the water',
    ],
    proposed: 'September 3–6 · Thursday–Sunday · three nights in the Old Town',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/The_walls_of_the_fortress_and_View_of_the_old_city._panorama.jpg/1280px-The_walls_of_the_fortress_and_View_of_the_old_city._panorama.jpg',
    imageAlt: 'Dubrovnik Old Town panorama from the city walls',
  },
  {
    id: 'montenegro',
    className: 'alt',
    reverse: true,
    eyebrow: 'Stop 6 · A third country',
    title: 'Herceg Novi, Montenegro',
    lead: "One day across the Bay of Kotor — another coast, another country, no packing required. The bay itself is the attraction: fjord-like water, fortressed headlands, boats threading between it all. Herceg Novi by lunch, back to Dubrovnik by evening, a new passport stamp for the collection.",
    highlights: [
      'Ferry or boat from Dubrovnik — bay views the whole way',
      'Herceg Novi old town & Kanli Kula fortress',
      'Bay of Kotor — some of the most dramatic coastal scenery in Europe',
      'Lunch with Montenegrin wine by the water — back by evening',
      'Third country, zero extra packing',
    ],
    proposed: 'Day trip during Dubrovnik stay · September 3–6 window',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Kotor_aerial_1.jpg/1280px-Kotor_aerial_1.jpg',
    imageAlt: 'Bay of Kotor, Montenegro',
  },
  {
    id: 'puglia',
    eyebrow: 'Stop 7 · Back in Italy',
    title: 'Bari & Polignano a Mare',
    lead: "Sunday we fly from Dubrovnik to Bari — back to Italy, south side. After Croatia's drama, Puglia is the exhale: white cliffs hanging over turquoise water at Polignano, grandmothers rolling orecchiette in open doorways in Bari. Three days of slow on Italy's Adriatic heel.",
    highlights: [
      'Back in Italy — a different Italy than we left',
      'Polignano a Mare — white medieval city above turquoise sea',
      'Lama Monachile beach — swim under the cliffs',
      'Bari Old Town — fresh pasta made on the street, no menu needed',
      'Three quiet days before the Amalfi finale',
    ],
    proposed: 'September 6–9 · Sunday–Wednesday · fly in from Dubrovnik, three days on the coast',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/70044_Polignano_A_Mare_BA%2C_Italy_-_panoramio_%284%29.jpg/1280px-70044_Polignano_A_Mare_BA%2C_Italy_-_panoramio_%284%29.jpg',
    imageAlt: 'Polignano a Mare, Puglia, Adriatic coast',
  },
  {
    id: 'amalfi',
    className: 'alt',
    reverse: true,
    eyebrow: 'Stop 8 · The Italian farewell',
    title: 'Naples & the Amalfi Coast',
    lead: "Wednesday we reach Naples — and then three days where Italy saves its loudest, most beautiful argument for last. Vesuvius. Pompeii. Positano's pastel cliffs. Capri with a drink at the top of the chair lift. Three days is exactly enough to feel the coast without burning out on beautiful.",
    highlights: [
      'Mt. Vesuvius summit hike — crater views over the whole bay',
      'Pompeii — two thousand years under your feet',
      'Positano — colorful cliffs, staircases, the view everyone wants',
      'Boat to Capri · chair lift to the top · drinks with the coast below',
      'Fly home Saturday — with something to talk about for years',
    ],
    proposed: 'September 9–11 · Wednesday–Friday on the Amalfi Coast · fly home Saturday, September 12',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Positano_Sunset.JPG/1280px-Positano_Sunset.JPG',
    imageAlt: 'Positano at sunset, Amalfi Coast',
  },
];
