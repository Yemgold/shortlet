

"use client";

import { useState } from "react";

import BookingTable from "./BookingTable";
import BookingStats from "./BookingStats";
import BookingFilters from "./BookingFilters";
import BookingSearch from "./BookingSearch";
import BookingPagination from "./BookingPagination";
import EmptyBookings from "./EmptyBookings";

import CheckInDialog from "./CheckInDialog";
import CheckOutDialog from "./CheckOutDialog";
import CancelBookingDialog from "./CancelBookingDialog";
import ConfirmBookingDialog from "./ConfirmBookingDialog";

import type { Booking } from "@/types/booking";


// Temporary data
// Replace with useBookings() hook later

const bookings: Booking[] = [];


export default function Bookings() {

  const [search, setSearch] =
    useState("");


  const [status, setStatus] =
    useState("ALL");


  const [paymentStatus, setPaymentStatus] =
    useState("ALL");


  const [date, setDate] =
    useState("");


  const [page, setPage] =
    useState(1);



  const [selectedBooking, setSelectedBooking] =
    useState<Booking | null>(null);



  const [dialog, setDialog] =
    useState<
      | "CONFIRM"
      | "CHECK_IN"
      | "CHECK_OUT"
      | "CANCEL"
      | null
    >(null);



  const [loading, setLoading] =
    useState(false);



  const openDialog = (
    type:
      | "CONFIRM"
      | "CHECK_IN"
      | "CHECK_OUT"
      | "CANCEL",
    booking: Booking
  ) => {

    setSelectedBooking(booking);

    setDialog(type);

  };



  const closeDialog = () => {

    if (loading) return;

    setDialog(null);

    setSelectedBooking(null);

  };



  const handleAction = async () => {

    if (!selectedBooking) return;


    try {

      setLoading(true);


      /*
        API ACTION HERE

        Example:

        if(dialog === "CONFIRM"){
          await confirmBooking(selectedBooking._id)
        }

      */


    } finally {

      setLoading(false);

      closeDialog();

    }

  };



  return (

    <div className="space-y-6">


      {/* Header */}

      <div>

        <h1
          className="
            text-2xl
            font-bold
            text-slate-900
          "
        >
          Bookings
        </h1>


        <p
          className="
            mt-1
            text-sm
            text-slate-500
          "
        >
          Manage guest reservations,
          check-ins and check-outs.
        </p>

      </div>



      {/* Stats */}

      <BookingStats

        totalBookings={
          bookings.length
        }

        totalRevenue={
          bookings.reduce(
            (total, booking) =>
              total + booking.totalAmount,
            0
          )
        }

        activeBookings={
          bookings.filter(
            (booking) =>
              booking.status === "CONFIRMED" ||
              booking.status === "CHECKED_IN"
          ).length
        }

        pendingBookings={
          bookings.filter(
            (booking) =>
              booking.status === "PENDING"
          ).length
        }

      />



      {/* Search + Filters */}

      <div
        className="
          flex
          flex-col
          gap-4
          rounded-3xl
          bg-white
          p-5
          shadow-sm
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >

        <BookingSearch
          value={search}
          onChange={setSearch}
        />



        <BookingFilters

          search={search}

          onSearchChange={setSearch}


          bookingStatus={status}

          onBookingStatusChange={
            setStatus
          }


          paymentStatus={paymentStatus}

          onPaymentStatusChange={
            setPaymentStatus
          }


          date={date}

          onDateChange={
            setDate
          }


          onReset={() => {

            setSearch("");

            setStatus("ALL");

            setPaymentStatus("ALL");

            setDate("");

          }}

        />


      </div>




      {/* Table */}

      {
        bookings.length === 0 ? (

          <EmptyBookings />

        ) : (

         <BookingTable

  bookings={bookings}


  onConfirm={(id) => {

    const booking =
      bookings.find(
        (item) =>
          item._id === id
      );

    if (booking) {
      openDialog(
        "CONFIRM",
        booking
      );
    }

  }}


  onCancel={(id) => {

    const booking =
      bookings.find(
        (item) =>
          item._id === id
      );

    if (booking) {
      openDialog(
        "CANCEL",
        booking
      );
    }

  }}


  onCheckIn={(id) => {

    const booking =
      bookings.find(
        (item) =>
          item._id === id
      );

    if (booking) {
      openDialog(
        "CHECK_IN",
        booking
      );
    }

  }}


  onCheckOut={(id) => {

    const booking =
      bookings.find(
        (item) =>
          item._id === id
      );

    if (booking) {
      openDialog(
        "CHECK_OUT",
        booking
      );
    }

  }}

/>

        )
      }




      {/* Pagination */}

      {
        bookings.length > 0 && (

          <BookingPagination

            page={page}

            totalPages={1}

            totalItems={
              bookings.length
            }

            pageSize={10}

            onPageChange={
              setPage
            }

          />

        )
      }




      {/* Confirm Booking */}

      <ConfirmBookingDialog

        open={
          dialog === "CONFIRM"
        }


        bookingCode={
          selectedBooking?.bookingCode ?? ""
        }


        guestName={
          selectedBooking?.guest.fullName ?? ""
        }


        apartmentName={
          selectedBooking?.apartment.name ?? ""
        }


        loading={loading}


        onClose={
          closeDialog
        }


        onConfirm={
          handleAction
        }

      />




      {/* Check In */}

      <CheckInDialog

        open={
          dialog === "CHECK_IN"
        }


        bookingCode={
          selectedBooking?.bookingCode ?? ""
        }


        guestName={
          selectedBooking?.guest.fullName ?? ""
        }


        apartmentName={
          selectedBooking?.apartment.name ?? ""
        }


        loading={loading}


        onClose={
          closeDialog
        }


        onConfirm={
          handleAction
        }

      />




      {/* Check Out */}

      <CheckOutDialog

        open={
          dialog === "CHECK_OUT"
        }


        bookingCode={
          selectedBooking?.bookingCode ?? ""
        }


        guestName={
          selectedBooking?.guest.fullName ?? ""
        }


        apartmentName={
          selectedBooking?.apartment.name ?? ""
        }


        loading={loading}


        onClose={
          closeDialog
        }


        onConfirm={
          handleAction
        }

      />




      {/* Cancel Booking */}

      <CancelBookingDialog

        open={
          dialog === "CANCEL"
        }


        bookingCode={
          selectedBooking?.bookingCode ?? ""
        }


        guestName={
          selectedBooking?.guest.fullName ?? ""
        }


        apartmentName={
          selectedBooking?.apartment.name ?? ""
        }


        loading={loading}


        onClose={
          closeDialog
        }


        onConfirm={
          handleAction
        }

      />


    </div>

  );
}