import React from "react";
import { Monitor, Server, Layers } from "lucide-react";
import { formatName } from "../../utils/helpers";

const projectTypeIcons = {
  Frontend: Monitor,
  Backend: Server,
  Fullstack: Layers
};

function resolveCategory(app, selectedPortfolio) {
  return selectedPortfolio === "Featured" ? app.category : selectedPortfolio;
}

function ProjectsList({ projects, activeProjectId, onSelectProject, selectedPortfolio }) {
  return (
      <nav
       className="projects-list"
       aria-label={`${selectedPortfolio} project list`}
       >
        {projects.map((app) => {
          const projectCategory = resolveCategory(app, selectedPortfolio);
          const ProjectTypeIcon = projectTypeIcons[projectCategory];
          const isActive = app.id === activeProjectId;
          return (
            <button key={app.id}
              type="button"
              className={`project-btn${isActive ? " project-nav-btn--active" : ""}`}
              aria-current={isActive ? "true" : undefined}
              onClick={() => onSelectProject(app.id)}
            >
              {ProjectTypeIcon && (
                <ProjectTypeIcon size={18} className="projects-list__icon" aria-hidden />
              )}
              <span className="projects-list__label">{formatName(app.id)}</span>
            </button>
          );
        })}
      </nav>
  );
}

export default ProjectsList;
