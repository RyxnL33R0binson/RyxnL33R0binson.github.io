import { Codystar, Tilt_Neon } from "next/font/google";
import React from "react";

const fontHeading = Codystar({ subsets: ["latin"], weight: "400" });
const fontTiltNeon = Tilt_Neon({ subsets: ["latin"], weight: "400" });

export default function MobileHomeSection() {
  return (
    <section className="flex flex-col justify-content item-center p-6 border-2">
      <div className="flex justify-center">
        <h1
          className={`text-xl font-bold text-red-600 font-heading ${fontTiltNeon.className}`}
        >
          Ryan Robinson{" "}
        </h1>
      </div>
      <div className="flex justify-center max-w-xs pt-4">
        <p className="text-sm tracking-wide font-mono text-center">
          Junior Software Developer
          <br />
          Passionate software developer with a strong foundation in Java, C#,
          JavaScript/Typescript, as well as libraries and frameworks such as
          React, Next.js, and Spring Boot. Eager to apply my skills and
          contribute to innovative projects in a dynamic development
          environment.
        </p>
      </div>
    </section>
  );
}
