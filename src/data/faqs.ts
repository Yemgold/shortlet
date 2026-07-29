



// src/data/faqs.ts

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "How do I book an apartment?",
    answer:
      "Simply browse available apartments, select your preferred property, choose your check-in and check-out dates, enter the number of guests, and complete your booking securely online.",
  },
  {
    id: "faq-2",
    question: "Can I cancel my reservation?",
    answer:
      "Yes. Cancellation policies vary by apartment. Please review the cancellation policy on the property page before confirming your booking.",
  },
  {
    id: "faq-3",
    question: "Are all apartments verified?",
    answer:
      "Yes. Every apartment listed on Rahannes Luxury is carefully verified to ensure quality, safety, and an exceptional guest experience.",
  },
  {
    id: "faq-4",
    question: "What payment methods are accepted?",
    answer:
      "We accept secure online payments using debit cards, credit cards, bank transfers, and other supported payment gateways.",
  },
  {
    id: "faq-5",
    question: "Can I extend my stay after booking?",
    answer:
      "Yes, subject to availability. Contact the property manager or use your booking dashboard to request an extension.",
  },
  {
    id: "faq-6",
    question: "Do the apartments include Wi-Fi?",
    answer:
      "Most apartments provide complimentary high-speed Wi-Fi. Available amenities are displayed on each apartment's details page.",
  },
  {
    id: "faq-7",
    question: "Are pets allowed?",
    answer:
      "Pet policies differ by property. Please check the apartment listing for pet-friendly information before booking.",
  },
  {
    id: "faq-8",
    question: "Is customer support available?",
    answer:
      "Yes. Our customer support team is available 24/7 to assist with bookings, payments, and any issues during your stay.",
  },
];

export default faqs;