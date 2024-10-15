import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Presentation } from "./components/Presentation";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export default function Home() {
  return (
    <main className="h-full">
      <Header />
      <Presentation />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
