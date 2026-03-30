"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShoppingCart, Sparkles, Truck, MapPin, Shield, MessageSquare } from "lucide-react";

const services = [
  {
    icon: <ShoppingCart size={28} />,
    title: "Personal Shoppers",
    description:
      "Find verified personal shoppers near you who can handle your grocery runs, market visits, and errands with speed and reliability.",
  },
  {
    icon: <Sparkles size={28} />,
    title: "Professional Cleaners",
    description:
      "Connect with trusted cleaning professionals in your area for residential and commercial cleaning services, all within a 3KM radius.",
  },
  {
    icon: <Truck size={28} />,
    title: "Licensed Movers",
    description:
      "Access reliable movers for local relocations, furniture delivery, and logistics — verified, nearby, and ready to work.",
  },
  {
    icon: <MapPin size={28} />,
    title: "Proximity Matching",
    description:
      "Our 3KM radius filter ensures that help is always close by. No long waits, no far-off providers — just immediate, local assistance.",
  },
  {
    icon: <Shield size={28} />,
    title: "Verified Providers",
    description:
      "Every service provider on My Padi is verified for identity and quality. Safety and reliability are at the core of our platform.",
  },
  {
    icon: <MessageSquare size={28} />,
    title: "Real-Time Negotiation",
    description:
      "Negotiate pricing directly with providers in real-time. Get fair deals and transparent pricing — no hidden fees.",
  },
];

export default function Product() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding" id="product" ref={ref} style={{ background: "var(--navy-900)" }}>
      <div className="section-container">
        <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="section-eyebrow" style={{ textAlign: "center" }}>Our Flagship Product</div>
            <div className="section-divider centered" />
            <h2 className="section-title" style={{ textAlign: "center" }}>
              My Padi: <span className="gradient-text">Connecting Africa&apos;s Service Economy</span>
            </h2>
            <p className="section-subtitle" style={{ textAlign: "center", margin: "0 auto" }}>
              A high-speed, geolocation-based marketplace designed to bridge the gap
              between verified local service providers and clients across Africa.
            </p>
          </motion.div>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="glass-card service-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
