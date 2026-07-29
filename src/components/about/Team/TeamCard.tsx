





"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

import {
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
}

interface TeamCardProps {
  member: TeamMember;
  delay?: number;
}

export default function TeamCard({
  member,
  delay = 0,
}: TeamCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.5,
        delay,
      }}
      whileHover={{
        y: -10,
      }}
      className="
        group
        overflow-hidden
        rounded-[30px]
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:border-blue-200
        hover:shadow-2xl
      "
    >
      {/* Image */}

      <div className="relative h-[380px] overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="
            object-cover
            transition
            duration-700
            group-hover:scale-110
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Socials */}

        <div
          className="
            absolute
            right-5
            top-5
            flex
            flex-col
            gap-3
            translate-x-16
            opacity-0
            transition-all
            duration-500
            group-hover:translate-x-0
            group-hover:opacity-100
          "
        >
          {member.linkedin && (
            <Link
              href={member.linkedin}
              target="_blank"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-white
                text-slate-700
                shadow-lg
                transition
                hover:bg-blue-600
                hover:text-white
              "
            >
              <FaLinkedinIn size={18} />
            </Link>
          )}

          {member.twitter && (
            <Link
              href={member.twitter}
              target="_blank"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-white
                text-slate-700
                shadow-lg
                transition
                hover:bg-sky-500
                hover:text-white
              "
            >
              <FaXTwitter size={18} />
            </Link>
          )}

          {member.instagram && (
            <Link
              href={member.instagram}
              target="_blank"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-white
                text-slate-700
                shadow-lg
                transition
                hover:bg-pink-600
                hover:text-white
              "
            >
              <FaInstagram size={18} />
            </Link>
          )}

          {member.email && (
            <Link
              href={`mailto:${member.email}`}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-white
                text-slate-700
                shadow-lg
                transition
                hover:bg-emerald-600
                hover:text-white
              "
            >
              <Mail size={18} />
            </Link>
          )}
        </div>

        {/* Name Overlay */}

        <div className="absolute bottom-6 left-6">
          <span
            className="
              rounded-full
              bg-blue-600
              px-4
              py-2
              text-sm
              font-semibold
              text-white
            "
          >
            {member.role}
          </span>
        </div>
      </div>

      {/* Content */}

      <div className="p-8">
        <h3 className="text-2xl font-bold text-slate-900">
          {member.name}
        </h3>

        <p className="mt-5 leading-8 text-slate-600">
          {member.bio}
        </p>

        <div className="mt-8 flex items-center justify-between">
          <div className="h-1 w-16 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-28" />

          <span className="text-sm font-semibold uppercase tracking-wider text-slate-400">
            Team Member
          </span>
        </div>
      </div>
    </motion.article>
  );
}