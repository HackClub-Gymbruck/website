const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-card/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-xl text-gradient">HackClub</span>
            <span className="font-display text-foreground">Gymbruck</span>
          </div>
          
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} HackClub Gymbruck. A non-profit organization for tech education.
          </p>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a
              href="https://github.com/HackClub-Gymbruck"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="HackClub Gymbruck on GitHub"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/company/hackclub-gymbruck/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="HackClub Gymbruck on LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/HackClub_GB"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="HackClub Gymbruck on X"
            >
              X
            </a>
            <a
              href="https://www.youtube.com/@HackClub-GB"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="HackClub Gymbruck on YouTube"
            >
              YouTube
            </a>
            <a
              href="https://www.instagram.com/hackclub_gb/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="HackClub Gymbruck on Instagram"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
