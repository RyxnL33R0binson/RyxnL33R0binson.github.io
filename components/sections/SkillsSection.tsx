import React from "react";
import { Boxes } from "@/components/ui/boxes";
import Container from "../global/Container";
import Image from "next/image";

interface Skills {
  id: number;
  name: string;
  icon: string;
}

const mySkills: Skills[] = [
  { id: 1, name: "Java", icon: "java.svg" },
  { id: 2, name: "TypeScript", icon: "typescript.svg" },
  { id: 3, name: "JavaScript", icon: "javascript.svg" },
  { id: 4, name: "C#", icon: "csharp.svg" },
  { id: 5, name: "C++", icon: "c-plusplus.svg" },
  { id: 6, name: "Python", icon: "python.svg" },
  { id: 7, name: "Swift", icon: "swift.svg" },
  { id: 8, name: "React", icon: "react_light.svg" },
  { id: 9, name: "Tailwind CSS", icon: "tailwindcss.svg" },
  { id: 10, name: "Next.js", icon: "nextjs_icon_dark.svg" },
  { id: 11, name: "Spring Boot", icon: "spring.svg" },
  { id: 12, name: "JUnit", icon: "Junit.svg" },
];
export default function SkillsSection() {
  return (
    <div>
      <section
        id="SkillsSection"
        className="relative w-full overflow-hidden sm:block bg-background text-foreground"
      >
        {/* <section className="relative w-dvw overflow-hidden p-8"> */}
        <div
          className="pointer-events-none absolute inset-0 "
          aria-hidden="true"
        >
          <Boxes />
        </div>

        <div className="pointer-events-none relative z-10 flex justify-center text-center py-10 md:py-14">
          <Container>
            <div className="grid grid-cols-2 gap-3 max-[821px]:grid-cols-1 max-[821px]:items-center">
              <div className="flex items-center justify-center w-96 max-[504px]:w-[clamp(12rem,76.2vw,24rem)] max-[821px]:w-full">
                <h1
                  className={`inline-block rounded-full bg-secondary text-secondary-foreground font-bold px-8 py-4 text-5xl font-heading`}
                >
                  Skills{" "}
                </h1>
              </div>

              <div className="grid grid-cols-[repeat(4,120px)] justify-center gap-2 [&>div]:p-6 max-[821px]:grid-cols-[repeat(4,clamp(80px,19.2vw,120px))] max-[821px]:justify-center">
                {mySkills.map((skill) => (
                  <div key={skill.id}>
                    <h1 className="pb-3 pointer-events-auto text-lg">
                      {skill.name}
                    </h1>
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={100}
                      height={100}
                      className="pointer-events-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* <div className="block sm:hidden">
        <MobileSkillsSection />
      </div> */}
    </div>
  );
}
