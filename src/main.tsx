import React from "react";
import App from "./App.tsx";
import { HelmetProvider } from "react-helmet-async";
import { createRoot, hydrateRoot } from "react-dom/client";

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration()
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: [import.meta.env.VITE_SENTRY_URL],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0
});

async function enableMocking() {
  if (import.meta.env.MODE !== "development") {
    return;
  }
  const { worker } = await import("./mocks/browser");
  return worker.start();
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

enableMocking().then(() => {
  if (rootElement?.hasChildNodes()) {
    hydrateRoot(
      rootElement,
      <React.StrictMode>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </React.StrictMode>
    );
  } else {
    root.render(
      <React.StrictMode>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </React.StrictMode>
    );
  }
});
