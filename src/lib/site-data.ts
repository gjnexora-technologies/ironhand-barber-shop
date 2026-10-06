import heroImg from "@/assets/hero.jpg";
import studioImg from "@/assets/studio.jpg";
import fashionImg from "@/assets/fashion.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import barber1 from "@/assets/barber-1.jpg";
import barber2 from "@/assets/barber-2.jpg";
import barber3 from "@/assets/barber-3.jpg";

export const images = {
  hero: heroImg,
  studio: studioImg,
  fashion: fashionImg,
};

export const shop = {
  name: "IRONHAND",
  full: "Ironhand Barber Studio",
  tagline: "Sharp Cuts. Strong Identity.",
  phone: "+91 98765 43210",
  email: "studio@ironhand.example",
  address: "Near Race Course, Gopalapuram, Coimbatore, Tamil Nadu 641018",
  instagram: "https://instagram.com",
  whatsapp: "https://wa.me/919876543210",
  maps: "https://www.google.com/maps?q=Race+Course,+Gopalapuram,+Coimbatore,+Tamil+Nadu+641018&output=embed",
  hours: [
    { days: "Monday – Saturday", time: "9:00 AM – 9:00 PM" },
    { days: "Sunday", time: "10:00 AM – 6:00 PM" },
  ],
};

export type Service = {
  name: string;
  description: string;
  duration: string;
  price: string;
};

export const services: Service[] = [
  {
    name: "Classic Haircut",
    description: "Scissor-led cut shaped to your head, hair type and style.",
    duration: "45 min",
    price: "₹500",
  },
  {
    name: "Skin Fade",
    description: "Seamless blend from skin to length, finished with a razor line.",
    duration: "50 min",
    price: "₹650",
  },
  {
    name: "Beard Styling",
    description: "Shaped, lined and conditioned with hot towel finish.",
    duration: "30 min",
    price: "₹350",
  },
  {
    name: "Hair & Beard Package",
    description: "Full cut plus beard sculpt — the complete reset.",
    duration: "75 min",
    price: "₹900",
  },
  {
    name: "Hair Styling",
    description: "Wash, product and finish for events, shoots and nights out.",
    duration: "25 min",
    price: "₹300",
  },
  {
    name: "Kids Haircut",
    description: "Relaxed, patient cuts for under-12s.",
    duration: "30 min",
    price: "₹350",
  },
  {
    name: "Premium Grooming",
    description: "Cut, shave, brow and skin detail in one unhurried session.",
    duration: "90 min",
    price: "₹1,400",
  },
  {
    name: "Head Massage",
    description: "Ten minutes of pressure-point work with warm oils.",
    duration: "15 min",
    price: "₹250",
  },
];

export type Barber = {
  name: string;
  specialty: string;
  bio: string;
  experience: string;
  image: string;
  social: string;
};

export const barbers: Barber[] = [
  {
    name: "Marco Vela",
    specialty: "Fade Specialist",
    bio: "Builds fades with architectural precision and a clean, modern finish.",
    experience: "11 years",
    image: barber1,
    social: "https://instagram.com",
  },
  {
    name: "Nadia Crowe",
    specialty: "Modern Styling",
    bio: "Editorial-trained. Cuts shaped around texture, movement and personality.",
    experience: "8 years",
    image: barber2,
    social: "https://instagram.com",
  },
  {
    name: "Sal Rivera",
    specialty: "Classic Cuts & Beard",
    bio: "Old-school scissor work, straight razor shaves, zero shortcuts.",
    experience: "22 years",
    image: barber3,
    social: "https://instagram.com",
  },
];

export const galleryCategories = [
  "All",
  "Haircuts",
  "Fades",
  "Beard",
  "Styling",
  "Transformations",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = {
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "All">;
  tall?: boolean;
};

export const gallery: GalleryItem[] = [
  { src: gallery1, alt: "Textured crop with a mid fade", category: "Haircuts", tall: true },
  { src: gallery2, alt: "Clipper work shaping a skin fade", category: "Fades" },
  { src: gallery3, alt: "Sculpted full beard under warm light", category: "Beard", tall: true },
  { src: gallery4, alt: "Slicked-back classic pompadour", category: "Styling" },
  { src: gallery5, alt: "Straight razor shave with hot towel", category: "Transformations", tall: true },
  { src: heroImg, alt: "Studio portrait of a finished fade and beard", category: "Transformations" },
  { src: gallery4, alt: "Polished side-part finish", category: "Haircuts" },
  { src: gallery2, alt: "Close detail of a fresh taper", category: "Fades", tall: true },
];

export const testimonials = [
  {
    quote:
      "First place that asked what I actually wanted before touching my hair. The fade held its shape for weeks.",
    name: "Customer name",
    rating: 5,
  },
  {
    quote:
      "It feels more like a studio than a barbershop. Unhurried, precise, and the finish is always sharp.",
    name: "Customer name",
    rating: 5,
  },
  {
    quote:
      "Booked the hair and beard package before a wedding. Best I've looked in photographs, easily.",
    name: "Customer name",
    rating: 5,
  },
];

export const experience = [
  { title: "Precision", copy: "Every cut is carefully crafted." },
  { title: "Personal Style", copy: "Cuts designed around the individual." },
  { title: "Premium Grooming", copy: "Professional grooming in a relaxed environment." },
  { title: "Modern Atmosphere", copy: "A stylish studio built around contemporary culture." },
];
