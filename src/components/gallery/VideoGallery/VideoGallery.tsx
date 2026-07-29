


"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { PlayCircle, X } from "lucide-react";

import {
  galleryVideos,
  type GalleryVideo,
} from "@/data/gallery";

import VideoCard from "./VideoCard";

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] =
    useState<GalleryVideo | null>(null);

  return (
    <>
      <section className="bg-slate-950 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Heading */}

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
              duration: 0.5,
            }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-4 py-2 text-sm font-semibold text-blue-400">
              <PlayCircle size={18} />
              Video Tours
            </span>

            <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
              Experience Every Apartment
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Walk through our premium apartments,
              luxury interiors, and world-class
              amenities with immersive video tours.
            </p>
          </motion.div>

          {/* Grid */}

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {galleryVideos.map(
              (video, index) => (
                <VideoCard
                  key={video.id}
                  title={video.title}
                  thumbnail={video.thumbnail}
                  duration={video.duration}
                  location={video.location}
                  index={index}
                  onClick={() =>
                    setSelectedVideo(video)
                  }
                />
              )
            )}
          </div>
        </div>
      </section>

      {/* ================= Video Modal ================= */}

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-6 backdrop-blur-lg"
          >
            {/* Close */}

            <button
              onClick={() =>
                setSelectedVideo(null)
              }
              className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <X size={24} />
            </button>

            {/* Video */}

            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              className="w-full max-w-6xl overflow-hidden rounded-3xl bg-black shadow-2xl"
            >
              <div className="aspect-video">
                <iframe
                  src={selectedVideo.videoUrl}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>

              {/* Footer */}

              <div className="border-t border-white/10 bg-slate-900 p-6">
                <h3 className="text-2xl font-bold text-white">
                  {selectedVideo.title}
                </h3>

                <p className="mt-2 text-slate-400">
                  {selectedVideo.location}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}