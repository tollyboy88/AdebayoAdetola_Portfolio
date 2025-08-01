import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, Database, Code, Zap, Award, Users, Globe, Lightbulb } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Python", level: 95, category: "Programming" },
    { name: "Machine Learning", level: 90, category: "AI/ML" },
    { name: "Deep Learning", level: 88, category: "AI/ML" },
    { name: "TensorFlow/PyTorch", level: 85, category: "Frameworks" },
    { name: "Data Science", level: 92, category: "Analytics" },
    { name: "MLOps", level: 80, category: "DevOps" },
    { name: "Computer Vision", level: 85, category: "AI/ML" },
    { name: "NLP", level: 82, category: "AI/ML" },
  ];

  const expertise = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Developing intelligent systems using state-of-the-art machine learning and deep learning techniques for real-world applications.",
      highlights: ["Neural Networks", "Computer Vision", "Natural Language Processing", "Reinforcement Learning"]
    },
    {
      icon: Database,
      title: "Data Science & Analytics",
      description: "Transforming raw data into actionable insights through advanced statistical analysis and predictive modeling.",
      highlights: ["Statistical Analysis", "Predictive Modeling", "Data Visualization", "Big Data Processing"]
    },
    {
      icon: Code,
      title: "MLOps & Deployment",
      description: "Building scalable ML pipelines and deploying machine learning models to production environments.",
      highlights: ["Model Deployment", "CI/CD Pipelines", "Cloud Platforms", "Model Monitoring"]
    },
    {
      icon: Zap,
      title: "Research & Innovation",
      description: "Contributing to cutting-edge AI research with focus on explainable AI, fairness, and ethical machine learning.",
      highlights: ["Research Publications", "Open Source", "Algorithm Development", "Academic Collaboration"]
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: "Research Excellence",
      description: "Published multiple research papers on explainable AI and fairness in machine learning",
    },
    {
      icon: Users,
      title: "Industry Impact",
      description: "Delivered AI solutions across healthcare, public service, and business automation",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Collaborated with international teams and supported projects across multiple timezones",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pioneered novel approaches in threat detection, medical AI, and automated systems",
    },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="font-semibold px-4 py-2">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold">
            Transforming Ideas Into <span className="gradient-text">Intelligent Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm Adebayo Adetola, an AI/ML Engineer and Data Scientist passionate about creating 
            intelligent systems that solve real-world problems and drive innovation.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over 5 years of experience in artificial intelligence and machine learning, 
                I specialize in developing cutting-edge solutions that bridge the gap between 
                complex algorithms and practical applications.
              </p>
              <p>
                My expertise spans across multiple domains including healthcare AI, public service 
                automation, business intelligence, and research innovation. I'm particularly 
                passionate about explainable AI and ensuring that machine learning systems are 
                fair, transparent, and beneficial for all.
              </p>
              <p>
                Currently based in Dewsbury, UK, I work with Allies Info Tech and collaborate 
                with organizations worldwide to implement AI-driven solutions that make a 
                meaningful impact.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">Technical Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Areas of Expertise</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI/ML capabilities across the entire development lifecycle
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((area, index) => (
              <Card key={area.title} className="group hover:shadow-card transition-smooth">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                      <area.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-smooth">
                      {area.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="leading-relaxed">
                    {area.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {area.highlights.map((highlight) => (
                      <Badge key={highlight} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="space-y-12 mt-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Key Achievements</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Milestones and impact across research, industry, and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={achievement.title} className="text-center group hover:shadow-card transition-smooth">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                    <achievement.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="font-bold mb-2 group-hover:text-primary transition-smooth">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;