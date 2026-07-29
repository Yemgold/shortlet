



"use client";

import { useRef } from "react";

import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";

import {
  ImagePlus,
  Trash2,
  UploadCloud,
} from "lucide-react";

import Button from "@/components/ui/Button";

interface ImageUploaderProps {
  value: File[];
  onChange: (files: File[]) => void;
  error?: string;
  maxFiles?: number;
}

export default function ImageUploader({
  value,
  onChange,
  error,
  maxFiles = 20,
}: ImageUploaderProps) {
  const inputRef =
    useRef<HTMLInputElement>(null);

  const addFiles = (
    fileList: FileList | null
  ) => {
    if (!fileList) return;

    const files = Array.from(fileList);

    const images = files.filter((file) =>
      file.type.startsWith("image/")
    );

    const merged = [
      ...value,
      ...images,
    ].slice(0, maxFiles);

    onChange(merged);
  };

  const removeImage = (
    index: number
  ) => {
    onChange(
      value.filter(
        (_, i) => i !== index
      )
    );
  };

  return (
    <div className="space-y-6">
      {/* Upload Area */}

      <div
        onClick={() =>
          inputRef.current?.click()
        }
        onDragOver={(e) =>
          e.preventDefault()
        }
        onDrop={(e) => {
          e.preventDefault();

          addFiles(
            e.dataTransfer.files
          );
        }}
        className="
          cursor-pointer
          rounded-3xl
          border-2
          border-dashed
          border-slate-300
          bg-slate-50
          p-10
          text-center
          transition
          hover:border-blue-500
          hover:bg-blue-50
        "
      >
        <UploadCloud
          size={48}
          className="mx-auto text-blue-600"
        />

        <h3 className="mt-4 text-xl font-semibold text-slate-900">
          Upload Apartment Images
        </h3>

        <p className="mt-2 text-slate-500">
          Drag & drop images here or
          click to browse.
        </p>

        <Button
          type="button"
          variant="secondary"
          className="mt-6"
        >
          <ImagePlus size={18} />
          Choose Images
        </Button>

        <input
          ref={inputRef}
          hidden
          multiple
          accept="image/*"
          type="file"
          onChange={(e) =>
            addFiles(
              e.target.files
            )
          }
        />
      </div>

      {error && (
        <p className="text-sm text-red-600">
          {error}
        </p>
      )}

      {/* Preview */}

      {value.length > 0 && (
        <>
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-semibold">
              Selected Images
            </h4>

            <span className="text-sm text-slate-500">
              {value.length} / {maxFiles}
            </span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence>
              {value.map(
                (
                  file,
                  index
                ) => (
                  <motion.div
                    key={`${file.name}-${index}`}
                    layout
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    className="
                      relative
                      overflow-hidden
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      shadow-sm
                    "
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={URL.createObjectURL(
                          file
                        )}
                        alt={
                          file.name
                        }
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>

                    <div className="flex items-center justify-between p-3">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium">
                          {file.name}
                        </p>

                        <p className="text-xs text-slate-500">
                          {(
                            file.size /
                            1024 /
                            1024
                          ).toFixed(
                            2
                          )}{" "}
                          MB
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          removeImage(
                            index
                          )
                        }
                        className="
                          rounded-lg
                          p-2
                          text-red-500
                          transition
                          hover:bg-red-50
                        "
                      >
                        <Trash2
                          size={18}
                        />
                      </button>
                    </div>
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </div>
        </>
      )}
    </div>
  );
}