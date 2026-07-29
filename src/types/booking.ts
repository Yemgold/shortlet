


export type BookingStatus =
  | "PENDING"
  | "CONFIRMED"
  | "CHECKED_IN"
  | "CHECKED_OUT"
  | "CANCELLED";


export type PaymentStatus =
  | "PAID"
  | "PENDING"
  | "FAILED"
  | "REFUNDED";


export interface Booking {
  _id: string;

  bookingCode: string;


  guest: {
    _id: string;

    fullName: string;

    email: string;

    phone: string;

    avatar?: string;
  };


  apartment: {
    _id: string;

    name: string;

    image?: string;
  };


  checkIn: string;

  checkOut: string;


  nights: number;


  totalAmount: number;


  paymentStatus: PaymentStatus;


  status: BookingStatus;
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






export interface CreateBookingResponse {
  success: boolean;

  message: string;

  data: {
    booking: {
      _id: string;

      apartment: string;

      checkInDate: string;

      checkOutDate: string;

      firstName: string;

      lastName: string;

      email: string;

      phoneNumber: string;

      userId?: string;

      totalAmount: number;

      status:
        | "PENDING"
        | "CONFIRMED"
        | "CANCELLED"
        | "PAID";

      createdAt: string;

      updatedAt: string;
    };

    /**
     * Paystack payment URL (if your backend initializes payment immediately)
     */
    paymentUrl?: string;

    /**
     * Paystack reference
     */
    reference?: string;
  };
}
