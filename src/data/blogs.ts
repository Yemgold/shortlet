



import { CalendarDays, Clock3, User2 } from "lucide-react";

export interface BlogAuthor {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  gallery?: string[];
  author: BlogAuthor;
  category: BlogCategory;
  tags: string[];
  readingTime: string;
  publishedAt: string;
  featured: boolean;
  views: number;
}

export const blogCategories: BlogCategory[] = [
  {
    id: "all",
    name: "All",
    slug: "all",
  },
  {
    id: "travel",
    name: "Travel",
    slug: "travel",
  },
  {
    id: "luxury",
    name: "Luxury Living",
    slug: "luxury",
  },
  {
    id: "staycation",
    name: "Staycation",
    slug: "staycation",
  },
  {
    id: "business",
    name: "Business Travel",
    slug: "business",
  },
  {
    id: "tips",
    name: "Travel Tips",
    slug: "tips",
  },
];

export const blogAuthors: BlogAuthor[] = [
  {
    id: "author-1",
    name: "A3T Editorial",
    role: "Travel Writer",
    avatar: "/images/team/editor-1.jpg",
    bio: "Sharing premium travel experiences and luxury accommodation insights.",
  },
  {
    id: "author-2",
    name: "Luxury Homes Team",
    role: "Property Expert",
    avatar: "/images/team/editor-2.jpg",
    bio: "Experts in luxury apartments, hospitality, and modern living.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    slug: "best-shortlet-apartments-lagos",
    title: "10 Things to Consider Before Booking a Shortlet Apartment in Lagos",
    excerpt:
      "Planning your next stay? Discover the key factors to help you choose the perfect luxury apartment in Lagos.",

    content: `
# Introduction

Finding the perfect shortlet apartment requires more than comparing prices.

## Location

Choose apartments close to your destination.

## Security

Always verify security features.

## Amenities

Look for Wi-Fi, Smart TV, Kitchen, Pool and Gym.

## Conclusion

Luxury accommodation should provide comfort, convenience and peace of mind.
`,

    coverImage:
      "/images/blog/blog-1.jpg",

    gallery: [
      "/images/blog/blog-1.jpg",
      "/images/blog/blog-1-2.jpg",
      "/images/blog/blog-1-3.jpg",
    ],

    author: blogAuthors[0],

    category: blogCategories[1],

    tags: [
      "Lagos",
      "Shortlet",
      "Travel",
      "Luxury",
    ],

    readingTime: "6 min",

    publishedAt: "July 10, 2026",

    featured: true,

    views: 2541,
  },

  {
    id: "blog-2",
    slug: "luxury-staycation-ideas",
    title: "Luxury Staycation Ideas for Your Next Weekend Escape",
    excerpt:
      "Escape the stress without leaving the city. Discover unforgettable luxury staycation experiences.",

    content: `
# Staycation Guide

Luxury staycations are becoming increasingly popular.

## Private Pool

Enjoy exclusive swimming facilities.

## Rooftop Views

Experience breathtaking city skylines.

## Premium Comfort

Relax in beautifully designed apartments.
`,

    coverImage:
      "/images/blog/blog-2.jpg",

    author: blogAuthors[1],

    category: blogCategories[3],

    tags: [
      "Staycation",
      "Weekend",
      "Luxury",
    ],

    readingTime: "5 min",

    publishedAt: "July 15, 2026",

    featured: true,

    views: 1985,
  },

  {
    id: "blog-3",
    slug: "business-travel-accommodation-guide",
    title: "Business Travel Accommodation Guide",
    excerpt:
      "Everything business travelers should know before booking serviced apartments.",

    content: `
# Business Travel

Choose accommodation that offers productivity and comfort.

## Workspace

Reliable Wi-Fi and dedicated workspaces matter.

## Accessibility

Stay close to business districts.

## Convenience

24/7 support improves your travel experience.
`,

    coverImage:
      "/images/blog/blog-3.jpg",

    author: blogAuthors[0],

    category: blogCategories[4],

    tags: [
      "Business",
      "Travel",
      "Apartments",
    ],

    readingTime: "7 min",

    publishedAt: "July 18, 2026",

    featured: false,

    views: 1334,
  },

  {
    id: "blog-4",
    slug: "why-luxury-apartments-are-better-than-hotels",
    title: "Why Luxury Apartments Are Better Than Hotels",
    excerpt:
      "Discover why modern travelers increasingly choose luxury apartments over traditional hotels.",

    content: `
# Apartments vs Hotels

Luxury apartments provide greater privacy.

## Space

More living space.

## Kitchen

Cook your own meals.

## Value

Better experience for longer stays.
`,

    coverImage:
      "/images/blog/blog-4.jpg",

    author: blogAuthors[1],

    category: blogCategories[2],

    tags: [
      "Luxury",
      "Hotel",
      "Travel",
    ],

    readingTime: "4 min",

    publishedAt: "July 22, 2026",

    featured: false,

    views: 1092,
  },
];

export const featuredPosts = blogPosts.filter(
  (post) => post.featured
);

export const latestPosts = [...blogPosts].sort(
  (a, b) => b.views - a.views
);