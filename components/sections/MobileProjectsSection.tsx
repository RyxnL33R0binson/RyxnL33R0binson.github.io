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
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
}
const projectIdeas: Project[] = [
  {
    id: 1,
    title: "Watcha doing?",
    description: `This is a project I am currently working on. 
    \n The project is a social media platform for people to share their projects and collaborate with each other.
    \n So far it has an AI model (Google GenAI), Websocket for bi-directional interaction between clients and Next.js for the frontend`,
  },
  {
    id: 2,
    title: "Webshare",
    description: `This is a Java project I implemented for my final year project at university. It is a Java-based program, which allows users to sign-up and create group chats for other users to join and message each other. 
    \n Unlike my Watcha doing project, which is implemented in Spring Boot, this project was written in Java SE. 
    \n I used Java Swing for the GUI, Threads to run the server and client simultaneously, Java Sockets for communication between the server and client.`,
    image: "/webshare.png",
  },
  {
    id: 3,
    title: "Translator",
    description: `This is my first Java project which translates questions and jokes in English, French and Spanish.
       \n A few concepts used are: 
       \n• The four core OOP concepts (inheritance, polymorphism abstraction, encapsulation). 
       \n• Individualised event-handling to increase cohesion and readability. 
       \n• Property files for storing the key pair values to translate the program into the languages.`,
    image: "/translator.png",
  },
  {
    id: 4,
    title: "This Portfolio!",
    description: `This is my personal portfolio website, showcasing my projects, skills, and experience. 
      \nIt is built using Next.js and demonstrates my ability to create modern, responsive web applications.`,
  },
];

const newsCardClassName =
  "rounded-xl bg-gradient-to-b from-violet-800 to-purple-500 mx-auto w-96 max-w-sm overflow-hidden p-0 gap-0 ";

export default function MobileProjectsSection() {
  return (
    <section className="flex flex-col gap-3 py-5 p-6">
      <div className="flex items-center justify-center">
        <h1 className="rounded-full bg-secondary font-bold  px-4 py-2 text-2xl font-heading">
          Experience{" "}
        </h1>
      </div>

      <Carousel>
        <CarouselContent className="scroll-smooth">
          {projectIdeas.map((project) => (
            <CarouselItem key={project.id}>
              <Card>
                <CardContent>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
