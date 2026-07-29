


"use client";

import { useEffect, useState } from "react";

import { List } from "lucide-react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<
    Heading[]
  >([]);

  const [activeId, setActiveId] =
    useState("");

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll(
        "article h2, article h3"
      )
    ) as HTMLHeadingElement[];

    const items = elements.map((heading) => {
      if (!heading.id) {
        heading.id = heading.textContent!
          .toLowerCase()
          .replace(/[^\w]+/g, "-");
      }

      return {
        id: heading.id,
        text: heading.textContent || "",
        level:
          heading.tagName === "H2" ? 2 : 3,
      };
    });

    setHeadings(items);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find(
          (entry) =>
            entry.isIntersecting
        );

        if (visible) {
          setActiveId(
            visible.target.id
          );
        }
      },
      {
        rootMargin:
          "-20% 0px -65% 0px",
      }
    );

    elements.forEach((heading) =>
      observer.observe(heading)
    );

    return () =>
      observer.disconnect();
  }, []);

  if (!headings.length) return null;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <List
          size={20}
          className="text-blue-600"
        />

        <h3 className="text-xl font-bold text-slate-900">
          Table of Contents
        </h3>
      </div>

      <nav>
        <ul className="space-y-3">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={
                heading.level === 3
                  ? "ml-5"
                  : ""
              }
            >
              <a
                href={`#${heading.id}`}
                className={`block border-l-2 pl-4 text-sm transition ${
                  activeId ===
                  heading.id
                    ? "border-blue-600 font-semibold text-blue-600"
                    : "border-transparent text-slate-600 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}