"use client";

import { useState } from "react";

const links = [
    { href: "#home", label: "Home" },
    { href: "#sobre", label: "Sobre" },
    { href: "#skills", label: "Skills" },
    { href: "#projetos", label: "Projetos" },
    { href: "#contato", label: "Contato" }
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => setMenuOpen(open => !open);
    const handleClose = () => setMenuOpen(false);

    return (
        <header className="header">
            <div className="container header-inner">
                <a href="#home" className="brand">Dev<span className="dot">.</span></a>

                <button
                    className="menu-toggle"
                    type="button"
                    aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={menuOpen}
                    onClick={handleToggle}
                >
                    <span className={menuOpen ? "bar bar-top open" : "bar bar-top"} />
                    <span className={menuOpen ? "bar bar-mid open" : "bar bar-mid"} />
                    <span className={menuOpen ? "bar bar-bot open" : "bar bar-bot"} />
                </button>

                <nav className={menuOpen ? "nav nav-open" : "nav"}>
                    {links.map(l => (
                        <a key={l.href} href={l.href} onClick={handleClose}>{l.label}</a>
                    ))}
                    <a href="#projetos" className="btn-primary" onClick={handleClose}>Ver Projetos</a>
                </nav>
            </div>
        </header>
    );
}
