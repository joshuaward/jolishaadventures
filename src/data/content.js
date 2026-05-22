export const benefits = [
  {
    title: 'Italy, Croatia & Montenegro',
    text: "One continuous adventure south and east — northern lakes and peaks, then Venice, across the sea to Dubrovnik, a day in Montenegro, back to Italy's heel, and down to Naples. Three countries, one story.",
  },
  {
    title: 'Lake Como on the weekend',
    text: "Menaggio as home base, boat taxis between villages, Bellagio villas, and that bridge in Nesso — the lake when it's meant to be savored, not squeezed into a weekday.",
  },
  {
    title: 'Dolomites at altitude',
    text: "Seceda's ridgeline panorama, Lago di Carezza's emerald water, and a night at Rifugio Friedrich August with those legendary donuts — mountains that feel earned, not rushed.",
  },
  {
    title: 'Venice without a car',
    text: 'We drop the rental and live on foot and vaporetto — gondolas at golden hour, cicchetti crawls, house wine in bacari, and getting lost in Castello together.',
  },
  {
    title: 'Dubrovnik & the Adriatic',
    text: 'Marble Old Town streets, city walls at sunset, Plaža Banje swims, fresh seafood terraces — plus a certain Iron Throne for the nerd in me and sunshine for you.',
  },
  {
    title: 'Montenegro by boat',
    text: 'A day across the Bay of Kotor to Herceg Novi — another coastline, another country, back by evening without packing up our Dubrovnik base.',
  },
  {
    title: "Puglia's Adriatic coast",
    text: "Polignano's white cliffs over turquoise water, Lama Monachile beach, and Bari vecchia where pasta is made in doorways — the heel of Italy before the world catches on.",
  },
  {
    title: 'Amalfi as the grand finale',
    text: "Vesuvius at the crater rim, Pompeii under our feet, Positano's pastel cliffs, a boat day to Capri, and a drink at the top of the chair lift with the whole coast below us.",
  },
  {
    title: 'One-way all the way',
    text: 'Every flight and train leg moves us forward — no doubling back, no trapped rental loops. We can slow down, skip ahead, or stretch a stay without breaking the trip.',
  },
  {
    title: 'Thursday out, Saturday home',
    textBefore: 'Leave Aug 27 so we land into magic, not jet lag — and fly home Sep 12 so ',
    strong: 'Sunday the 13th',
    textAfter: ' is ours to unpack and breathe before the week begins again.',
  },
];

export const calendarDays = [
  { dayName: 'Wed', dayDate: 'Aug 26', dayLabel: "You work — I've got prep covered", variant: 'sage' },
  { dayName: 'Thu', dayDate: 'Aug 27', dayLabel: 'We depart', variant: 'highlight' },
  { dayName: 'Fri', dayDate: 'Aug 28', dayLabel: 'Arrive in Milan & drive to Lake Como' },
  { dayName: 'Fri–Sat', dayDate: 'Aug 28–30', dayLabel: 'Lake Como weekend' },
  { dayName: 'Sun–Mon', dayDate: 'Aug 30–Sep 1', dayLabel: 'Hiking the Dolomites' },
  { dayName: 'Tue', dayDate: 'Sep 1', dayLabel: 'Drive to Venice' },
  { dayName: 'Tue–Thu', dayDate: 'Sep 1–3', dayLabel: 'Explore the floating city' },
  { dayName: 'Thu', dayDate: 'Sep 3', dayLabel: 'One-way flight to Dubrovnik' },
  { dayName: 'Thu–Sun', dayDate: 'Sep 3–6', dayLabel: 'Dubrovnik + Montenegro' },
  { dayName: 'Sun', dayDate: 'Sep 6', dayLabel: 'One-way flight to Bari, Italy' },
  { dayName: 'Sun–Wed', dayDate: 'Sep 6–9', dayLabel: 'Adriatic coast' },
  { dayName: 'Wed', dayDate: 'Sep 9', dayLabel: 'Flight or train to Naples' },
  { dayName: 'Wed–Fri', dayDate: 'Sep 9–11', dayLabel: 'Amalfi Coast' },
  { dayName: 'Sat', dayDate: 'Sep 12', dayLabel: 'Fly home from Naples', variant: 'highlight' },
  { dayName: 'Sun', dayDate: 'Sep 13', dayLabel: 'Recovery day — together', variant: 'sage' },
];

