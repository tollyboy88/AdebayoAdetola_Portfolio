import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Database, Code, Zap } from "lucide-react";
import heroProfile from "@/assets/hero-profile.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Delivered", value: "20+" },
    { label: "Research Papers", value: "15+" },
  ];

  const skills = [
    { icon: Brain, label: "Deep Learning" },
    { icon: Database, label: "Data Science" },
    { icon: Code, label: "MLOps" },
    { icon: Zap, label: "AI Research" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(161,29,29,0.1),transparent_50%)]" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge variant="secondary" className="font-semibold px-4 py-2">
                AI/ML Engineer & Data Scientist
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mt-12">
                Transform Your
                <span className="gradient-text block"> Data Into Intelligence</span>
                With AI
              </h1>
              <p className="text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">
                AI/ML Engineer and Data Scientist specializing in{" "}
                <span className="text-secondary font-semibold">machine learning</span>,{" "}
                <span className="text-secondary font-semibold">deep learning</span>, and{" "}
                <span className="text-secondary font-semibold">intelligent systems</span>. 
                Transforming complex data into actionable insights and automated solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="text-3xl font-bold text-secondary">{stat.value}</div>
                  <div className="text-primary-foreground/60 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-background/10 backdrop-blur rounded-xl px-4 py-2 border border-secondary/20 animate-slide-in-left"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <skill.icon className="w-4 h-4 text-secondary" />
                  <span className="text-primary-foreground/90 font-medium text-sm">{skill.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="group"
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
              >
                Let's Collaborate
              </Button>
            </div>

            {/* Additional Info */}
            <div className="flex items-center space-x-6 text-primary-foreground/60 text-sm">
              <span>✓ Available for global remote projects</span>
              <span>✓ All timezones supported</span>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-secondary rounded-full blur-2xl opacity-20 animate-glow" />
              <div className="relative w-full max-w-md mx-auto">
                <img
                  src={heroProfile}
                  alt="Adebayo Adetola - AI/ML Engineer"
                  className="w-full h-auto rounded-full border-4 border-secondary/30 shadow-glow"
                />
                <div className="absolute -bottom-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-bold shadow-elegant">
                  Available for Hire
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;