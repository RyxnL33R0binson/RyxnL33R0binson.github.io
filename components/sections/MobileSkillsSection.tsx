import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface Skills {
  id: number;
  name: string;
  icon: string;
}

const mySkills: Skills[] = [
  { id: 1, name: "Java", icon: "java.svg" },
  { id: 2, name: "C#", icon: "csharp.svg" },
  { id: 3, name: "JavaScript", icon: "javascript.svg" },
  { id: 4, name: "TypeScript", icon: "typescript.svg" },
  { id: 5, name: "C++", icon: "c-plusplus.svg" },
  { id: 6, name: "Python", icon: "python.svg" },
  { id: 7, name: "Swift", icon: "swift.svg" },
  { id: 8, name: "React", icon: "react_light.svg" },
  { id: 9, name: "Tailwind CSS", icon: "tailwindcss.svg" },
  { id: 10, name: "Next.js", icon: "nextjs_icon_dark.svg" },
  { id: 11, name: "Spring Boot", icon: "spring.svg" },
  { id: 12, name: "JUnit", icon: "Junit.svg" },
];
export default function MobileSkillsSection() {
  return (
    <section className="p-6">
      <div className="grid grid-cols-1 auto-rows-max gap-3 py-5">
        <div className="flex items-center justify-center">
          <h1 className="rounded-full bg-secondary font-bold px-4 py-2 text-2xl font-heading">
            Skills{" "}
          </h1>
        </div>
        <div className="rounded-lg">
          <div className="grid grid-cols-4 gap-4 justify-center items-center [&>div]:p-5">
            {mySkills.map((skill) => (
              <div key={skill.id}>
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={400}
                  height={400}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
