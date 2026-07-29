


import type { LucideIcon } from "lucide-react";

import {
  ShieldCheck,
  CreditCard,
  CalendarCheck2,
  Star,
  Headphones,
  BadgeDollarSign,
} from "lucide-react";

export interface Feature {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "Verified Properties",
    description:
      "Every apartment is carefully inspected and verified to ensure quality, comfort, and security before it is listed.",
  },
  {
    id: 2,
    icon: CreditCard,
    title: "Secure Payments",
    description:
      "Book confidently using trusted and encrypted payment gateways that keep every transaction safe.",
  },
  {
    id: 3,
    icon: CalendarCheck2,
    title: "Instant Booking",
    description:
      "Reserve your preferred apartment instantly with real-time availability and immediate booking confirmation.",
  },
  {
    id: 4,
    icon: Star,
    title: "Top-Rated Hosts",
    description:
      "Stay with experienced hosts who consistently receive outstanding reviews from satisfied guests.",
  },
  {
    id: 5,
    icon: Headphones,
    title: "24/7 Customer Support",
    description:
      "Our dedicated support team is available around the clock to assist you before, during, and after your stay.",
  },
  {
    id: 6,
    icon: BadgeDollarSign,
    title: "Best Price Guarantee",
    description:
      "Enjoy premium accommodations at competitive prices with transparent pricing and no hidden fees.",
  },
];

export default features;