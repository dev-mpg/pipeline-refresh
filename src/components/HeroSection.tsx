import { motion } from "framer-motion";
import heroBg from "@/assets/hero-pipeline.png";

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="Pipeline construction" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary/70" />
    </div>

    {/* Content */}
    <div className="relative z-10 container text-center px-4 pt-20">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-accent font-heading font-semibold text-sm md:text-base tracking-widest uppercase mb-4"
      >
        Never Substitute Experience
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight max-w-4xl mx-auto"
      >
        Building America's
        <br />
        <span className="text-accent">Energy Infrastructure</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto font-body"
      >
        A leading pipeline contractor providing quality construction, facility, and integrity services to the energy industry across the United States.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
      >
        <!-- <a
          href="#contact"
          className="px-8 py-3.5 text-base font-semibold bg-accent text-accent-foreground rounded hover:bg-accent/90 transition-colors"
        >
          Request a Bid
        </a>
        <a
          href="#services"
          className="px-8 py-3.5 text-base font-semibold border-2 border-primary-foreground/30 text-primary-foreground rounded hover:border-accent hover:text-accent transition-colors"
        >
          Our Services
        </a> -->
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
        <div className="w-1 h-2.5 bg-accent rounded-full" />
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
