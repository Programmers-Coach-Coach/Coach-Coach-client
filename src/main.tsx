import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { HelmetProvider } from "react-helmet-async";

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

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  );
});
