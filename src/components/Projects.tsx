import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star, Calendar } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Evaluation Comparison Explainable AI for Different Models with Web App",
      description: "Comprehensive analysis and comparison of explainable AI techniques across different machine learning models with interactive web application for visualization and analysis.",
      tags: ["Python", "Jupyter Notebook", "XAI", "Web App", "Model Comparison"],
      stars: 2,
      updated: "Jul 2025",
      repoName: "Evaluation-Comparison-Explainable-AI-For-diff-Model-with-Web-App-",
      featured: true,
    },
    {
      title: "Proposed DWP AI Triage System",
      description: "Intelligent triage system designed for the Department for Work and Pensions to automate case prioritization and improve efficiency in public service delivery.",
      tags: ["HTML", "AI Triage", "Public Service", "Automation"],
      stars: 1,
      updated: "Jul 2025",
      repoName: "Proposed-DWP-AI_Triage-System",
      featured: true,
    },
    {
      title: "AI Media Threat Detection",
      description: "AI-powered media threat detection system that identifies when someone is in danger but cannot ask for help openly due to hidden threats. Analyzes cues from audio, video, and contextual data.",
      tags: ["Python", "Computer Vision", "NLP", "Threat Detection", "Safety AI"],
      stars: 1,
      updated: "Jul 2025",
      repoName: "AI_Media_Threat_Detection",
      featured: true,
    },
    {
      title: "Emotional Image Classification",
      description: "Deep learning system for emotion recognition from images using state-of-the-art computer vision techniques and neural networks.",
      tags: ["Jupyter Notebook", "Computer Vision", "Emotion Recognition", "Deep Learning"],
      stars: 2,
      updated: "May 2025",
      repoName: "Emotional-Image-Classification-",
      featured: false,
    },
    {
      title: "Insurance Fraud Detection with Fairness Analysis",
      description: "Investigation of machine learning models on fairness criteria for insurance fraud detection, ensuring ethical AI practices and bias mitigation.",
      tags: ["Jupyter Notebook", "Fairness AI", "Fraud Detection", "Ethics"],
      stars: 2,
      updated: "Apr 2025",
      repoName: "Investigate-model-on-fairness-criteria-for-Insurance-fruad-detection",
      featured: false,
    },
    {
      title: "Hospital Readmission Prediction with Deep Learning",
      description: "Leverage deep learning and machine learning techniques for hospital readmission prediction with interactive web application for healthcare professionals.",
      tags: ["Jupyter Notebook", "Healthcare AI", "Deep Learning", "Web App"],
      stars: 2,
      updated: "Apr 2025",
      repoName: "Leverage-Deep-learning-and-machine-learning-on-Hospital-Readmission-with-web-app",
      featured: false,
    },
    {
      title: "Heart Disease Risk Prediction",
      description: "Intelligent heart disease risk indicator using machine learning algorithms to provide early detection and risk assessment for cardiovascular health.",
      tags: ["Jupyter Notebook", "Healthcare AI", "Risk Assessment", "Medical AI"],
      stars: 2,
      updated: "Apr 2025",
      repoName: "Intelligent-Heart-Disease-Risk-Indicator-with-Machine-Learning",
      featured: false,
    },
    {
      title: "Deep Q-Learning Snake Game",
      description: "Applied Linear Q-Network Deep Q-Learning to master the classic Snake game, demonstrating reinforcement learning capabilities in game AI.",
      tags: ["Jupyter Notebook", "Reinforcement Learning", "Game AI", "Deep Q-Learning"],
      stars: 2,
      updated: "Apr 2025",
      repoName: "Applied-A-Linear-Q-Network-Deep-Q-Learning-Mastered-Classic-Snake-Game",
      featured: false,
    },
    {
      title: "Telecom Customer Churn Analysis",
      description: "Comprehensive analysis and prediction of telecom customer churn using advanced machine learning techniques and data visualization.",
      tags: ["Jupyter Notebook", "Churn Prediction", "Telecom", "Data Analysis"],
      stars: 2,
      updated: "May 2024",
      repoName: "Telecom-Customer-churn-Analysis-and-Prediction",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const ProjectCard = ({ project, featured = false }: { project: typeof projects[0], featured?: boolean }) => (
    <Card className={`group hover:shadow-card transition-smooth ${featured ? 'border-secondary/30 bg-gradient-to-br from-card to-card/50' : ''}`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className={`group-hover:text-primary transition-smooth ${featured ? 'text-lg' : ''}`}>
              {project.title}
            </CardTitle>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-secondary" />
                <span>{project.stars}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>Updated {project.updated}</span>
              </div>
            </div>
          </div>
        </div>
        <CardDescription className="line-clamp-3">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={() => window.open(`https://github.com/tollyboy88/${project.repoName}`, '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              View Code
            </Button>
            <Button
              variant="minimal"
              size="sm"
              onClick={() => window.open(`https://github.com/tollyboy88/${project.repoName}`, '_blank')}
            >
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="font-semibold px-4 py-2">
            Portfolio Showcase
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold">
            Explore My <span className="gradient-text">AI Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover cutting-edge AI and machine learning solutions that solve real-world problems 
            across healthcare, public service, and business automation.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <span className="w-2 h-8 bg-gradient-secondary rounded mr-4"></span>
              Featured Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <div key={project.repoName} className="animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                  <ProjectCard project={project} featured />
                </div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <span className="w-2 h-8 bg-gradient-primary rounded mr-4"></span>
              Research & Development
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <div key={project.repoName} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-primary-foreground/80 text-lg mb-6 max-w-2xl mx-auto">
              Let's collaborate on your next AI project and transform your ideas into intelligent solutions.
            </p>
            <Button
              variant="hero"
              size="lg"
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
