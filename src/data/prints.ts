// ---------------------------------------------------------------------------
// Past prints. These feed both the homepage carousel and the gallery page.
//
// To add your own: drop the photo in /public/prints/ and add an entry below.
// `featured: true` puts it in the homepage carousel.
// ---------------------------------------------------------------------------

export interface Print {
  id: string;
  title: string;
  image: string;
  alt: string;
  material: 'PLA' | 'PETG' | 'TPU';
  category: 'Multicolour' | 'Functional' | 'Display' | 'Prototype' | 'Custom model';
  blurb: string;
  featured?: boolean;
}

export const prints: Print[] = [
  {
    id: 'harbour-sign',
    title: 'Multicolour shopfront sign',
    image: '/prints/print-01.svg',
    alt: 'A layered multicolour 3D printed shopfront sign',
    material: 'PLA',
    category: 'Multicolour',
    blurb:
      'Four-colour logo sign for a Newtown cafe. Colours are printed into the part, so the lettering will never chip or fade.',
    featured: true,
  },
  {
    id: 'drone-bumper',
    title: 'Flexible drone bumpers',
    image: '/prints/print-02.svg',
    alt: 'A set of flexible TPU drone bumpers',
    material: 'TPU',
    category: 'Functional',
    blurb:
      'A run of 40 TPU bumpers for a drone hobbyist. Soft enough to absorb a crash, tough enough to survive dozens of them.',
    featured: true,
  },
  {
    id: 'terrain-set',
    title: 'Tabletop terrain set',
    image: '/prints/print-03.svg',
    alt: 'A set of 3D printed tabletop gaming terrain pieces',
    material: 'PLA',
    category: 'Display',
    blurb:
      'Twelve modular terrain pieces at 0.12 mm layers. Fine detail printing that takes paint beautifully straight off the plate.',
    featured: true,
  },
  {
    id: 'pump-bracket',
    title: 'Replacement pump bracket',
    image: '/prints/print-04.svg',
    alt: 'A PETG replacement bracket for a pump housing',
    material: 'PETG',
    category: 'Custom model',
    blurb:
      'The original snapped and was long discontinued. Modelled from the broken pieces and reprinted in PETG, stronger than the part it replaced.',
    featured: true,
  },
  {
    id: 'enclosure',
    title: 'Electronics enclosure',
    image: '/prints/print-05.svg',
    alt: 'A PETG electronics enclosure with a fitted lid',
    material: 'PETG',
    category: 'Functional',
    blurb:
      'Vented housing for a custom sensor board, with heat-set threaded inserts fitted so the lid can come off as often as it needs to.',
    featured: true,
  },
  {
    id: 'architectural',
    title: 'Architectural massing model',
    image: '/prints/print-06.svg',
    alt: 'A white architectural massing model of several buildings',
    material: 'PLA',
    category: 'Prototype',
    blurb:
      'A site model for a development pitch, printed in sections and bonded. Delivered two days after the CAD landed in our inbox.',
    featured: true,
  },
  {
    id: 'planters',
    title: 'Geometric planter series',
    image: '/prints/print-07.svg',
    alt: 'Three geometric 3D printed planters in different colours',
    material: 'PETG',
    category: 'Display',
    blurb:
      'A repeat order for a local homewares stall. PETG holds up to watering and a spot on a sunny windowsill.',
  },
  {
    id: 'gasket-run',
    title: 'Custom gasket run',
    image: '/prints/print-08.svg',
    alt: 'A stack of flexible TPU gaskets',
    material: 'TPU',
    category: 'Functional',
    blurb:
      'Short-run gaskets modelled from a hand-measured sketch, printed in TPU when the original supplier could not do quantities this small.',
  },
  {
    id: 'cosplay-helmet',
    title: 'Cosplay helmet shell',
    image: '/prints/print-09.svg',
    alt: 'A large 3D printed helmet shell in sections',
    material: 'PLA',
    category: 'Display',
    blurb:
      'Printed in seven sections, bonded, then sanded smooth and ready for the customer to prime and paint.',
  },
];

export const featuredPrints = prints.filter((p) => p.featured);
