import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Page() {
    return (
        <>
            <Header />
            <main className="main-spacing">
                <section id="home"><Hero /></section>
                <section id="sobre"><About /></section>
                <section id="skills"><Skills /></section>
                <section id="projetos"><Projects /></section>
                <section id="contato"><Contact /></section>
            </main>
        </>
    );
}
