import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Award, Zap, Shield, Bus, Building, AlertTriangle } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "IoT-based Real-time Disaster Monitoring and Alert System",
      description: "Advanced disaster monitoring system using IoT sensors for real-time data collection and alert generation. Features predictive analytics and automated emergency response protocols.",
      icon: AlertTriangle,
      tags: ["IoT", "Python", "Real-time", "Emergency Systems", "Sensors"],
      highlight: "Top 20 Hackathon Project",
      type: "featured",
      github: "https://github.com/Sivanesan-m",
    },
    {
      title: "Wireless Data Encryption and Decryption Using IoT",
      description: "Secure data transmission system implementing advanced encryption algorithms for IoT devices. Ensures data integrity and privacy in wireless communications.",
      icon: Shield,
      tags: ["IoT", "Cryptography", "Wireless", "Security", "Python"],
      type: "major",
      github: "https://github.com/Sivanesan-m",
    },
    {
      title: "Disaster Management System Using Sensors",
      description: "Comprehensive disaster management solution with sensor networks for early warning and response coordination. Includes data visualization and emergency protocols.",
      icon: Zap,
      tags: ["Sensors", "Emergency Management", "Data Analytics", "IoT"],
      type: "major",
      github: "https://github.com/Sivanesan-m",
    },
    {
      title: "Bus Booking System",
      description: "Full-stack web application for bus ticket reservation with real-time seat availability, payment integration, and user management system.",
      icon: Bus,
      tags: ["Python", "Web Development", "Database", "Full-Stack"],
      type: "web",
      github: "https://github.com/Sivanesan-m",
    },
    {
      title: "Hostel Registration Form",
      description: "Digital hostel management system with automated registration, room allocation, and student information management capabilities.",
      icon: Building,
      tags: ["Web Development", "Database", "Management System", "Python"],
      type: "web",
      github: "https://github.com/Sivanesan-m",
    },
  ];

  const getProjectCardClass = (type: string) => {
    switch (type) {
      case "featured":
        return "glass-card p-8 neon-glow border-2 border-primary/30 relative overflow-hidden";
      case "major":
        return "glass-card p-6 neon-glow";
      default:
        return "glass-card p-6 hover:neon-glow transition-all duration-300";
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case "featured":
        return "text-primary";
      case "major":
        return "text-secondary";
      default:
        return "text-accent";
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions spanning IoT systems, web applications, and emergency management.
            Each project demonstrates technical excellence and real-world problem-solving.
          </p>
        </div>

        <div className="space-y-8">
          {/* Featured Project - Full Width */}
          <div className="animate-on-scroll">
            <Card className={getProjectCardClass(projects[0].type)}>
              {projects[0].type === "featured" && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-primary text-primary-foreground">
                    <Award className="h-3 w-3 mr-1" />
                    Featured
                  </Badge>
                </div>
              )}
              
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-4 rounded-xl bg-gradient-primary">
                      {React.createElement(projects[0].icon, { className: "h-8 w-8 text-primary-foreground" })}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{projects[0].title}</h3>
                      {projects[0].highlight && (
                        <Badge variant="outline" className="mb-3 neon-glow">
                          {projects[0].highlight}
                        </Badge>
                      )}
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {projects[0].description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {projects[0].tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="neon-glow">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Button asChild className="w-full neon-glow group">
                    <a href={projects[0].github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5 mr-2" />
                      View on GitHub
                      <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full neon-glow">
                    Live Demo
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Other Projects - Grid Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(1).map((project, index) => (
              <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
                <Card className={getProjectCardClass(project.type)}>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl ${project.type === 'major' ? 'bg-gradient-secondary' : 'bg-gradient-primary'}`}>
                        {React.createElement(project.icon, { className: `h-6 w-6 ${getIconColor(project.type)}` })}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button asChild size="sm" variant="outline" className="flex-1">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* View More Projects */}
        <div className="text-center mt-16 animate-on-scroll">
          <Button asChild size="lg" variant="outline" className="neon-glow">
            <a href="https://github.com/Sivanesan-m" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
