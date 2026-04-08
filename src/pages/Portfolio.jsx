import React, { useState, useMemo, useEffect } from "react";
import portfolioData from "../assets/data";
import "../assets/css/portfolio.css";
import ProjectsList from "../components/portfolio/ProjectsList";
import SelectedProject from "../components/portfolio/SelectedProject";
// import FilterBar from "../components/portfolio/FilterBar";
import { filterProjects, sortProjects } from "../utils/projectFilters";

/** Stable shuffle; does not mutate the source array. */
function shuffleCopy(items) {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function Portfolio({
  selectedPortfolio,
  onPortfolioBackgroundProjectIdChange,
}) {
  const portfolio = portfolioData.applications;
  
  const [filters] = useState({
    searchTerm: "",
    tech: "",
    complexity: ""
  });
  const [sortOptions] = useState({
    sortBy: "",
    sortOrder: "asc"
  });
  
  const [activeProjectId, setActiveProjectId] = useState(null);

  const modifiedPortfolio = useMemo(() => {
    if (selectedPortfolio === "Featured") {
      const allHighlightedProjects = [];
      Object.entries(portfolio).forEach(([categoryName, category]) => {
        if (Array.isArray(category)) {
          category.forEach((project) => {
            if (project.highlight === true) {
              allHighlightedProjects.push({ ...project, category: categoryName });
            }
          });
        }
      });
      return allHighlightedProjects;
    }
    const source = portfolio[selectedPortfolio];
    if (!Array.isArray(source)) return [];
    const portfolioDataRandomized = shuffleCopy(source);
    const highlightedData = portfolioDataRandomized.filter((app) => app.highlight === true);
    const nonHighlightedData = portfolioDataRandomized.filter((app) => app.highlight !== true);
    return [...highlightedData, ...nonHighlightedData];
  }, [selectedPortfolio, portfolio]);

  const filteredAndSortedPortfolio = useMemo(() => {
    let processedPortfolio = modifiedPortfolio;
    
    if (filters.searchTerm || filters.tech || filters.complexity) {
      processedPortfolio = filterProjects(processedPortfolio, filters);
    }
    
    if (sortOptions.sortBy) {
      processedPortfolio = sortProjects(processedPortfolio, sortOptions);
    }
    
    return processedPortfolio;
  }, [modifiedPortfolio, filters, sortOptions]);

  useEffect(() => {
    if (!filteredAndSortedPortfolio.length) {
      setActiveProjectId(null);
      return;
    }
    const idx = Math.floor(Math.random() * filteredAndSortedPortfolio.length);
    setActiveProjectId(filteredAndSortedPortfolio[idx].id);
  }, [selectedPortfolio]);

  useEffect(() => {
    if (!activeProjectId || !filteredAndSortedPortfolio.length) return;
    const stillThere = filteredAndSortedPortfolio.some((p) => p.id === activeProjectId);
    if (!stillThere) {
      setActiveProjectId(filteredAndSortedPortfolio[0].id);
    }
  }, [filteredAndSortedPortfolio, activeProjectId]);

  const activeProject = useMemo(
    () => filteredAndSortedPortfolio.find((p) => p.id === activeProjectId) ?? null,
    [filteredAndSortedPortfolio, activeProjectId]
  );

  useEffect(() => {
    if (!onPortfolioBackgroundProjectIdChange) return;
    onPortfolioBackgroundProjectIdChange(activeProject?.id ?? null);
  }, [activeProject, onPortfolioBackgroundProjectIdChange]);

  return (
    <>
      {/* <FilterBar
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
        onSearchChange={handleSearchChange}
        totalProjects={modifiedPortfolio.length}
        filteredCount={filteredAndSortedPortfolio.length}
      /> */}

      <ProjectsList
        projects={filteredAndSortedPortfolio}
        activeProjectId={activeProjectId}
        onSelectProject={setActiveProjectId}
        selectedPortfolio={selectedPortfolio}
      />

      <SelectedProject
        activeProject={activeProject}
        selectedPortfolio={selectedPortfolio}
      />
    </>
  );
}

export default Portfolio;
