


"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export default function Counter({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}: CounterProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const easeOut =
        1 - Math.pow(1 - progress, 3);

      setCount(end * easeOut);

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(animate);
      }
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () =>
      cancelAnimationFrame(animationFrame);
  }, [started, end, duration]);

  return (
    <span
      ref={ref}
      className={className}
    >
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}