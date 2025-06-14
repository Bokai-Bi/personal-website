import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.tsx";

import AccessibleComponents from "./routes/blog/AccessibleComponents.tsx";
import PersonaStoryboard from "./routes/blog/PersonaStoryboard.tsx";
import ANN from "./routes/blog/ANN.tsx";
import ResponsiveRedesign from "./routes/blog/ResponsiveRedesign.tsx";
import IterativeDesign from "./routes/blog/IterativeDesign.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/blog/accessible-components"
          element={<AccessibleComponents />}
        />
        <Route path="/blog/persona" element={<PersonaStoryboard />} />
        <Route path="/blog/responsive-redesign-ann" element={<ANN />} />
        <Route
          path="/blog/responsive-redesign"
          element={<ResponsiveRedesign />}
        />
        <Route path="/blog/iterative-design" element={<IterativeDesign />} />
        <Route path="/ann" element={<ANN />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
