



"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Crown,
  Award,
  Users,
  Star,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

import TeamCard, {
  TeamMember,
} from "./TeamCard";

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "David Johnson",
    role: "Founder & CEO",
    image: "/images/team/team-1.jpg",
    bio: "David founded the company with a vision to redefine luxury apartment bookings through technology, hospitality and exceptional customer experience.",
    email: "david@example.com",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Operations Director",
    image: "/images/team/team-2.jpg",
    bio: "Sarah oversees daily operations, ensuring every guest enjoys a seamless and memorable stay from booking to checkout.",
    email: "sarah@example.com",
    linkedin: "#",
    instagram: "#",
  },
  {
    id: 3,
    name: "Michael Adams",
    role: "Technology Lead",
    image: "/images/team/team-3.jpg",
    bio: "Michael leads the engineering team responsible for our secure booking platform and innovative digital experiences.",
    email: "michael@example.com",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 4,
    name: "Sophia Brown",
    role: "Customer Experience",
    image: "/images/team/team-4.jpg",
    bio: "Sophia ensures every guest receives premium support before, during and after every reservation.",
    email: "sophia@example.com",
    instagram: "#",
  },
];

export default function Team() {
  const founder = teamMembers[0];

  return (
    <Section className="relative overflow-hidden bg-white">
      {/* Background Decoration */}

      <div className="absolute inset-0">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-100/40 blur-3xl" />
      </div>

      <Container>
        {/* Section Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="font-semibold uppercase tracking-[0.25em] text-blue-600">
            OUR TEAM
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 lg:text-5xl">
            Meet The People
            <br />
            Behind The Experience
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Behind every successful booking is a passionate
            team dedicated to delivering exceptional service,
            premium hospitality and unforgettable guest
            experiences.
          </p>
        </motion.div>

        {/* Featured Leader */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mb-24
            overflow-hidden
            rounded-[40px]
            border
            border-slate-200
            bg-slate-50
            shadow-xl
          "
        >
          <div className="grid items-center lg:grid-cols-2">
            {/* Image */}

            <div className="relative h-[620px]">
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-white">
                  <Crown size={18} />

                  Founder
                </div>
              </div>
            </div>

            {/* Content */}

            <div className="p-10 lg:p-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                <Award size={16} />

                Leadership Spotlight
              </div>

              <h3 className="mt-6 text-4xl font-bold text-slate-900">
                {founder.name}
              </h3>

              <p className="mt-2 text-xl font-semibold text-blue-600">
                {founder.role}
              </p>

              <p className="mt-8 leading-8 text-slate-600">
                {founder.bio}
              </p>

              <p className="mt-6 leading-8 text-slate-600">
                Our mission is to transform the luxury
                accommodation experience by combining
                innovative technology with genuine
                hospitality, making every stay effortless,
                secure and memorable.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-6">
                <div>
                  <Users className="mb-3 text-blue-600" />

                  <p className="text-3xl font-bold">
                    25+
                  </p>

                  <span className="text-sm text-slate-500">
                    Team Members
                  </span>
                </div>

                <div>
                  <Star className="mb-3 text-yellow-500" />

                  <p className="text-3xl font-bold">
                    4.9★
                  </p>

                  <span className="text-sm text-slate-500">
                    Guest Rating
                  </span>
                </div>

                <div>
                  <Award className="mb-3 text-emerald-600" />

                  <p className="text-3xl font-bold">
                    500+
                  </p>

                  <span className="text-sm text-slate-500">
                    Properties
                  </span>
                </div>
              </div>

              <Button
                size="lg"
                className="mt-10"
              >
                Meet Our Team
              </Button>
            </div>
          </div>
        </motion.div>


                {/* ================= TEAM GRID ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <div className="mb-14 text-center">
            <span className="font-semibold uppercase tracking-[0.25em] text-blue-600">
              PROFESSIONALS
            </span>

            <h3 className="mt-4 text-4xl font-bold text-slate-900">
              Our Leadership Team
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              A passionate group of hospitality professionals,
              technology experts and customer experience
              specialists committed to delivering world-class
              accommodation services.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member, index) => (
              <TeamCard
                key={member.id}
                member={member}
                delay={index * 0.08}
              />
            ))}
          </div>
        </motion.div>

        {/* ================= JOIN TEAM CTA ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
          }}
          className="
            mt-28
            overflow-hidden
            rounded-[40px]
            bg-gradient-to-r
            from-slate-900
            via-blue-900
            to-slate-900
            p-12
            text-white
            lg:p-16
          "
        >
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left */}

            <div>
              <span className="font-semibold uppercase tracking-[0.25em] text-blue-300">
                JOIN OUR TEAM
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight lg:text-5xl">
                Build The Future
                <br />
                Of Luxury Hospitality
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
                We're always looking for talented,
                customer-focused professionals who are
                passionate about innovation, hospitality
                and creating unforgettable guest
                experiences.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button size="lg">
                  View Careers
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white hover:text-slate-900"
                >
                  Contact HR
                </Button>
              </div>
            </div>

            {/* Right */}

            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
                <p className="text-4xl font-bold">
                  25+
                </p>

                <p className="mt-2 text-white/70">
                  Team Members
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
                <p className="text-4xl font-bold">
                  12
                </p>

                <p className="mt-2 text-white/70">
                  Cities Covered
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
                <p className="text-4xl font-bold">
                  500+
                </p>

                <p className="mt-2 text-white/70">
                  Luxury Homes
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
                <p className="text-4xl font-bold">
                  4.9★
                </p>

                <p className="mt-2 text-white/70">
                  Guest Satisfaction
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}