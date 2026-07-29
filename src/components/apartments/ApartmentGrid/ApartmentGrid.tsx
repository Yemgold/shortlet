"use client";

import ApartmentCard from "@/components/booking/ApartmentCard";

import type {
  Apartment,
} from "@/types/apartment";

interface ApartmentGridProps {
  apartments: Apartment[];

  view?: "grid" | "list";
}

export default function ApartmentGrid({
  apartments,
  view = "grid",
}: ApartmentGridProps) {
  if (view === "list") {
    return null;
  }

  return (
    <div
      className="
        grid
        gap-8
        sm:grid-cols-2
        xl:grid-cols-3
      "
    >
      {apartments.map((apartment) => (
        <ApartmentCard
          key={apartment._id}
          apartment={apartment}
        />
      ))}
    </div>
  );
}


// "use client";

// import ApartmentCard from "@/components/booking/ApartmentCard";

// import type {
//   Apartment,
// } from "@/types/apartment";


// interface ApartmentGridProps {

//   apartments: Apartment[];

//   view?: "grid" | "list";

// }



// export default function ApartmentGrid({
//   apartments,
//   view = "grid",
// }: ApartmentGridProps) {


//   if (view === "list") {
//     return null;
//   }



//   return (

//     <div
//       className="
//         grid
//         gap-8
//         sm:grid-cols-2
//         xl:grid-cols-3
//       "
//     >

//       {apartments.map((apartment) => (

//         <ApartmentCard

//           key={apartment._id}

//           apartment={apartment}

//         />

//       ))}


//     </div>

//   );

// }