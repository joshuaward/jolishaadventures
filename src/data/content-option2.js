export const benefits = [
  {
    title: 'Italy — properly',
    text: "No border runs, no Adriatic flight connections. Just Italy from the Alpine lakes to the Amalfi cliffs, the way it was meant to be done — north to south, at a pace that lets you actually feel each place.",
  },
  {
    title: 'Lake Como on the weekend',
    text: "Arrive Friday, wake up Saturday in Menaggio with the Alps on the water. Boat taxis to Bellagio, jumping off the bridge in Nesso, villa gardens in the afternoon — the lake when it's meant to be savored, not squeezed.",
  },
  {
    title: 'Three full days in the Dolomites',
    text: "Seceda's ridgeline, Lago di Carezza's emerald mirror, Lago di Braies without a queue, Val di Funes and the Ranui Chapel — two nights at Hotel Schmuckhof in Chiusa, donuts at Rifugio Friedrich August, and actually enough time. The Dolomites deserve more than a drive-through.",
  },
  {
    title: 'Venice without an exit looming',
    text: "Drop the rental and live on foot and vaporetto for two days — gondolas at golden hour, cicchetti in the bacari, getting lost in Castello. No Thursday flight to catch. Just the city.",
  },
  {
    title: "Puglia's Adriatic coast",
    text: "Polignano's white cliffs above turquoise water, Lama Monachile beach, orecchiette made in doorways on Bari's old streets — the heel of Italy before the rest of the world catches on.",
  },
  {
    title: 'Five days on the Amalfi',
    text: "Vesuvius at the crater rim. Pompeii under your feet. Positano's pastel cliffs. A boat day to Capri. Ravello's Terrace of Infinity. A slow morning in Amalfi town with nowhere else to be. Five days is the difference between ticking boxes and living it.",
  },
  {
    title: 'One-way all the way',
    text: 'Every flight and train moves us forward — no doubling back, no trapped loops. We can slow down, stretch a stay, or skip ahead without the trip falling apart.',
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
  { dayName: 'Sun–Wed', dayDate: 'Aug 30–Sep 2', dayLabel: 'Three days in the Dolomites' },
  { dayName: 'Wed', dayDate: 'Sep 2', dayLabel: 'Drive to Venice' },
  { dayName: 'Wed–Fri', dayDate: 'Sep 2–4', dayLabel: 'Explore the floating city' },
  { dayName: 'Fri', dayDate: 'Sep 4', dayLabel: 'One-way flight to Bari, Italy' },
  { dayName: 'Fri–Mon', dayDate: 'Sep 4–7', dayLabel: 'Puglia, Adriatic coast' },
  { dayName: 'Mon', dayDate: 'Sep 7', dayLabel: 'Flight or train to Naples' },
  { dayName: 'Mon–Sat', dayDate: 'Sep 7–12', dayLabel: 'Five days on the Amalfi Coast' },
  { dayName: 'Sat', dayDate: 'Sep 12', dayLabel: 'Fly home from Naples', variant: 'highlight' },
  { dayName: 'Sun', dayDate: 'Sep 13', dayLabel: 'Recovery day — together', variant: 'sage' },
];

export const timelineItems = [
  { num: '1', text: 'Milan → Lake Como — Friday, August 28 arrive & drive north · weekend August 28–30' },
  { num: '2', text: 'Scenic drive → Dolomites — Sunday, August 30 · three full days August 30–September 2' },
  { num: '3', text: 'Venice — drive Wednesday, September 2 · explore September 2–4 · drop the car' },
  { num: '4', text: 'Bari & the Adriatic coast — flight Friday, September 4 · Puglia September 4–7' },
  { num: '5', text: 'Naples & the Amalfi Coast — Monday, September 7 · five days September 7–11' },
  { num: '6', text: 'Fly home from Naples — Saturday, September 12 · Sunday, September 13 to recover' },
];

export const destinations = [
  {
    id: 'lake-como',
    eyebrow: 'Stop 1 · Where it begins',
    title: 'Lake Como',
    lead: "Friday we land in Milan and drive north. By evening we're in Menaggio, the Alps reflected on the water. Two full days to exhale — boat taxis between villages, villa gardens in Bellagio, maybe a jump off the bridge in Nesso. No rush to get anywhere. This is still the beginning.",
    highlights: [
      'Stay in Menaggio — quieter charm, easy ferry access to every shore',
      'Boat taxis village to village — Varenna, Bellagio, Lenno, Tremezzo',
      "Jump off the bridge in Nesso — I'll go first, I promise",
      'Villa del Balbianello & Villa Melzi gardens in Bellagio',
      "Varenna's lakeside promenade and gelato at golden hour",
    ],
    proposed: 'August 28–30 · Friday, arrive from Milan · weekend on the water',
    image:
      'https://images.pexels.com/photos/28267238/pexels-photo-28267238.jpeg?auto=compress&cs=tinysrgb&w=1280',
    imageAlt: 'Hillside villages on Lake Como, Lombardy Italy',
  },
  {
    id: 'drive-chiusa',
    className: 'alt',
    reverse: true,
    eyebrow: 'Stop 2 · The scenic passage',
    title: 'Drive to Chiusa, Italy',
    lead: "Sunday we leave the lake for one of the most beautiful drives in Europe — the longer alpine route, dipping through Switzerland past glacial lakes before crossing back into Italy through the mountain passes to Chiusa, where we settle in at Hotel Schmuckhof. No deadline. No flight to catch at the other end. Just the road, the peaks, and us.",
    highlights: [
      'Windows down through the Swiss alpine pass — no phones, just scenery',
      'Glacial lakes glinting through the trees on the Swiss stretch',
      'Canederli and speck for dinner in the Dolomites foothills',
      'Arrival in Chiusa — Hotel Schmuckhof as our base in the peaks',
    ],
    proposed: 'Sunday, August 30 · scenic drive (4h 20m) from Como through Switzerland to Chiusa, Italy',
    image:
      'https://images.pexels.com/photos/32636308/pexels-photo-32636308.jpeg?auto=compress&cs=tinysrgb&w=1280',
    imageAlt: 'Remote mountain hut perched on rocky Dolomite peaks',
  },
  {
    id: 'dolomites',
    eyebrow: 'Stop 3 · Three mountain days',
    title: 'The Italian Dolomites',
    lead: "Three full days in the peaks — and this time, actually enough of them. Seceda when the ridgeline breathes in morning light. Lago di Carezza's emerald mirror. Lago di Braies without the crowd pressure. Val di Funes and the Ranui Chapel that ends up on everyone's dream board. Two nights at Hotel Schmuckhof in Chiusa, a stop at Rifugio Friedrich August for their legendary donuts. No skipping. Just mountains.",
    highlights: [
      'Seceda ridgeline hike — the famous "ocean of peaks" panorama',
      'Lago di Carezza (Karersee) — rainbow lake, a short loop that earns its reputation',
      "Lago di Braies — the postcard lake, finally with time to actually sit at it",
      'Val di Funes & the Ranui Chapel — the Dolomites shot everyone dreams about',
      'Overnight at Hotel Schmuckhof in Chiusa — cozy base for Dolomites day hikes',
      'Rifugio Friedrich August — their famous donuts at altitude',
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
    lead: "Wednesday we drive in and drop the rental for good. Two days in the canals — and no flight to Croatia waiting Thursday morning. A gondola at golden hour through the quiet back channels. Cicchetti and house wine in the bacari of Cannaregio. Wandering Castello until we're completely lost and entirely happy.",
    highlights: [
      'Drop the rental for good — foot and vaporetto from here',
      'Gondola at golden hour through the quiet back canals',
      "St. Mark's Basilica & Doge's Palace — worth booking ahead",
      'Rialto Market in the morning, cicchetti crawl through Cannaregio by evening',
      'Get lost in Castello — the neighborhood tourists always skip',
    ],
    proposed: 'September 2–4 · Wednesday–Friday in the floating city · fly to Puglia Friday',
    image:
      'https://images.pexels.com/photos/3791013/pexels-photo-3791013.jpeg?auto=compress&cs=tinysrgb&w=1280',
    imageAlt: 'Gondolas on a narrow canal with arched bridge, Venice Italy',
  },
  {
    id: 'puglia',
    eyebrow: 'Stop 5 · The undiscovered heel',
    title: 'Bari & Polignano a Mare',
    lead: "Friday we fly one-way from Venice to Bari — a different Italy than the one we just left. Polignano a Mare: a whitewashed medieval city perched above sea-green water, centuries of buildings stacked against the cliff edge. Bari vecchia: grandmothers in doorways rolling orecchiette by hand. Three slow days before the Amalfi finale.",
    highlights: [
      'Polignano a Mare — white Adriatic city above turquoise sea cliffs',
      'Lama Monachile beach — swim in the cove under the old town',
      'Bari Old Town — fresh pasta made in plain sight on the street',
      'Three unhurried days — on purpose, before the coast gets loud',
    ],
    proposed: 'September 4–7 · Friday–Monday · fly in from Venice, three days on the Adriatic coast',
    image:
      'https://images.pexels.com/photos/17697735/pexels-photo-17697735.jpeg?auto=compress&cs=tinysrgb&w=1280',
    imageAlt: 'Aerial view of Polignano a Mare cliffs and whitewashed buildings, Puglia',
  },
  {
    id: 'amalfi',
    className: 'alt',
    reverse: true,
    eyebrow: "Stop 6 · Italy's loudest argument",
    title: 'Naples & the Amalfi Coast',
    lead: "Monday we reach Naples — and Italy saves its most extravagant case for last. Five days to do it properly: Vesuvius from the crater rim, Pompeii at your feet, Positano's pastel cliffs, a lazy afternoon on a Capri boat, Ravello's Terrace of Infinity, and a slow morning in Amalfi town with coffee and nowhere to be. Five days is the difference between ticking a box and actually living it.",
    highlights: [
      'Mt. Vesuvius summit hike — crater views over the whole bay',
      'Pompeii or Herculaneum — two thousand years under your feet',
      'Positano — colorful cliffs, staircases, the view everyone wants',
      'Boat day to Capri · chair lift to the top · drinks with the coast below',
      'Ravello — Villa Cimbrone gardens and the Terrace of Infinity',
      'A slow morning in Amalfi town — the Duomo, the paper shops, limoncello',
    ],
    proposed: 'September 7–11 · Monday–Friday on the Amalfi Coast · fly home Saturday, September 12',
    image:
      'https://images.pexels.com/photos/6767884/pexels-photo-6767884.jpeg?auto=compress&cs=tinysrgb&w=1280',
    imageAlt: 'Aerial view of Positano cliffs and deep blue sea, Amalfi Coast',
  },
];
