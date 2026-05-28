import React from "react";
import BackgroundBoxesDemo from "../ui/boxes";
import Container from "../global/Container";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Skills {
  id: number;
  name: string;
  icon: string;
}

const mySkills: Skills[] = [
  { id: 1, name: "Java", icon: "/java.svg" },
  { id: 2, name: "C#", icon: "/csharp.svg" },
  { id: 3, name: "JavaScript", icon: "/javascript.svg" },
  { id: 4, name: "TypeScript", icon: "/typescript.svg" },
  { id: 5, name: "C++", icon: "/c-plusplus.svg" },
  { id: 6, name: "Python", icon: "/python.svg" },
  { id: 7, name: "Swift", icon: "/swift.svg" },
  { id: 8, name: "React", icon: "/react_light.svg" },
  { id: 9, name: "Tailwind CSS", icon: "/tailwindcss.svg" },
  { id: 10, name: "Next.js", icon: "/nextjs_icon_dark.svg" },
  { id: 11, name: "Spring Boot", icon: "/spring.svg" },
  { id: 12, name: "JUnit", icon: "/Junit.svg" },
];
export default function Temporary() {
  return (
    <div>
      <section
        id="SkillsSection"
        className="relative left-1/2 w-dvw -translate-x-1/2 overflow-hidden"
      >
        {/* <section className="relative w-dvw overflow-hidden p-8"> */}
        <div style={{ width: "100%", height: "600px", position: "relative" }}>
          <BackgroundBoxesDemo />
        </div>

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-10 text-center">
          <Container>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center justify-center">
                <h1
                  className={`inline-block rounded-full bg-[#52525b] px-6 py-3 text-3xl font-bold text-white md:px-8 md:py-4 md:text-5xl font-heading`}
                >
                  Skills{" "}
                </h1>
              </div>
              <div className="rounded-lg p-6 md:flex-1">
                <div className="md:hidden">
                  <Carousel
                    opts={{ align: "start", loop: true }}
                    className="w-full"
                  >
                    <CarouselContent>
                      {mySkills.map((skill) => (
                        <CarouselItem
                          key={skill.id}
                          className="basis-1/2 sm:basis-1/3"
                        >
                          <div className="flex flex-col items-center justify-center p-4">
                            <h1 className="pb-3 text-center text-sm">
                              {skill.name}
                            </h1>
                            <Image
                              src={skill.icon}
                              alt={skill.name}
                              width={72}
                              height={72}
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-1" />
                    <CarouselNext className="right-1" />
                  </Carousel>
                </div>

                <div className="hidden grid-cols-4 gap-4 md:grid [&>div]:p-8">
                  {mySkills.map((skill) => (
                    <div key={skill.id}>
                      <h1 className="pb-3">{skill.name}</h1>
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={100}
                        height={100}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </div>
  );
}
