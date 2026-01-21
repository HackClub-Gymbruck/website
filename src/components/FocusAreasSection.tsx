import { 
  Brain, 
  Globe, 
  Bot, 
  Link2, 
  Glasses, 
  Atom, 
  Rocket, 
  Dna,
  Zap
} from "lucide-react";

const focusAreas = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Machine learning, neural networks, and the future of intelligent systems.",
    category: "Future Tech"
  },
  {
    icon: Globe,
    title: "Web X.0",
    description: "Next-generation web technologies and decentralized applications.",
    category: "Future Tech"
  },
  {
    icon: Bot,
    title: "Robotics",
    description: "Building and programming robots for real-world applications.",
    category: "Future Tech"
  },
  {
    icon: Link2,
    title: "Blockchain",
    description: "Distributed ledger technology and smart contract development.",
    category: "Future Tech"
  },
  {
    icon: Glasses,
    title: "VR/AR",
    description: "Immersive experiences and extended reality development.",
    category: "Future Tech"
  },
  {
    icon: Atom,
    title: "Quantum Technology",
    description: "Quantum computing and its revolutionary potential.",
    category: "Frontier Science"
  },
  {
    icon: Rocket,
    title: "Space Exploration",
    description: "Aerospace engineering and the cosmos.",
    category: "Frontier Science"
  },
  {
    icon: Dna,
    title: "Biotech",
    description: "Biotechnology and its intersection with computing.",
    category: "Frontier Science"
  },
  {
    icon: Zap,
    title: "Fusion Tech",
    description: "Clean energy and fusion technology innovation.",
    category: "Frontier Science"
  }
];

const FocusAreasSection = () => {
  return (
    <section id="focus-areas" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium border border-secondary/30 rounded-full bg-secondary/5 text-secondary">
            What We Teach
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Future Technologies &</span>
            <br />
            <span className="text-gradient">Frontier Sciences</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Hands-on learning in cutting-edge fields that will shape tomorrow's world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, index) => (
            <div
              key={area.title}
              className="group card-glow p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-primary">
                  <area.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {area.category}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreasSection;
