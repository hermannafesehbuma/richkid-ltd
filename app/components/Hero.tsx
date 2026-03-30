"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Shield, Zap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section className="hero bg-grid" id="hero">
      {/* Background orbs */}
      <div
        className="orb orb-orange"
        style={{ width: 400, height: 400, top: "10%", left: "-5%", opacity: 0.15 }}
      />
      <div
        className="orb orb-blue"
        style={{ width: 300, height: 300, bottom: "10%", right: "5%", opacity: 0.1 }}
      />

      <div className="hero-content">
        {/* Text */}
        <div className="hero-text">
          <motion.div
            className="tag"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Zap size={14} />
            Powering Africa&apos;s Service Economy
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{ marginTop: "1.5rem" }}
          >
            Connecting People.
            <br />
            <span className="gradient-text">Delivering Services.</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Richkid Ltd builds technology that bridges the gap between verified
            local service providers and clients across Africa. Our flagship
            product, <strong style={{ color: "var(--orange-400)" }}>My Padi</strong>,
            is transforming how Africa works.
          </motion.p>

          <motion.div
            className="hero-actions"
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <a href="#product" className="btn-primary">
              Discover My Padi <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Us
            </a>
          </motion.div>

          <motion.div
            className="hero-stats"
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <div>
              <div className="hero-stat-value gradient-text">3KM</div>
              <div className="hero-stat-label">Proximity Filter</div>
            </div>
            <div>
              <div className="hero-stat-value gradient-text">Verified</div>
              <div className="hero-stat-label">Service Providers</div>
            </div>
            <div>
              <div className="hero-stat-value gradient-text">Real-time</div>
              <div className="hero-stat-label">Negotiations</div>
            </div>
          </motion.div>
        </div>

        {/* Phone mockup */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="phone-mockup">
            <div className="phone-notch" />
            <div className="phone-screen">
              <div className="phone-header">
                <h3 style={{ color: "var(--orange-400)" }}>My Padi</h3>
                <p>Find verified services nearby</p>
              </div>

              <div className="phone-map">
                {/* Map dots */}
                <div className="map-radius" />
                <div className="map-radius map-radius-inner" style={{ width: 60, height: 60, border: "1px solid rgba(249,115,22,0.35)" }} />
                <div className="map-dot" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", background: "var(--blue-500)" }} />
                <div className="map-dot" style={{ top: "30%", left: "35%", width: 8, height: 8 }} />
                <div className="map-dot" style={{ top: "45%", left: "70%", width: 8, height: 8 }} />
                <div className="map-dot" style={{ top: "65%", left: "25%", width: 8, height: 8 }} />
                <div className="map-dot" style={{ top: "70%", left: "60%", width: 8, height: 8 }} />

                {/* Map lines pattern */}
                <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.15 }}>
                  <line x1="10%" y1="20%" x2="40%" y2="50%" stroke="var(--orange-400)" strokeWidth="0.5" />
                  <line x1="60%" y1="30%" x2="50%" y2="50%" stroke="var(--orange-400)" strokeWidth="0.5" />
                  <line x1="30%" y1="70%" x2="50%" y2="50%" stroke="var(--orange-400)" strokeWidth="0.5" />
                  <line x1="70%" y1="65%" x2="50%" y2="50%" stroke="var(--orange-400)" strokeWidth="0.5" />
                </svg>
              </div>

              <div className="phone-cards">
                <div className="phone-card">
                  <div className="phone-card-icon">🧹</div>
                  <span>Cleaners</span>
                </div>
                <div className="phone-card">
                  <div className="phone-card-icon">🛒</div>
                  <span>Shoppers</span>
                </div>
                <div className="phone-card">
                  <div className="phone-card-icon">📦</div>
                  <span>Movers</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className="floating-badge badge-1">
            <div className="floating-badge-icon" style={{ background: "rgba(34,197,94,0.15)", color: "#22c55e" }}>
              <Shield size={16} />
            </div>
            <div className="floating-badge-text">
              <strong>Verified</strong>
              <span>All providers vetted</span>
            </div>
          </div>

          <div className="floating-badge badge-2">
            <div className="floating-badge-icon" style={{ background: "rgba(59,130,246,0.15)", color: "#3b82f6" }}>
              <MapPin size={16} />
            </div>
            <div className="floating-badge-text">
              <strong>Nearby</strong>
              <span>Within 3KM radius</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
