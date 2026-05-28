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
import Container from "../global/Container";
import { Badge } from "../ui/badge";
import MobileExperienceSection from "./MobileExperienceSection";

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

export default function ExperienceSection() {
  return (
    // <section className=" relative left-1/2 w-dvw -translate-x-1/2 overflow-hidden p-8 bg-gradient-to-tl from-purple-400 to-violet-800">
    // className=" relative left-1/2 md:w-dvw md:-translate-x-1/2 overflow-hidden p-8 bg-gradient-to-tl from-purple-400 to-violet-800"
    <div>
      <section
        id="ExperienceSection"
        className="relative overflow-hidden p-8 hidden md:block "
      >
        <div className="relative flex items-center justify-center p-10 text-center">
          <Container>
            <div className="grid grid-rows-[auto_1fr] gap-6">
              <h1 className="inline-block rounded-full bg-secondary text-secondary-foreground px-6 py-3 text-3xl font-bold md:px-8 md:py-4 md:text-5xl font-heading">
                Experience
              </h1>
              <Timeline defaultValue={1} className="py-5 w-full max-w-3xl">
                {myExperiences.map((experience) => (
                  <TimelineItem
                    key={experience.id}
                    step={experience.id}
                    className="sm:group-data-[orientation=vertical]/timeline:ms-32"
                  >
                    <div className="rounded-2xl border border-border shadow-sm bg-secondary text-secondary-foreground">
                      <TimelineHeader>
                        <TimelineSeparator className="bg-amber-600 " />
                        <TimelineDate className="sm:group-data-[orientation=vertical]/timeline:absolute sm:group-data-[orientation=vertical]/timeline:-left-32 sm:group-data-[orientation=vertical]/timeline:w-20 sm:group-data-[orientation=vertical]/timeline:text-right">
                          {experience.date}
                        </TimelineDate>
                        <TimelineTitle className=" inline-block rounded-full text-foreground px-3 py-2 pt-3 text-base font-medium sm:-mt-0.5">
                          {experience.title}
                        </TimelineTitle>
                        <TimelineIndicator className="bg-card" />
                      </TimelineHeader>

                      <TimelineContent>
                        <div className="text-base py-3 px-4">
                          {experience.description}
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2 justify-center items-center pb-5">
                          {experience.contentBadgeLabel.map((label) => (
                            <Badge
                              key={`${experience.id}-${label}`}
                              className="bg-accent text-accent-foreground border border-border rounded-xl"
                            >
                              {label}
                            </Badge>
                          ))}
                        </div>
                      </TimelineContent>
                    </div>
                    <hr className="h-px my-8 bg-border border-0"></hr>
                  </TimelineItem>
                ))}
              </Timeline>
            </div>
          </Container>
        </div>
      </section>
      <div className="block md:hidden">
        <MobileExperienceSection />
      </div>
    </div>
  );
}
