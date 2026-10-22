import { GalleryItem, ServiceCategory } from '../types';

export const BRAND_COLORS = {
  blushPink: '#F8DCE7',
  rosePink: '#D96C98',
  white: '#FFFFFF',
  botanicalGreen: '#245C45',
  sageGreen: '#DCE8DE',
  champagneGold: '#C6A15B',
  darkText: '#28252A',
  whatsappGreen: '#25D366',
};

export const CONTACT_INFO = {
  phone: '+2348035693291',
  phoneDisplay: '+234 803 569 3291',
  whatsappNumber: '+2348035693291',
  whatsappUrl:
    'https://wa.me/2348035693291?text=Hello%20Hairgoddess%20Unisex%20Salon%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.',
  facebookUrl: 'https://web.facebook.com/Hairgodddess',
  instagramUrl: 'https://www.instagram.com/hairgoddess5678?vrfl=aXZxczN0dHNlZjh1',
  addressNote: 'Hairgoddess Unisex Salon, Lagos, Nigeria (Full street address provided upon appointment confirmation)',
  location: 'Lagos, Nigeria',
  openingHours: 'Monday – Saturday: 9:00 AM – 7:00 PM | Sunday: By Appointment',
  email: 'contact@hairgoddessbeauty.com', // editable placeholder
};

export const IMAGES = {
  hero: 'https://i.ibb.co/PvJxRgpJ/hairgoddess.jpg',
  gallery2: 'https://i.ibb.co/N6PqjhNh/735714871-1629191252550421-3702312956233119674-n.jpg',
  gallery3: 'https://i.ibb.co/V0jHcm18/735028088-1629191109217102-4599669115658130430-n.jpg',
  hairSales: 'https://i.ibb.co/2Y3sDVgN/hair-sales.jpg', // From https://ibb.co/prjRtVJy
  spa: '/assets/aistudio/17f1e0c4-f08a-4188-8e4e-ec88d75b45ca_c953f825.jpeg',
  barber:
    '/assets/aistudio/Cut_above_the_rest_with__Wahl_Gold_Cordless_Magic_Clips_________barber__barbershop_Coming___473d3319.jpeg',
  manicure: '/assets/aistudio/nails_inspo___be438d18.jpeg',
  pedicure:
    '/assets/aistudio/Your_feet_never_take_a_day_off_so_take_care_of_them_______Greenspan_mall_1st_floor______25bb2b43.jpeg',
  // Core Values Images supplied by owner
  valuesHygiene: 'https://i.ibb.co/nMs0HBcd/8cd82b06-bd6c-464c-9725-65221f0c5e71.jpg', // https://ibb.co/YB7WzXkn
  valuesCare: 'https://i.ibb.co/pv8Z7Z4J/f38d3183-c813-4086-bbd9-32639f069766.jpg', // https://ibb.co/fY5tgtr4
  valuesSourcing: 'https://i.ibb.co/27Tj8k7D/627bb3de-7632-4a7c-90d1-32e6a32ec6fa.jpg', // https://ibb.co/bgkrHKgS
  valuesConfidence: 'https://i.ibb.co/cXx90fPg/c0d37996-2a1a-4eaf-ac42-fce638178e9f.jpg', // https://ibb.co/2Y5rxVwn
  // Authentic Founder & CEO Photo
  founder: '/assets/aistudio/FB_IMG_1792688364140_9f5a8b98.jpg',
};

export const getServicePricingWhatsAppUrl = (serviceName?: string): string => {
  const text = serviceName
    ? `Hello Hairgoddess Unisex Salon, I would like to enquire about pricing for ${serviceName}.`
    : `Hello Hairgoddess Unisex Salon, I would like to enquire about your service pricing.`;
  return `https://wa.me/2348035693291?text=${encodeURIComponent(text)}`;
};

