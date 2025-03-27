import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "Genfiit Landing Page",
  description: "Genfiit - The Ultimate Fitness Experience",
  
  openGraph: {
    type: "website",
    url: "https://genfiit.com",
    title: "Genfiit Landing Page",
    description: "Genfiit - The Ultimate Fitness Experience",
    images: [
      {
        url: "/logo-hero2.png", 
        width: 1200,
        height: 630,
        alt: "Genfiit - Landing Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://genfiit.com",
    title: "Genfiit Landing Page",
    description: "Genfiit - The Ultimate Fitness Experience",
    images: ["/logo-hero2.png"], // Path dari public/
  },
};


export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialSection />
      <TeamSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
