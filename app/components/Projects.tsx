"use client";
import { motion } from "framer-motion";

const projects = [
    {
        title: "EveryBIM",
        desc: "Sistema colaborativo para gerenciamento de projetos BIM na construção civil usando componentes 3D interativos.",
        stack: "Next.js, Nest.js, Prisma e PostgreSQL",
        image: "/projetos/everybim.jfif",
        demo: "https://everybim.com.br/login",
    },
    {
        title: "Flappy Bird",
        desc: "Jogo clássico de passar o pássaro entre obstáculos.",
        stack: "HTML, CSS e JavaScript",
        image: "/projetos/flappy_bird.jfif",
        demo: "https://flappybird-santin04.netlify.app/",
    },
];

export default function Projects() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-card"
        >
            <h2 style={{ marginTop: 0 }}>Projetos</h2>

            <div className="projects-grid" style={{ marginTop: 12 }}>
                {projects.map((p) => (
                    <article key={p.title} className="project-card">
                        <div className="project-visual">
                            <img
                                src={p.image}
                                alt={`${p.title} preview`}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    objectPosition: "center",
                                    borderRadius: "8px"
                                }}
                            />
                        </div>
                        <div className="project-body" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                            <h3 style={{ margin: 0 }}>{p.title}</h3>
                            <p style={{ color: "#cbd5e1", margin: "8px 0", flex: 1 }}>{p.desc}</p>
                            <div
                                style={{
                                    marginTop: "auto",
                                    fontSize: "0.85rem",
                                    color: "#9ca3af",
                                }}
                            >
                                Stack: {p.stack}
                            </div>
                            <div
                                style={{
                                    marginTop: 12,
                                    display: "flex",
                                    gap: 8,
                                }}
                            >
                                <a
                                    className="btn-secondary"
                                    href={p.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        padding: "8px 12px",
                                        borderRadius: 10,
                                        background: "var(--primary)",
                                        color: "#ffffff",
                                        textDecoration: "none",
                                        transition: "transform 0.15s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "scale(1.05)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "scale(1)";
                                    }}
                                >
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </motion.section>
    );
}
