"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              Experience the
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                Telehealth
              </span>
              Mobile Aplication
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {`We're more than just an app—we're a community of dedicated healthcare professionals and patients. 
            Gain exclusive access to medical resources, health tutorials, and professional support anytime, anywhere.`}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
              Get Started
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};
