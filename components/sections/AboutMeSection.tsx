import React from "react";
import Container from "../global/Container";
import Image from "next/image";

export default function AboutMeSection() {
  return (
    <div>
      {/* <section className="relative left-1/2 w-dvw -translate-x-1/2 overflow-hidden p-8 bg-gradient-to-br from-purple-500 to-violet-800"> */}
      {/* <section
        id="AboutMeSection"
        className="relative w-dvw overflow-hidden p-8 bg-gradient-to-br from-purple-500 to-violet-800"
      > */}
      <section
        id="AboutMeSection"
        className="relative w-dvw overflow-hidden p-8 bg-background sm:p-0"
      >
        <div className="flex justify-center items-center p-10 text-center md:relative md:flex md:items-center md:justify-center md:p-10 md:text-center">
          <Container className="max-[821px]:contents">
            <div className="grid auto-rows-max gap-y-8 sm:flex sm:flex-col sm:items-center sm:gap-y-8">
              <div className="md:col-span-2 sm:flex sm:flex-col sm:items-center sm:justify-center">
                <h1 className="inline-block rounded-full bg-secondary text-3xl font-bold px-6 py-3 md:px-8 md:py-4 md:text-5xl font-heading">
                  About Me
                </h1>
              </div>
              {/* <div className="grid grid-cols-[300px_1fr] items-start gap-x-12"> */}
              <div className=" rounded-xl p-4 sm:text-sm gap-6 grid grid-cols-[300px_1fr] lg:items-start lg:gap-x-12 max-[880px]:flex max-[880px]:flex-col max-[880px]:items-center max-[880px]:gap-6">
                <div className="block max-[880px]:hidden">
                  <Image
                    src="/unipic.jpg"
                    alt="ProfilePicture"
                    width={300}
                    height={300}
                    className="object-cover rounded-md"
                  />
                </div>
                <p className="tracking-wide font-mono text-sm justify-center items-center sm:text-xl">
                  I have worked in the tech industry since I finished school in
                  2015. I first started of as an IT mentor teaching solutions to
                  PC problems which may occur. In 2018, I started my undergrad
                  computer science degree, where my interest in the technology
                  turned specifically into coding.
                  <br />
                  <br />
                  <span className="block max-[900px]:hidden">
                    Over time, I’ve explored several technologies and found my
                    passion in building high-performance systems and intuitive
                    user experiences.
                    <br />
                    <br />
                  </span>
                  I am proficient in Java, C#, JavaScript, TypeScript and
                  frameworks, including Spring/Spring Boot for server-side
                  development; React and Next.js for frontend development; JUnit
                  for unit testing.
                  <br />
                  <br />
                  My key areas of interest include developing web applications,
                  cyber security, FinTech and having enjoyed my IT support role
                  in 2016, that too.{" "}
                </p>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </div>
  );
}
