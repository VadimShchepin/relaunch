import { Header } from "@/components/redesigns/tiemann-co/Header";
import { Hero } from "@/components/redesigns/tiemann-co/Hero";
import { Services } from "@/components/redesigns/tiemann-co/Services";
import { Process } from "@/components/redesigns/tiemann-co/Process";
import { Objekte } from "@/components/redesigns/tiemann-co/Objekte";
import { About } from "@/components/redesigns/tiemann-co/About";
import { Contact } from "@/components/redesigns/tiemann-co/Contact";
import { Footer } from "@/components/redesigns/tiemann-co/Footer";

export default function TiemannCoRedesignPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Objekte />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
