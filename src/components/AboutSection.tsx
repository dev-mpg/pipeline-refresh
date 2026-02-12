import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Award, Users } from "lucide-react";

const stats = [
  { icon: Shield, label: "Safety First", desc: "Top marks in third-party safety assessments" },
  { icon: Award, label: "Proven Track Record", desc: "Many repeat customers and earned referrals" },
  { icon: Users, label: "Experienced Crews", desc: "Skilled teams across the continental U.S." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-accent font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            About MPG
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
            A Legacy of Pipeline Excellence
          </h2>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed"
          >
            <p>
              MPG Pipeline Contractors, LLC is a leading pipeline contractor providing quality services to the oil and gas industry including pipeline construction, facility construction, pipeline integrity management and pipeline maintenance across the continental United States.
            </p>
            <p>
              We strive to maintain the highest level of professionalism, integrity, honesty and fairness in all our efforts. Our goal is satisfied customers, which requires meeting timelines, attention to detail, a service-minded attitude and cost-effective practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">{stat.label}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{stat.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
