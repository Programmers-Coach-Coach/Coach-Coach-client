import React from "react";
import App from "./App.tsx";
import { HelmetProvider } from "react-helmet-async";
import * as Sentry from "@sentry/react";
import { createRoot, hydrateRoot } from "react-dom/client";

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
  const rootElement = document.getElementById("root");

  if (rootElement?.hasChildNodes()) {
    // SSR 환경일 때 hydrate 사용
    hydrateRoot(
      rootElement,
      <React.StrictMode>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </React.StrictMode>
    );
  } else {
    // 클라이언트 사이드 렌더링일 때 createRoot 사용
    createRoot(rootElement!).render(
      <React.StrictMode>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </React.StrictMode>
    );
  }
});
