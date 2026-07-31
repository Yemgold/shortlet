


"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How do I book an apartment?",
    answer:
      "Browse our available apartments, choose your preferred dates, complete the booking form, and securely make payment online. Your reservation will be confirmed immediately after successful payment.",
  },
  {
    question: "Can I cancel or modify my booking?",
    answer:
      "Yes. Cancellation and modification requests are subject to our booking policy and the apartment's cancellation terms. Please contact our support team as early as possible.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept secure online payments through Paystack, including debit cards, bank transfers, and other supported payment options.",
  },
  {
    question: "What time is check-in and check-out?",
    answer:
      "Standard check-in begins at 2:00 PM, while check-out is by 12:00 PM. Early check-in or late check-out may be available upon request and subject to availability.",
  },
  {
    question: "Are the apartments fully furnished?",
    answer:
      "Yes. Every apartment is fully furnished and equipped with modern amenities such as Wi-Fi, air conditioning, smart TVs, fitted kitchens, premium bedding, and housekeeping services where applicable.",
  },
  {
    question: "Is customer support available?",
    answer:
      "Absolutely. Our customer support team is available every day to assist with reservations, payments, check-in, special requests, and any issues during your stay.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="space-y-10">
      <div className="text-center">
        <span
          className="
            inline-flex
            rounded-full
            bg-primary/10
            px-4
            py-2
            text-xs
            font-semibold
            uppercase
            tracking-widest
            text-primary
          "
        >
          Frequently Asked Questions
        </span>

        <h2 className="mt-5 text-4xl font-bold text-slate-900">
          Have Questions?
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-500">
          Find answers to the most common questions about bookings,
          payments, cancellations, check-in, and our luxury apartments.
        </p>
      </div>

      <div className="mx-auto max-w-4xl space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={faq.question}
              layout
              className="
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                shadow-sm
              "
            >
              <button
                onClick={() =>
                  setOpenIndex(
                    isOpen ? null : index
                  )
                }
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  gap-4
                  px-6
                  py-5
                  text-left
                  transition
                  hover:bg-slate-50
                "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-2xl
                      bg-primary/10
                      text-primary
                    "
                  >
                    <HelpCircle size={20} />
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900">
                    {faq.question}
                  </h3>
                </div>

                <motion.div
                  animate={{
                    rotate: isOpen ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  <ChevronDown
                    size={22}
                    className="text-slate-500"
                  />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-slate-200 px-6 py-6">
                      <p className="leading-8 text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}