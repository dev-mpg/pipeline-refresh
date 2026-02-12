import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-accent font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
            Let's Build Together
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Ready to discuss your next pipeline project? Contact our team for a consultation or bid request.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 max-w-xl mx-auto"
        >
          <div className="bg-card border border-border rounded-lg p-8 md:p-10 space-y-6">
            <h3 className="font-heading font-semibold text-xl text-foreground">Corporate Headquarters</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-foreground">16770 Imperial Valley, Suite 105</p>
                  <p className="text-muted-foreground">Houston, TX 77060</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:7139559901" className="text-foreground hover:text-accent transition-colors">
                  713-955-9901
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:info@mpg-plc.com" className="text-foreground hover:text-accent transition-colors">
                  info@mpg-plc.com
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-border flex flex-col sm:flex-row gap-3">
              <a
                href="https://mpg-plc.com/contact-us/request-a-bid/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-6 py-3 text-sm font-semibold bg-accent text-accent-foreground rounded hover:bg-accent/90 transition-colors"
              >
                Request a Bid
              </a>
              <a
                href="https://mpg-plc.com/contact-us/subcontractor-application/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-6 py-3 text-sm font-semibold border border-border text-foreground rounded hover:border-accent hover:text-accent transition-colors"
              >
                Subcontractor Application
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
