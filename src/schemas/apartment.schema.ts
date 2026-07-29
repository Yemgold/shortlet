



// import { z } from "zod";

// export const apartmentSchema = z.object({
//   files: z
//     .array(z.instanceof(File))
//     .min(1, "Please upload at least one image")
//     .max(20, "You can upload a maximum of 20 images"),

//   name: z
//     .string()
//     .trim()
//     .min(
//       3,
//       "Apartment name must be at least 3 characters"
//     )
//     .max(
//       150,
//       "Apartment name cannot exceed 150 characters"
//     ),

//   description: z
//     .string()
//     .trim()
//     .min(
//       20,
//       "Description must be at least 20 characters"
//     )
//     .max(
//       5000,
//       "Description cannot exceed 5000 characters"
//     ),

//   pricePerNight: z.coerce
//     .number()
//     .positive(
//       "Price per night must be greater than zero"
//     ),

//   bathrooms: z.coerce
//     .number()
//     .int()
//     .min(
//       1,
//       "Apartment must have at least one bathroom"
//     ),

//   guests: z.coerce
//     .number()
//     .int()
//     .min(
//       1,
//       "Apartment must accommodate at least one guest"
//     ),

//   bedrooms: z.coerce
//     .number()
//     .int()
//     .min(
//       1,
//       "Apartment must have at least one bedroom"
//     ),

//   totalUnits: z.coerce
//     .number()
//     .int()
//     .min(
//       1,
//       "Total units must be at least one"
//     ),

//   amenities: z
//     .array(
//       z
//         .string()
//         .trim()
//         .min(
//           1,
//           "Amenity cannot be empty"
//         )
//     )
//     .min(
//       1,
//       "Please add at least one amenity"
//     ),

//   isFeatured: z.boolean().default(false),
// });

// export type ApartmentFormValues = z.infer<
//   typeof apartmentSchema
// >;







import { z } from "zod";

export const apartmentSchema = z.object({
  /* ----------------------------
     Images
  ---------------------------- */

  files: z
    .array(z.instanceof(File))
    .min(1, "Please upload at least one image")
    .max(20, "Maximum of 20 images"),

  /* ----------------------------
     Basic Information
  ---------------------------- */

  name: z
    .string()
    .trim()
    .min(3)
    .max(150),

  description: z
    .string()
    .trim()
    .min(20)
    .max(5000),

  propertyType: z
    .string()
    .min(1, "Select a property type"),

  isFeatured: z.boolean(),

  /* ----------------------------
     Location
  ---------------------------- */

  country: z
    .string()
    .default("Nigeria"),

  state: z
    .string()
    .min(1, "State is required"),

  city: z
    .string()
    .min(1, "City is required"),

  area: z
    .string()
    .min(1, "Area is required"),

  address: z
    .string()
    .min(5, "Address is required"),

  landmark: z
    .string()
    .optional(),

  googleMapsUrl: z
    .string()
    .url("Invalid Google Maps URL")
    .optional()
    .or(z.literal("")),

  latitude: z.number().optional(),

  longitude: z.number().optional(),

  /* ----------------------------
     Pricing
  ---------------------------- */

  pricePerNight: z.coerce
    .number()
    .positive(),

  cleaningFee: z.coerce
    .number()
    .min(0)
    .default(0),

  securityDeposit: z.coerce
    .number()
    .min(0)
    .default(0),

  discount: z.coerce
    .number()
    .min(0)
    .max(100)
    .default(0),

  /* ----------------------------
     Capacity
  ---------------------------- */

  bedrooms: z.coerce
    .number()
    .int()
    .min(1),

  bathrooms: z.coerce
    .number()
    .int()
    .min(1),

  guests: z.coerce
    .number()
    .int()
    .min(1),

  totalUnits: z.coerce
    .number()
    .int()
    .min(1),

  /* ----------------------------
     Amenities
  ---------------------------- */

  amenities: z
    .array(z.string())
    .min(1),
});

export type ApartmentFormValues =
  z.infer<typeof apartmentSchema>;