import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <section className="h-32 flex items-center justify-center text-muted-foreground">
        {/* Footer spacer */}
        &copy; 2025 Symoon Reza
      </section>
    </main>
  );
}
