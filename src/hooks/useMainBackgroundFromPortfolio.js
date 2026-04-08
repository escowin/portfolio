import { useState, useEffect, useCallback, useMemo } from "react";
import { getProjectBackgroundStyle } from "../utils/imageUtils";

function layoutClassForRoute(selectedPortfolio) {
  switch (selectedPortfolio) {
    case "About":
    case "Resume":
      return "app-content";
    default:
      return "portfolio-layout";
  }
}

export function useMainBackgroundFromPortfolio(selectedPortfolio) {
  const [portfolioBackgroundProjectId, setPortfolioBackgroundProjectId] = useState(null);

  useEffect(() => {
    if (selectedPortfolio === "About" || selectedPortfolio === "Resume") {
      setPortfolioBackgroundProjectId(null);
    }
  }, [selectedPortfolio]);

  const setPortfolioBackgroundProjectIdStable = useCallback((id) => {
    setPortfolioBackgroundProjectId(id);
  }, []);

  const mainBackgroundStyle = useMemo(() => {
    if (
      layoutClassForRoute(selectedPortfolio) !== "portfolio-layout" ||
      !portfolioBackgroundProjectId
    ) {
      return undefined;
    }
    return getProjectBackgroundStyle(portfolioBackgroundProjectId);
  }, [selectedPortfolio, portfolioBackgroundProjectId]);

  return {
    mainBackgroundStyle,
    setPortfolioBackgroundProjectId: setPortfolioBackgroundProjectIdStable,
  };
}
