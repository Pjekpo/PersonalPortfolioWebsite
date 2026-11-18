import { Nav, type NavItem } from "./components/site/Nav";
import { Hero } from "./components/site/Hero";
import { Projects } from "./components/site/Projects";
import { Clients } from "./components/site/Clients";
import { Wol } from "./components/site/Wol";
import { Contact } from "./components/site/Contact";

const NAV: NavItem[] = [
  { id: "projects", num: "01", label: "Projects" },
  { id: "clients", num: "02", label: "Clients" },
  { id: "wol", num: "03", label: "WOL" },
  { id: "contact", num: "04", label: "Contact" },
];

export default function App() {
  return (
    <>
      <a href="#projects" className="skip-link">
        Skip to projects
      </a>
      <Nav items={NAV} />
      <div className="page">
        <main>
          <Hero />
          <Projects />
          <Clients />
          <Wol />
        </main>
        <Contact />
      </div>
    </>
  );
}
