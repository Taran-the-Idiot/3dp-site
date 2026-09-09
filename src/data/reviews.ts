// ---------------------------------------------------------------------------
// Customer reviews.
//
// The reviews section is HIDDEN by default. Flip `showReviews` to true below
// and it appears on the homepage and the gallery page immediately.
// ---------------------------------------------------------------------------

export const showReviews = false;

export interface Review {
  name: string;
  location: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
  job?: string;
}

export const reviews: Review[] = [
  // Replace these with real reviews before switching showReviews on.
  {
    name: 'Example Customer',
    location: 'Surry Hills, NSW',
    rating: 5,
    quote:
      'Placeholder review text. Swap these entries out for real customer feedback, then set showReviews to true in src/data/reviews.ts.',
    job: 'Multicolour signage',
  },
  {
    name: 'Example Customer',
    location: 'Parramatta, NSW',
    rating: 5,
    quote:
      'Placeholder review text. Each review needs a name, location, rating out of 5 and a quote. The job line is optional.',
    job: 'PETG replacement part',
  },
  {
    name: 'Example Customer',
    location: 'Manly, NSW',
    rating: 5,
    quote:
      'Placeholder review text. Add as many reviews as you like — the layout adapts to however many are in this list.',
    job: 'Custom 3D modelling',
  },
];
