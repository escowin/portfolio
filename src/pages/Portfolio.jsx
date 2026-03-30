import React, { useState, useMemo, useEffect } from "react";
import portfolioData from "../assets/data";
import "../assets/css/portfolio.css";
import { formatName } from "../utils/helpers";
import { getProjectBackgroundStyle } from "../utils/imageUtils";
import TechStack from "../components/TechStack";
// import FilterBar from "../components/FilterBar";
import ProjectModal from "../components/ProjectModal";
import { filterProjects, sortProjects } from "../utils/projectFilters";
import { ExternalLink, Github, CheckCircle, AlertCircle, XCircle, Monitor, Server, Layers } from "lucide-react";

/** Stable shuffle; does not mutate the source array. */
function shuffleCopy(items) {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function Portfolio({ selectedPortfolio }) {
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
  
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const projectTypeIcons = {
    "Frontend": Monitor,
    "Backend": Server,
    "Fullstack": Layers
  };

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

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const openProjectCategory = (app) =>
    selectedPortfolio === "Featured" ? app.category : selectedPortfolio;

  const renderProjectCard = (app) => {
    if (!app) return null;
    const projectCategory = openProjectCategory(app);
    const ProjectTypeIcon = projectTypeIcons[projectCategory];
    return (
      <article
        id={app.id}
        className={`app card ${app.highlight ? "highlight" : ""} ${selectedPortfolio === "Featured" ? "featured-project" : ""} clickable app--detail`}
        style={getProjectBackgroundStyle(app.id)}
        onClick={() => handleProjectClick(app)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && handleProjectClick(app)}
        aria-label={`View details for ${formatName(app.id)} project`}
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
            <span
              className="link link--hover"
              role="link"
              tabIndex={0}
              onClick={(e) => { e.stopPropagation(); window.open(app.repo); }}
              onKeyDown={(e) => { if (e.key === "Enter") { e.stopPropagation(); window.open(app.repo); } }}
            >
              <Github size={22} className="inline-icon" />
              Repo
            </span>
            {app.liveUrl && (
              <span
                className="link link--hover"
                role="link"
                tabIndex={0}
                onClick={(e) => { e.stopPropagation(); window.open(app.liveUrl); }}
                onKeyDown={(e) => { if (e.key === "Enter") { e.stopPropagation(); window.open(app.liveUrl); } }}
              >
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
  };

  return (
    <>
      {/* <FilterBar
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
        onSearchChange={handleSearchChange}
        totalProjects={modifiedPortfolio.length}
        filteredCount={filteredAndSortedPortfolio.length}
      /> */}

      <div className="portfolio-layout">
        <aside
          className="portfolio-sidebar"
          aria-label={`${selectedPortfolio} project list`}
        >
          <ul className="portfolio-project-list">
            {filteredAndSortedPortfolio.map((app) => {
              const projectCategory = openProjectCategory(app);
              const ProjectTypeIcon = projectTypeIcons[projectCategory];
              const isActive = app.id === activeProjectId;
              return (
                <li key={app.id}>
                  <button
                    type="button"
                    className={`portfolio-project-list__btn${isActive ? " is-active" : ""}`}
                    aria-current={isActive ? "true" : undefined}
                    onClick={() => setActiveProjectId(app.id)}
                  >
                    {ProjectTypeIcon && (
                      <ProjectTypeIcon size={18} className="portfolio-project-list__icon" aria-hidden />
                    )}
                    <span className="portfolio-project-list__label">{formatName(app.id)}</span>
                    {app.year && (
                      <span className="portfolio-project-list__year text text--sm">{app.year}</span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        <section
          className="portfolio-detail"
          role="region"
          aria-label={`${selectedPortfolio} selected project`}
        >
          {renderProjectCard(activeProject)}
        </section>
      </div>
      
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        category={selectedPortfolio === "Featured" ? selectedProject?.category : selectedPortfolio}
      />
    </>
  );
}

export default Portfolio;
