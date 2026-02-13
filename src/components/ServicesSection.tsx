import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wrench, Factory, ShieldCheck, Waves, Settings } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Pipeline Construction",
    desc: "Installation of pipelines ranging from 2\" to 48\" in diameter, including FERC-regulated mainline projects and horizontal directional drilling.",
  },
  {
    icon: Factory,
    title: "Facility Construction",
    desc: "Complete site facility and meter station construction services with specialized and experienced crews.",
  },
  {
    icon: ShieldCheck,
    title: "Pipeline Integrity",
    desc: "Comprehensive pipeline integrity solutions ensuring full compliance with all regulations, from assessment to remediation.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 bg-secondary">
      <div className="container px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-accent font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
            Pipeline Services
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            MPG has the expertise, in-the-field experience, and industry relationships to accomplish any pipeline project.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-card rounded-lg p-6 md:p-8 border border-border hover:border-accent/40 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
