import { Header } from "@/components/redesigns/fraembs-dach/Header";
import { Hero } from "@/components/redesigns/fraembs-dach/Hero";
import { Services } from "@/components/redesigns/fraembs-dach/Services";
import { Process } from "@/components/redesigns/fraembs-dach/Process";
import { Projects } from "@/components/redesigns/fraembs-dach/Projects";
import { About } from "@/components/redesigns/fraembs-dach/About";
import { Contact } from "@/components/redesigns/fraembs-dach/Contact";
import { Footer } from "@/components/redesigns/fraembs-dach/Footer";

export default function FraembsDachRedesignPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
