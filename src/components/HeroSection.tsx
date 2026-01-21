import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        </div>
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-float">
          <span className="inline-block px-4 py-2 mb-8 text-sm font-medium border border-primary/30 rounded-full bg-primary/5 text-primary">
            🚀 Non-profit Tech Education
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="text-gradient glow-text">HackClub</span>
          <br />
          <span className="text-foreground">Gymbruck</span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
          Educating the next generation in{" "}
          <span className="text-primary font-medium">AI</span>,{" "}
          <span className="text-primary font-medium">Robotics</span>,{" "}
          <span className="text-primary font-medium">Blockchain</span>,{" "}
          <span className="text-secondary font-medium">Quantum Tech</span>,{" "}
          <span className="text-secondary font-medium">Space Exploration</span>,{" "}
          and more.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#focus-areas"
            className="inline-flex items-center justify-center px-8 py-4 font-display font-semibold text-primary-foreground bg-gradient-primary rounded-lg glow-primary transition-transform hover:scale-105"
          >
            Explore Our Focus
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 font-display font-semibold text-foreground border border-border rounded-lg bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
