


export type GalleryCategory =
  | "All"
  | "Apartments"
  | "Bedrooms"
  | "Living Rooms"
  | "Kitchens"
  | "Bathrooms"
  | "Amenities"
  | "Exterior"
  | "Dining"
  | "Workspace"
  | "Videos";

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  image: string;
  featured?: boolean;
  width: number;
  height: number;
  location: string;
}

export const galleryCategories: GalleryCategory[] = [
  "All",
  "Apartments",
  "Bedrooms",
  "Living Rooms",
  "Kitchens",
  "Bathrooms",
  "Amenities",
  "Exterior",
  "Dining",
  "Workspace",
  "Videos",
];

export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-1",
    title: "Luxury Penthouse Living Room",
    category: "Living Rooms",
    image: "/images/gallery/living-room-1.png",
    featured: true,
    width: 1200,
    height: 1600,
    location: "Victoria Island, Lagos",
  },
  {
    id: "gallery-2",
    title: "Executive Master Bedroom",
    category: "Bedrooms",
    image: "/images/gallery/bedroom-1.png",
    width: 1200,
    height: 1500,
    location: "Ikoyi, Lagos",
  },
  {
    id: "gallery-3",
    title: "Modern Kitchen",
    category: "Kitchens",
    image: "/images/gallery/kitchen-1.png",
    width: 1200,
    height: 1400,
    location: "Lekki Phase 1",
  },
  {
    id: "gallery-4",
    title: "Luxury Bathroom",
    category: "Bathrooms",
    image: "/images/gallery/bathroom-1.png",
    width: 1200,
    height: 1500,
    location: "Abuja",
  },
  {
    id: "gallery-5",
    title: "Skyline Balcony View",
    category: "Exterior",
    image: "/images/gallery/exterior-1.png",
    featured: true,
    width: 1200,
    height: 1700,
    location: "Victoria Island",
  },
  {
    id: "gallery-6",
    title: "Infinity Swimming Pool",
    category: "Amenities",
    image: "/images/gallery/pool-1.png",
    width: 1200,
    height: 1500,
    location: "Lekki",
  },
  {
    id: "gallery-7",
    title: "Private Workspace",
    category: "Workspace",
    image: "/images/gallery/workspace-1.png",
    width: 1200,
    height: 1400,
    location: "Abuja",
  },
  {
    id: "gallery-8",
    title: "Fine Dining Area",
    category: "Dining",
    image: "/images/gallery/dining-1.png",
    width: 1200,
    height: 1450,
    location: "Ikoyi",
  },
  {
    id: "gallery-9",
    title: "Luxury Apartment Suite",
    category: "Apartments",
    image: "/images/gallery/apartment-1.png",
    featured: true,
    width: 1200,
    height: 1600,
    location: "Lekki",
  },
  {
    id: "gallery-10",
    title: "Executive Lounge",
    category: "Living Rooms",
    image: "/images/gallery/living-room-2.png",
    width: 1200,
    height: 1500,
    location: "Banana Island",
  },
  {
    id: "gallery-11",
    title: "Premium Bedroom",
    category: "Bedrooms",
    image: "/images/gallery/bedroom-2.png",
    width: 1200,
    height: 1550,
    location: "Port Harcourt",
  },
  {
    id: "gallery-12",
    title: "Designer Kitchen",
    category: "Kitchens",
    image: "/images/gallery/kitchen-2.png",
    width: 1200,
    height: 1450,
    location: "Ibadan",
  },
  {
    id: "gallery-13",
    title: "Luxury Jacuzzi Bathroom",
    category: "Bathrooms",
    image: "/images/gallery/bathroom-2.png",
    width: 1200,
    height: 1500,
    location: "Enugu",
  },
  {
    id: "gallery-14",
    title: "Outdoor Lounge",
    category: "Amenities",
    image: "/images/gallery/lounge-1.png",
    width: 1200,
    height: 1650,
    location: "Lekki",
  },
  {
    id: "gallery-15",
    title: "City View Apartment",
    category: "Apartments",
    image: "/images/gallery/apartment-2.png",
    featured: true,
    width: 1200,
    height: 1700,
    location: "Victoria Island",
  },
  {
    id: "gallery-16",
    title: "Luxury Penthouse",
    category: "Apartments",
    image: "/images/gallery/apartment-3.png",
    width: 1200,
    height: 1600,
    location: "Ikoyi",
  },
];

export interface GalleryVideo {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  location: string;
}

export interface GalleryVideo {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  location: string;
}

export const galleryVideos: GalleryVideo[] = [
  {
    id: "video-1",
    title: "Luxury Penthouse Tour",
    thumbnail: "/images/gallery/videos/video-1.jpg",
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
    duration: "2:45",
    location: "Victoria Island, Lagos",
  },
  {
    id: "video-2",
    title: "Executive Suite Walkthrough",
    thumbnail: "/images/gallery/videos/video-2.jpg",
    videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
    duration: "3:12",
    location: "Lekki Phase 1",
  },
  {
    id: "video-3",
    title: "Luxury Living Experience",
    thumbnail: "/images/gallery/videos/video-3.jpg",
    videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
    duration: "4:08",
    location: "Ikoyi",
  },
];


export interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  likes: string;
  comments: string;
}

export const instagramPosts: InstagramPost[] = [
  {
    id: "ig-1",
    image: "/images/gallery/instagram/ig-1.jpg",
    caption: "Luxury living with breathtaking city views.",
    likes: "4.8k",
    comments: "132",
  },
  {
    id: "ig-2",
    image: "/images/gallery/instagram/ig-2.jpg",
    caption: "Elegant interiors designed for unforgettable stays.",
    likes: "3.9k",
    comments: "108",
  },
  {
    id: "ig-3",
    image: "/images/gallery/instagram/ig-3.jpg",
    caption: "Relax in premium comfort every single day.",
    likes: "5.2k",
    comments: "176",
  },
  {
    id: "ig-4",
    image: "/images/gallery/instagram/ig-4.jpg",
    caption: "Your next luxury escape starts here.",
    likes: "6.1k",
    comments: "241",
  },
];