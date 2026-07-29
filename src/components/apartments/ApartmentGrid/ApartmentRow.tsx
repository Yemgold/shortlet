
"use client";

import Image from "next/image";
import Link from "next/link";

import { Star } from "lucide-react";

import type { Apartment } from "@/types/apartment";

interface Props {
  apartment: Apartment;
}

export default function ApartmentRow({
  apartment,
}: Props) {
  return (
    <Link
      href={`/apartments/${apartment.slug}`}
      className="
        flex
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        transition
        hover:shadow-xl
      "
    >
      <div className="relative h-64 w-80">
        <Image
          src={
            apartment.media?.[0]?.url ??
            "/images/apartment-placeholder.jpg"
          }
          alt={apartment.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              {apartment.name}
            </h2>

            <p className="mt-2 text-slate-500">
              {apartment.location.city},{" "}
              {apartment.location.state}
            </p>
          </div>

          <div className="flex items-center gap-1 rounded-xl bg-blue-50 px-3 py-2">
            <Star
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />

            <span>{apartment.rating ?? 0}</span>
          </div>
        </div>

        <p className="mt-5 line-clamp-2 text-slate-600">
          {apartment.description}
        </p>

        <div className="mt-auto flex items-end justify-between">
          <div>
            <p className="text-sm text-slate-500">
              From
            </p>

            <p className="text-3xl font-bold text-blue-600">
              ₦
              {apartment.pricePerNight.toLocaleString()}
            </p>

            <p className="text-sm text-slate-500">
              / night
            </p>
          </div>

          <div className="rounded-xl bg-blue-600 px-6 py-3 text-white">
            View
          </div>
        </div>
      </div>
    </Link>
  );
}





// "use client";

// import Image from "next/image";
// import Link from "next/link";

// import { Star } from "lucide-react";

// import type { Apartment } from "@/types/apartment";

// interface Props {
//   apartment: Apartment;
// }

// export default function ApartmentRow({
//   apartment,
// }: Props) {
//   return (
//     <Link
//       href={`/apartments/${apartment.slug}`}
//       className="
//         flex
//         overflow-hidden
//         rounded-3xl
//         border
//         border-slate-200
//         bg-white
//         transition
//         hover:shadow-xl
//       "
//     >
//       <div className="relative h-64 w-80">
//         <Image
//           src={apartment.image}
//           alt={apartment.title}
//           fill
//           className="object-cover"
//         />
//       </div>

//       <div className="flex flex-1 flex-col p-6">
//         <div className="flex items-start justify-between">
//           <div>
//             <h2 className="text-2xl font-bold">
//               {apartment.title}
//             </h2>

//             <p className="mt-2 text-slate-500">
//               {apartment.location}
//             </p>
//           </div>

//           <div className="flex items-center gap-1 rounded-xl bg-blue-50 px-3 py-2">
//             <Star
//               size={16}
//               className="fill-yellow-400 text-yellow-400"
//             />

//             <span>{apartment.rating}</span>
//           </div>
//         </div>

//         <p className="mt-5 line-clamp-2 text-slate-600">
//           {apartment.description}
//         </p>

//         <div className="mt-auto flex items-end justify-between">
//           <div>
//             <p className="text-sm text-slate-500">
//               From
//             </p>

//             <p className="text-3xl font-bold text-blue-600">
//               ₦{apartment.price.toLocaleString()}
//             </p>

//             <p className="text-sm text-slate-500">
//               / night
//             </p>
//           </div>

//           <div className="rounded-xl bg-blue-600 px-6 py-3 text-white">
//             View
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// }