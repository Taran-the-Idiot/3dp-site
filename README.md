# Harbourline 3D — Sydney 3D printing website

A four-page marketing site built with [Astro](https://docs.astro.build). No frameworks, no CSS
libraries, no build-time dependencies beyond Astro itself.

## Pages

| Route       | File                     | What's on it                                                        |
| ----------- | ------------------------ | ------------------------------------------------------------------- |
| `/`         | `src/pages/index.astro`  | Overview: hero, **print carousel**, services, materials, process, reviews (hidden), CTA |
| `/services` | `src/pages/services.astro` | Each service in detail, material guide, pricing breakdown, FAQ     |
| `/gallery`  | `src/pages/gallery.astro`  | Past customer prints, filterable by category                       |
| `/enquire`  | `src/pages/enquire.astro`  | Quote request form (STL upload, material, size) + contact details  |

## Everything you'll want to edit lives in `src/data/`

| File          | What it controls                                                          |
| ------------- | ------------------------------------------------------------------------- |
| `site.ts`     | Business name, email, phone, location, pricing                             |
| `prints.ts`   | Your past prints — feeds both the carousel and the gallery                 |
| `reviews.ts`  | Customer reviews and the **show/hide switch** for the reviews section      |
| `services.ts` | Service descriptions, material specs, process steps, FAQ entries           |

### Adding a photo to the carousel

1. Drop the image in `public/prints/`.
2. Add an entry to `prints` in `src/data/prints.ts`.
3. Set `featured: true` to have it appear in the homepage carousel. Every entry — featured or not —
   shows up in the gallery.

```ts
{
  id: 'my-print',
  title: 'Custom enclosure',
  image: '/prints/my-photo.jpg',
  alt: 'A black PETG enclosure with a fitted lid',
  material: 'PETG',
  category: 'Functional',
  blurb: 'One or two sentences about the job.',
  featured: true,
}
```

The images currently in `public/prints/` are generated placeholders — replace them with real photos.

### Turning the reviews section on

It is hidden everywhere by default. In `src/data/reviews.ts`:

```ts
export const showReviews = true;
```

That's the only change needed — the section then appears on both the homepage and the gallery page.
Replace the placeholder entries in the `reviews` array with real feedback first.

### The enquiry form

The form on `/enquire` is a [Fillout](https://fillout.com) embed (form id `aivaD3EtXjus`), which
collects submissions and file uploads straight into Fillout. To change the questions, edit the form in
your Fillout account — nothing in this repo needs to change.

To swap in a different form, replace the `data-fillout-id` on the embed div in
`src/pages/enquire.astro`.

## Development

```sh
npx astro dev --background   # start (see AGENTS.md)
npx astro dev logs           # tail output
npx astro dev stop           # stop
npx astro build              # production build into dist/
npx astro preview            # preview the build
```

## Notes

- Styling is plain CSS. Six colour variables are defined in `src/layouts/Layout.astro` — change the
  brand colour by editing `--accent` there. Section spacing is set once by the `section` rule in the
  same file.
- The carousel is a plain image strip: 4 images visible at a time (3 on tablet, 2 on phone), arrows
  either side, auto-advancing every 3 seconds and pausing while the pointer is over it. Images only —
  no captions.
- The site is a static build — deploy `dist/` to Netlify, Vercel, Cloudflare Pages or any static host.
