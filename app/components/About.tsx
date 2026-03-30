"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Cpu, Rocket, Users } from "lucide-react";

const features = [
  {
    icon: <Globe size={20} />,
    title: "Pan-African Vision",
    description: "Building solutions designed for the unique needs of African markets and communities.",
  },
  {
    icon: <Cpu size={20} />,
    title: "Technology-First",
    description: "Leveraging cutting-edge geolocation, real-time systems, and mobile-first architecture.",
  },
  {
    icon: <Rocket size={20} />,
    title: "Rapid Innovation",
    description: "Moving fast from ideation to deployment, refining products with real user feedback.",
  },
  {
    icon: <Users size={20} />,
    title: "Community Impact",
    description: "Empowering local service providers to grow their businesses and reach more clients.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-radial-glow" id="about" ref={ref}>
      <div className="section-container">
        <div className="about-grid">
          {/* Visual */}
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="about-image-placeholder">
              <div className="about-pattern" />
              <div className="about-icon-block">
                <div className="about-icon-large">RK</div>
                <div style={{ textAlign: "center" }}>
                  <h3 style={{ fontSize: "var(--text-xl)", fontWeight: 700, letterSpacing: "-0.01em" }}>
                    Richkid Ltd
                  </h3>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", marginTop: "0.25rem" }}>
                    Technology &middot; Innovation &middot; Africa
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-eyebrow">About Us</div>
            <div className="section-divider" />
            <h2 className="section-title">
              Building the Future of <span className="gradient-text">African Tech</span>
            </h2>
            <p className="section-subtitle">
              Richkid Ltd is a technology company headquartered in Bamenda,
              Cameroon. We are the parent company behind My Padi — a
              revolutionary geolocation-based marketplace designed to connect
              verified local service providers with clients across Africa.
            </p>

            <div className="about-features">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  className="about-feature-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="about-feature-icon">{feature.icon}</div>
                  <div className="about-feature-text">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
