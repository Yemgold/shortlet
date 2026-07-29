




// "use client";

// import { useMemo } from "react";

// import {
//   useFormContext,
// } from "react-hook-form";

// import {
//   Building2,
//   FileText,
//   Home,
//   Star,
//   Sparkles,
// } from "lucide-react";

// import Input from "@/components/ui/Input";

// import type {
//   ApartmentFormValues,
// } from "@/schemas/apartment.schema";




// const descriptionTemplates = [
//   {
//     id: "",
//     label: "Start from scratch",
//     value: "",
//   },
//   {
//     id: "luxury",
//     label: "Luxury Apartment",
//     value:
//       "Experience luxury living in this beautifully furnished apartment featuring spacious bedrooms, a modern kitchen, high-speed Wi-Fi, air conditioning, smart TV, uninterrupted electricity, premium security, and easy access to restaurants, shopping malls, and major attractions.",
//   },
//   {
//     id: "family",
//     label: "Family Apartment",
//     value:
//       "Perfect for families seeking comfort and convenience. This apartment offers spacious living areas, multiple bedrooms, a fully equipped kitchen, secure parking, children's friendly environment, and close proximity to schools, supermarkets, and recreational centres.",
//   },
//   {
//     id: "business",
//     label: "Business Apartment",
//     value:
//       "Designed for business travellers, this apartment provides high-speed internet, a dedicated workspace, uninterrupted power supply, premium furnishings, airport accessibility, and a peaceful environment ideal for work and relaxation.",
//   },
//   {
//     id: "studio",
//     label: "Studio Apartment",
//     value:
//       "A stylish studio apartment offering comfort, privacy, modern furniture, equipped kitchenette, smart TV, reliable Wi-Fi, and all essential amenities for both short and extended stays.",
//   },
//   {
//     id: "penthouse",
//     label: "Penthouse",
//     value:
//       "Enjoy breathtaking city views from this exclusive penthouse featuring luxury interiors, spacious living areas, elegant bedrooms, premium furnishings, modern kitchen, rooftop access, and world-class amenities.",
//   },
// ];

// export default function BasicInfoStep() {
//   const {
//     register,
//     watch,
//     setValue,
//     formState: { errors },
//   } =
//     useFormContext<ApartmentFormValues>();

//   const description =
//     watch("description") ?? "";

//   const characterCount =
//     useMemo(
//       () => description.length,
//       [description]
//     );

//   return (
//     <div
//       className="
//         rounded-3xl
//         border
//         border-slate-200
//         bg-white
//         p-8
//         shadow-sm
//       "
//     >
//       {/* Header */}

//       <div className="mb-8 flex items-start gap-4">
//         <div
//           className="
//             flex
//             h-14
//             w-14
//             items-center
//             justify-center
//             rounded-2xl
//             bg-blue-50
//             text-blue-600
//           "
//         >
//           <Building2 size={28} />
//         </div>

//         <div>
//           <h2 className="text-2xl font-bold text-slate-900">
//             Basic Information
//           </h2>

//           <p className="mt-2 text-slate-500">
//             Provide the basic details that guests will
//             first see when viewing your apartment.
//           </p>
//         </div>
//       </div>

//       {/* Apartment Name */}

//       <Input
//         label="Apartment Name"
//         placeholder="Luxury 3 Bedroom Apartment"
//         {...register("name")}
//         error={errors.name?.message}
//       />

//       {/* Property Type */}

//       <div className="mt-6">
//         <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
//           <Home size={16} />
//           Property Type
//         </label>

//         <select
//           {...register("propertyType")}
//           className="
//             w-full
//             rounded-2xl
//             border
//             border-slate-300
//             bg-white
//             px-4
//             py-3
//             outline-none
//             transition
//             focus:border-blue-500
//             focus:ring-4
//             focus:ring-blue-100
//           "
//         >
//           <option value="">
//             Select property type
//           </option>

//           <option>
//             Apartment
//           </option>

//           <option>
//             Studio Apartment
//           </option>

//           <option>
//             Penthouse
//           </option>

//           <option>
//             Villa
//           </option>

//           <option>
//             Duplex
//           </option>

//           <option>
//             Terrace House
//           </option>

//           <option>
//             Bungalow
//           </option>

//           <option>
//             Short-let Home
//           </option>
//         </select>

