import mpgLogo from "@/assets/mpg-logo.jpg";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground/60 py-12">
    <div className="container px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={mpgLogo} alt="MPG Pipeline Contractors" className="h-8 rounded" />
          <span className="font-heading font-semibold text-primary-foreground text-sm">
            MPG Pipeline Contractors
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="#services" className="hover:text-accent transition-colors">Services</a>
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-primary-foreground/10 text-center text-xs">
        © {new Date().getFullYear()} MPG Pipeline Contractors, LLC. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
