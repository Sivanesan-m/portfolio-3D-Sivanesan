import { Card } from "@/components/ui/card";
import { GraduationCap, School, Award, MapPin } from "lucide-react";

export const About = () => {
  const education = [
    {
      degree: "B.Tech Information Technology",
      institution: "Kongunadu College of Engineering and Technology",
      location: "Tamil Nadu",
      icon: GraduationCap,
      description: "Specialized in modern web technologies, database systems, and emerging technologies like IoT and AI.",
    },
    {
      degree: "Higher Secondary Education (10th-12th)",
      institution: "St. Thomas Higher Secondary School",
      location: "Pattukkottai",
      icon: School,
      description: "Strong foundation in mathematics and science subjects with excellent academic performance.",
    },
  ];

  const highlights = [
    {
      icon: Award,
      title: "Top 25 Selection",
      description: "Smart India Hackathon (SIH) 2024",
    },
    {
      icon: Award,
      title: "Research Publication",
      description: "International journal submission",
    },
    {
      icon: Award,
      title: "Multiple Certifications",
      description: "AWS, Microsoft Python, Login 360",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate full-stack developer with expertise in modern web technologies and IoT systems. 
            Committed to creating innovative solutions that make a real-world impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <div className="space-y-8 animate-on-scroll">
            <Card className="glass-card p-8 neon-glow">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <MapPin className="h-6 w-6 text-primary mr-3" />
                My Journey
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  As a B.Tech Information Technology graduate from Kongunadu College of Engineering and Technology,
                  I've developed a strong passion for creating innovative technical solutions that address real-world challenges.
                </p>
                <p>
                  My journey began with a solid foundation from St. Thomas Higher Secondary School in Pattukkottai,
                  where I cultivated my analytical thinking and problem-solving skills.
                </p>
                <p>
                  Today, I specialize in full-stack development with expertise in Python, React, AWS cloud services,
                  and emerging technologies like IoT and AI. I'm particularly interested in creating solutions that
                  bridge the gap between traditional software and cutting-edge hardware systems.
                </p>
              </div>
            </Card>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <Card key={index} className="glass-card p-6 neon-glow animate-fade-in-scale"
                      style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-primary">
                      <highlight.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">{highlight.title}</h4>
                      <p className="text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8 animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            {education.map((edu, index) => (
              <Card key={index} className="glass-card p-8 neon-glow animate-slide-in-right"
                    style={{ animationDelay: `${index * 0.3}s` }}>
                <div className="flex items-start space-x-6">
                  <div className="p-4 rounded-xl bg-gradient-secondary">
                    <edu.icon className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                    <h5 className="text-lg text-primary mb-1">{edu.institution}</h5>
                    <p className="text-sm text-muted-foreground mb-4 flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {edu.location}
                    </p>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};