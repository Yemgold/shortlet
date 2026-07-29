



// "use client";

// import Link from "next/link";

// import { motion } from "framer-motion";

// import {
//   Eye,
//   Pencil,
//   Trash2,
//   MapPin,
//   Users,
//   BedDouble,
//   Bath,
// } from "lucide-react";

// import type { Apartment } from "@/types/apartment";

// interface ApartmentRowProps {
//   apartment: Apartment;
//   onDelete: (id: string) => void;
// }

// export default function ApartmentRow({
//   apartment,
//   onDelete,
// }: ApartmentRowProps) {
//   return (
//     <motion.tr
//       layout
//       initial={{
//         opacity: 0,
//         y: 10,
//       }}
//       animate={{
//         opacity: 1,
//         y: 0,
//       }}
//       exit={{
//         opacity: 0,
//       }}
//       className="border-b border-slate-100 hover:bg-slate-50"
//     >


//       {/* Apartment */}

//       <td className="px-6 py-5">
        
        
//          <div className="flex items-center gap-4">
//     <img
//       src={
//         apartment.media?.[0]?.url ??
//         "/images/apartment-placeholder.jpg"
//       }
//       alt={apartment.name}
//       className="
//         h-20
//         w-24
//         rounded-2xl
//         object-cover
//       "
//       onError={(e) => {
//         e.currentTarget.src =
//           "/images/apartment-placeholder.jpg";
//       }}
//     />

//           <div>
//             <h3 className="font-semibold text-slate-900">
//               {apartment.name}
//             </h3>

//             <div className="mt-1 flex items-center gap-1 text-sm text-slate-500">
//               <MapPin size={14} />

//               {apartment.location.city},{" "}
//               {apartment.location.state}
//             </div>

//             {apartment.isFeatured && (
//               <span
//                 className="
//                   mt-2
//                   inline-flex
//                   rounded-full
//                   bg-yellow-100
//                   px-2.5
//                   py-1
//                   text-xs
//                   font-semibold
//                   text-yellow-700
//                 "
//               >
//                 Featured
//               </span>
//             )}
//           </div>
//         </div>
//       </td>

      

//       {/* Price */}

//       <td className="px-6 py-5 font-semibold text-slate-900">
//         ₦
//         {apartment.pricePerNight.toLocaleString()}
//       </td>

//       {/* Rooms */}

//       <td className="px-6 py-5">
//         <div className="flex items-center gap-4 text-sm text-slate-600">
//           <span className="flex items-center gap-1">
//             <BedDouble size={16} />

//             {apartment.bedrooms}
//           </span>

//           <span className="flex items-center gap-1">
//             <Bath size={16} />

//             {apartment.bathrooms}
//           </span>

//           <span className="flex items-center gap-1">
//             <Users size={16} />

//             {apartment.guests}
//           </span>
//         </div>
//       </td>

//       {/* Status */}

//       <td className="px-6 py-5">
//         <span
//           className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
//             apartment.isAvailable
//               ? "bg-green-100 text-green-700"
//               : "bg-red-100 text-red-700"
//           }`}
//         >
//           {apartment.isAvailable
//             ? "Available"
//             : "Unavailable"}
//         </span>
//       </td>

//       {/* Actions */}

//       <td className="px-6 py-5">
//         <div className="flex items-center gap-2">
//           {/* View */}

//           <Link
//             href={`/apartments/${apartment._id}`}
//             className="
//               rounded-xl
//               border
//               border-slate-200
//               p-2.5
//               text-slate-600
//               transition
//               hover:border-blue-200
//               hover:bg-blue-50
//               hover:text-blue-600
//             "
//           >
//             <Eye size={18} />
//           </Link>

//           {/* Edit */}

//           <Link
//             href={`/admin/dashboard/apartments/manage/${apartment._id}`}
//             className="
//               rounded-xl
//               border
//               border-slate-200
//               p-2.5
//               text-slate-600
//               transition
//               hover:border-emerald-200
//               hover:bg-emerald-50
//               hover:text-emerald-600
//             "
//           >
//             <Pencil size={18} />
//           </Link>

