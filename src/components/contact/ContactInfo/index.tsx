


"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
} from "lucide-react";

const contactItems = [
  {
    title: "Office Address",
    description:
      "Lekki Phase 1, Lagos, Nigeria",
    icon: MapPin,
    href: "https://maps.google.com",
    color:
      "bg-blue-100 text-blue-600",
  },
  {
    title: "Phone Number",
    description:
      "+234 800 000 0000",
    icon: Phone,
    href: "tel:+2348000000000",
    color:
      "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Email Address",
    description:
      "support@rhluxuryhomes.com",
    icon: Mail,
    href: "mailto:support@rhluxuryhomes.com",
    color:
      "bg-orange-100 text-orange-600",
  },
  {
    title: "WhatsApp",
    description:
      "Chat with our team",
    icon: MessageCircle,
    href: "https://wa.me/2348000000000",
    color:
      "bg-green-100 text-green-600",
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{
          opacity: 0,
          x: -30,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <span
          className="
            inline-flex
            rounded-full
            bg-primary/10
            px-4
            py-1.5
            text-xs
            font-semibold
            uppercase
            tracking-widest
            text-primary
          "
        >
          Contact Information
        </span>

        <h2 className="mt-4 text-3xl font-bold text-slate-900">
          We'd Love to Hear From You
        </h2>

        <p className="mt-3 leading-7 text-slate-500">
          Whether you're looking for a luxury
          apartment, need assistance with an
          existing reservation, or have a
          general enquiry, our team is always
          ready to help.
        </p>
      </motion.div>

      <div className="space-y-5">
        {contactItems.map(
          (
            {
              title,
              description,
              icon: Icon,
              href,
              color,
            },
            index
          ) => (
            <motion.div
              key={title}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.08,
              }}
            >
              <Link
                href={href}
                target={
                  href.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                className="
                  group
                  flex
                  items-center
                  gap-5
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/30
                  hover:shadow-lg
                "
              >
                <div
                  className={`
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    ${color}
                  `}
                >
                  <Icon size={24} />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900">
                    {title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {description}
                  </p>
                </div>
              </Link>
            </motion.div>
          )
        )}
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.35,
        }}
        className="
          rounded-3xl
          border
          border-slate-200
          bg-slate-50
          p-6
        "
      >
        <div className="flex items-start gap-4">
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-primary/10
              text-primary
            "
          >
            <Clock size={22} />
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Business Hours
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              Monday - Friday:
              <strong> 8:00 AM - 8:00 PM</strong>
              <br />
              Saturday:
              <strong> 9:00 AM - 6:00 PM</strong>
              <br />
              Sunday:
              <strong> 10:00 AM - 4:00 PM</strong>
            </p>

            <p className="mt-4 text-sm text-slate-500">
              Need urgent assistance? Reach us
              anytime via WhatsApp.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}