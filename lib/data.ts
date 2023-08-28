import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import myceleryImg from "@/public/mycelery.png";
import githubImg from "@/public/github.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "FullStack Development Bootcamp",
    location: "Berlin, Germany",
    description:
      "I embarked on a 3-month immersive full stack bootcamp. Those intense months molded me into a versatile developer, primed with web prowess and software skills for a dynamic tech career ahead.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "International Business Relationship Agent",
    location: "Berlin, Germany",
    description:
      "I mastered complex systems, honed teamwork with colleagues, and excelled in flexible, customer-focused service.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Social Media & Marketing Analyst",
    location: "Fortaleza, Brazil",
    description:
      "Creation of institutional actions aimed at retail trade, internal communication, social media and advertising service.",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Journalism (B.A)",
    location: "Fortaleza, Brazil",
    description:
      "Gained media insights, mastering content creation, ethics, journalism, and PR. Hands-on activities like writing and workshops sharpened my narrative and critical thinking skills.",
    icon: React.createElement(LuGraduationCap),
    date: "2016 - 2020",
  },
] as const;

export const projectsData = [
  {
    title: "GitHub Portfolio",
    description:
      "I've built and contributed to over 20 repositories and mini-projects on GitHub, showcasing a diverse range of skills and creative exploration.",
    tags: ["JS", "HTML", "CSS", "TS", "React", "Next.js"],
    imageUrl: githubImg,
  },
  {
    title: "MyCelery",
    description:
      "I conceptualized, designed, and developed a captivating social media application that fosters meaningful connections.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "MongoDB", "Prisma"],
    imageUrl: myceleryImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git & Github",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Express",
  "Framer Motion",
] as const;
