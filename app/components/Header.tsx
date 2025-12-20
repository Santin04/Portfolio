"use client";

const links = [
    { href: "#home", label: "Home" },
    { href: "#sobre", label: "Sobre" },
    { href: "#skills", label: "Skills" },
    { href: "#projetos", label: "Projetos" },
    { href: "#contato", label: "Contato" }
];

export default function Header() {
    return (
        <header className="header">
            <div className="container header-inner">
                <a href="#home" className="brand">Dev<span className="dot">.</span></a>

                <nav className="nav">
                    {links.map(l => (
                        <a key={l.href} href={l.href}>{l.label}</a>
                    ))}
                    <a href="#projetos" className="btn-primary">Ver Projetos</a>
                </nav>
            </div>
        </header>
    );
}
