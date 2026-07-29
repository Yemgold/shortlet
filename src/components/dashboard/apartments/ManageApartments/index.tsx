"use client";

import { useMemo, useState } from "react";

import SearchBar from "./SearchBar";
import Filters, {
  type ApartmentFilters,
} from "./Filters";
import ApartmentTable from "./ApartmentTable";
import LoadingSkeleton from "./LoadingSkeleton";
import EmptyState from "./EmptyState";
import DeleteDialog from "./DeleteDialog";

import { useApartments } from "@/hooks/apartment/useApartments";

export default function ManageApartments() {
  const [search, setSearch] = useState("");

  const [filters, setFilters] =
    useState<ApartmentFilters>({
      status: "all",
      featured: "all",
    });

  // Selected apartment to delete
  const [deleteId, setDeleteId] =
    useState<string | null>(null);

  const {
    data: apartments = [],
    isLoading,
  } = useApartments();

  const filteredApartments = useMemo(() => {
    const query = search.toLowerCase().trim();

    return apartments.filter((apartment) => {
      const matchesSearch =
        !query ||
        apartment.name
          .toLowerCase()
          .includes(query) ||
        apartment.location.city
          .toLowerCase()
          .includes(query) ||
        apartment.location.state
          .toLowerCase()
          .includes(query) ||
        apartment.location.address
          .toLowerCase()
          .includes(query);

      const matchesStatus =
        filters.status === "all"
          ? true
          : filters.status ===
            "available"
          ? apartment.isAvailable
          : !apartment.isAvailable;

      const matchesFeatured =
        filters.featured === "all"
          ? true
          : filters.featured ===
            "featured"
          ? apartment.isFeatured
          : !apartment.isFeatured;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesFeatured
      );
    });
  }, [apartments, search, filters]);

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  const apartmentToDelete =
    apartments.find(
      (apartment) => apartment._id === deleteId
    );

  return (
    <div className="space-y-8">
      {/* Header */}

      <div
        className="
          flex
          flex-col
          gap-5
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Apartment Listings
          </h2>

          <p className="mt-1 text-slate-500">
            Search, edit and manage all
            apartment listings.
          </p>
        </div>

        <div
          className="
            flex
            w-full
            flex-col
            gap-4
            lg:w-auto
            lg:flex-row
          "
        >
          <div className="lg:w-96">
            <SearchBar
              value={search}
              onChange={setSearch}
            />
          </div>

          <Filters
            value={filters}
            onChange={setFilters}
          />
        </div>
      </div>

      {/* Apartments */}

      {filteredApartments.length === 0 ? (
        <EmptyState />
      ) : (
        <ApartmentTable
          apartments={filteredApartments}
          onDelete={setDeleteId}
        />
      )}

      {/* Delete Dialog */}

      {deleteId && apartmentToDelete && (
        <DeleteDialog
          open={true}
          apartmentId={apartmentToDelete._id}
          apartmentName={apartmentToDelete.name}
          onClose={() => setDeleteId(null)}
        />
      )}
    </div>
  );
}




// "use client";

// import { useMemo, useState } from "react";

// import SearchBar from "./SearchBar";
// import Filters, {
//   type ApartmentFilters,
// } from "./Filters";
// import ApartmentTable from "./ApartmentTable";
// import LoadingSkeleton from "./LoadingSkeleton";
// import EmptyState from "./EmptyState";
// import DeleteDialog from "./DeleteDialog";

// import { useApartments } from "@/hooks/apartment/useApartments";

// export default function ManageApartments() {
//   const [search, setSearch] = useState("");

//   const [filters, setFilters] =
//     useState<ApartmentFilters>({
//       status: "all",
//       featured: "all",
//     });

//   const [deleteId, setDeleteId] =
//     useState<string | null>(null);

//   // Fetch apartments from API
//   const {
//     data: apartments = [],
//     isLoading,
//   } = useApartments();

//   const filteredApartments = useMemo(() => {
//     const query = search.toLowerCase().trim();

//     return apartments.filter((apartment) => {
//       const matchesSearch =
//         !query ||
//         apartment.name
//           .toLowerCase()
//           .includes(query) ||
//         apartment.location.city
//           .toLowerCase()
//           .includes(query) ||
//         apartment.location.state
//           .toLowerCase()
//           .includes(query) ||
//         apartment.location.address
//           .toLowerCase()
//           .includes(query);

//       const matchesStatus =
//         filters.status === "all"
//           ? true
//           : filters.status ===
//             "available"
//           ? apartment.isAvailable
//           : !apartment.isAvailable;

//       const matchesFeatured =
//         filters.featured === "all"
//           ? true
//           : filters.featured ===
//             "featured"
//           ? apartment.isFeatured
//           : !apartment.isFeatured;

//       return (
//         matchesSearch &&
//         matchesStatus &&
//         matchesFeatured
//       );
//     });
//   }, [apartments, search, filters]);

//   function handleDelete() {
//     if (!deleteId) return;

//     console.log(
//       "Delete apartment:",
//       deleteId
//     );

//     // TODO:
//     // deleteApartment(deleteId)

//     setDeleteId(null);
//   }

//   if (isLoading) {
//     return <LoadingSkeleton />;
//   }

//   return (
//     <div className="space-y-8">
//       {/* Header */}

//       <div
//         className="
//           flex
//           flex-col
//           gap-5
//           lg:flex-row
//           lg:items-center
//           lg:justify-between
//         "
//       >
//         <div>
//           <h2 className="text-2xl font-bold text-slate-900">
//             Apartment Listings
//           </h2>

//           <p className="mt-1 text-slate-500">
//             Search, edit and manage all
//             apartment listings.
//           </p>
//         </div>

//         <div
//           className="
//             flex
//             w-full
//             flex-col
//             gap-4
//             lg:w-auto
//             lg:flex-row
//           "
//         >
//           <div className="lg:w-96">
//             <SearchBar
//               value={search}
//               onChange={setSearch}
//             />
//           </div>

//           <Filters
//             value={filters}
//             onChange={setFilters}
//           />
//         </div>
//       </div>

//       {/* Content */}

//       {filteredApartments.length ===
//       0 ? (
//         <EmptyState />
//       ) : (
//         <ApartmentTable
//           apartments={filteredApartments}
//           onDelete={setDeleteId}
//         />
//       )}

//       <DeleteDialog
//   open={deleteOpen}
//   apartmentId={selectedApartment?._id ?? ""}
//   apartmentName={selectedApartment?.name}
//   onClose={() => setDeleteOpen(false)}
// />
//     </div>
//   );
// }