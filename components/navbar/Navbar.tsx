"use client";
import { useState } from "react";
import Container from "../global/Container";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faHouse,
  faCode,
  faComputer,
  faSuitcase,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import ThemeSwitch from "./DarkMode";

const navBarItems = [
  { name: "Home", icon: faHouse, href: "#HomeSection" },
  { name: "About Me", icon: faCircleUser, href: "#AboutMeSection" },
  { name: "Skills", icon: faComputer, href: "#SkillsSection" },
  { name: "Experience", icon: faSuitcase, href: "#ExperienceSection" },
  { name: "Projects", icon: faCode, href: "#ProjectsSection" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-border bg-background text-foreground">
      <Container>
        <div className="flex items-center justify-between py-4">
          <span className="font-mono font-bold">Ryan Robinson</span>

          {/* Hamburger button — visible below md only */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            className="md:hidden p-2 rounded-md hover:bg-accent"
            onClick={() => setIsOpen((v) => !v)}
          >
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} size="lg" />
          </button>

          <ThemeSwitch />

          {/* Desktop links — hidden below md */}
          <ul className="hidden md:flex items-center gap-1">
            {navBarItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 tracking-wide font-mono rounded-md px-3 py-2 text-foreground hover:bg-primary hover:text-primary-foreground"
                >
                  <FontAwesomeIcon icon={item.icon} size="1x" />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu — visible below md when open */}
        {isOpen && (
          <ul className="md:hidden flex flex-col gap-1 pb-4">
            {navBarItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 tracking-wide font-mono rounded-md px-3 py-2 text-foreground hover:bg-primary hover:text-primary-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  <FontAwesomeIcon icon={item.icon} size="1x" />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </nav>
  );
}