export const getServiceEnquiryWhatsAppUrl = (serviceName: string): string => {
  const text = `Hello Hairgoddess Unisex Salon, I would like to enquire about booking and details for ${serviceName}.`;
  return `https://wa.me/2348035693291?text=${encodeURIComponent(text)}`;
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'hero-presentation',
    title: 'Signature Hair Artistry & Crown Presentation',
    category: 'Hair Sales & Styling',
    imageUrl: IMAGES.hero,
    description: 'Bespoke lace installation and silky sleek finish showcasing authentic Hairgoddess standards.',
  },
  {
    id: 'hair-sales-wigs',
    title: 'Luxury Wigs & Highest Quality Assured',
    category: 'Hair Sales',
    imageUrl: IMAGES.hairSales,
    description: 'Bespoke custom wig units and 100% virgin human hair crafted for effortless everyday luxury.',
  },
  {
    id: 'hair-volume-texture',
    title: 'Natural Texture & Human Hair Craft',
    category: 'Hair Sales',
    imageUrl: IMAGES.gallery2,
    description: 'Rich, lustrous premium hair bundles and closures prepped for natural movement and longevity.',
  },
  {
    id: 'founder-faith',
    title: 'Faith, Founder & CEO — Highest Quality Assured',
    category: 'Hair Sales & Styling',
    imageUrl: IMAGES.founder,
    description: 'Founder & CEO Faith personally inspecting and showcasing signature custom raw hair wigs in the Hairgoddess salon.',
  },
  {
    id: 'studio-care',
    title: 'Dedicated Studio Care & Finishing',
    category: 'Beauty Salon',
    imageUrl: IMAGES.gallery3,
    description: 'Refined finish and meticulous detailing during a one-on-one personal styling session.',
  },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'spa',
    name: 'Spa',
    shortDesc: 'Rejuvenating body care, tension relief, and skin revitalization therapies.',
    fullDesc:
      'Immerse yourself in a serene sanctuary designed for total calm. Our spa treatments focus on holistic skin rejuvenation, therapeutic relaxation, and muscle decompression. Every treatment uses gentle, skin-nurturing botanicals to leave your body feeling replenished and revived.',
    highlights: [
      'Relaxation & therapeutic massage treatments',
      'Body polishing, exfoliation & hydrating wraps',
      'Revitalizing facial cleansing & steam therapy',
      'Quiet, tranquil atmosphere designed for unhurried rest',
    ],
    iconName: '',
    imageUrl: IMAGES.spa,
  },
  {
    id: 'barber-shop',
    name: 'Barber Shop',
    shortDesc: 'Crisp precision fades, executive grooming, and beard conditioning.',
    fullDesc:
      'Sharp grooming and traditional barbering elevated with modern refinement. Our master grooming services cater to gentlemen and clients seeking clean lines, precision shape-ups, beard grooming, and calming hot-towel treatments.',
    highlights: [
      'Precision haircuts & tailored tapering',
      'Beard shaping, oil treatment & conditioning',
      'Crisp edging, clean lines & hot-towel finish',
      'Scalp revitalizing washes & treatment',
    ],
    iconName: '',
    imageUrl: IMAGES.barber,
  },
  {
    id: 'manicure',
    name: 'Manicure',
    shortDesc: 'Impeccable nail grooming, cuticle therapy, and enduring polished finishes.',
    fullDesc:
      'Hands express your elegance. Our manicure sessions provide attentive cuticle hydration, nail shaping, gentle exfoliation, and long-lasting polish application to ensure your nails look effortlessly immaculate.',
    highlights: [
      'Nail shaping, buffing & cuticle nourishment',
      'Gentle hand scrub & deep moisture treatment',
      'Classic, gel, and high-shine polish options',
      'Clean, sanitized tools meeting highest hygiene standards',
    ],
    iconName: '',
    imageUrl: IMAGES.manicure,
  },
  {
    id: 'pedicure',
    name: 'Pedicure',
    shortDesc: 'Restorative foot soaks, exfoliating scrubs, and rejuvenating foot care.',
    fullDesc:
      'Step into comfort with our intensive pedicure treatments. We combine soothing botanical foot soaks, gentle callus smoothing, deep exfoliating scrubs, and invigorating foot massages to restore lightness and softness to tired feet.',
    highlights: [
      'Warm botanical soak & purifying foot treatment',
      'Callus smoothing & gentle exfoliation scrub',
      'Relaxing foot and calf tension massage',
      'Neat cuticle detailing & polished nail finish',
    ],
    iconName: '',
    imageUrl: IMAGES.pedicure,
  },
  {
    id: 'beauty-salon',
    name: 'Beauty Salon',
    shortDesc: 'Masterful hair styling, braiding, silk press, and restorative treatments.',
    fullDesc:
      'Celebrate your hair’s full potential with our experienced salon stylists. From protective braiding and seamless weaves to silk presses, deep conditioning, and signature styling, we treat every strand with expertise and care.',
    highlights: [
      'Custom braiding, twists & protective styles',
      'Silk press, wash & blow-dry styling',
      'Deep conditioning & protein restorative treatments',
      'Weave & wig installs with flawless melting',
    ],
    iconName: '',
    imageUrl: IMAGES.gallery3,
  },
  {
    id: 'hair-sales',
    name: 'Hair Sales',
    shortDesc: 'Finest virgin human hair bundles, frontal units, closures, and custom wigs.',
    fullDesc:
      'Invest in hair that endures. Hairgoddess provides carefully curated, premium-grade 100% human hair extensions, closures, frontals, and customized wig units known for their natural luster, minimal shedding, and versatile styling.',
    highlights: [
      '100% virgin human hair bundles in various textures',
      'HD lace closures & ear-to-ear frontal units',
      'Ready-to-wear custom wigs & glueless units',
      'Specialist consultation for bundle pairing and maintenance',
    ],
    iconName: '',
    imageUrl: IMAGES.hairSales,
  },
];
