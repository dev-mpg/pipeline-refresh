import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Cross-country mainline pipeline projects across the U.S.",
  "FERC-regulated pipeline construction",
  "USACE-regulated horizontal directional drilling under levee systems",
  "Hydrostatic testing and hot tap interconnects",
  "Challenging marsh, marine, and shallow water installations",
  "High marks in third-party safety perception surveys",
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container px-4" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-heading font-semibold text-sm tracking-widest uppercase mb-3">
              Why Choose MPG
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              Diverse Projects.
              <br />
              Proven Results.
            </h2>
            <p className="mt-6 text-primary-foreground/70 text-lg leading-relaxed">
              MPG has completed many diverse and challenging projects across the United States. We look forward to partnering with established or new clients to continue building the nation's energy network.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {highlights.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/85 text-base">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
