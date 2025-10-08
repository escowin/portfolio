import React, { useState, useMemo } from "react";
import portfolioData from "../assets/data";
import "../assets/css/portfolio.css";
import "../assets/css/applications.css";
import { formatName } from "../utils/helpers";
import TechStack from "../components/TechStack";
import FilterBar from "../components/FilterBar";
import { filterProjects, sortProjects } from "../utils/projectFilters";
import { ExternalLink, Github, CheckCircle, AlertCircle, XCircle, Monitor, Server, Layers } from "lucide-react";

function Portfolio({ selectedPortfolio }) {
  // portfolio consists of frontend, backend, and fullstack applications
  const portfolio = portfolioData.applications;
  
  // Filter and sort state
  const [filters, setFilters] = useState({
    searchTerm: "",
    tech: "",
    complexity: ""
  });
  const [sortOptions, setSortOptions] = useState({
    sortBy: "",
    sortOrder: "asc"
  });

  // For Featured section, collect all highlighted projects from all categories
  // For other sections, maintain the existing highlight logic
  let modifiedPortfolio;
  if (selectedPortfolio === "Featured") {
    // Collect all highlighted projects from all categories with their category info
    const allHighlightedProjects = [];
    Object.entries(portfolio).forEach(([categoryName, category]) => {
      if (Array.isArray(category)) {
        category.forEach(project => {
          if (project.highlight === true) {
            allHighlightedProjects.push({ ...project, category: categoryName });
          }
        });
      }
    });
    modifiedPortfolio = allHighlightedProjects;
  } else {
    // the selected portfolio prop determines which portfolio will be randomized into a new array.
    const portfolioDataRandomized = portfolio[selectedPortfolio].sort(() => Math.random() - 0.5);

    // this new randomized array is then split into two arrays.
    const highlightedData = portfolioDataRandomized.filter((app) => app.highlight === true);
    const nonHighlightedData = portfolioDataRandomized.filter((app) => app.highlight !== true);

    // these arrays are then recombined, highlighted apps appear first
    modifiedPortfolio = [...highlightedData, ...nonHighlightedData];
  }

  // Project type icon mapping
  const projectTypeIcons = {
    "Frontend": Monitor,
    "Backend": Server,
    "Fullstack": Layers
  };

  // Apply filtering and sorting to the portfolio
  const filteredAndSortedPortfolio = useMemo(() => {
    let processedPortfolio = modifiedPortfolio;
    
    // Apply filters
    if (filters.searchTerm || filters.tech || filters.complexity) {
      processedPortfolio = filterProjects(processedPortfolio, filters);
    }
    
    // Apply sorting
    if (sortOptions.sortBy) {
      processedPortfolio = sortProjects(processedPortfolio, sortOptions);
    }
    
    return processedPortfolio;
  }, [modifiedPortfolio, filters, sortOptions]);

  // Filter change handlers
  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const handleSearchChange = (searchTerm) => {
    setFilters(prev => ({ ...prev, searchTerm }));
  };

  const handleSortChange = (newSortOptions) => {
    setSortOptions(newSortOptions);
  };

  // this final array is mapped. each app object's properties are plugged in where needed within the article element. highlighted apps receive the additional 'highlight' class attribute.
  return (
    <>
      <FilterBar
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
        onSearchChange={handleSearchChange}
        totalProjects={modifiedPortfolio.length}
        filteredCount={filteredAndSortedPortfolio.length}
      />
      <section className={`portfolio grid ${selectedPortfolio === "Featured" ? "grid--auto-fit" : "grid--2-col"}`}>
        {filteredAndSortedPortfolio.map((app, index) => {
        // For Featured section, use the project's category; for others, use the selected portfolio
        const projectCategory = selectedPortfolio === "Featured" ? app.category : selectedPortfolio;
        const ProjectTypeIcon = projectTypeIcons[projectCategory];
        return (
          <article
            key={index}
            id={app.id}
            className={`app card ${app.highlight ? "highlight" : ""} ${selectedPortfolio === "Featured" ? "featured-project" : ""}`}
          >
            <div className="app-details overlay">
              <div className="project-header">
                <div className="project-title-section">
                  {ProjectTypeIcon && (
                    <ProjectTypeIcon size={24} className="project-type-icon" />
                  )}
                  <h2 className="heading heading--secondary">{formatName(app.id)}</h2>
                </div>
                {app.year && (
                  <span className="project-year text text--sm">{app.year}</span>
                )}
              </div>
            
            {app.description && (
              <p className="project-description text text--sm">{app.description}</p>
            )}
            
            <h3 className="app-links text text--sm">
              <span className="link link--hover" onClick={() => window.open(app.repo)}>
                <Github size={22} className="inline-icon" />
                Repo
              </span>
              {app.liveUrl && (
                <span className="link link--hover" onClick={() => window.open(app.liveUrl)}>
                  {" "}
                  <ExternalLink size={22} className="inline-icon" />
                  Live url
                </span>
              )}
            </h3>
            
            <div className="tech-stack tech-stack--compact">
              <TechStack
                languages={app.languages}
                libraries={app.libraries}
                database={app.database}
                size="small"
                showLabels={false}
                maxItems={selectedPortfolio === "Featured" ? 8 : 6}
              />
            </div>
            
            {app.complexity && (
              <div className="project-complexity">
                <span className="complexity-label text text--sm">Complexity:</span>
                <span className={`complexity-badge complexity-badge--${app.complexity}`}>
                  {app.complexity === 'low' && <CheckCircle size={20} className="complexity-icon" />}
                  {app.complexity === 'medium' && <AlertCircle size={20} className="complexity-icon" />}
                  {app.complexity === 'high' && <XCircle size={20} className="complexity-icon" />}
                  {app.complexity}
                </span>
              </div>
            )}
          </div>
        </article>
        );
        })}
      </section>
    </>
  );
}

export default Portfolio;
