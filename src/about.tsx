/**
 * This file is the entry point for the About page React app.
 * It sets up the root element and renders the About component to the DOM.
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { About } from "./components/About";
import "./index.css";

const elem = document.getElementById("about-root")!;
const app = (
  <StrictMode>
    <About />
  </StrictMode>
);

if (import.meta.hot) {
  // With hot module reloading, `import.meta.hot.data` is persisted.
  const root = (import.meta.hot.data.root ??= createRoot(elem));
  root.render(app);
} else {
  // The hot module reloading API is not available in production.
  createRoot(elem).render(app);
}