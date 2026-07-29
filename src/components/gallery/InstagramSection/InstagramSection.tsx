



"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Heart,
  MessageCircle,
} from "lucide-react";

import { RiInstagramFill } from "react-icons/ri";

import { instagramPosts } from "@/data/gallery";

export default function InstagramSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ================= Header ================= */}

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
            duration: 0.5,
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-pink-50 px-5 py-2 text-sm font-semibold text-pink-600">
            <RiInstagramFill size={18} />
            Instagram
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Follow Our Luxury Lifestyle
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-500">
            Get inspired by beautiful interiors,
            guest experiences, luxury living,
            and exclusive apartment updates.
          </p>
        </motion.div>

        {/* ================= Grid ================= */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {instagramPosts.map((post, index) => (
            <motion.article
              key={post.id}
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
              }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
              }}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.caption}
                  width={700}
                  height={700}
                  className="aspect-square w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}

                <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 opacity-0 transition duration-300 group-hover:opacity-100">
                  <RiInstagramFill size={40} className="text-white" />
                </div>
              </div>

              {/* Content */}

              <div className="p-5">
                <p className="line-clamp-2 text-sm leading-7 text-slate-600">
                  {post.caption}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <div className="flex gap-5 text-sm text-slate-500">
                    <span className="flex items-center gap-2">
                      <Heart size={16} />
                      {post.likes}
                    </span>

                    <span className="flex items-center gap-2">
                      <MessageCircle size={16} />
                      {post.comments}
                    </span>
                  </div>

                  <RiInstagramFill size={20} className="text-pink-600" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ================= CTA ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
          }}
          className="mt-20 text-center"
        >
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            <RiInstagramFill size={22} />

            Follow on Instagram

            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}