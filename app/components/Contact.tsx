"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Building } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding" id="contact" ref={ref}>
      <div className="section-container">
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="section-eyebrow">Get in Touch</div>
            <div className="section-divider centered" />
            <h2 className="section-title">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Have a question, partnership inquiry, or want to learn more about
              Richkid Ltd? We would love to hear from you.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="contact-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Contact info */}
          <div>
            <div className="contact-info-list">
              <div className="contact-item">
                <div className="contact-item-icon">
                  <Building size={20} />
                </div>
                <div>
                  <h4>Company</h4>
                  <p>RICHKID LTD</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4>Address</h4>
                  <p>
                    Richkid Studios, After Fonab Polytechnic,
                    <br />
                    Mile 3 Nkwen, Bamenda
                    <br />
                    Nord Ouest, Cameroon
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <h4>Telephone</h4>
                  <p>+237 675 478 666</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>contact@richkidltd.tech</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="glass-card" style={{ padding: "2rem" }}>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="contact-name">Full Name</label>
                <input
                  type="text"
                  id="contact-name"
                  placeholder="Your full name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  type="email"
                  id="contact-email"
                  placeholder="you@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  type="text"
                  id="contact-subject"
                  placeholder="How can we help?"
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  placeholder="Tell us more..."
                  rows={4}
                />
              </div>
              <button type="submit" className="btn-primary" style={{ justifyContent: "center", width: "100%" }}>
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
