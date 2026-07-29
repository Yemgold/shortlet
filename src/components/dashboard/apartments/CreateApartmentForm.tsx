

// "use client";

// import { motion } from "framer-motion";

// import { useForm } from "react-hook-form";


// import { zodResolver } from "@hookform/resolvers/zod";

// import Button from "@/components/ui/Button";
// import Input from "@/components/ui/Input";

// import ImageUploader from "./ImageUploader";
// import AmenitiesInput from "./AmenitiesInput";

// import {
//   apartmentSchema,
//   type ApartmentFormValues,
// } from "@/schemas/apartment.schema";

// import { useCreateApartment } from "@/hooks/useCreateApartment";

// export default function CreateApartmentForm() {
//   const createApartmentMutation =
//     useCreateApartment();

// const {
//   register,
//   watch,
//   setValue,
//   handleSubmit,
//   reset,
//   formState: { errors },
// } = useForm<ApartmentFormValues>({
//   resolver: zodResolver(apartmentSchema) as any,

//   defaultValues: {
//     files: [],
//     name: "",
//     description: "",
//     pricePerNight: 0,
//     bedrooms: 1,
//     bathrooms: 1,
//     guests: 1,
//     totalUnits: 1,
//     amenities: [],
//     isFeatured: false,
//   },
// });

//   const files = watch("files");

//   const amenities =
//     watch("amenities");

//   const featured =
//     watch("isFeatured");



// const onSubmit = async (
//   values: ApartmentFormValues
// ) => {
//   try {
//     await createApartmentMutation.mutateAsync(
//       values
//     );

//     reset();

//     alert(
//       "Apartment created successfully."
//     );
//   } catch (error) {
//     console.error(error);
//   }
// };

//   return (
//     <motion.form
//       initial={{
//         opacity: 0,
//         y: 25,
//       }}
//       animate={{
//         opacity: 1,
//         y: 0,
//       }}
//       transition={{
//         duration: 0.4,
//       }}


//       onSubmit={handleSubmit(onSubmit)}
//       className="space-y-10"
//     >
//       {/* Basic Information */}

// <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
//   <h2 className="text-2xl font-bold text-slate-900">
//     Basic Information
//   </h2>

//   <p className="mt-2 text-slate-500">
//     Tell guests about your apartment.
//   </p>

//   <div className="mt-8 space-y-6">
//     <Input
//       label="Apartment Name"
//       placeholder="e.g. Luxury Ocean View Apartment"
//       {...register("name")}
//       error={errors.name?.message}
//     />

//     <div>
//       <label className="mb-2 block text-sm font-medium text-slate-700">
//         Description
//       </label>

//       <textarea
//         rows={6}
//         placeholder="Describe your apartment..."
//         {...register("description")}
//         className="
//           w-full
//           rounded-2xl
//           border
//           border-slate-300
//           bg-white
//           px-4
//           py-3
//           text-sm
//           outline-none
//           transition
//           focus:border-blue-600
//         "
//       />

//       {errors.description && (
//         <p className="mt-2 text-sm text-red-500">
//           {errors.description.message}
//         </p>
//       )}
//     </div>
//   </div>
// </div>

// {/* Images */}

// <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
//   <h2 className="text-2xl font-bold text-slate-900">
//     Apartment Images
//   </h2>

//   <p className="mt-2 text-slate-500">
//     Upload high quality photos of your apartment.
//   </p>

//   <div className="mt-8">
//     <ImageUploader
//       value={files}
//       onChange={(images) =>
//         setValue("files", images, {
//           shouldValidate: true,
//         })
//       }
//       error={errors.files?.message}
//     />
//   </div>
// </div>

// {/* Pricing */}

// <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
//   <h2 className="text-2xl font-bold text-slate-900">
//     Pricing
//   </h2>

//   <div className="mt-8">
//     <Input
//       type="number"
//       label="Price Per Night (₦)"
//       placeholder="50000"
//       {...register("pricePerNight", {
//         valueAsNumber: true,
//       })}
//       error={errors.pricePerNight?.message}
//     />
//   </div>
// </div>

// {/* Property Details */}

// <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
//   <h2 className="text-2xl font-bold text-slate-900">
//     Property Details
//   </h2>

