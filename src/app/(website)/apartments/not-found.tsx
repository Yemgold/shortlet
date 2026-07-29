



import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <div className="mb-6 text-7xl">🏠</div>

        <h1 className="text-4xl font-bold text-slate-900">
          Apartment Not Found
        </h1>

        <p className="mt-4 text-lg text-slate-600">
          The apartment or page you're looking for doesn't exist,
          has been removed, or may have moved.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/apartments"
            className="
              rounded-xl
              bg-blue-600
              px-6
              py-3
              font-semibold
              text-white
              transition
              hover:bg-blue-700
            "
          >
            Browse Apartments
          </Link>

          <Link
            href="/"
            className="
              rounded-xl
              border
              border-slate-300
              px-6
              py-3
              font-semibold
              transition
              hover:bg-slate-100
            "
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}