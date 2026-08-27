import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SkillsGrid from "@/components/SkillsGrid";
import Projects from "@/components/Projects";
import CraftedDreams from "@/components/CraftedDreams";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex-1">
      <Navbar />
      <main className="relative">
        <Hero />
        <SkillsGrid />
        <Projects />
        <CraftedDreams />
        <BlogSection />
        <Footer />
      </main>
    </div>
  );
}
