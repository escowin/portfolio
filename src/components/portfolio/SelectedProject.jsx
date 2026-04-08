import React, { useMemo } from "react";
import { formatName } from "../../utils/helpers";
import {
  ExternalLink,
  Github,
  CheckCircle,
  AlertCircle,
  XCircle,
  Monitor,
  Server,
  Layers,
  Code,
  Database,
} from "lucide-react";
import TechStack from "../shared/TechStack";
import {
  buildTechBreakdown,
  getProjectKeyFeatures,
} from "../../utils/projectDetailHelpers";

const projectTypeIcons = {
  Frontend: Monitor,
  Backend: Server,
  Fullstack: Layers,
};

function openProjectCategory(app, selectedPortfolio) {
  return selectedPortfolio === "Featured" ? app.category : selectedPortfolio;
}

function SelectedProject({ activeProject, selectedPortfolio }) {
  const projectCategory = activeProject
    ? openProjectCategory(activeProject, selectedPortfolio)
    : null;
  const ProjectTypeIcon = projectCategory ? projectTypeIcons[projectCategory] : null;

  const displayCategory = useMemo(
    () =>
      selectedPortfolio === "Featured"
        ? activeProject?.category
        : selectedPortfolio,
    [activeProject, selectedPortfolio]
  );

  const techBreakdown = useMemo(
    () => (activeProject ? buildTechBreakdown(activeProject) : null),
    [activeProject]
  );

  const keyFeatures = useMemo(
    () => (activeProject ? getProjectKeyFeatures(activeProject) : []),
    [activeProject]
  );

  const complexityIcons = {
    low: CheckCircle,
    medium: AlertCircle,
    high: XCircle,
  };

  const ComplexityIcon = activeProject?.complexity
    ? complexityIcons[activeProject.complexity]
    : null;

  const hasTechSection =
    techBreakdown &&
    (techBreakdown.languages.length > 0 ||
      techBreakdown.libraries.length > 0 ||
      techBreakdown.database.length > 0);

  const getProjectTypeIcon = (category) => {
    const ProjectTypeIcon = projectTypeIcons[category];
    return ProjectTypeIcon && <ProjectTypeIcon aria-hidden />;
  }

  return (
    <>
      {activeProject && (
        <section
          role="region"
          aria-label={`${selectedPortfolio} selected project`}
          id={activeProject.id}
          className={`selected-project${activeProject.highlight ? " highlight" : ""} ${selectedPortfolio === "Featured" ? " featured-project" : ""}`}
        >
            <header className="project-header">
              {ProjectTypeIcon && (
                <ProjectTypeIcon size={24} className="project-type-icon" />
              )}
              <h2 className="heading heading--secondary">
                {formatName(activeProject.id)}
              </h2>
            </header>
            
            <article className="project-card">
            {activeProject.description && (
              <section className="modal-section">
                <h3 className="section-title">Description</h3>
                <p className="project-description text text--sm">
                  {activeProject.description}
                </p>
              </section>
            )}

            {keyFeatures.length > 0 && (
              <section className="modal-section">
                <h3 className="section-title">Key features</h3>
                <ul className="features-list">
                  {keyFeatures.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <CheckCircle className="feature-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {hasTechSection && (
              <section className="modal-section">
                <h3 className="section-title">Technology stack</h3>
                <div className="tech-breakdown">
                  {techBreakdown.languages.length > 0 && (
                    <div className="tech-category">
                      <h4 className="tech-category-title">
                        <Code className="tech-category-icon" />
                        Languages
                      </h4>
                      <TechStack
                        languages={activeProject.languages}
                        size="medium"
                        showLabels={false}
                      />
                    </div>
                  )}

                  {techBreakdown.libraries.length > 0 && (
                    <div className="tech-category">
                      <h4 className="tech-category-title">
                        <Layers className="tech-category-icon" />
                        Libraries & Frameworks
                      </h4>
                      <TechStack
                        libraries={activeProject.libraries}
                        size="medium"
                        showLabels={false}
                      />
                    </div>
                  )}

                  {techBreakdown.database.length > 0 && (
                    <div className="tech-category">
                      <h4 className="tech-category-title">
                        <Database size={18} className="tech-category-icon" />
                        Database & Storage
                      </h4>
                      <TechStack
                        database={activeProject.database}
                        size="medium"
                        showLabels={false}
                      />
                    </div>
                  )}
                </div>
              </section>
            )}

            <section className="modal-section">
              <h3 className="section-title">Project details</h3>
              <dl className="project-details-grid">

                <dt className="detail-label">Category</dt>
                <dd className="detail-value">
                  {/* show frontend, backend, or fullstrack icon based on displayCategory. evoke function to get the icon */}
                  {getProjectTypeIcon(displayCategory)}
                  {displayCategory}</dd>
                {activeProject.complexity && (
                  <>
                    <dt className="detail-label">Complexity</dt>
                    <dd className="detail-value">
                      {ComplexityIcon && (
                        <ComplexityIcon className="complexity-icon" aria-hidden />
                      )}
                      <span
                        className={`complexity-text complexity-${activeProject.complexity}`}
                      >
                        {activeProject.complexity}
                      </span>
                    </dd>
                  </>
                )}

                {activeProject.year && (
                  <>
                    <dt className="detail-label">Year</dt>
                    <dd className="detail-value">{activeProject.year}</dd>
                  </>
                )}

              </dl>
            </section>

            <section className="modal-section">
              <h3 className="section-title">Links</h3>
              <div className="action-links">
                <a
                  href={activeProject.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-link repo-link"
                >
                  <Github aria-hidden />
                  Repository
                </a>

                {activeProject.liveUrl && (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-link live-link"
                  >
                    <ExternalLink aria-hidden />
                    Demo
                  </a>
                )}
              </div>
            </section>
          </article>
        </section>
      )}
    </>
  );
}

export default SelectedProject;
