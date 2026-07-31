



"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  BookOpen,
  MessageSquare,
  Send,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      // TODO:
      // Connect to your backend endpoint
      // await contactService.sendMessage(formData);

      await new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );

      alert("Message sent successfully.");
    } catch (error) {
      console.error(error);

      alert("Unable to send message.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
      "
    >
      <div className="mb-8">
        <span
          className="
            inline-flex
            rounded-full
            bg-primary/10
            px-4
            py-1.5
            text-xs
            font-semibold
            uppercase
            tracking-widest
            text-primary
          "
        >
          Contact Form
        </span>

        <h2 className="mt-4 text-3xl font-bold text-slate-900">
          Send Us a Message
        </h2>

        <p className="mt-3 text-slate-500">
          Have questions about an apartment,
          reservations, payments or long-term
          stays? Fill out the form below and our
          team will respond as soon as possible.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Input
            label="Full Name"
            placeholder="John Doe"
            leftIcon={<User size={18} />}
            required
          />

          <Input
            type="email"
            label="Email Address"
            placeholder="john@example.com"
            leftIcon={<Mail size={18} />}
            required
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Input
            type="tel"
            label="Phone Number"
            placeholder="+234..."
            leftIcon={<Phone size={18} />}
            required
          />

          <Input
            label="Subject"
            placeholder="Booking Enquiry"
            leftIcon={<BookOpen size={18} />}
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Message
          </label>

          <div className="relative">
            <MessageSquare
              size={18}
              className="
                absolute
                left-4
                top-4
                text-slate-400
              "
            />

            <textarea
              required
              rows={7}
              placeholder="Tell us how we can help..."
              className="
                w-full
                rounded-2xl
                border
                border-slate-300
                bg-white
                py-4
                pl-11
                pr-4
                text-sm
                outline-none
                transition
                focus:border-primary
                focus:ring-2
                focus:ring-primary/20
                resize-none
              "
            />
          </div>
        </div>

        <Button
          type="submit"
          loading={loading}
          className="w-full md:w-auto"
        >
          <Send
            size={18}
            className="mr-2"
          />
          Send Message
        </Button>
      </form>
    </motion.div>
  );
}