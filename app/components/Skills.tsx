"use client";
import { motion } from "framer-motion";
import { skills } from "../data/skills";

export default function Skills() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-card"
        >
            <h2 style={{ marginTop: 0 }}>Skills</h2>
            <div className="skills-grid" style={{ marginTop: 12 }}>
                {skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                        <div key={skill.name} className="skill-card">
                            <div className="skill-icon">
                                <Icon size={20} color="var(--primary)" />
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontWeight: 600 }}>{skill.name}</div>
                                <div style={{ fontSize: "0.85rem", color: "#cbd5e1", fontWeight: 500, marginTop: 6 }}>{skill.level || "—"}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
}
