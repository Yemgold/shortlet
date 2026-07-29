// export interface ApartmentMedia {
//   _id: string;

//   type: "image" | "video";

//   url: string;

//   publicUrl: string;
// }

// export interface Apartment {
//   _id: string;

//   name: string;

//   slug: string;

//   description: string;

//   propertyType: string;

//   pricePerNight: number;

//   cleaningFee: number;

//   securityDeposit: number;

//   discount: number;

//   totalUnits: number;

//   bedrooms: number;

//   bathrooms: number;

//   guests: number;

//   amenities: string[];

//   location: {
//     address: string;
//     city: string;
//     state: string;
//     country: string;

//     area?: string;
//     landmark?: string;
//     googleMapsUrl?: string;

//     latitude?: number;
//     longitude?: number;
//   };

//   media: ApartmentMedia[];

//   isActive: boolean;

//   isDeleted: boolean;

//   isFeatured: boolean;

//   isNew: boolean;

//   createdAt: string;

//   updatedAt: string;
// }


// export interface Apartment {
//   _id: string;

//   name: string;

//   description: string;

//   slug: string;

//   pricePerNight: number;

//   bedrooms: number;

//   bathrooms: number;

//   guests: number;

//   totalUnits: number;

//   isFeatured: boolean;

//   isActive: boolean;

//   isNew: boolean;

//   amenities: string[];

//   media: ApartmentMedia[];

  
// }



// /* ============================================
//    API Apartment
// ============================================ */

// export interface Apartment {
//   _id: string;

//   name: string;

//   description: string;

//   propertyType: string;

//   location: {
//     address: string;
//     city: string;
//     state: string;
//     country: string;
//     latitude?: number;
//     longitude?: number;
//   };

//   images: string[];

//   pricePerNight: number;

//   bedrooms: number;

//   bathrooms: number;

//   guests: number;

//   totalUnits: number;

//   amenities: string[];

//   isFeatured: boolean;

//   isAvailable: boolean;

//   rating?: number;

//   reviews?: number;

//   createdAt: string;

//   updatedAt: string;
// }

// export interface GetApartmentsResponse {
//   success: boolean;

//   message: string;

//   data: {
//     apartments: Apartment[];

//     totalCount: number;

//     totalPages: number;
//   };
// }



export interface ApartmentMedia {
  _id: string;

  type: "image" | "video";

  url: string;

  publicUrl: string;
}

export interface Apartment {
  _id: string;

  name: string;

  slug: string;

  description: string;

  propertyType: string;

  pricePerNight: number;

  cleaningFee: number;

  securityDeposit: number;

  discount: number;

  totalUnits: number;

  bedrooms: number;

  bathrooms: number;

  guests: number;

  amenities: string[];

  

  location: {
    address: string;
    city: string;
    state: string;
    country: string;

    area?: string;
    landmark?: string;
    googleMapsUrl?: string;

    latitude?: number;
    longitude?: number;
  };

  media: ApartmentMedia[];

  isActive: boolean;

  isDeleted: boolean;

  isFeatured: boolean;

  isNew: boolean;

  /**
   * Optional fields returned by the backend
   */
  rating?: number;

  reviews?: number;

  isAvailable?: boolean;

  createdAt: string;

  updatedAt: string;
}

/* ============================================
   API Response
============================================ */

export interface GetApartmentsResponse {
  success: boolean;

  message: string;

  data: {
    apartments: Apartment[];

    totalCount: number;

    totalPages: number;
  };
}













/* ============================================
   API TYPES
============================================ */

export interface CreateApartmentPayload {
  // Images
  files: File[];

  // Basic Information
  name: string;
  description: string;

  // Location
  country: string;
  state: string;
  city: string;
  area: string;
  address: string;
  landmark?: string;
  googleMapsUrl?: string;

  // TODO: Replace hardcoded coordinates later
  latitude?: number;
  longitude?: number;

  // Pricing
  pricePerNight: number;

  // Property Details
  bathrooms: number;
  bedrooms: number;
  guests: number;
  totalUnits: number;

  // Amenities
  amenities: string[];

  // Flags
  isFeatured: boolean;
}

export interface CreateApartmentResponse {
  success: boolean;

  message: string;

  data: Record<string, never>;
}



export interface DeleteApartmentResponse {
  success: boolean;
  message: string;
  data: Record<string, never>;
}



/**
 * Apartment filtering options
 */
export interface ApartmentFilters {

  location?: string;

  city?: string;

  state?: string;

  guests?: number;

  bedrooms?: number;

  minPrice?: number;

  maxPrice?: number;

  featured?: boolean;

}


/**
 * Booking payload
 */
export interface CreateBookingPayload {

  apartmentId: string;

  checkIn: string;

  checkOut: string;

  guests: number;

  guestName: string;

  email: string;

  phone: string;

}




export interface ApartmentDetails {
  id: string;

  slug: string;

  name: string;

  description: string;

  propertyType: string;

  isFeatured: boolean;

  country: string;

  state: string;

  city: string;

  area: string;

  address: string;

  landmark?: string;

  googleMapsUrl?: string;

  latitude?: number;

  longitude?: number;

  pricePerNight: number;

  cleaningFee: number;

  securityDeposit: number;

  discount: number;

  bedrooms: number;

  bathrooms: number;

  guests: number;

  totalUnits: number;

  amenities: string[];

  images: string[];
}


