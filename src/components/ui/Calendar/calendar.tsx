

"use client";

import * as React from "react";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import {
  DayPicker,
  type DayPickerProps,
} from "react-day-picker";

import "react-day-picker/style.css";

import { cn } from "@/lib/cn";

type CalendarProps = DayPickerProps & {
  className?: string;

  /**
   * Dates that are already booked
   * and cannot be selected.
   */
  bookedDates?: Date[];
};

export default function Calendar({
  className,
  classNames,
  showOutsideDays = true,
   bookedDates = [],
  ...props
}: CalendarProps) {
  const [months, setMonths] =
    React.useState(2);

  React.useEffect(() => {
    const updateMonths = () => {
      setMonths(
        window.innerWidth < 768 ? 1 : 2
      );
    };

    updateMonths();

    window.addEventListener(
      "resize",
      updateMonths
    );

    return () =>
      window.removeEventListener(
        "resize",
        updateMonths
      );
  }, []);

  return (


   <DayPicker
  numberOfMonths={months}
  showOutsideDays={showOutsideDays}

  disabled={[
  ...(Array.isArray(props.disabled)
    ? props.disabled
    : props.disabled
      ? [props.disabled]
      : []),

  ...bookedDates,

]}

 modifiers={{
    booked: bookedDates,
  }}

  className={cn(
  `
    rounded-3xl
    border
    border-slate-200
    bg-white
    p-6
    shadow-lg
    ring-1
    ring-slate-100
  `,
  className
)}


  navLayout="around"
  fixedWeeks
  components={{
    Chevron: ({
      orientation,
      className,
    }) =>
      orientation === "left" ? (
        <ChevronLeft
          className={cn(
            "h-5 w-5",
            className
          )}
        />
      ) : (
        <ChevronRight
          className={cn(
            "h-5 w-5",
            className
          )}
        />
      ),
  }}
  classNames={{
    root: "w-full",

    months:
      "flex flex-col gap-8 lg:flex-row",

    month: "space-y-5",

    month_caption:
      "relative flex items-center justify-center",

    caption_label:
      "text-base font-semibold text-slate-900",

    nav: "flex items-center gap-2",

    button_previous:
`
absolute
left-0
flex
h-10
w-10
items-center
justify-center
rounded-full
border
border-slate-200
bg-white
shadow-sm
transition-all
duration-200
hover:border-primary
hover:bg-primary
hover:text-white
active:scale-95
`,

button_next:
`
absolute
right-0
flex
h-10
w-10
items-center
justify-center
rounded-full
border
border-slate-200
bg-white
shadow-sm
transition-all
duration-200
hover:border-primary
hover:bg-primary
hover:text-white
active:scale-95
`,

    month_grid:
      "w-full border-collapse",

    weekdays:
      "grid grid-cols-7 mb-2",

    weekday:
      "text-center text-xs font-semibold uppercase tracking-wide text-slate-500",

    weeks:
      "space-y-1",

    week:
      "grid grid-cols-7",

    day:
      "flex items-center justify-center p-0",

    day_button:
`
flex
h-11
w-11
items-center
justify-center
rounded-full
text-sm
font-medium
text-slate-700
transition-all
duration-200
hover:bg-primary/10
hover:text-primary
hover:scale-105
focus:outline-none
focus:ring-2
focus:ring-primary/30
`,

    ...classNames,
  }}

 

  {...props}
/>




  );
}