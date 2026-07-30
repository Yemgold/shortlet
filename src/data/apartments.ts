


// import type { Apartment } from "@/types/apartment";

// export const apartments: Apartment[] = [
//   {
//     _id: "apt-001",
//     slug: "luxury-ocean-view-apartment",
//     name: "Luxury Ocean View Apartment",
//     description:
//       "Enjoy breathtaking ocean views from this luxury serviced apartment with premium amenities and 24/7 concierge service.",
//     location: {
//   address: "Victoria Island",
//   city: "Lagos",
//   state: "Lagos",
//   country: "Nigeria",
// },
//     image: "/images/apartments/apartment1.jpg",
//     gallery: [
//       "/images/apartments/apartment1.jpg",
//       "/images/apartments/apartment1-2.jpg",
//       "/images/apartments/apartment1-3.jpg",
//     ],
//     price: 120000,
//     rating: 4.9,
//     reviews: 245,
//     bedrooms: 3,
//     bathrooms: 2,
//     guests: 6,
//     area: 180,
//     propertyType: "Apartment",
//     featured: true,
//     verified: true,
//     available: true,
//     isNew: true,
//     discount: 10,
//     amenities: [
//       "Wifi",
//       "Pool",
//       "Kitchen",
//       "Parking",
//     ],
//   },

//   {
//     id: "apt-002",
//     slug: "executive-studio-suite",
//     title: "Executive Studio Suite",
//     description:
//       "Modern studio apartment ideal for business travelers seeking comfort and convenience.",
//     location: "Lekki Phase 1, Lagos",
//     city: "Lagos",
//     state: "Lagos",
//     image: "/images/apartments/apartment2.jpg",
//     gallery: [
//       "/images/apartments/apartment2.jpg",
//       "/images/apartments/apartment2-2.jpg",
//     ],
//     price: 85000,
//     rating: 4.8,
//     reviews: 182,
//     bedrooms: 1,
//     bathrooms: 1,
//     guests: 2,
//     area: 90,
//     propertyType: "Studio",
//     featured: true,
//     verified: true,
//     available: true,
//     amenities: [
//       "Wifi",
//       "Kitchen",
//       "Parking",
//     ],
//   },

//   {
//     id: "apt-003",
//     slug: "royal-penthouse-suite",
//     title: "Royal Penthouse Suite",
//     description:
//       "Experience ultimate luxury in this spacious penthouse featuring panoramic city views.",
//     location: "Ikoyi, Lagos",
//     city: "Lagos",
//     state: "Lagos",
//     image: "/images/apartments/apartment3.jpg",
//     gallery: [
//       "/images/apartments/apartment3.jpg",
//       "/images/apartments/apartment3-2.jpg",
//       "/images/apartments/apartment3-3.jpg",
//     ],
//     price: 220000,
//     rating: 5,
//     reviews: 118,
//     bedrooms: 4,
//     bathrooms: 4,
//     guests: 8,
//     area: 350,
//     propertyType: "Penthouse",
//     featured: true,
//     verified: true,
//     available: true,
//     amenities: [
//       "Wifi",
//       "Pool",
//       "Kitchen",
//       "Parking",
//     ],
//   },

//   {
//     id: "apt-004",
//     slug: "modern-family-villa",
//     title: "Modern Family Villa",
//     description:
//       "Perfect for families and groups looking for a peaceful luxury getaway with spacious living areas.",
//     location: "Maitama, Abuja",
//     city: "Abuja",
//     state: "FCT",
//     image: "/images/apartments/apartment4.jpg",
//     gallery: [
//       "/images/apartments/apartment4.jpg",
//       "/images/apartments/apartment4-2.jpg",
//     ],
//     price: 175000,
//     rating: 4.9,
//     reviews: 310,
//     bedrooms: 5,
//     bathrooms: 3,
//     guests: 10,
//     area: 420,
//     propertyType: "Villa",
//     featured: true,
//     verified: true,
//     available: true,
//     amenities: [
//       "Wifi",
//       "Pool",
//       "Kitchen",
//       "Parking",
//     ],
//   },

//   {
//     id: "apt-005",
//     slug: "city-business-apartment",
//     title: "City Business Apartment",
//     description:
//       "A stylish apartment designed for professionals with fast Wi-Fi and a dedicated workspace.",
//     location: "Ikeja GRA, Lagos",
//     city: "Lagos",
//     state: "Lagos",
//     image: "/images/apartments/apartment5.jpg",
//     gallery: [
//       "/images/apartments/apartment5.jpg",
//     ],
//     price: 95000,
//     rating: 4.7,
//     reviews: 156,
//     bedrooms: 2,
//     bathrooms: 2,
//     guests: 4,
//     area: 130,
//     propertyType: "Apartment",
//     featured: false,
//     verified: true,
//     available: true,
//     amenities: [
//       "Wifi",
//       "Kitchen",
//       "Parking",
//     ],
//   },

//   {
//     id: "apt-006",
//     slug: "luxury-garden-villa",
//     title: "Luxury Garden Villa",
//     description:
//       "Relax in a private villa surrounded by lush gardens and premium outdoor amenities.",
//     location: "Asokoro, Abuja",
//     city: "Abuja",
//     state: "FCT",
//     image: "/images/apartments/apartment6.jpg",
//     gallery: [
//       "/images/apartments/apartment6.jpg",
//     ],
//     price: 260000,
//     rating: 4.9,
//     reviews: 97,
//     bedrooms: 6,
//     bathrooms: 5,
//     guests: 12,
//     area: 500,
//     propertyType: "Villa",
//     featured: true,
//     verified: true,
//     available: true,
//     amenities: [
//       "Wifi",
//       "Pool",
//       "Kitchen",
//       "Parking",
//     ],
//   },
// ];

// export default apartments;





import type { Apartment } from "@/types/apartment";

export const apartments: Apartment[] = [
  {
    _id: "apt-001",
    name: "Luxury Ocean View Apartment",
    slug: "luxury-ocean-view-apartment",

    description:
      "Enjoy breathtaking ocean views from this luxury serviced apartment.",

    propertyType: "Apartment",

    pricePerNight: 120000,

    cleaningFee: 10000,

    securityDeposit: 50000,

    discount: 10,

    totalUnits: 1,

    bedrooms: 3,

    bathrooms: 2,

    guests: 6,

    amenities: [
      "Wifi",
      "Pool",
      "Kitchen",
      "Parking",
    ],

    location: {
      address: "Victoria Island",
      city: "Lagos",
      state: "Lagos",
      country: "Nigeria",
    },

    media: [
      {
        _id: "media-1",
        type: "image",
        url: "/images/apartments/apartment1.jpg",
        publicUrl: "/images/apartments/apartment1.jpg",
      },
    ],

    isActive: true,
    isDeleted: false,
    isFeatured: true,
    isNew: true,

    rating: 4.9,
    reviews: 245,
    isAvailable: true,

    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];