//           {/* Delete */}

//           <button
//             onClick={() =>
//               onDelete(apartment._id)
//             }
//             className="
//               rounded-xl
//               border
//               border-slate-200
//               p-2.5
//               text-slate-600
//               transition
//               hover:border-red-200
//               hover:bg-red-50
//               hover:text-red-600
//             "
//           >
//             <Trash2 size={18} />
//           </button>
//         </div>
//       </td>
//     </motion.tr>
//   );
// }







"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Eye,
  Pencil,
  Trash2,
  MapPin,
  Users,
  BedDouble,
  Bath,
  Star,
} from "lucide-react";

import type { Apartment } from "@/types/apartment";

interface ApartmentRowProps {
  apartment: Apartment;
  onDelete: (id: string) => void;
}

export default function ApartmentRow({
  apartment,
  onDelete,
}: ApartmentRowProps) {

     console.log(
    apartment.name,
    apartment.bedrooms,
    apartment.bathrooms,
    apartment.guests
  );

  return (
    <motion.tr
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="border-b border-slate-100 hover:bg-slate-50"
    >
      {/* Apartment */}
      <td className="px-6 py-5">
        <div className="flex items-center gap-4">
          <img
            src={
              apartment.media?.[0]?.url ??
              "/images/apartment-placeholder.jpg"
            }
            alt={apartment.name}
            className="h-20 w-24 rounded-2xl object-cover"
            onError={(e) => {
              e.currentTarget.src =
                "/images/apartment-placeholder.jpg";
            }}
          />

          <div>
            <h3 className="font-semibold text-slate-900">
              {apartment.name}
            </h3>
          </div>
        </div>
      </td>

      {/* Location */}
      <td className="px-6 py-5">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <MapPin size={15} />

          <div>
            <p>{apartment.location.city}</p>
            <p className="text-xs text-slate-400">
              {apartment.location.state}
            </p>
          </div>
        </div>
      </td>

      {/* Price */}
      <td className="px-6 py-5 whitespace-nowrap font-semibold text-slate-900">
        ₦{apartment.pricePerNight.toLocaleString()}
      </td>

      {/* Capacity */}
      <td className="px-6 py-5">
        <div className="flex items-center gap-4 text-sm text-slate-600">
          <span className="flex items-center gap-1">
            <BedDouble size={16} />
            {apartment.bedrooms}
          </span>

          <span className="flex items-center gap-1">
            <Bath size={16} />
            {apartment.bathrooms}
          </span>

          <span className="flex items-center gap-1">
            <Users size={16} />
            {apartment.guests}
          </span>
        </div>
      </td>

      {/* Featured */}
      <td className="px-6 py-5">
        {apartment.isFeatured ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
            <Star size={12} />
            Featured
          </span>
        ) : (
          <span className="text-sm text-slate-400">
            —
          </span>
        )}
      </td>

      {/* Availability */}
      <td className="px-6 py-5">
        <span
          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
            apartment.isAvailable
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {apartment.isAvailable
            ? "Available"
            : "Unavailable"}
        </span>
      </td>

      {/* Actions */}
      <td className="px-6 py-5 text-right">
        <div className="flex justify-end gap-2">
          <Link
  href={`/admin/dashboard/apartments/view/${apartment._id}`}
  className="
    rounded-xl
    border
    border-slate-200
    p-2.5
    text-slate-600
    transition
    hover:border-blue-200
    hover:bg-blue-50
    hover:text-blue-600
  "
>
  <Eye size={18} />
</Link>

          <Link
            href={`/admin/dashboard/apartments/manage/${apartment._id}`}
            className="rounded-xl border border-slate-200 p-2.5 text-slate-600 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600"
          >
            <Pencil size={18} />
          </Link>

          <button
            onClick={() => onDelete(apartment._id)}
            className="rounded-xl border border-slate-200 p-2.5 text-slate-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </td>
    </motion.tr>
  );
}