//   <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
//     <Input
//       type="number"
//       label="Bedrooms"
//       {...register("bedrooms", {
//         valueAsNumber: true,
//       })}
//       error={errors.bedrooms?.message}
//     />

//     <Input
//       type="number"
//       label="Bathrooms"
//       {...register("bathrooms", {
//         valueAsNumber: true,
//       })}
//       error={errors.bathrooms?.message}
//     />

//     <Input
//       type="number"
//       label="Guests"
//       {...register("guests", {
//         valueAsNumber: true,
//       })}
//       error={errors.guests?.message}
//     />

//     <Input
//       type="number"
//       label="Total Units"
//       {...register("totalUnits", {
//         valueAsNumber: true,
//       })}
//       error={errors.totalUnits?.message}
//     />
//   </div>
// </div>

// {/* Amenities */}

// <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
//   <h2 className="text-2xl font-bold text-slate-900">
//     Amenities
//   </h2>

//   <p className="mt-2 text-slate-500">
//     Select everything guests will enjoy.
//   </p>

//   <div className="mt-8">
//     <AmenitiesInput
//       value={amenities}
//       onChange={(value) =>
//         setValue(
//           "amenities",
//           value,
//           {
//             shouldValidate: true,
//           }
//         )
//       }
//       error={errors.amenities?.message}
//     />
//   </div>
// </div>

// {/* Featured */}

// <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
//   <div className="flex items-center justify-between">
//     <div>
//       <h2 className="text-2xl font-bold text-slate-900">
//         Featured Apartment
//       </h2>

//       <p className="mt-2 text-slate-500">
//         Featured apartments appear first on the homepage.
//       </p>
//     </div>

//     <label className="flex items-center gap-3">
//       <input
//         type="checkbox"
//         checked={featured}
//         onChange={(e) =>
//           setValue(
//             "isFeatured",
//             e.target.checked,
//             {
//               shouldValidate: true,
//             }
//           )
//         }
//         className="h-5 w-5 rounded"
//       />

//       <span className="font-medium">
//         Featured
//       </span>
//     </label>
//   </div>
// </div>

// {/* API Success */}

// {createApartmentMutation.isSuccess && (
//   <motion.div
//     initial={{
//       opacity: 0,
//       y: 10,
//     }}
//     animate={{
//       opacity: 1,
//       y: 0,
//     }}
//     className="
//       rounded-3xl
//       border
//       border-green-200
//       bg-green-50
//       p-6
//     "
//   >
//     <h3 className="text-lg font-semibold text-green-700">
//       Apartment Created Successfully
//     </h3>

//     <p className="mt-2 text-green-600">
//       Your apartment has been added and is
//       ready for booking.
//     </p>
//   </motion.div>
// )}

// {/* API Error */}

// {createApartmentMutation.isError && (
//   <motion.div
//     initial={{
//       opacity: 0,
//       y: 10,
//     }}
//     animate={{
//       opacity: 1,
//       y: 0,
//     }}
//     className="
//       rounded-3xl
//       border
//       border-red-200
//       bg-red-50
//       p-6
//     "
//   >
//     <h3 className="text-lg font-semibold text-red-700">
//       Unable to Create Apartment
//     </h3>

//     <p className="mt-2 text-red-600">
//       {createApartmentMutation.error
//         ?.message ??
//         "Please try again."}
//     </p>
//   </motion.div>
// )}

// {/* Footer */}

// <div
//   className="
//     sticky
//     bottom-0
//     rounded-3xl
//     border
//     border-slate-200
//     bg-white
//     p-6
//     shadow-lg
//   "
// >
//   <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//     <div>
//       <h3 className="text-lg font-semibold text-slate-900">
//         Ready to Publish?
//       </h3>

//       <p className="text-slate-500">
//         Review your information before
//         creating the apartment.
//       </p>
//     </div>

//     <Button
//       type="submit"
//       disabled={
//         createApartmentMutation.isPending
//       }
//       size="lg"
//       className="min-w-[220px]"
//     >
//       {createApartmentMutation.isPending
//         ? "Creating Apartment..."
//         : "Create Apartment"}
//     </Button>
//   </div>
// </div>

//     </motion.form>
//   );
// }

