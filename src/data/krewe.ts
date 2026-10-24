import toddlerClassroom1 from "@/assets/images/toddler-classroom-1.jpg";
import toddlerClassroom2 from "@/assets/images/toddler-classroom-2.jpg";

// Every fact comes from the demo brief's verified table (checked 2026-10-24); the source sits beside
// each one. Child-care rules: no tuition, curriculum, ratios, meals, capacity or certifications, and no
// "licensed" claim beyond "Licensing pending". The flyers also mention meals and staff and give two
// different toddler age ranges, so the page names the age groups only.

export const daycare = {
  // Their own spelling: logo, flyers and Instagram name all read "Porters" (Sarmad chose it).
  name: "Porters Little Krewe Daycare",
  shortName: "Porters Little Krewe",
  // IG post, 2026-09-26.
  tagline: "From tiny first steps to big learning adventures",
  // IG bio: "Opening Soon | Licensing Pending".
  status: "Opening soon",
  licensing: "Licensing pending",
  // IG bio.
  ages: "6 weeks to 10 years",
  // IG post, 2026-09-26 (and their flyer). The posts give no days of the week, so none are shown.
  hours: "6:30 AM – 6:00 PM",
  // IG bio. The city license lists (504) 319-3160; the brief says to use the IG number.
  phone: "504-947-5082",
  // City of New Orleans business license; Google Maps shows the building only.
  street: "8819 S Claiborne Ave",
  cityLine: "New Orleans, LA 70118",
  instagramHandle: "porterslittlekrewe",
  instagramUrl: "https://www.instagram.com/porterslittlekrewe/",
  owner: "Cody Porter",
  demoNotice: "Demo by Sarmad Rehan · not the official Porters Little Krewe website",
  description:
    "Porters Little Krewe Daycare is opening soon in New Orleans, for children from 6 weeks to 10 years. Licensing pending.",
} as const;

export const fullAddress = `${daycare.street}, ${daycare.cityLine}`;
export const phoneDigits = daycare.phone.replace(/\D/g, "");
// Embedded by street address, not by name, so no rating card shows up.
export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`;

export type AgeGroupIcon = "bottle" | "blocks" | "crayons" | "backpack";

// Group names only, as the brief asks. The only ranges shown are the ends of the IG bio's "6 weeks to
// 10 years"; the flyers disagree on the toddler range (1–3 vs 2–3), so the middle groups carry none.
export const ageGroups: { name: string; range?: string; icon: AgeGroupIcon; tint: "red" | "blue" | "yellow" | "sky" }[] = [
  { name: "Infants", range: "From 6 weeks", icon: "bottle", tint: "red" },
  { name: "Toddlers", icon: "blocks", tint: "yellow" },
  { name: "Preschool", icon: "crayons", tint: "blue" },
  { name: "School-age", range: "Up to 10 years", icon: "backpack", tint: "sky" },
];

// IG post, 2026-10-01 ("meet the owner"), retold in short. The quoted line is Cody's own words.
export const story = {
  paragraphs: [
    "Cody Porter's love for caring for children started years ago, helping their nanny run a home daycare.",
    "Being around the children, and helping them learn, grow and feel loved, planted a dream: one day, a center of their own, built for children in the community.",
  ],
  quote: "What started as just a dream has now become a reality.",
} as const;

// IG carousel post, 2026-10-06 (New Orleans time): "A little peak inside our toddler classroom. We're
// still working on it, not done yet! Our preschool classroom is up next."
export const classroomPhotos = [
  {
    src: toddlerClassroom1,
    alt: "The toddler classroom: light blue walls, low wooden shelves, a book display, a small red armchair and shape and color posters",
  },
  {
    src: toddlerClassroom2,
    alt: "The toddler classroom from the other end: soft foam blocks, a small table with chairs and red, yellow, green and blue cubbies",
  },
];

// IG post, 2026-09-30: "what matters most to you when choosing a daycare for your child".
export const parentQuestion = "What matters most to you in a daycare?";

export const contactMethods = ["Call", "Text", "Instagram DM"] as const;
