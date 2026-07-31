


"use client";

import Hero from "@/components/contact/Hero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import OfficeLocation from "@/components/contact/OfficeLocation";
import FAQ from "@/components/contact/FAQ";
import CTA from "@/components/contact/CTA";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Contact Section */}
      <Section className="py-20">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[420px_1fr]">
            <ContactInfo />

            <ContactForm />
          </div>
        </Container>
      </Section>

      {/* Office Location */}
      <Section className="pb-20">
        <Container>
          <OfficeLocation />
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="bg-slate-50 py-20">
        <Container>
          <FAQ />
        </Container>
      </Section>

      {/* Call To Action */}
      <Section className="py-20">
        <Container>
          <CTA />
        </Container>
      </Section>
    </>
  );
}