



// import api from "@/lib/axios";

// export interface CheckAvailabilityPayload {
//   apartmentId: string;
//   checkInDate: string;
//   checkOutDate: string;
//   guests: number;
// }

// export interface AvailabilityResponse {
//   available: boolean;
//   message: string;
//   totalNights: number;
//   subtotal: number;
//   cleaningFee: number;
//   securityDeposit: number;
//   discount: number;
//   tax: number;
//   total: number;
// }

// export const bookingService = {
//   checkAvailability: async (
//     payload: CheckAvailabilityPayload
//   ) => {
//     const {
//       apartmentId,
//       checkInDate,
//       checkOutDate,
//       guests,
//     } = payload;

//     const response = await api.get(
//       `/api/v1/availability/check-apartment-dates-availability-by-apartmentId/${apartmentId}`,
//       {
//         params: {
//           checkInDate,
//           checkOutDate,
//           guests,
//         },
//       }
//     );

//     return response.data;
//   },
// };





import api from "@/lib/axios";

export interface CheckAvailabilityPayload {
  apartmentId: string;
  checkInDate: string;
  checkOutDate: string;
  guests: number;
}

export interface AvailabilityResponse {
  available: boolean;
  totalNights: number;
  subtotal: number;
  cleaningFee: number;
  securityDeposit: number;
  discount: number;
  tax: number;
  total: number;
  message: string;
}

export interface CreateBookingPayload {
  apartment: string;
  checkInDate: string;
  checkOutDate: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  userId?: string;
}

export const bookingService = {
  checkAvailability: async (
    payload: CheckAvailabilityPayload
  ): Promise<AvailabilityResponse> => {
    const {
      apartmentId,
      checkInDate,
      checkOutDate,
      guests,
    } = payload;

    const response = await api.get(
      `/api/v1/availability/check-apartment-dates-availability-by-apartmentId/${apartmentId}`,
      {
        params: {
          checkInDate,
          checkOutDate,
          guests,
        },
      }
    );

    const result = response.data.data;

    return {
      available: result.available,
      message: response.data.message,

      totalNights: result.nights,

      subtotal: result.totalPrice,

      cleaningFee: 0,

      securityDeposit: 0,

      discount: 0,

      tax: 0,

      total: result.totalPrice,
    };
  },

createBooking: async (
  payload: CreateBookingPayload
) => {
  const response = await api.post(
    "/api/v1/bookings/create-booking/paystack",
    payload
  );

  return response.data;
},



};




