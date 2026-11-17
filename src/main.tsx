import { createRoot } from "react-dom/client";
import "@fontsource/caveat/500.css";
import "@fontsource/caveat/700.css";
import "@fontsource/source-sans-3/400.css";
import "@fontsource/source-sans-3/400-italic.css";
import "@fontsource/source-sans-3/700.css";
import App from "./App.tsx";
import "./notebook.css";

createRoot(document.getElementById("root")!).render(<App />);
