import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Cloud, Cpu } from "lucide-react";
import heroImage from "/lovable-uploads/b0454865-668b-4ebf-9e73-39ebd5335243.png";

export const Hero = () => {
  const techIcons = [
    { icon: Code, label: "Frontend" },
    { icon: Database, label: "Backend" },
    { icon: Cloud, label: "Cloud" },
    { icon: Cpu, label: "IoT" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-on-scroll">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="gradient-text block">M. Sivanesan</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground">
                Frontend Developer, AI implemented Python Full-stack Developer and AWS cloud practitioner
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                B.Tech IT Graduate from Kongunadu College of Engineering and Technology, 
                passionate about creating innovative solutions with modern web technologies and IoT systems.
              </p>
            </div>

            {/* Tech Stack Icons */}
            <div className="flex flex-wrap gap-4">
              {techIcons.map((tech, index) => (
                <div
                  key={tech.label}
                  className="flex items-center space-x-2 glass-card px-4 py-2 neon-glow animate-fade-in-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <tech.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">{tech.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group neon-glow">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="neon-glow">
                Get In Touch
              </Button>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📧 sivanesanmathiyalagan1234@gmail.com</p>
              <p>📱 +91 90250 20293</p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-on-scroll">
            <div className="relative">
              {/* Floating geometric shapes */}
              <div className="absolute -top-10 -left-10 w-20 h-20 border-2 border-primary/30 rounded-lg animate-float" 
                   style={{ animationDelay: "0s" }}></div>
              <div className="absolute -bottom-10 -right-10 w-16 h-16 border-2 border-secondary/30 rounded-full animate-float" 
                   style={{ animationDelay: "2s" }}></div>
              <div className="absolute top-1/2 -right-5 w-12 h-12 border-2 border-accent/30 rotate-45 animate-float" 
                   style={{ animationDelay: "4s" }}></div>

              {/* Main image container */}
              <div className="relative glass-card p-4 neon-glow">
                <img
                  src={heroImage}
                  alt="M. Sivanesan - Full-Stack Developer"
                  className="rounded-lg w-full h-auto shadow-lg"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-4 rounded-lg bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 pointer-events-none"></div>
              </div>

              {/* Status indicator */}
              <div className="absolute top-8 right-8 glass-card px-3 py-1 rounded-full">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow"></div>
                  <span className="text-xs font-medium">Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};