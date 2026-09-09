// ---------------------------------------------------------------------------
// Business details. Edit these and they update everywhere on the site.
// ---------------------------------------------------------------------------

export const site = {
  name: 'Taranium 3D',
  tagline: 'Sydney 3D printing & modelling',
  description:
    'Multicolour 3D printing in PLA, PETG and TPU, plus custom 3D modelling. Based in Sydney, shipping Australia wide. From $30 AUD/kg + shipping.',
  location: 'Sydney, NSW, Australia',
  email: 'prints@taranium.dev',
  phone: '+61 470 650 202',
  // Displayed on the enquire page. Set to null to hide a row.
  turnaround: '2–5 business days for most jobs',
  shipping: 'Australia Post & Sendle, Australia wide. Sydney metro pickup by arrangement.',
  social: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
  },
} as const;

export const pricing = {
  fromPerKg: 30, // AUD per kilogram of filament
  currency: 'AUD',
} as const;

// ---------------------------------------------------------------------------
// The enquiry form is a Fillout embed (id: aivaD3EtXjus) on src/pages/enquire.astro.
// Submissions are collected in Fillout — edit the questions there, not here.
// ---------------------------------------------------------------------------
