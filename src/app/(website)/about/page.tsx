



import Hero from "@/components/about/Hero";
import Mission from "@/components/about/MissionVision/Mission";
import Vision from "@/components/about/MissionVision/Vision";
import Values from "@/components/about/MissionVision/Values";

import CompanyStory from "@/components/about/CompanyStory";
import Statistics from "@/components/about/Statistics";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import Team from "@/components/about/Team";
import Partners from "@/components/about/Partners";

export const metadata = {
  title: "About Us | Rahannes Luxury Homes",
  description:
    "Learn about Rahannes Luxury Homes, our mission, values, team, partners and commitment to delivering premium luxury short-let apartments across Nigeria.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Mission • Vision • Values */}
      <Mission />
      <Vision />
      <Values />

      {/* Company Story */}
      <CompanyStory />

      {/* Statistics */}
      <Statistics />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Leadership Team */}
      <Team />

      {/* Partners */}
      <Partners />
    </>
  );
}