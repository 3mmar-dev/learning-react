import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import MainRouter from "./router";
import "@/styles/global.css";
import { StrictMode } from "react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainRouter />
  </StrictMode>
);
