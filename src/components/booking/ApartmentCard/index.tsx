

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import type { Apartment } from "@/types/apartment";

import { Card } from "@/components/ui";

import ApartmentImage from "@/components/booking/ApartmentImage";
import ApartmentInfo from "@/components/booking/ApartmentInfo";

interface ApartmentCardProps {
  apartment: Apartment;

  onFavorite?: (id: string) => void;

  onCheckAvailability?: (id: string) => void;
}

export default function ApartmentCard({
  apartment,
  onFavorite,
  onCheckAvailability,
}: ApartmentCardProps) {
  return (
    <motion.article
      whileHover={{ y: -10 }}
      transition={{ duration: 0.25 }}
    >
      <Card
        padding="none"
        className="
          group
          overflow-hidden
          rounded-3xl
          border
          border-slate-200
          bg-white
          shadow-lg
          transition-all
          duration-300
          hover:shadow-2xl
        "
      >
        <ApartmentImage
          image={
            apartment.media?.[0]?.url ??
            "/images/apartment-placeholder.jpg"
          }
          title={apartment.name}
          rating={apartment.rating ?? 0}
          reviews={apartment.reviews ?? 0}
          verified={apartment.isFeatured}
          favorite={false}
          onFavorite={() =>
            onFavorite?.(apartment._id)
          }
        />

        <ApartmentInfo
          title={apartment.name}
          location={apartment.location}
          price={apartment.pricePerNight}
          bedrooms={apartment.bedrooms}
          bathrooms={apartment.bathrooms}
          guests={apartment.guests}
          amenities={apartment.amenities}
          onCheckAvailability={() =>
            onCheckAvailability?.(apartment._id)
           }
            showCheckAvailabilityButton={false}
        />

        <div className="px-6 pb-6">
          <Link
            href={`/apartments/${apartment.slug}`}
            className="
              block
              rounded-xl
              border
              border-blue-600
              py-3
              text-center
              font-semibold
              text-blue-600
              transition
              hover:bg-blue-600
              hover:text-white
            "
          >
            View Apartment 
          </Link>
        </div>
      </Card>
    </motion.article>
  );
}