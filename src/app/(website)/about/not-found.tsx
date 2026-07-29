



import Link from "next/link";
import {
  SearchX,
  ArrowLeft,
  Home,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function AboutNotFound() {
  return (
    <section className="flex min-h-screen items-center bg-gradient-to-b from-slate-50 to-white py-20">
      <Container>
        <div className="mx-auto max-w-3xl rounded-[40px] border border-slate-200 bg-white p-10 text-center shadow-xl md:p-16">
          {/* Icon */}

          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-blue-100">
            <SearchX
              size={52}
              className="text-blue-600"
            />
          </div>

          {/* 404 */}

          <p className="mt-8 text-7xl font-extrabold tracking-tight text-slate-900">
            404
          </p>

          {/* Heading */}

          <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            About Page Not Found
          </h1>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            The About page you're looking for doesn't
            exist or may have been moved. You can
            return to the homepage or continue
            exploring our luxury apartments across
            Nigeria.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/">
              <Button
                size="lg"
                leftIcon={<Home size={18} />}
              >
                Go Home
              </Button>
            </Link>

            <Link href="/apartments">
              <Button
                variant="outline"
                size="lg"
                leftIcon={<ArrowLeft size={18} />}
              >
                Browse Apartments
              </Button>
            </Link>
          </div>

          {/* Helpful Links */}

          <div className="mt-14 border-t border-slate-200 pt-10">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              You may be looking for
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/destinations"
                className="rounded-full border border-slate-200 px-5 py-2 transition hover:border-blue-500 hover:text-blue-600"
              >
                Destinations
              </Link>

              <Link
                href="/apartments"
                className="rounded-full border border-slate-200 px-5 py-2 transition hover:border-blue-500 hover:text-blue-600"
              >
                Apartments
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-slate-200 px-5 py-2 transition hover:border-blue-500 hover:text-blue-600"
              >
                Contact Us
              </Link>

              <Link
                href="/blog"
                className="rounded-full border border-slate-200 px-5 py-2 transition hover:border-blue-500 hover:text-blue-600"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}