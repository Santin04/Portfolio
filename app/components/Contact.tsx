"use client";
import { motion } from "framer-motion";
import { FiGithub, FiInstagram, FiLinkedin, FiMessageCircle } from "react-icons/fi";

const contacts = [
    { name: "GitHub", icon: FiGithub, href: "https://github.com/Santin04" },
    { name: "LinkedIn", icon: FiLinkedin, href: "https://www.linkedin.com/in/mateus-santin-33b837266/" },
    { name: "WhatsApp", icon: FiMessageCircle, href: "https://wa.me/5519998113224" },
    { name: "Instagram", icon: FiInstagram, href: "https://www.instagram.com/santinmt_/" }
];

export default function Contact() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-card"
        >
            <h2 style={{ marginTop: 0 }}>Contato</h2>
            <div style={{ marginTop: 12, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 16 }}>
                {contacts.map((contact) => {
                    const Icon = contact.icon;
                    return (
                        <a
                            key={contact.name}
                            href={contact.href}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                padding: 20,
                                background: "rgba(38, 38, 38, 0.8)",
                                borderRadius: 12,
                                border: "1px solid rgba(79, 70, 229, 0.2)",
                                textDecoration: "none",
                                color: "#cbd5e1",
                                transition: "transform 0.15s ease, box-shadow 0.15s ease, color 0.15s ease"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-4px)";
                                e.currentTarget.style.boxShadow = "0 8px 20px rgba(79, 70, 229, 0.15)";
                                e.currentTarget.style.color = "#ffffff";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "none";
                                e.currentTarget.style.color = "#cbd5e1";
                            }}
                        >
                            <Icon size={32} style={{ marginBottom: 8 }} />
                            <span style={{ fontSize: "0.9rem", fontWeight: 500 }}>{contact.name}</span>
                        </a>
                    );
                })}
            </div>
        </motion.section>
    );
}
