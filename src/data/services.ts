export interface Material {
  id: string;
  name: string;
  short: string;
  blurb: string;
  strengths: string[];
  bestFor: string[];
  notes: string;
  colour: string; // accent used on the card
}

export const materials: Material[] = [
  {
    id: 'pla',
    name: 'PLA',
    short: 'Polylactic acid',
    blurb:
      'The everyday workhorse. Crisp detail, a huge colour range and the cheapest way to get a great looking part on your desk.',
    strengths: ['Sharpest surface detail', 'Widest colour range', 'Lowest cost per kilo', 'Rigid and dimensionally stable'],
    bestFor: ['Display models & figurines', 'Prototypes and fit checks', 'Board game inserts', 'Signage and props'],
    notes: 'Softens above roughly 55 °C, so keep PLA parts out of a parked car over a Sydney summer.',
    colour: '#b45309',
  },
  {
    id: 'petg',
    name: 'PETG',
    short: 'Glycol-modified PET',
    blurb:
      'Tougher and more heat tolerant than PLA with a slight gloss. The default choice for parts that actually have to do a job.',
    strengths: ['Impact resistant', 'Handles ~75 °C', 'UV and moisture tolerant', 'Food-safe grades available'],
    bestFor: ['Functional brackets & mounts', 'Outdoor fixtures', 'Enclosures and housings', 'Replacement parts'],
    notes: 'Layer lines are slightly more visible than PLA — worth it for the durability.',
    colour: '#0f766e',
  },
  {
    id: 'tpu',
    name: 'TPU',
    short: 'Thermoplastic polyurethane',
    blurb:
      'Flexible rubber-like filament. Bends, squashes and springs back without cracking, printed in a range of shore hardnesses.',
    strengths: ['Genuinely flexible', 'Excellent abrasion resistance', 'Great vibration damping', 'Tear resistant'],
    bestFor: ['Gaskets and seals', 'Phone & drone bumpers', 'Grips and feet', 'Wearables and straps'],
    notes: 'Prints slower than rigid filaments, so allow a little extra time on larger TPU jobs.',
    colour: '#5b4bc4',
  },
];

export interface Service {
  id: string;
  title: string;
  summary: string;
  detail: string;
  points: string[];
  icon: 'layers' | 'spool' | 'cube' | 'wrench';
}

export const services: Service[] = [
  {
    id: 'multicolour',
    title: 'General Prototyping',
    summary:
      'Need a part printed? We got you covered. We can print in a range of colours and materials, all at the best prices on the market.',
    detail:
      'We can print your parts in a range of colours and materials, all at the best prices on the market. We are able to print in PLA, PETG and TPU, starting prices from $30 AUD per kilogram of filament plus shipping*',
    points: [
      '3 different materials: PLA, PETG and TPU',
      'Wide range of colours available',
      'Build volume up to 256 × 256 × 256 mm',
      'Ideal for functional parts, display pieces and prototypes',
    ],
    icon: 'layers',
  },
  {
    id: 'materials',
    title: 'Multicolour & multi-material printing',
    summary:
      'Print a file with up to 4 different colours or materials in a single print. Great for parts that need to look good.',
    detail:
      'We can print a single part in up to 4 different colours or materials, all in one go. This is great for parts that need to be functional and look good at the same time. Prices start at $40 AUD per kilogram of filament plus shippinging*',
    points: [
      'Up to 4 different colours or materials in a single print',
      'Wide range of colour combos available',
      'Build volume up to 256 × 256 × 256 mm',
      'Great for functional parts, display pieces and mass produced products',
    ],
    icon: 'spool',
  },
  {
    id: 'modelling',
    title: '3D modelling & design',
    summary:
      'No STL? We will work with you to design a product and print it for you.',
    detail:
      'We will work with you to design a product and print it for you. You get a print-ready model, and on request the source file too, so the design is yours to reuse or modify later.',
    points: [
      'We make any design from a sketch or description of what you need',
      'Reverse engineering of broken or discontinued parts',
      'Product design and prototyping for small businesses and makers',
      'Prices on request, depending on complexity and turnaround time',
    ],
    icon: 'cube',
  },
  {
    id: 'finishing',
    title: 'Finishing',
    summary:
      'Support removal, sanding and threaded inserts so the part arrives ready to use.',
    detail:
      'Every print has its supports removed and is inspected before it ships. Beyond that, we can sand, smooth, install heat-set threaded inserts and pack things properly for the trip.',
    points: [
      'Support removal and inspection on every order',
      'Sanding and smoothing on request',
      'Heat-set threaded inserts and hardware fitting',
    ],
    icon: 'wrench',
  },
];

export const processSteps = [
  {
    title: 'Send your files',
    body: 'Upload your STL, 3MF, STEP or OBJ files — or just describe what you need and we will model it for you.',
  },
  {
    title: 'Get a quote',
    body: 'We check the model, confirm material and colour, and come back with a fixed price and lead time. Usually within one business day.',
  },
  {
    title: 'We print it',
    body: 'Approve the quote and your job goes on the plate. Photos of the finished part before it ships, on request.',
  },
  {
    title: 'Ships or pick up',
    body: 'Packed and posted Australia wide, or collect it in person if you are around Sydney.',
  },
];

export const faqs = [
  {
    q: 'How much will my print cost?',
    a: 'Pricing starts at $30 AUD per kilogram of filament plus shipping. Most desk-sized prints use well under 100 g, so the material cost on a typical part is only a few dollars — the rest of the quote covers machine time, finishing and packaging. Send your files through the enquiry form for an exact price.',
  },
  {
    q: 'What files do you accept?',
    a: 'STL is the most common, and we also take 3MF, OBJ and STEP. If you only have a sketch, a photo or a set of measurements, our modelling service can turn that into a printable file.',
  },
  {
    q: 'How big can you print?',
    a: 'Up to 256 × 256 × 256 mm in a single piece. Larger models are printed in sections for you to join yourself — ask and we will tell you how the part would need to be split.',
  },
  {
    q: 'How long does it take?',
    a: 'Most jobs are printed and shipped within 2–5 business days. Large batches, multicolour work and custom modelling take longer, and we will always confirm the timeline with your quote before you commit.',
  },
  {
    q: 'Do you do bulk or repeat orders?',
    a: 'Yes. Per-unit pricing drops as quantities go up, and we keep your files on hand so repeat runs are a single message. Talk to us about ongoing production for small businesses and makers.',
  },
  {
    q: 'Can you match a specific colour?',
    a: 'Usually. Send a hex code, a Pantone reference or a clear photo and we will match it as closely as the available filament allows, or tell you upfront if it is not achievable.',
  },
];
