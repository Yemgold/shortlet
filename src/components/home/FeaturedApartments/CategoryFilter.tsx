


"use client";

const categories = [
  "All",
  "Apartment",
  "Villa",
  "Studio",
  "Penthouse",
];

interface Props {
  active: string;
  onChange: (value: string) => void;
}

export default function CategoryFilter({
  active,
  onChange,
}: Props) {
  return (
    <div className="mb-10 flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`
            rounded-full
            px-6
            py-3
            text-sm
            font-semibold
            transition-all

            ${
              active === category
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-slate-100 hover:bg-slate-200"
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
}