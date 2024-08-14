import { useEffect } from "react";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";

const IS_DEV_MODE = import.meta.env.MODE === "development";

const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (IS_DEV_MODE) return;

    ReactGA.initialize(import.meta.env.VITE_GA_MESUREMENT_ID);
  });

  useEffect(() => {
    if (IS_DEV_MODE) return;

    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location.pathname]);
};

export default useAnalytics;
