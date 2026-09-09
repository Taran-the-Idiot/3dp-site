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
    title: 'Multicolour printing',
    summary:
      'Up to four colours in a single part — logos, labels, inlays and models that come off the plate already finished.',
    detail:
      'Multi-material printing means colour is built into the geometry rather than painted on afterwards. Text stays crisp, colours never chip or peel, and there is no masking or post-processing to pay for. Send artwork or a model with separate bodies and we will map each one to a filament.',
    points: [
      'Up to 4 colours per print',
      'Colour-swap layers or true multi-body models',
      'Colour matching from a hex code, Pantone reference or a photo',
      'Ideal for logos, signage, name plates and tabletop miniatures',
    ],
    icon: 'layers',
  },
  {
    id: 'materials',
    title: 'PLA, PETG & TPU printing',
    summary:
      'Three materials covering everything from display pieces to functional parts that need to flex or survive the weather.',
    detail:
      'Every job is sliced by hand rather than pushed through a preset. We choose layer height, wall count and infill around what the part actually has to do, so a display model is not paying for the walls a load-bearing bracket needs.',
    points: [
      'Layer heights from 0.12 mm (fine) to 0.28 mm (draft)',
      'Infill and wall count tuned to the part, not a default preset',
      'Build volume up to 256 × 256 × 256 mm — larger parts printed in sections',
      'Multiple copies priced per unit, cheaper as quantities rise',
    ],
    icon: 'spool',
  },
  {
    id: 'modelling',
    title: '3D modelling & design',
    summary:
      'No STL? We will draw it. Sketches, photos, measurements or a broken original — we model it and print it.',
    detail:
      'Parametric CAD for functional parts and mesh modelling for organic shapes. You get a print-ready model, and on request the source file too, so the design is yours to reuse or modify later.',
    points: [
      'Design from a sketch, photo or hand measurements',
      'Reverse engineering of broken or discontinued parts',
      'Repairing and print-preparing existing STL files',
      'Free STL check on any file you send — we flag problems before you pay',
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
