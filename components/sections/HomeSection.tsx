import React from "react";

import { Codystar } from "next/font/google";
import BackgroundBoxesDemo, { Boxes } from "@/components/ui/boxes";
import { Tilt_Neon } from "next/font/google";
import Container from "../global/Container";
import Image from "next/image";
import TypeWriterComp from "@/components/typewriter/TypeWriterComp";
import MobileHomeSection from "./MobileHomeSection";

const fontHeading = Codystar({ subsets: ["latin"], weight: "400" });
const fontTiltNeon = Tilt_Neon({ subsets: ["latin"], weight: "400" });

export default function HomeSection() {
  return (
    <div>
      {/* className="relative left-1/2 md:w-dvw md:-translate-x-1/2 overflow-hidden
      p-8" */}
      <section
        id="HomeSection"
        className="relative overflow-hidden hidden p-8 md:left-1/2 md:w-dvw md:-translate-x-1/2 md:block bg-background text-foreground"
      >
        {/* <section className="relative w-dvw overflow-hidden p-8"> */}
        <div style={{ width: "100%", height: "600px", position: "relative" }}>
          <div className="block max-[880px]:hidden">
            <Boxes />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-10 text-center">
          {/* <Container className="grid grid-cols-2 gap-3"> */}
          <Container>
            <div className="grid grid-cols-2 grid-row-2 gap-3">
              <div className="flex justify-center items-center">
                <span
                  className={`hidden md:block tracking-wide text-xl font-bold text-red-600 md:text-5xl font-heading ${fontTiltNeon.className}`}
                >
                  <TypeWriterComp list={["Ryan Robinson"]} />
                </span>
              </div>
              <div className="col-start-1 row-start-2">
                <span className="hidden md:block text-2xl tracking-wide text-foreground font-mono bg-ring rounded-lg px-4 py-2">
                  <span className="font-semibold text-primary ">
                    <TypeWriterComp list={["Junior Software Developer"]} />
                  </span>
                  <br />
                  <TypeWriterComp
                    list={[
                      "Passionate software developer with a strong foundation in Java, C#, JavaScript/Typescript, as well as libraries and frameworks such as React, Next.js, and Spring Boot. Eager to apply my skills and contribute to innovative projects in a dynamic development environment.",
                    ]}
                  />
                </span>
              </div>

              <div className="row-span-2 col-start-2 row-start-1">
                <div className="relative top-1/5 left-1/7">
                  <Image
                    src="/home-picture.svg"
                    alt="Profile Picture"
                    width={500}
                    height={500}
                    className="rounded-full object-cover relative -top-14 hidden md:block"
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
      <div className="block md:hidden">
        <MobileHomeSection />
      </div>
    </div>
  );
}
