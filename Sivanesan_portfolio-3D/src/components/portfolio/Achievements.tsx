import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Trophy, 
  FileText, 
  Users, 
  BookOpen, 
  Presentation,
  Star,
  Target
} from "lucide-react";

export const Achievements = () => {
  const certifications = [
    {
      title: "AI Implemented Python Full-Stack Developer",
      provider: "Login 360, Chennai",
      icon: FileText,
      status: "Completed",
      description: "Comprehensive full-stack development program with AI integration",
    },
    {
      title: "AWS re/Start Cloud Practitioner",
      provider: "TNSDC TN-SKILLS",
      icon: FileText,
      status: "Certified",
      description: "Cloud computing fundamentals and AWS services expertise",
    },
    {
      title: "Python Certificate",
      provider: "Microsoft",
      icon: FileText,
      status: "Certified",
      description: "Advanced Python programming and development practices",
    },
  ];

  const achievements = [
    {
      title: "Smart India Hackathon (SIH) 2024",
      description: "Top 25 Selection among thousands of participants nationwide",
      icon: Trophy,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
      category: "Competition",
    },
    {
      title: "Top 20 Hackathon Project",
      description: "IoT-based Real-time Disaster Monitoring and Alert System",
      icon: Award,
      color: "text-primary",
      bgColor: "bg-primary/10",
      category: "Innovation",
    },
    {
      title: "International Journal Publication",
      description: "Research paper submission for publication in international journal",
      icon: BookOpen,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      category: "Research",
    },
    {
      title: "Multiple Paper Presentations",
      description: "Presented research papers at various engineering colleges",
      icon: Presentation,
      color: "text-accent",
      bgColor: "bg-accent/10",
      category: "Academic",
    },
  ];

  const clubActivities = [
    {
      club: "Computer Society of India (CSI)",
      role: "Active Member",
      activities: ["Technical workshops", "Coding competitions", "Industry networking"],
    },
    {
      club: "Multimedia Club",
      role: "Core Member",
      activities: ["Content creation", "Digital media projects", "Creative campaigns"],
    },
    {
      club: "Rotaract Club",
      role: "Member",
      activities: ["Community service", "Leadership development", "Social initiatives"],
    },
  ];

  const internships = [
    {
      title: "IoT Development Internship",
      company: "Tech Company",
      duration: "6 months",
      skills: ["IoT Systems", "Sensor Integration", "Data Analytics"],
    },
    {
      title: "Web Development Internship",
      company: "Software Firm",
      duration: "4 months",
      skills: ["Full-Stack Development", "Database Design", "API Development"],
    },
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive record of certifications, competitions, research contributions, 
            and professional development activities.
          </p>
        </div>

        {/* Major Achievements */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="glass-card p-6 neon-glow animate-on-scroll"
                  style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-xl ${achievement.bgColor}`}>
                  <achievement.icon className={`h-6 w-6 ${achievement.color}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{achievement.title}</h3>
                    <Badge variant="outline" className="neon-glow">
                      {achievement.category}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <FileText className="h-6 w-6 text-primary mr-3" />
              Professional Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="glass-card p-6 neon-glow animate-fade-in-scale"
                      style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-gradient-primary">
                      <cert.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold">{cert.title}</h4>
                        <Badge className="bg-gradient-secondary text-secondary-foreground">
                          {cert.status}
                        </Badge>
                      </div>
                      <p className="text-primary font-medium mb-2">{cert.provider}</p>
                      <p className="text-sm text-muted-foreground">{cert.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Extracurricular Activities */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Users className="h-6 w-6 text-secondary mr-3" />
              Leadership & Activities
            </h3>
            <div className="space-y-6">
              {clubActivities.map((club, index) => (
                <Card key={index} className="glass-card p-6 neon-glow animate-slide-in-right"
                      style={{ animationDelay: `${index * 0.2}s` }}>
                  <h4 className="text-lg font-semibold mb-1">{club.club}</h4>
                  <p className="text-primary font-medium mb-3">{club.role}</p>
                  <div className="flex flex-wrap gap-2">
                    {club.activities.map((activity, actIndex) => (
                      <Badge key={actIndex} variant="outline" className="text-xs">
                        {activity}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Internship Experience */}
        <div className="mt-16 animate-on-scroll">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Target className="h-6 w-6 text-accent mr-3" />
            Professional Experience
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {internships.map((internship, index) => (
              <Card key={index} className="glass-card p-6 neon-glow animate-fade-in-scale"
                    style={{ animationDelay: `${index * 0.3}s` }}>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-bold">{internship.title}</h4>
                    <p className="text-primary font-medium">{internship.company}</p>
                    <p className="text-sm text-muted-foreground">{internship.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Key Skills Developed:</p>
                    <div className="flex flex-wrap gap-2">
                      {internship.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
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