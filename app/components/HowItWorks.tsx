"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "1",
    title: "Download the App",
    description: "Get My Padi from the App Store or Play Store and create your account in seconds.",
  },
  {
    number: "2",
    title: "Set Your Location",
    description: "Enable geolocation and we will find verified service providers within a 3KM radius.",
  },
  {
    number: "3",
    title: "Choose & Negotiate",
    description: "Browse available providers, check reviews, and negotiate pricing in real-time chat.",
  },
  {
    number: "4",
    title: "Get It Done",
    description: "Your provider arrives quickly. Rate them after to help the community grow stronger.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-grid" id="how-it-works" ref={ref}>
      <div className="section-container">
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="section-eyebrow">How It Works</div>
            <div className="section-divider centered" />
            <h2 className="section-title">
              Simple Steps to <span className="gradient-text">Get Help Fast</span>
            </h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              My Padi makes finding reliable service providers as easy as 1-2-3-4.
            </p>
          </motion.div>
        </div>

        <div className="steps-grid">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="glass-card step-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
