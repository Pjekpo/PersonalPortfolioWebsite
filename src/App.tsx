import { Cover } from "./components/notebook/Cover";
import { Projects } from "./components/notebook/Projects";
import { Testimonials } from "./components/notebook/Testimonials";
import { WolGallery } from "./components/notebook/WolGallery";
import { Contact } from "./components/notebook/Contact";
import { IndexTabs, type Tab } from "./components/notebook/IndexTabs";

export default function App() {
  const tabs: Tab[] = [
    { id: "home", label: "About", colour: "yellow" },
    { id: "projects", label: "Projects", colour: "mint" },
    { id: "testimonials", label: "Kind words", colour: "pink" },
    { id: "wol", label: "WOL", colour: "blue" },
    { id: "contact", label: "Contact", colour: "orange" },
  ];

  return (
    <div className="desk">
      <a href="#projects" className="skip-link">
        Skip to projects
      </a>
      <div className="notebook">
        <div className="binding" aria-hidden="true" />
        <IndexTabs tabs={tabs} />
        <div className="pages">
          <main>
            <Cover />
            <Projects />
            <Testimonials />
            <WolGallery />
          </main>
          <Contact />
        </div>
      </div>
    </div>
  );
}
