


import Bookings from "@/components/dashboard/apartments/Bookings";


export const metadata = {
  title: "Bookings | Admin Dashboard",
  description:
    "Manage apartment reservations, guest check-ins, check-outs and booking statuses.",
};


export default function BookingsPage() {

  return (
    <main
      className="
        min-h-screen
        bg-slate-50
        p-6
        lg:p-8
      "
    >

      <Bookings />

    </main>
  );
}