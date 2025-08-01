import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-footer text-footer-foreground">
      {/* Main Footer */}
      <div className="container mx-auto container-padding py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-xl">AA</span>
              </div>
              <span className="font-bold text-2xl">Adebayo Adetola</span>
            </div>
            <p className="text-footer-foreground/80 leading-relaxed max-w-md">
              AI/ML Engineer and Data Scientist specializing in machine learning, deep learning, 
              and intelligent systems. Transforming complex data into actionable insights and 
              automated solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/tollyboy88"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-footer-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-smooth"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/adebayo-adetola-4b30aab4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-footer-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-smooth"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <button
                onClick={() => scrollToSection("#contact")}
                className="w-10 h-10 bg-footer-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-smooth"
              >
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-footer-foreground/80 hover:text-secondary transition-smooth"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Services</h4>
            <div className="space-y-2 text-footer-foreground/80">
              <p>Machine Learning Development</p>
              <p>AI Research & Consulting</p>
              <p>Data Science Solutions</p>
              <p>MLOps & Deployment</p>
              <p>Academic Collaboration</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 pt-8 border-t border-footer-foreground/20">
          <div className="bg-gradient-secondary/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your AI Project?</h3>
            <p className="text-footer-foreground/80 mb-6 max-w-2xl mx-auto">
              Let's discuss how AI and machine learning can transform your business. 
              I'm available for freelance projects, research collaborations, and consulting.
            </p>
            <Button
              variant="cta"
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="group"
            >
              Let's Collaborate
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-footer-foreground/20 py-6">
        <div className="container mx-auto container-padding">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-footer-foreground/60">
              <p>&copy; 2025 Adebayo Adetola. All rights reserved.</p>
              <div className="flex space-x-4">
                <span>Dewsbury, UK</span>
                <span>•</span>
                <span>Available Globally</span>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-footer-foreground/60 hover:text-secondary"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;