//         {errors.propertyType && (
//           <p className="mt-2 text-sm text-red-600">
//             {errors.propertyType.message}
//           </p>
//         )}
//       </div>

//       {/* Description Template */}

//       <div className="mt-6">
//         <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
//           <Sparkles size={16} />
//           Description Template
//         </label>

//         <select
//           className="
//             w-full
//             rounded-2xl
//             border
//             border-slate-300
//             bg-white
//             px-4
//             py-3
//             outline-none
//             transition
//             focus:border-blue-500
//             focus:ring-4
//             focus:ring-blue-100
//           "
//           onChange={(e) => {
//             const template =
//               descriptionTemplates.find(
//                 (item) =>
//                   item.id ===
//                   e.target.value
//               );

//             if (template) {
//               setValue(
//                 "description",
//                 template.value,
//                 {
//                   shouldValidate: true,
//                 }
//               );
//             }
//           }}
//         >
//           {descriptionTemplates.map(
//             (template) => (
//               <option
//                 key={template.id}
//                 value={template.id}
//               >
//                 {template.label}
//               </option>
//             )
//           )}
//         </select>

//         <p className="mt-2 text-xs text-slate-500">
//           Selecting a template fills the description
//           automatically. You can edit it afterwards.
//         </p>
//       </div>

//       {/* Description */}

//       <div className="mt-6">
//         <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
//           <FileText size={16} />
//           Description
//         </label>

//         <textarea
//           rows={8}
//           placeholder="Describe your apartment..."
//           {...register("description")}
//           className="
//             w-full
//             rounded-2xl
//             border
//             border-slate-300
//             bg-white
//             px-4
//             py-3
//             text-sm
//             outline-none
//             transition
//             focus:border-blue-500
//             focus:ring-4
//             focus:ring-blue-100
//           "
//         />

//         <div className="mt-2 flex items-center justify-between">
//           {errors.description ? (
//             <p className="text-sm text-red-600">
//               {errors.description.message}
//             </p>
//           ) : (
//             <span />
//           )}

//           <span className="text-xs text-slate-500">
//             {characterCount} / 5000
//           </span>
//         </div>
//       </div>

//       {/* Featured */}

//       <div
//         className="
//           mt-8
//           rounded-2xl
//           border
//           border-slate-200
//           bg-slate-50
//           p-5
//         "
//       >
//         <label className="flex cursor-pointer items-start gap-4">
//           <input
//             type="checkbox"
//             {...register("isFeatured")}
//             className="
//               mt-1
//               h-5
//               w-5
//               rounded
//               border-slate-300
//               text-blue-600
//             "
//           />

//           <div>
//             <div className="flex items-center gap-2">
//               <Star
//                 size={18}
//                 className="text-amber-500"
//               />

//               <span className="font-semibold text-slate-900">
//                 Featured Apartment
//               </span>
//             </div>

//             <p className="mt-1 text-sm text-slate-500">
//               Featured apartments are prioritised on
//               the homepage and search results.
//             </p>
//           </div>
//         </label>
//       </div>
//     </div>
//   );
// }









// /////////////////////////



"use client";

import { useMemo } from "react";
import { useFormContext } from "react-hook-form";

import {
  Building2,
  FileText,
  Home,
  Sparkles,
  Star,
} from "lucide-react";

import Input from "@/components/ui/Input";

import {
  apartmentNameTemplates,
  descriptionTemplates,
} from "@/data";

import type {
  ApartmentFormValues,
} from "@/schemas/apartment.schema";

