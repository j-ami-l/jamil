import About from "@/components/Comps/About";
import Banner from "@/components/Comps/Banner";
import Contact from "@/components/Comps/Contact";
import Projects from "@/components/Comps/Projects";
import Skills from "@/components/Comps/Skills";
import Footer from "@/components/Comps/Footer";
import Navbar from "@/components/Comps/Navbar";

export default function Home() {
  return (
    <div className="font-sans">
      <section id="home"><Banner /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
      <Navbar/>
      <Footer/>
    </div>
  );
}

