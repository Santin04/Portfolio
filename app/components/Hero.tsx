"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useState } from "react";

export default function Hero() {
    const [imgError, setImgError] = useState(false);

    const ModelViewer = dynamic(() => import("./ModelViewer"), {
        ssr: false,
    });

    return (
        <motion.section
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="hero"
        >
            <div className="hero-row">
                <div style={{ flex: 1, display: "flex", gap: "24px", alignItems: "flex-start" }}>
                    {/* avatar: tenta carregar /avatar/avatar.png; se não existir, mostra iniciais */}
                    {!imgError ? (
                        <div className="avatar" style={{ flexShrink: 0, marginTop: 0 }}>
                            <img
                                src="/avatar/avatar.png"
                                alt="Avatar"
                                className="avatar-img"
                                onError={() => setImgError(true)}
                            />
                        </div>
                    ) : (
                        <div className="avatar" style={{ flexShrink: 0, marginTop: 0 }}>MS</div>
                    )}

                    <div style={{ paddingTop: "0px" }}>
                        <h1 style={{ fontSize: "2.5rem", margin: 0, fontWeight: 800 }}>
                            Mateus Santin
                        </h1>
                        <h2 style={{ fontSize: "1.5rem", margin: "8px 0", fontWeight: 600, color: "#cbd5e1" }}>
                            Fullstack Developer
                        </h2>
                        <p
                            style={{
                                marginTop: 12,
                                color: "#cbd5e1",
                                maxWidth: 720,
                            }}
                        >
                            Construindo soluções modernas, rápidas e escaláveis.
                        </p>
                        <div style={{ marginTop: 16 }}>
                            <a href="#projetos" className="btn-primary">
                                Ver Projetos
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "flex-start", height: "auto", paddingTop: "0px" }} className="hero-3d">
                    <ModelViewer />
                </div>
            </div>
        </motion.section>
    );
}
