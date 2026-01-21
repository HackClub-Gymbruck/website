import { Mail, Globe, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium border border-primary/30 rounded-full bg-primary/5 text-primary">
              Join Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
              Interested in joining our community or have questions? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Website */}
            <a
              href="https://www.hackclub-gymbruck.org"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">Website</h3>
              <p className="text-primary text-sm group-hover:underline">
                hackclub-gymbruck.org
              </p>
            </a>

            {/* Email */}
            <a
              href="mailto:info@hackclub-gymbruck.org"
              className="group p-6 rounded-xl bg-card border border-border hover:border-secondary/50 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <Mail className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">Email</h3>
              <p className="text-secondary text-sm group-hover:underline">
                info@hackclub-gymbruck.org
              </p>
            </a>

            {/* Location */}
            <a
              href="https://maps.google.com/?q=Gymnasium+Bruckmühl,+Kirchdorfer+Str.+21,+83052+Bruckmühl"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">Location</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Gymnasium Bruckmühl<br />
                Kirchdorfer Str. 21<br />
                83052 Bruckmühl
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
