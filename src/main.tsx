import React from "react";
import App from "./App.tsx";
import { HelmetProvider } from "react-helmet-async";
import ReactDOM from "react-dom/client";

async function enableMocking() {
  if (import.meta.env.MODE !== "development") {
    return;
  }
  const { worker } = await import("./mocks/browser");
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  );
});
