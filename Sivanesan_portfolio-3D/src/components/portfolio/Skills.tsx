import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Cloud, 
  Cpu, 
  Palette, 
  Brain,
  Wrench,
  Globe
} from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: Code,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "ReactJS", level: 85 },
        { name: "Bootstrap", level: 80 },
      ],
    },
    {
      category: "Backend Development",
      icon: Database,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      skills: [
        { name: "Python Full-Stack", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "SQL", level: 88 },
        { name: "API Development", level: 82 },
      ],
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: [
        { name: "AWS", level: 80 },
        { name: "Cloud Architecture", level: 75 },
        { name: "Deployment", level: 78 },
      ],
    },
    {
      category: "Emerging Technologies",
      icon: Brain,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        { name: "Artificial Intelligence", level: 75 },
        { name: "IoT Systems", level: 85 },
        { name: "Prompt Engineering", level: 80 },
        { name: "AI Tools Integration", level: 82 },
      ],
    },
  ];

  const additionalSkills = [
    "Problem Solving",
    "System Design",
    "Team Collaboration",
    "Project Management",
    "Technical Writing",
    "Research & Development",
    "Innovation",
    "Leadership",
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive skill set spanning modern web development, cloud technologies, 
            and cutting-edge emerging tech like AI and IoT systems.
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-card p-8 neon-glow animate-on-scroll"
                  style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl ${category.bgColor} mr-4`}>
                  <category.icon className={`h-8 w-8 ${category.color}`} />
                </div>
                <h3 className="text-2xl font-bold">{category.category}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out animate-on-scroll"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="animate-on-scroll">
          <Card className="glass-card p-8 neon-glow">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-xl bg-gradient-secondary mr-4">
                <Wrench className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold">Additional Competencies</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {additionalSkills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-4 py-2 text-sm neon-glow animate-fade-in-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>

        {/* Tech Stack Visual */}
        <div className="mt-16 animate-on-scroll">
          <Card className="glass-card p-8 neon-glow">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Technology Stack</h3>
              <p className="text-muted-foreground">
                A comprehensive ecosystem of modern tools and technologies
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
              {[
                "React", "Python", "PostgreSQL", "AWS", "JavaScript", "CSS3",
                "HTML5", "Bootstrap", "AI/ML", "IoT", "Git", "Linux"
              ].map((tech, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg glass-card neon-glow hover:scale-110 transition-all duration-300 animate-fade-in-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-sm font-medium">{tech}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};