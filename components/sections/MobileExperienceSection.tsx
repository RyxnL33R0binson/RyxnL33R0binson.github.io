import React from "react";

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

import { Badge } from "../ui/badge";
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/reui/timeline";

interface MyExperience {
  id: number;
  date: string;
  title: string;
  description: string;
  contentBadgeLabel: string[];
}

const myExperiences: MyExperience[] = [
  {
    id: 1,
    date: "2016 - September 2018",
    title: "IT Mentor",
    description:
      "Provided one-on-one IT training, teaching essential skills such as data backup, network troubleshooting, and mobile application management.",
    contentBadgeLabel: [
      "Teaching",
      "PC Troubleshooting",
      "IT Support",
      "Data Backup",
      "Network Troubleshooting",
      "Mobile Application Management",
    ],
  },
  {
    id: 2,
    date: "September 2018 - May 2022",
    title: "BSc (Hons) Computer Science",
    description:
      "I started my computer science degree in 2018 at the University of Hertfordshire. I graduated with 68.3% (2:1) in 2022, only being 1.2% away from a first class.",
    contentBadgeLabel: [
      "Education",
      "Computer Science",
      "Software Development",
      "Web development",
      "Database Management",
      "Ethical Hacking",
      "Cyber Security",
      "Artificial Intelligence",
      "Machine Learning",
    ],
  },
  {
    id: 3,
    date: "May 2023 - September 2024",
    title: "Backend Software Developer",
    description:
      "I worked in an agile framework with five other people team to design and implement a website for the charity..",
    contentBadgeLabel: [
      "Backend",
      "Java",
      "Dropwizard",
      "JUnit",
      "Unit testing",
      "Agile",
      "Agile development",
      "Web Development",
    ],
  },
  {
    id: 4,
    date: "December 2025 - April 2026",
    title: "(CONTRACT) Social Media Assistance & Web Developer",
    description:
      "My role was to handle the charity’s social media profiles (Instagram and Facebook), by creating and upload posts to promote the charity, as well as keeping track on interactions, new followers and connecting with other organisations. For the website side, I worked with another programmer (Pair-programmer) to create new articles to the charity's website by using Piranha CMS.",
    contentBadgeLabel: [
      "Web Development",
      "C#",
      "CMS development",
      "Piranha CMS",
      "Management",
      "Social Media",
    ],
  },
];

export default function MobileExperienceSection() {
  return (
    <section className="flex flex-col gap-3 py-5 p-6">
      <div className="flex items-center justify-center">
        <h1 className="rounded-full bg-secondary font-bold  px-4 py-2 text-2xl font-heading">
          Experience{" "}
        </h1>
      </div>

      <Carousel>
        <CarouselContent className="scroll-smooth">
          {myExperiences.map((experience) => (
            <CarouselItem key={experience.id}>
              <Card>
                <CardContent>
                  <CardHeader>{experience.date}</CardHeader>
                  <CardTitle>{experience.title}</CardTitle>
                  <CardDescription>
                    {experience.description}
                    <div className="mt-3 flex flex-wrap gap-2 justify-center items-center">
                      {experience.contentBadgeLabel.map((label) => (
                        <Badge
                          key={`${experience.id}-${label}`}
                          className="bg-amber-500 rounded-xl "
                        >
                          {label}
                        </Badge>
                      ))}
                    </div>
                  </CardDescription>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
