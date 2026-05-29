import React from "react";
import { Boxes } from "../ui/boxes";
import Container from "../global/Container";
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
import Image from "next/image";
import { Button } from "@/components/ui/button";
import MobileProjectsSection from "./MobileProjectsSection";

interface Project {
  title: string;
  description: string;
  image?: string;
}
const projectIdeas: Project[] = [
  {
    title: "Watcha doing?",
    description: `This is a project I am currently working on. 
    \n The project is a social media platform for people to share their projects and collaborate with each other.
    \n So far it has an AI model (Google GenAI), Websocket for bi-directional interaction between clients and Next.js for the frontend`,
  },
  {
    title: "Webshare",
    description: `This is a Java project I implemented for my final year project at university. It is a Java-based program, which allows users to sign-up and create group chats for other users to join and message each other. 
    \n Unlike my Watcha doing project, which is implemented in Spring Boot, this project was written in Java SE. 
    \n I used Java Swing for the GUI, Threads to run the server and client simultaneously, Java Sockets for communication between the server and client.`,
    image: "/webshare.png",
  },
  {
    title: "Translator",
    description: `This is my first Java project which translates questions and jokes in English, French and Spanish.
       \n A few concepts used are: 
       \n• The four core OOP concepts (inheritance, polymorphism abstraction, encapsulation). 
       \n• Individualised event-handling to increase cohesion and readability. 
       \n• Property files for storing the key pair values to translate the program into the languages.`,
    image: "/translator.png",
  },
  {
    title: "This Portfolio!",
    description: `This is my personal portfolio website, showcasing my projects, skills, and experience. 
      \nIt is built using Next.js and demonstrates my ability to create modern, responsive web applications.`,
  },
];

const newsCardClassName =
  "pointer-events-auto rounded-xl border border-border shadow-sm bg-secondary text-secondary-foreground mx-auto w-full max-w-sm overflow-hidden p-0 gap-0";
// rounded-2xl border border-border shadow-sm bg-secondary text-secondary-foreground
export default function ProjectSection() {
  return (
    <div>
      <section
        id="ProjectsSection"
        className="relative overflow-hidden hidden p-8 md:left-1/2 md:w-dvw md:-translate-x-1/2 md:block bg-background text-foreground"
      >
        <div
          className="pointer-events-none absolute inset-0 "
          aria-hidden="true"
        >
          <Boxes />
        </div>
        <div className="pointer-events-none relative z-10 flex justify-center text-center py-10 md:py-14">
          <Container>
            <div className="flex flex-col gap-7">
              <div>
                <h1
                  className={`inline-block rounded-full bg-secondary text-secondary-foreground font-bold px-8 py-4 text-5xl font-heading`}
                >
                  Projects{" "}
                </h1>
              </div>
              <div className="px-14">
                <Carousel
                  opts={{
                    align: "start",
                  }}
                >
                  <CarouselContent className="scroll-smooth max-[1026px]:mx-4">
                    {projectIdeas.map((item, index) => (
                      <CarouselItem
                        key={`${item.title}-${index}`}
                        className="basis-full max-[1026px]:basis-1/2 lg:basis-1/3 pb-6 py-6 w-80 max-[826]:basis-1/1"
                      >
                        <Card className={newsCardClassName}>
                          <CardHeader className="p-5">
                            <CardTitle className="py-3 text-lg">
                              {item.title}
                            </CardTitle>
                            <CardContent>
                              {item.image ? (
                                <Image
                                  src={item.image}
                                  alt={item.title}
                                  width={500}
                                  height={500}
                                  className="pb-6"
                                />
                              ) : null}
                            </CardContent>
                            <CardDescription className="text-base">
                              {item.description.split("\n").map((line, i) => (
                                <React.Fragment key={i}>
                                  {line}
                                  <br />
                                </React.Fragment>
                              ))}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="p-5 pt-0">
                            <Button className="w-full rounded-lg text-lg p-5">
                              Github
                            </Button>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious
                    size="icon-lg"
                    className="rounded-full size-9 pointer-events-auto max-[1026px]:left-4"
                  />
                  <CarouselNext
                    size="icon-lg"
                    className="rounded-full pointer-events-auto max-[1026px]:right-4"
                  />
                </Carousel>
              </div>
            </div>
          </Container>
        </div>
      </section>
      <div className="block sm:hidden">
        <MobileProjectsSection />
      </div>
    </div>
  );
}
