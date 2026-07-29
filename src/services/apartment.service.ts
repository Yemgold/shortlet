

// src/services/apartment.service.ts

import api from "@/lib/axios";


import type {
  
  ApartmentFilters,
  CreateApartmentPayload,
  CreateApartmentResponse,
  GetApartmentsResponse,
  Apartment,
} from "@/types/apartment";


import type {
  CreateBookingPayload,
  CreateBookingResponse,
} from "@/types/booking";

/* ======================================
   Create Apartment
====================================== */

export async function createApartment(
  payload: CreateApartmentPayload
): Promise<CreateApartmentResponse> {
  const formData = new FormData();

  // Images
  payload.files.forEach((file) => {
    formData.append("files", file);
  });

  // Basic Information
  formData.append("name", payload.name);
  formData.append(
    "description",
    payload.description
  );

  // Location
formData.append(
  "location",
  JSON.stringify({
    address: payload.address,
    city: payload.city,
    state: payload.state,
    country: payload.country,
    latitude: payload.latitude ?? 6.5244,
    longitude: payload.longitude ?? 3.3792,
  })
);

  // Pricing
  formData.append(
    "pricePerNight",
    payload.pricePerNight.toString()
  );

  // Property Details
  formData.append(
    "bathrooms",
    payload.bathrooms.toString()
  );

  formData.append(
    "bedrooms",
    payload.bedrooms.toString()
  );

  formData.append(
    "guests",
    payload.guests.toString()
  );

  formData.append(
    "totalUnits",
    payload.totalUnits.toString()
  );

  formData.append(
    "isFeatured",
    payload.isFeatured.toString()
  );

  // Amenities
  payload.amenities.forEach((amenity) => {
    formData.append("amenities", amenity);
  });

  // Debug (remove after testing)
  for (const [key, value] of formData.entries()) {
    console.log(key, value);
  }

  const { data } =
    await api.post<CreateApartmentResponse>(
      "/api/v1/apartments/create-apartment",
      formData,
      {
        headers: {
          "Content-Type":
            "multipart/form-data",
        },
      }
    );

  return data;
}








/* ======================================
   Update Apartment
====================================== */

export async function updateApartment(
  id: string,
  payload: CreateApartmentPayload
  
): Promise<CreateApartmentResponse> {

  console.log("Service id:", id);

  const formData = new FormData();

  payload.files.forEach((file) =>
    formData.append("files", file)
  );

  formData.append("name", payload.name);
  formData.append(
    "description",
    payload.description
  );
  formData.append(
    "pricePerNight",
    payload.pricePerNight.toString()
  );
  formData.append(
    "bathrooms",
    payload.bathrooms.toString()
  );
  formData.append(
    "bedrooms",
    payload.bedrooms.toString()
  );
  formData.append(
    "guests",
    payload.guests.toString()
  );
  formData.append(
    "totalUnits",
    payload.totalUnits.toString()
  );
  formData.append(
    "isFeatured",
    payload.isFeatured.toString()
  );

  payload.amenities.forEach((amenity) =>
    formData.append("amenities", amenity)
  );

  const { data } =
    await api.patch<CreateApartmentResponse>(
      `/api/v1/apartments/update-apartment/${id}`,
      formData,
      {
        headers: {
          "Content-Type":
            "multipart/form-data",
        },
      }
    );


  return data;
}





export async function getApartments(filters?: ApartmentFilters) {
  const start = Date.now();

  try {
    const { data } = await api.get<GetApartmentsResponse>(
      "/api/v1/apartments/get-all-apartments",
      {
        params: filters,
      }
    );

    console.log(
      `Apartments loaded in ${Date.now() - start}ms`
    );

    return data.data.apartments;
  } catch (error: any) {
    console.log(
      `Failed after ${Date.now() - start}ms`
    );

    throw error;
  }
}





// =======================================
// Get single apartment
// =======================================

export interface GetApartmentResponse {
  success: boolean;
  message: string;
  data: Apartment;
}

export async function getApartmentById(
  id: string
): Promise<Apartment> {
  const { data } =
    await api.get<GetApartmentResponse>(
      `/api/v1/apartments/get-apartment-by-id/${id}`
    );

  console.log("Apartment response:", data);

  return data.data;
}


// =======================================
// Slug apartments
// =======================================


export async function getApartmentBySlug(
  slug: string
): Promise<Apartment> {
  const { data } = await api.get(
    `/api/v1/apartments/${slug}`
  );

  return data.data.apartment;
}



// =======================================
// Search apartments
// =======================================

export async function searchApartments(
  query: string
): Promise<Apartment[]> {

  const { data } =
    await api.get<GetApartmentsResponse>(
      "/api/v1/apartments/search",
      {
        params: {
          q: query,
        },
      }
    );


 return data.data.apartments;
}



// =======================================
// Get featured apartments
// =======================================

export async function getFeaturedApartments()
: Promise<Apartment[]> {


  const { data } =
    await api.get<GetApartmentsResponse>(
      "/api/v1/apartments/featured"
    );


  return data.data.apartments;

}



// =======================================
// Get apartments by location
// =======================================

export async function getApartmentsByLocation(
  location: string
): Promise<Apartment[]> {


  const { data } =
    await api.get<GetApartmentsResponse>(
      "/api/v1/apartments/location",
      {
        params: {
          location,
        },
      }
    );


 return data.data.apartments;

}





// =======================================
// Create booking
// =======================================

export async function createBooking(
  payload: CreateBookingPayload
): Promise<CreateBookingResponse> {
  const { data } =
    await api.post<CreateBookingResponse>(
      "/api/v1/bookings/create-booking",
      payload
    );

  return data;
}


/* ======================================
   Delete Apartment
====================================== */


export interface DeleteApartmentResponse {
  success: boolean;
  message: string;
}

export async function deleteApartment(
  id: string
): Promise<DeleteApartmentResponse> {
  console.log("Deleting apartment:", id);

  const { data } =
    await api.delete<DeleteApartmentResponse>(
      `/api/v1/apartments/delete-apartment-by-id/${id}`
    );

  return data;
}




