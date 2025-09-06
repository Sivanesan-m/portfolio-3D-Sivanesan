import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { ParticleBackground } from "@/components/effects/ParticleBackground";
import { ScrollAnimations } from "@/components/effects/ScrollAnimations";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero particles-bg relative">
      <ParticleBackground />
      <ScrollAnimations />
      
      <Header />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
};

export default Index;