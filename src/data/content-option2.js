export const benefits = [
  {
    title: 'Italy, peak to coast',
    text: "One continuous Italian adventure — no borders to cross, no rush to catch a Dubrovnik flight. Northern lakes and peaks, Venice, hidden Puglia, and five full days on the Amalfi. The same dates, more depth.",
  },
  {
    title: 'Lake Como on the weekend',
    text: "Menaggio as home base, boat taxis between villages, Bellagio villas, and that bridge in Nesso — the lake when it's meant to be savored, not squeezed into a weekday.",
  },
  {
    title: 'Three full days in the Dolomites',
    text: "Seceda's ridgeline, Lago di Carezza's emerald water, Lago di Braies without the rush, and two nights at altitude. We finally have time to go slow in the mountains and earn every donut at the rifugio.",
  },
  {
    title: 'Venice without a car',
    text: 'We drop the rental and live on foot and vaporetto — gondolas at golden hour, cicchetti crawls, house wine in bacari, and getting lost in Castello together.',
  },
  {
    title: "Puglia's Adriatic coast",
    text: "Polignano's white cliffs over turquoise water, Lama Monachile beach, and Bari vecchia where pasta is made in doorways — the heel of Italy before the world catches on.",
  },
  {
    title: 'Five days on the Amalfi',
    text: "Vesuvius at the crater rim, Pompeii under our feet, Positano's pastel cliffs, a boat day to Capri, Ravello's clifftop gardens, and a proper slow morning in Amalfi town — the coast everyone dreams about, with time to actually dream it.",
  },
  {
    title: 'One-way all the way',
    text: 'Every flight and train leg moves us forward — no doubling back, no trapped rental loops. We can slow down, skip ahead, or stretch a stay without breaking the trip.',
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
  { dayName: 'Sun–Wed', dayDate: 'Aug 30–Sep 2', dayLabel: 'Hiking the Dolomites' },
  { dayName: 'Wed', dayDate: 'Sep 2', dayLabel: 'Drive to Venice' },
  { dayName: 'Wed–Fri', dayDate: 'Sep 2–4', dayLabel: 'Explore the floating city' },
  { dayName: 'Fri', dayDate: 'Sep 4', dayLabel: 'One-way flight to Bari, Italy' },
  { dayName: 'Fri–Mon', dayDate: 'Sep 4–7', dayLabel: 'Adriatic coast' },
  { dayName: 'Mon', dayDate: 'Sep 7', dayLabel: 'Flight or train to Naples' },
  { dayName: 'Mon–Sat', dayDate: 'Sep 7–12', dayLabel: 'Amalfi Coast' },
  { dayName: 'Sat', dayDate: 'Sep 12', dayLabel: 'Fly home from Naples', variant: 'highlight' },
  { dayName: 'Sun', dayDate: 'Sep 13', dayLabel: 'Recovery day — together', variant: 'sage' },
];

export const timelineItems = [
  { num: '1', text: 'Milan → Lake Como — Friday, August 28 arrive & drive north · weekend August 28–30' },
  { num: '2', text: 'Scenic drive → Dolomites — Sunday, August 30 · hike Sunday–Wednesday, August 30–September 2' },
  { num: '3', text: 'Venice — drive Wednesday, September 2 · explore September 2–4 · drop the car' },
  { num: '4', text: 'Bari & the Adriatic coast — flight Friday, September 4 · Puglia September 4–7' },
  { num: '5', text: 'Naples & the Amalfi Coast — Monday, September 7 · coast September 7–11' },
  { num: '6', text: 'Fly home from Naples — Saturday, September 12 · Sunday, September 13 to recover' },
];

export const destinations = [
  {
    id: 'lake-como',
    eyebrow: 'Stop 1 · Weekend on the water',
    title: 'Lake Como',
    lead: "Friday we land in Milan and drive north; by weekend we're waking up in Menaggio with the Alps on the water. We'll hop boat taxis village to village, tour the villas of Bellagio, and — if you're brave — find the famous diving spot at the Ponte di Nesso.",
    highlights: [
      'Stay in Menaggio — quieter charm, easy ferry access',
      'Boat taxis around the lake from one picturesque shore to the next',
      "Jump off the bridge in Nesso (optional — I'll go first)",
      'Villa del Balbianello & Villa Melzi gardens in Bellagio',
      "Varenna's lakeside promenade and gelato at sunset",
    ],
    proposed: 'August 28–30 · Friday, arrive from Milan, weekend on the water',
    image:
      'https://images.pexels.com/photos/28267238/pexels-photo-28267238.jpeg?auto=compress&cs=tinysrgb&w=1280',
    imageAlt: 'Hillside villages on Lake Como, Lombardy Italy',
  },
  {
    id: 'drive-refugio-friedrich-august',
    className: 'alt',
    reverse: true,
    eyebrow: 'Stop 2 · The scenic transition',
    title: 'Drive to Refugio Friedrich August',
    lead: "Sunday we leave the lake behind for one of the most beautiful drives in Europe — we'll take the longer scenic route, dipping into Switzerland past glimmering alpine lakes before crossing back into Italy through mountain passes to the Dolomites, where we settle in at Rifugio Friedrich August among peaks that rise like cathedrals of stone.",
    highlights: [
      'Window-down moments through mountain passes',
      'Arrival at Rifugio Friedrich August — alpine hut in the peaks',
      'First taste of canederli and speck in the Dolomites foothills',
    ],
    proposed: 'Sunday, August 30 · scenic drive (4h 20m) from Como to Rifugio Friedrich August',
    image:
      'https://images.pexels.com/photos/32636308/pexels-photo-32636308.jpeg?auto=compress&cs=tinysrgb&w=1280',
    imageAlt: 'Remote mountain hut perched on rocky Dolomite peaks',
  },
  {
    id: 'dolomites',
    eyebrow: 'Stop 3 · Three mountain days',
    title: 'The Italian Dolomites',
    lead: "Three full days in the peaks — Seceda when the ridgeline breathes, Lago di Carezza's emerald water, Lago di Braies without the crowd pressure, and two nights at altitude. No rushing. No skipping. Just mountains.",
    highlights: [
      'Seceda ridgeline hike — the famous "ocean of peaks" panorama',
      'Lago di Carezza (Karersee) — rainbow lake, 20-minute loop',
      "Lago di Braies — the postcard lake, now there's actually time for it",
      'Val di Funes & the Ranui Chapel — the shot from every Dolomites dream board',
      'Two nights at Rifugio Friedrich August + their legendary donuts',
    ],
    proposed: 'Sunday–Wednesday, August 30–September 2 · three full days in the peaks',
    image:
      'https://images.pexels.com/photos/36726744/pexels-photo-36726744.jpeg?auto=compress&cs=tinysrgb&w=1280',
    imageAlt: 'Dramatic Dolomite peaks rising through summer clouds, Italy',
  },
  {
    id: 'venice',
    className: 'alt',
    reverse: true,
    eyebrow: 'Stop 4 · The floating city',
    title: 'Venice',
    lead: "Wednesday we drive in and drop the rental, then surrender to canals through Friday. A gondola at golden hour, cicchetti in a bacaro, house wine that costs less than bottled water at home — and nowhere to be except lost together in the world's most romantic maze.",
    highlights: [
      'Drop rental — foot and vaporetto only',
      'Romantic gondola ride through quiet canals',
      "St. Mark's Basilica & Doge's Palace (book ahead)",
      'Rialto Market morning, cicchetti crawl by evening',
      'Get lost in Castello — the neighborhood tourists skip',
    ],
    proposed: 'September 2–4 · Wednesday, drive in, explore the floating city · Friday, fly to Bari',
    image:
      'https://images.pexels.com/photos/3791013/pexels-photo-3791013.jpeg?auto=compress&cs=tinysrgb&w=1280',
    imageAlt: 'Gondolas on a narrow canal with arched bridge, Venice Italy',
  },
  {
    id: 'puglia',
    eyebrow: 'Stop 5 · Adriatic coast',
    title: 'Bari & Polignano a Mare',
    lead: "Friday we fly one-way from Venice to Bari — then three days on Puglia's Adriatic coast before the crowds fully discover it. Polignano's white cliffs plunge into turquoise water; Bari vecchia serves orecchiette made by grandmothers in doorways. We slow down here — on purpose.",
    highlights: [
      'Polignano a Mare — white Adriatic medieval coastal city',
      'Lama Monachile beach & cliffside views',
      'Bari Old Town — pasta made in plain sight',
      'One-way flight from Venice · Friday, September 4',
    ],
    proposed: 'September 4–7 · Friday–Monday · Adriatic coast & Polignano',
    image:
      'https://images.pexels.com/photos/17697735/pexels-photo-17697735.jpeg?auto=compress&cs=tinysrgb&w=1280',
    imageAlt: 'Aerial view of Polignano a Mare cliffs and whitewashed buildings, Puglia',
  },
  {
    id: 'amalfi',
    className: 'alt',
    reverse: true,
    eyebrow: 'Stop 6 · Grand finale',
    title: 'Naples & the Amalfi Coast',
    lead: "Monday we fly or train to Naples — then five full days where Italy gets loud, delicious, and vertical. Vesuvius and Pompeii. Positano's pastel cliffs. A boat day to Capri. Ravello's clifftop gardens above the whole coast. And a slow morning in Amalfi town with nowhere to be.",
    highlights: [
      'Mt. Vesuvius summit hike — crater views over the bay',
      'Pompeii or Herculaneum — history under your feet',
      'Positano — colorful hillside architecture',
      'Boat ferry day trip to Capri & the chair lift drinks',
      'Ravello — Villa Cimbrone gardens and the Terrace of Infinity',
      'A slow morning in Amalfi town — the Duomo, paper shops, limoncello',
      'Fly home from Naples · Saturday, September 12',
    ],
    proposed: 'September 7–11 · Monday–Friday on the Amalfi Coast · fly home Saturday, September 12',
    image:
      'https://images.pexels.com/photos/6767884/pexels-photo-6767884.jpeg?auto=compress&cs=tinysrgb&w=1280',
    imageAlt: 'Aerial view of Positano cliffs and deep blue sea, Amalfi Coast',
  },
];