export default function BasicInfoStep() {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<ApartmentFormValues>();

  const description = watch("description") ?? "";

  const characterCount = useMemo(
    () => description.length,
    [description]
  );

  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
      "
    >
      {/* Header */}

      <div className="mb-8 flex items-start gap-4">
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-blue-50
            text-blue-600
          "
        >
          <Building2 size={28} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Basic Information
          </h2>

          <p className="mt-2 text-slate-500">
            Provide the basic details that guests will
            first see when viewing your apartment.
          </p>
        </div>
      </div>

      {/* Apartment Name Template */}

      <div className="mb-6">
        <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
          <Sparkles size={16} />
          Apartment Name Template
        </label>

        <select
          defaultValue=""
          className="
            w-full
            rounded-2xl
            border
            border-slate-300
            bg-white
            px-4
            py-3
            outline-none
            transition
            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-100
          "
          onChange={(e) => {
            const template =
              apartmentNameTemplates.find(
                (item) =>
                  item.id === e.target.value
              );

            if (!template) return;

            setValue("name", template.value, {
              shouldDirty: true,
              shouldValidate: true,
            });
          }}
        >
          <option value="">
            Select a name template
          </option>

          {apartmentNameTemplates.map(
            (template) => (
              <option
                key={template.id}
                value={template.id}
              >
                {template.label}
              </option>
            )
          )}
        </select>

        <p className="mt-2 text-xs text-slate-500">
          Select a template to auto-fill the apartment
          name. You can edit it afterwards.
        </p>
      </div>

      {/* Apartment Name */}

      <Input
        label="Apartment Name"
        placeholder="Luxury 3 Bedroom Apartment in Lekki Phase 1"
        {...register("name")}
        error={errors.name?.message}
      />

      {/* Property Type */}

      <div className="mt-6">
        <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
          <Home size={16} />
          Property Type
        </label>

        <select
          {...register("propertyType")}
          className="
            w-full
            rounded-2xl
            border
            border-slate-300
            bg-white
            px-4
            py-3
            outline-none
            transition
            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-100
          "
        >
          <option value="">
            Select property type
          </option>

          <option value="Apartment">
            Apartment
          </option>

          <option value="Studio Apartment">
            Studio Apartment
          </option>

          <option value="Penthouse">
            Penthouse
          </option>

          <option value="Villa">
            Villa
          </option>

          <option value="Duplex">
            Duplex
          </option>

          <option value="Terrace House">
            Terrace House
          </option>

          <option value="Bungalow">
            Bungalow
          </option>

          <option value="Short-let Home">
            Short-let Home
          </option>
        </select>

        {errors.propertyType && (
          <p className="mt-2 text-sm text-red-600">
            {errors.propertyType.message}
          </p>
        )}
      </div>

      {/* Description Template */}

      <div className="mt-6">
        <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
          <Sparkles size={16} />
          Description Template
        </label>

        <select
          defaultValue=""
          className="
            w-full
            rounded-2xl
            border
            border-slate-300
            bg-white
            px-4
            py-3
            outline-none
            transition
            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-100
          "
          onChange={(e) => {
            const template =
              descriptionTemplates.find(
                (item) =>
                  item.id === e.target.value
              );

            if (!template) return;

            setValue(
              "description",
              template.value,
              {
                shouldDirty: true,
                shouldValidate: true,
              }
            );
          }}
        >
          <option value="">
            Select a description template
          </option>

          {descriptionTemplates.map(
            (template) => (
              <option
                key={template.id}
                value={template.id}
              >
                {template.label}
              </option>
            )
          )}
        </select>

        <p className="mt-2 text-xs text-slate-500">
          Select a template to generate the apartment
          description automatically. You can edit it
          freely afterwards.
        </p>
      </div>

      {/* Description */}

      <div className="mt-6">
        <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
          <FileText size={16} />
          Description
        </label>

        <textarea
          rows={8}
          placeholder="Describe your apartment, amenities, nearby attractions and what makes it unique..."
          {...register("description")}
          className="
            w-full
            rounded-2xl
            border
            border-slate-300
            bg-white
            px-4
            py-3
            text-sm
            outline-none
            transition
            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-100
          "
        />

        <div className="mt-2 flex items-center justify-between">
          {errors.description ? (
            <p className="text-sm text-red-600">
              {errors.description.message}
            </p>
          ) : (
            <span />
          )}

          <span className="text-xs text-slate-500">
            {characterCount} / 5000
          </span>
        </div>
      </div>

      {/* Featured Apartment */}

      <div
        className="
          mt-8
          rounded-2xl
          border
          border-slate-200
          bg-slate-50
          p-5
        "
      >
        <label className="flex cursor-pointer items-start gap-4">
          <input
            type="checkbox"
            {...register("isFeatured")}
            className="
              mt-1
              h-5
              w-5
              rounded
              border-slate-300
              text-blue-600
            "
          />

          <div>
            <div className="flex items-center gap-2">
              <Star
                size={18}
                className="text-amber-500"
              />

              <span className="font-semibold text-slate-900">
                Featured Apartment
              </span>
            </div>

            <p className="mt-1 text-sm text-slate-500">
              Featured apartments are prioritised on
              the homepage, search results and featured
              listings.
            </p>
          </div>
        </label>
      </div>
    </div>
  );
}