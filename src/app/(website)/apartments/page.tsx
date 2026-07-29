
// app/apartments/page.tsx

// "use client";

// import { useState } from "react";

// import Container from "@/components/ui/Container";
// import Section from "@/components/ui/Section";

// import Hero from "@/components/apartments/Hero";
// import { SearchBar } from "@/components/apartments/SearchBar";

// import {
//   useApartments,
// } from "@/hooks/apartment/useApartments";


// import {
//   FilterSidebar,
//   MobileFilters,
// } from "@/components/apartments/Filters";


// import {
//   ViewSwitcher,
//   type ViewType,
// } from "@/components/apartments/ViewSwitcher";


// import {
//   SortDropdown,
//   type SortOption,
// } from "@/components/apartments/SortDropdown";


// import {
//   ApartmentGrid,
//   ApartmentList,
//   ApartmentMap,
// } from "@/components/apartments/ApartmentGrid";

// import { Pagination } from "@/components/apartments/Pagination";



// export default function ApartmentsPage() {


//   const [view, setView] =
//     useState<ViewType>("grid");


//   const [sort, setSort] =
//     useState<SortOption>("recommended");



//   const {
//     data: apartments = [],
//     isLoading,
//     isError,
//   } = useApartments();



//   return (

//     <>

//       {/* Hero */}

//       <Hero />


//       {/* Search */}

//       <SearchBar />



//       {/* Listings */}

//       <Section className="py-16">

//         <Container>


//           <div className="grid gap-10 lg:grid-cols-[320px_1fr]">


//             {/* Desktop Sidebar */}


//             <aside className="hidden lg:block">

//               <div className="sticky top-24">

//                 <FilterSidebar />

//               </div>

//             </aside>



//             {/* Content */}


//             <main>



//               {/* Loading */}

//               {isLoading && (

//                 <div
//                   className="
//                     rounded-3xl
//                     border
//                     bg-white
//                     p-10
//                     text-center
//                   "
//                 >

//                   <p className="text-slate-500">
//                     Loading apartments...
//                   </p>

//                 </div>

//               )}



//               {/* Error */}

//               {isError && (

//                 <div
//                   className="
//                     rounded-3xl
//                     border
//                     border-red-200
//                     bg-red-50
//                     p-10
//                     text-center
//                   "
//                 >

//                   <p className="text-red-600">
//                     Failed to load apartments.
//                   </p>

//                 </div>

//               )}




//               {!isLoading && !isError && (


//                 <>


//                   {/* Results Header */}


//                   <div
//                     className="
//                       mb-8
//                       rounded-3xl
//                       border
//                       border-slate-200
//                       bg-white
//                       p-6
//                       shadow-sm
//                     "
//                   >


//                     <div
//                       className="
//                         flex
//                         flex-col
//                         gap-6
//                         lg:flex-row
//                         lg:items-center
//                         lg:justify-between
//                       "
//                     >


//                       <div>


//                         <p
//                           className="
//                             text-sm
//                             font-medium
//                             uppercase
//                             tracking-wide
//                             text-blue-600
//                           "
//                         >

//                           Verified Apartments

//                         </p>



//                         <h2
//                           className="
//                             mt-2
//                             text-3xl
//                             font-bold
//                             text-slate-900
//                           "
//                         >

//                           {apartments.length}
//                           {" "}
//                           Apartments Found

//                         </h2>



//                         <p
//                           className="
//                             mt-2
//                             text-slate-500
//                           "
//                         >

//                           Luxury serviced apartments,
//                           villas, penthouses and short-let
//                           homes across Nigeria.

//                         </p>


//                       </div>




//                       <div
//                         className="
//                           flex
//                           flex-wrap
//                           items-center
//                           gap-4
//                         "
//                       >


//                         <MobileFilters />


//                         <SortDropdown
//                           value={sort}
//                           onChange={setSort}
//                         />


//                         <ViewSwitcher
//                           value={view}
//                           onChange={setView}
//                         />


//                       </div>


//                     </div>





//                     {/* Quick Stats */}


//                     <div
//                       className="
//                         mt-8
//                         grid
//                         gap-4
//                         sm:grid-cols-2
//                         xl:grid-cols-4
//                       "
//                     >


//                       <StatCard
//                         title="Properties"
//                         value={`${apartments.length}+`}
//                       />



//                       <StatCard
//                         title="Verified"
//                         value="98%"
//                       />



//                       <StatCard
//                         title="Guest Rating"
//                         value="4.9★"
//                       />



//                       <StatCard
//                         title="Support"
//                         value="24/7"
//                       />


//                     </div>



//                   </div>





//                   {/* Active Filters */}


//                   <div
//                     className="
//                       mb-8
//                       flex
//                       flex-wrap
//                       gap-3
//                     "
//                   >


//                     <FilterChip label="Lagos" />


//                     <FilterChip label="Apartment" />


//                     <FilterChip label="2 Guests" />



//                     <button
//                       className="
//                         rounded-full
//                         bg-slate-100
//                         px-4
//                         py-2
//                         text-sm
//                         font-medium
//                         text-slate-600
//                         transition
//                         hover:bg-slate-200
//                       "
//                     >

//                       Clear All

//                     </button>


//                   </div>






//                   {/* Listings */}



//                   {view === "grid" && (

//                     <ApartmentGrid
//                       apartments={apartments}
//                     />

//                   )}



//                   {view === "list" && (

//                     <ApartmentList
//                       apartments={apartments}
//                     />

//                   )}



//                   {view === "map" && (

//                     <ApartmentMap
//                       apartments={apartments}
//                     />

//                   )}







//                   {/* Pagination */}


//                   <div
//                     className="
//                       mt-16
//                       flex
//                       justify-center
//                     "
//                   >

//                     <Pagination />

//                   </div>


//                 </>


//               )}



//             </main>



//           </div>


//         </Container>


//       </Section>


//     </>

//   );

// }






// interface StatCardProps {

//   title:string;

//   value:string;

// }



// function StatCard({
//   title,
//   value,
// }:StatCardProps){


//   return (

//     <div
//       className="
//         rounded-2xl
//         border
//         border-slate-200
//         bg-slate-50
//         p-5
//       "
//     >

//       <p className="text-sm text-slate-500">

//         {title}

//       </p>



//       <h3
//         className="
//           mt-2
//           text-2xl
//           font-bold
//           text-slate-900
//         "
//       >

//         {value}

//       </h3>


//     </div>

//   );

// }




"use client";

import Hero from "@/components/apartments/Hero";
import { SearchBar } from "@/components/apartments/SearchBar";
import ListingsSection from "@/components/apartments/Listings/ListingsSection";

export default function ApartmentsPage() {
  return (
    <>
      <Hero />

      <SearchBar />

      <ListingsSection />
    </>
  );
}