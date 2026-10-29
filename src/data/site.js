// ------------------------------------------------------------
// RJS Stone Tops — all editable site content lives here.
// Change text, phone numbers, photos or reviews in this file,
// save, and the page updates. No other file needs touching.
// ------------------------------------------------------------

// The only photo we have so far (a marble slab). It is reused for the
// hero and all four material cards until the client sends real photos.
const MARBLE = 'https://www.rjsstonetops.com/wp-content/uploads/2019/05/marquina.png';

export const site = {
  name: 'RJS Stone Tops',
  url: 'https://rjsstonetops.com',
  title: 'RJS Stone Tops | Custom quartz, granite & Dekton countertops, Vancouver',
  description:
    'Custom quartz, natural stone and Dekton countertops for kitchens, bathrooms and beyond. Designed with you, fabricated and installed by our own team. Showroom in Richmond, BC.',

  // Phone: `phone` is what people see, `phoneHref` is what their phone dials.
  phone: '604-861-2255',
  phoneHref: 'tel:16048612255',
  email: 'info@rjsstonetops.com',
  quoteEmail: 'ron.rjsstonetops@gmail.com',

  address: {
    street: '#150–2540 Simpson Road',
    city: 'Richmond',
    region: 'BC',
    country: 'CA',
  },
  showroomLine: 'Showroom · #150–2540 Simpson Road, Richmond',
  areaServed: [
    'Vancouver', 'North Shore', 'Burnaby', 'Richmond', 'Delta',
    'Surrey', 'Langley', 'White Rock', 'Tri-Cities',
  ],

  logo: 'https://www.rjsstonetops.com/wp-content/uploads/2022/06/RJS-Stonetops-no-bg.png',

  nav: [
    { label: 'Materials', href: '#materials' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Reviews', href: '#reviews' },
  ],

  hero: {
    img: MARBLE,
    imgAlt: 'Marble countertop',
    eyebrow: 'Stone fabricators · 30+ years',
    titleStart: 'Luxury living, ',
    titleAccent: 'set in stone.',
    text: 'Custom quartz, natural stone and Dekton countertops for kitchens, bathrooms and beyond. Designed with you, fabricated and installed by our own team.',
  },

  materialsIntro: {
    text: 'Visit the Richmond showroom to see full slabs from Cosentino, Caesarstone, Vicostone and more.',
  },
  materials: [
    { t: 'Quartz', img: MARBLE, d: 'Engineered for consistency and low maintenance, in hundreds of colours and veining patterns.' },
    { t: 'Natural stone', img: MARBLE, d: 'Granite and marble, each slab one of a kind.' },
    { t: 'Dekton', img: MARBLE, d: 'Ultra-compact surfaces that stand up to heat, scratches and UV, indoors or out.' },
    { t: 'Wall surfaces & sinks', img: MARBLE, d: 'Full-height backsplashes, feature walls and Gemini sinks to match.' },
  ],

  servicesIntro:
    'An international supplier of granite, marble and quartz, with three decades in countertops and home renovations.',
  services: [
    { n: 'i', t: 'Manufacture & installation', d: 'Efficient and hassle-free, our all-inclusive service is the easiest path to your new countertops.' },
    { n: 'ii', t: 'Supply only', d: 'For the do-it-yourselfer, we guide you through design and measuring for the most cost-effective result, with no compromise on quality.' },
    { n: 'iii', t: 'Custom projects', d: 'Tub decks, fireplace surrounds, reception desks, outdoor kitchens and specialized wall treatments.' },
  ],

  steps: [
    { n: '1', t: 'Planning', d: 'Meet with our specialists to design your space.' },
    { n: '2', t: 'Materials', d: 'View our extensive collection for the best countertop options.' },
    { n: '3', t: 'Install', d: 'We get to work while you sit back and relax.' },
  ],

  reviews: [
    { q: 'Nic came to measure with the latest in technology measuring equipment, and did a fabulous job. The install was perfect. Any concern I had about seams was put to rest as they are virtually invisible.', n: 'Colin W.' },
    { q: 'Tilde was incredibly helpful and took all the stress out of decision making. She expertly guided me through selecting the best countertop for my situation. They are the best in the business!', n: 'Emily P.' },
    { q: 'All around fantastic service from our first visit to the store to the actual install day, and all the steps in between. A friendly, positive, knowledgeable and experienced team.', n: 'Marnie & Josh' },
  ],

  // Quote form. Each group lets the visitor pick ONE option.
  // `name` is the field name you'll see in the emailed submission.
  quote: {
    text: 'Tell us a little about the space. Sketches, measurements or photos all help us price accurately.',
    areaLine: 'Serving Vancouver, the North Shore, Burnaby, Richmond, Delta, Surrey, Langley, White Rock and the Tri-Cities.',
    groups: [
      { label: 'Property type', name: 'property_type', items: ['House', 'Townhouse', 'Condo / apartment'] },
      { label: 'Material', name: 'material', items: ['Quartz', 'Porcelain', 'Natural stone'] },
      { label: 'Thickness', name: 'thickness', items: ['2cm', '3cm', '4cm / double'] },
      { label: 'Sink', name: 'sink', items: ['Undermount', 'Topmount', 'Undecided'] },
      { label: 'Stove', name: 'stove', items: ['Regular', 'Slide-in', 'Cooktop', 'Undecided'] },
    ],
    fileLabel: 'Sketches, measurements or photos (optional)',
    submitLabel: 'Send my request',
    thanks: 'Thank you. A stone specialist will be in touch with your quote.',
    error: 'Sorry, something went wrong sending your request. Please call us at 604-861-2255.',
  },

  // Paste your Formspree form URL here, e.g. 'https://formspree.io/f/abcdwxyz'.
  // Left empty, the form only shows the thank-you message and sends nothing.
  formEndpoint: '',

  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/rjsstonetops/' },
    { label: 'Facebook', href: 'https://www.facebook.com/RJSStonetops' },
    { label: 'Houzz', href: 'https://www.houzz.com/professionals/countertop/rjs-stonetops-ltd-pfvwus-pf~345604141' },
  ],

  credit: { label: 'Website by Backpack Digital Media', href: 'https://backpackdigitalmedia.com' },
};
