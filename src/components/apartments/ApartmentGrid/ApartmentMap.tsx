"use client";

import type { Apartment } from "@/types/apartment";

interface ApartmentMapProps {
  apartments: Apartment[];
}

export default function ApartmentMap({
  apartments,
}: ApartmentMapProps) {
  return (
    <div
      className="
        flex
        h-[700px]
        items-center
        justify-center
        rounded-3xl
        border
        border-slate-200
        bg-slate-100
      "
    >
      <p className="text-slate-500">
        Map View ({apartments.length} apartments)
      </p>
    </div>
  );
}








// "use client";

// import type { Apartment } from "@/types/apartment";

// interface ApartmentMapProps {
//   apartments: Apartment[];
// }

// export default function ApartmentMap({
//   apartments,
// }: ApartmentMapProps) {
//   return (
//     <div
//       className="
//         flex
//         h-[700px]
//         items-center
//         justify-center
//         rounded-3xl
//         border
//         border-slate-200
//         bg-slate-100
//       "
//     >
//       <p className="text-slate-500">
//         Map View ({apartments.length} apartments)
//       </p>
//     </div>
//   );
// }