export const timelineItems = [
  { num: '1', text: 'Milan → Lake Como — Fri Aug 28 arrive & drive north · weekend Aug 28–30' },
  { num: '2', text: 'Scenic drive → Dolomites — Sun Aug 30 · hike Sun–Mon Aug 30–Sep 1' },
  { num: '3', text: 'Venice — drive Tue Sep 1 · explore Sep 1–3 · drop the car' },
  { num: '4', text: 'Dubrovnik, Croatia — flight Thu Sep 3 · Old Town Sep 3–6' },
  { num: '5', text: 'Day trip → Herceg Novi, Montenegro — during our Dubrovnik stay' },
  { num: '6', text: 'Bari & the Adriatic coast — flight Sun Sep 6 · Puglia Sep 6–9' },
  { num: '7', text: 'Naples & the Amalfi Coast — Wed Sep 9 · coast Sep 9–11' },
  { num: '8', text: 'Fly home from Naples — Sat Sep 12 · Sun Sep 13 to recover' },
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
    proposed: 'Aug 28–30 · Fri arrive from Milan, weekend on the water',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Sentiero_del_Viandante_DSC_6340_%2814020554463%29.jpg/1280px-Sentiero_del_Viandante_DSC_6340_%2814020554463%29.jpg',
    imageAlt: 'Lake Como shoreline near Bellagio',
  },
  {
    id: 'drive-bolzano',
    className: 'alt-bg',
    reverse: true,
    eyebrow: 'Stop 2 · The scenic transition',
    title: 'Drive to Bolzano',
    lead: 'Sunday we leave the lake behind for one of the most beautiful drives in Europe — alpine villages through the Brenner corridor into South Tyrol, where Italian espresso meets Austrian alpine culture and the Dolomites rise like cathedrals of stone.',
    highlights: [
      'Window-down moments through mountain passes',
      "Bolzano's medieval arcades and Ötzi Museum",
      'First taste of canederli and speck in the Dolomites foothills',
    ],
    proposed: 'Sun Aug 30 · scenic drive (4h 20m) from Como to the mountains',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Faloria_Cortina_d%27Ampezzo_10.jpg/960px-Faloria_Cortina_d%27Ampezzo_10.jpg',
    imageAlt: 'Dolomites near Cortina d\'Ampezzo',
  },
  {
    id: 'dolomites',
    eyebrow: 'Stop 3 · Mountain days',
    title: 'The Italian Dolomites',
    lead: "Sunday and Monday in the peaks — Seceda when the ridgeline breathes, Lago di Carezza's emerald water, a night at Rifugio Friedrich August, and those legendary donuts at altitude.",
    highlights: [
      'Seceda ridgeline hike — the famous "ocean of peaks" panorama',
      'Lago di Carezza (Karersee) — rainbow lake, 20-minute loop',
      'Optional: Lago di Braies — the postcard lake (if we want the crowds)',
      'Overnight at Rifugio Friedrich August + their famous donuts',
      'Less crowded trails — better photos, more solitude',
    ],
    proposed: 'Sun–Mon Aug 30–Sep 1 · hiking the Dolomites',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Geislergruppe.jpg/1280px-Geislergruppe.jpg',
    imageAlt: 'Geisler peaks, Dolomites near Seceda',
  },
  {
    id: 'venice',
    className: 'alt-bg',
    reverse: true,
    eyebrow: 'Stop 4 · The floating city',
    title: 'Venice',
    lead: "Tuesday we drive in and drop the rental, then surrender to canals through Thursday. A gondola at golden hour, cicchetti in a bacaro, house wine that costs less than bottled water at home — and nowhere to be except lost together in the world's most romantic maze.",
    highlights: [
      'Drop rental — foot and vaporetto only',
      'Romantic gondola ride through quiet canals',
      "St. Mark's Basilica & Doge's Palace (book ahead)",
      'Rialto Market morning, cicchetti crawl by evening',
      'Get lost in Castello — the neighborhood tourists skip',
    ],
    proposed: 'Sep 1–3 · Tue drive in, explore the floating city · Thu fly to Dubrovnik',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Venezia_aerial_view.jpg/1280px-Venezia_aerial_view.jpg',
    imageAlt: 'Aerial view of Venice',
  },
  {
    id: 'dubrovnik',
    eyebrow: 'Stop 5 · Adriatic escape',
    title: 'Dubrovnik, Croatia',
    lead: "Thursday's one-way flight to King's Landing — then four days in the Old Town. We walk the city walls at sunset, claim a spot on Plaža Banje, and yes — I'll sit on the Iron Throne like the Game of Thrones geek I proudly am. You get the sun; I get five minutes of nerd joy.",
    highlights: [
      'Old Town Dubrovnik — marble streets, sea on every side',
      'Iron Throne & Lovrijenac Fortress (GoT filming locations)',
      'City walls walk — best views in the Adriatic',
      'Plaža Banje beach — swim, sun, relax',
      'Fresh seafood and Croatian wine on the terrace',
    ],
    proposed: 'Sep 3–6 · Thu–Sun · flight in Thu, explore through Sunday',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/The_walls_of_the_fortress_and_View_of_the_old_city._panorama.jpg/1280px-The_walls_of_the_fortress_and_View_of_the_old_city._panorama.jpg',
    imageAlt: 'Dubrovnik Old Town from the city walls',
  },
  {
    id: 'montenegro',
    className: 'alt-bg',
    reverse: true,
    eyebrow: 'Stop 6 · Day trip',
    title: 'Herceg Novi, Montenegro',
    lead: "A boat day across the Bay of Kotor — another country, another coastline, without changing our base. Herceg Novi's fortresses, seafood by the water, and views that make you forget you're on a schedule at all.",
    highlights: [
      'Boat or ferry from Dubrovnik — bay scenery the whole way',
      'Herceg Novi old town & seaside promenade',
      'Kotor Bay views — fjord-like beauty',
      'Lunch with Montenegrin wine — back by evening',
    ],
    proposed: 'Day trip during Dubrovnik · Sep 3–6 window',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Kotor_aerial_1.jpg/1280px-Kotor_aerial_1.jpg',
    imageAlt: 'Bay of Kotor, Montenegro',
  },
  {
    id: 'puglia',
    eyebrow: 'Stop 7 · Adriatic coast',
    title: 'Bari & Polignano a Mare',
    lead: "Sunday we fly one-way from Dubrovnik to Bari — then three days on Puglia's Adriatic coast before the crowds fully discover it. Polignano's white cliffs plunge into turquoise water; Bari vecchia serves orecchiette made by grandmothers in doorways. We slow down here — on purpose.",
    highlights: [
      'Polignano a Mare — white Adriatic medieval coastal city',
      'Lama Monachile beach & cliffside views',
      'Bari Old Town — pasta made in plain sight',
      'One-way flight from Dubrovnik · Sun Sep 6',
    ],
    proposed: 'Sep 6–9 · Sun–Wed · Adriatic coast & Polignano',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/70044_Polignano_A_Mare_BA%2C_Italy_-_panoramio_%284%29.jpg/1280px-70044_Polignano_A_Mare_BA%2C_Italy_-_panoramio_%284%29.jpg',
    imageAlt: 'Polignano a Mare, Puglia',
  },
  {
    id: 'amalfi',
    className: 'alt-bg',
    reverse: true,
    eyebrow: 'Stop 8 · Grand finale',
    title: 'Naples & the Amalfi Coast',
    lead: "Wednesday we fly or train to Naples — then three days where Italy gets loud, delicious, and vertical. We hike the crater of Mt. Vesuvius and stand where Pompeii fell in 79 AD. Positano's pastel cliffs, a boat day to Capri and a drink at the top of the chair lift — the coast everyone dreams about.",
    highlights: [
      'Mt. Vesuvius summit hike — crater views over the bay',
      'Pompeii or Herculaneum — history under your feet',
      'Positano — colorful hillside architecture',
      'Boat ferry day trip to Capri',
      'Chair lift to the top — drink with the whole coast at your feet',
      'Fly home from Naples · Saturday Sep 12',
    ],
    proposed: 'Sep 9–11 · Wed–Fri on the Amalfi Coast · fly home Sat Sep 12',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Positano_Sunset.JPG/1280px-Positano_Sunset.JPG',
    imageAlt: 'Positano at sunset, Amalfi Coast',
  },
];
