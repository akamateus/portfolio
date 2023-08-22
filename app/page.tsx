import Intro from "@/components/intro";
import Image from "next/image";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
    </main>
  );
}
