

"use client";

interface Props {
  price: number;
}

export default function ApartmentPrice({
  price,
}: Props) {
  return (
    <div className="flex items-end gap-1">
      <span className="text-2xl font-bold text-slate-900">
        ₦{price.toLocaleString()}
      </span>

      <span className="pb-1 text-sm text-slate-500">
        / night
      </span>
    </div>
  );
}