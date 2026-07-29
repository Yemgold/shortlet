


import {
  Wifi,
  Car,
  Dumbbell,
  Utensils,
  Tv,
  Waves,
  ShieldCheck,
  AirVent,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Amenity {
  id: number;
  name: string;
  description: string;
  icon: LucideIcon;
}

const amenities: Amenity[] = [
  {
    id: 1,
    name: "Free High-Speed Wi-Fi",
    description: "Reliable internet for work, streaming and browsing.",
    icon: Wifi,
  },
  {
    id: 2,
    name: "Free Parking",
    description: "Secure on-site parking available for all guests.",
    icon: Car,
  },
  {
    id: 3,
    name: "Swimming Pool",
    description: "Relax and unwind in our premium swimming pools.",
    icon: Waves,
  },
  {
    id: 4,
    name: "Fully Equipped Kitchen",
    description: "Cook your favorite meals with modern appliances.",
    icon: Utensils,
  },
  {
    id: 5,
    name: "Smart TV",
    description: "Netflix, YouTube and streaming entertainment included.",
    icon: Tv,
  },
  {
    id: 6,
    name: "24/7 Security",
    description: "Professional security personnel and CCTV monitoring.",
    icon: ShieldCheck,
  },
  {
    id: 7,
    name: "Air Conditioning",
    description: "Stay comfortable with powerful air conditioning.",
    icon: AirVent,
  },
  {
    id: 8,
    name: "Fitness Center",
    description: "Modern gym with premium fitness equipment.",
    icon: Dumbbell,
  },
];

export default amenities;