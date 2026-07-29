



export interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  comment: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Lagos",
    avatar: "/images/testimonials/sarah.jpg",
    rating: 5,
    comment:
      "Absolutely amazing experience. The apartment looked exactly like the photos and the booking process was effortless.",
  },
  {
    id: 2,
    name: "David Williams",
    location: "Abuja",
    avatar: "/images/testimonials/david.jpg",
    rating: 5,
    comment:
      "Excellent customer support and beautiful apartments. I'll definitely book again.",
  },
  {
    id: 3,
    name: "Chioma Okafor",
    location: "Port Harcourt",
    avatar: "/images/testimonials/chioma.jpg",
    rating: 5,
    comment:
      "Very clean apartment, secure environment and wonderful host. Highly recommended.",
  },
];

export default testimonials;