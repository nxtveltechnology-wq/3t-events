import data from "./data.json";
import * as LucideIcons from "lucide-react";

// Import all assets
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import about from "@/assets/about.jpg";
import hero from "@/assets/hero.jpg";

import service_destination from "@/assets/service_destination.png";
import service_venue from "@/assets/service_venue.png";
import service_hospitality from "@/assets/service_hospitality.png";
import service_decor from "@/assets/service_decor.png";
import service_catering from "@/assets/service_catering.png";
import service_entertainment from "@/assets/service_entertainment.png";
import service_entries from "@/assets/service_entries.png";
import service_makeup from "@/assets/service_makeup.png";
import service_choreography from "@/assets/service_choreography.png";
import service_photography from "@/assets/service_photography.png";
import service_gifting from "@/assets/service_gifting.png";
import service_stationery from "@/assets/service_stationery.png";
import service_shopping from "@/assets/service_shopping.png";

import event_corporate_indian from "@/assets/event_corporate_indian.png";
import event_birthday_indian from "@/assets/event_birthday_indian.png";
import event_gala_indian from "@/assets/event_gala_indian.png";
import event_destination_indian from "@/assets/event_destination_indian.png";
import event_private from "@/assets/event_private.png";

// Create image map
const ImageMap: Record<string, string> = {
  "g1.jpg": g1,
  "g2.jpg": g2,
  "g3.jpg": g3,
  "g4.jpg": g4,
  "about.jpg": about,
  "hero.jpg": hero,
  "service_destination.png": service_destination,
  "service_venue.png": service_venue,
  "service_hospitality.png": service_hospitality,
  "service_decor.png": service_decor,
  "service_catering.png": service_catering,
  "service_entertainment.png": service_entertainment,
  "service_entries.png": service_entries,
  "service_makeup.png": service_makeup,
  "service_choreography.png": service_choreography,
  "service_photography.png": service_photography,
  "service_gifting.png": service_gifting,
  "service_stationery.png": service_stationery,
  "service_shopping.png": service_shopping,
  "event_corporate_indian.png": event_corporate_indian,
  "event_birthday_indian.png": event_birthday_indian,
  "event_gala_indian.png": event_gala_indian,
  "event_destination_indian.png": event_destination_indian,
  "event_private.png": event_private,
};

// Helper function to resolve Icons
export function getIcon(iconName: string) {
  return (LucideIcons as any)[iconName] || LucideIcons.HelpCircle;
}

// Helper function to resolve Images
export function getImage(imageName: string) {
  return ImageMap[imageName] || imageName;
}

// Export mapped Process Steps
export const PROCESS_STEPS = data.process.steps.map((step) => ({
  ...step,
  icon: getIcon(step.iconName),
}));

// Export mapped Why Us Values
export const WHY_US_VALUES = data.whyUs.values.map((val) => ({
  ...val,
  icon: getIcon(val.iconName),
}));

// Export mapped Gallery
export const GALLERY_ITEMS = data.gallery.items.map((item) => ({
  ...item,
  src: getImage(item.imageName),
}));
export const GALLERY_CATEGORIES = data.gallery.categories;

// Export mapped Events
export const ALL_EVENTS = data.events.list.map((evt) => ({
  ...evt,
  icon: getIcon(evt.iconName),
  bgImg: getImage(evt.bgImageName),
  gallery: evt.galleryImageNames.map((img) => getImage(img)),
}));

// Export mapped Services
export const SERVICES = data.services.list.map((srv) => ({
  ...srv,
  img: getImage(srv.imageName),
}));

// Export raw JSON sections that don't need mapping
export const HERO_BANNERS = data.hero.banners;
export const REELS_URLS = data.reels.urls;
export const FAQS = data.faq.faqs;
export const TESTIMONIALS = data.testimonials.list;
export const FOOTER_DATA = data.footer;

export default data;
