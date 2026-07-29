
"use client";

import ApartmentCard from "@/components/booking/ApartmentCard";

import type { Apartment } from "@/types/apartment";

interface ApartmentListProps {
  apartments: Apartment[];
}

export default function ApartmentList({
  apartments,
}: ApartmentListProps) {
  return (
    <div className="space-y-6">
      {apartments.map((apartment) => (
        <div
          key={apartment._id}
          className="
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-6
            shadow-sm
          "
        >
          <ApartmentCard apartment={apartment} />
        </div>
      ))}
    </div>
  );
}























// "use client";

// import ApartmentCard from "@/components/booking/ApartmentCard";

// import type { Apartment } from "@/types/apartment";

// interface ApartmentListProps {
//   apartments: Apartment[];
// }

// export default function ApartmentList({
//   apartments,
// }: ApartmentListProps) {
//   return (
//     <div className="space-y-6">
//       {apartments.map((apartment) => (
//         <div
//           key={apartment._id}
//           className="
//             rounded-3xl
//             border
//             border-slate-200
//             bg-white
//             p-6
//             shadow-sm
//           "
//         >
//           <ApartmentCard apartment={apartment} />
//         </div>
//       ))}
//     </div>
//   );
// }