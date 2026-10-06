import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Log the live build version to the console (handy to confirm a deploy landed).
console.info(`taniaono.com · build ${__BUILD_DATE__} · ${__COMMIT_HASH__}`);

createRoot(document.getElementById("root")!).render(<App />);
