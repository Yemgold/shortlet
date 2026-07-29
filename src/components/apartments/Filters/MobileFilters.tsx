

"use client";

import * as React from "react";
import { SlidersHorizontal, X } from "lucide-react";

import { Button } from "@/components/ui";
import FilterSidebar from "./FilterSidebar";

export default function MobileFilter() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {/* Mobile Filter Button */}

      <div className="lg:hidden">
        <Button
          fullWidth
          variant="outline"
          leftIcon={<SlidersHorizontal size={18} />}
          onClick={() => setOpen(true)}
        >
          Filters
        </Button>
      </div>

      {/* Overlay */}

      {open && (
        <div
          className="
            fixed
            inset-0
            z-50
            bg-black/50
            backdrop-blur-sm
          "
        >
          {/* Drawer */}

          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              h-[90vh]
              overflow-hidden
              rounded-t-3xl
              bg-white
              shadow-2xl
              animate-in
              slide-in-from-bottom
              duration-300
            "
          >
            {/* Top Bar */}

            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-slate-200
                px-6
                py-5
              "
            >
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Filters
                </h2>

                <p className="text-sm text-slate-500">
                  Refine your apartment search
                </p>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-slate-100
                  transition
                  hover:bg-slate-200
                "
              >
                <X size={20} />
              </button>
            </div>

            {/* Filters */}

            <div className="h-[calc(90vh-88px)] overflow-y-auto p-5">
              <FilterSidebar onClose={() => setOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}