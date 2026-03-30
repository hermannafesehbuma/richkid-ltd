"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding cta-section" ref={ref} style={{ background: "var(--navy-900)" }}>
      <div className="section-container">
        <motion.div
          className="cta-card"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2>
            Ready to Experience{" "}
            <span className="gradient-text">My Padi</span>?
          </h2>
          <p>
            Join the growing community of users and service providers
            transforming Africa&apos;s service economy.
          </p>
          <div className="cta-actions">
            <a href="#contact" className="btn-primary">
              Get Started <ArrowRight size={18} />
            </a>
            <a href="#product" className="btn-secondary">
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
