"use client";
import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-card"
        >
            <h2 style={{ marginTop: 0 }}>Sobre</h2>
            <p style={{ color: "#cbd5e1" }}>
                Sou Mateus Santin, desenvolvedor full-stack em constante evolução. Comecei minha trajetória na área de tecnologia trabalhando com suporte, onde aprendi a importância da comunicação clara e da resolução prática de problemas. Depois atuei como estagiário na HPro, desenvolvendo com JavaScript e Delphi e ganhando experiência real no ambiente corporativo. Hoje trabalho como Desenvolvedor Salesforce na PwC, expandindo minha visão sobre arquitetura, qualidade de código e aplicações em larga escala.
            </p>
            <p style={{ color: "#cbd5e1" }}>
                Grande parte das minhas habilidades em React, Node.js, Next.js, TypeScript, três.js e outras tecnologias veio de projetos pessoais, freelas e estudos por conta própria. Gosto de construir coisas — desde sites completos até projetos experimentais, como meu Flappy Bird em JavaScript ou aplicações desenvolvidas para clientes.
            </p>
            <p style={{ color: "#cbd5e1" }}>
                Tenho facilidade em aprender rápido, boa lógica de programação e um interesse genuíno em transformar ideias em soluções funcionais. Meu foco atual é me tornar um desenvolvedor cada vez mais completo, unindo conhecimento técnico, comunicação eficiente e consistência na entrega.
            </p>

            <div className="about-list">
                <h3 style={{ margin: "12px 0 6px 0" }}>Linha do tempo (tecnologias)</h3>
                <ul style={{ margin: 0, paddingLeft: 18, color: "#9ca3af" }}>
                    <li>2022 — Python / HTML / CSS</li>
                    <li>2023 — JavaScript / SQL / Git</li>
                    <li>2024 — Delphi / Node.js / Postgress / MongoDB / React</li>
                    <li>2025 — TypeScript / Next.js / Nest.js / AWS</li>
                </ul>
            </div>
        </motion.section>
    );
}
