"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const team = [
  {
    name: "Akuro Blaise Mbaku",
    initials: "AB",
    role: "Co-Founder",
    bio: "Visionary leader driving Richkid Ltd's mission to transform Africa's service economy through innovative technology solutions.",
  },
  {
    name: "Che Jason",
    initials: "CJ",
    role: "Co-Founder",
    bio: "Strategic thinker with deep expertise in product development and scaling technology platforms across emerging markets.",
  },
  {
    name: "Hermann Afeseh-Bidnyugh",
    initials: "HA",
    role: "Co-Founder",
    bio: "Technical architect passionate about building reliable, scalable systems that empower local communities and service providers.",
  },
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding" id="team" ref={ref} style={{ background: "var(--navy-900)" }}>
      <div className="section-container">
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="section-eyebrow">The Founders</div>
            <div className="section-divider centered" />
            <h2 className="section-title">
              Meet the <span className="gradient-text">Team</span>
            </h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              A passionate team of African innovators building the future of the continent's service economy.
            </p>
          </motion.div>
        </div>

        <div className="team-grid">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              className="glass-card team-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="team-avatar">{member.initials}</div>
              <h3>{member.name}</h3>
              <div className="role">{member.role}</div>
              <p>{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
