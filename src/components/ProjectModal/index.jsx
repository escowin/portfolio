import React, { useEffect } from "react";
import { X, ExternalLink, Github, Calendar, Code, Layers, Database, Wrench, CheckCircle, AlertCircle, XCircle } from "lucide-react";
import { formatName } from "../../utils/helpers";
import TechStack from "../TechStack";
import "./index.css";

function ProjectModal({ project, isOpen, onClose, category }) {
  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  // Project type icon mapping
  const projectTypeIcons = {
    "Frontend": Code,
    "Backend": Layers,
    "Fullstack": Database
  };

  const ProjectTypeIcon = projectTypeIcons[category];

  // Complexity icon mapping
  const complexityIcons = {
    "low": CheckCircle,
    "medium": AlertCircle,
    "high": XCircle
  };

  const ComplexityIcon = complexityIcons[project.complexity];

  // Technology breakdown
  const techBreakdown = {
    languages: project.languages ? project.languages.split(" ") : [],
    libraries: project.libraries ? project.libraries.split(" ") : [],
    database: project.database ? project.database.split(" ") : []
  };

  // Key features based on project data
  const getKeyFeatures = () => {
    const features = [];
    
    if (project.liveUrl) features.push("Live Demo Available");
    if (project.collaboration) features.push("Collaborative Project");
    if (project.highlight) features.push("Featured Project");
    if (project.complexity === "high") features.push("Advanced Implementation");
    if (techBreakdown.libraries.includes("react")) features.push("React Application");
    if (techBreakdown.libraries.includes("three.js")) features.push("3D Visualization");
    if (techBreakdown.libraries.includes("zustand")) features.push("State Management");
    if (techBreakdown.database.includes("indexeddb")) features.push("Offline Capability");
    if (techBreakdown.database.includes("google-sheets")) features.push("Google Sheets Integration");
    
    return features;
  };

  const keyFeatures = getKeyFeatures();

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="project-title-section">
            {ProjectTypeIcon && (
              <ProjectTypeIcon size={24} className="project-type-icon" />
            )}
            <h2 className="modal-title">{formatName(project.id)}</h2>
          </div>
          <button className="modal-close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* Project Description */}
        {project.description && (
          <div className="modal-section">
            <h3 className="section-title">Description</h3>
            <p className="project-description">{project.description}</p>
          </div>
        )}

        {/* Key Features */}
        {keyFeatures.length > 0 && (
          <div className="modal-section">
            <h3 className="section-title">Key Features</h3>
            <div className="features-list">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="feature-item">
                  <CheckCircle size={16} className="feature-icon" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technology Stack Breakdown */}
        <div className="modal-section">
          <h3 className="section-title">Technology Stack</h3>
          <div className="tech-breakdown">
            {techBreakdown.languages.length > 0 && (
              <div className="tech-category">
                <h4 className="tech-category-title">
                  <Code size={18} className="tech-category-icon" />
                  Languages
                </h4>
                <TechStack
                  languages={project.languages}
                  size="medium"
                  showLabels={false}
                />
              </div>
            )}
            
            {techBreakdown.libraries.length > 0 && (
              <div className="tech-category">
                <h4 className="tech-category-title">
                  <Layers size={18} className="tech-category-icon" />
                  Libraries & Frameworks
                </h4>
                <TechStack
                  libraries={project.libraries}
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
                  database={project.database}
                  size="medium"
                  showLabels={false}
                />
              </div>
            )}
          </div>
        </div>

        {/* Project Details */}
        <div className="modal-section">
          <h3 className="section-title">Project Details</h3>
          <div className="project-details-grid">
            <div className="detail-item">
              <span className="detail-label">Category:</span>
              <span className="detail-value">{category}</span>
            </div>
            
            {project.complexity && (
              <div className="detail-item">
                <span className="detail-label">Complexity:</span>
                <div className="complexity-detail">
                  {ComplexityIcon && <ComplexityIcon size={16} className="complexity-icon" />}
                  <span className={`complexity-text complexity-${project.complexity}`}>
                    {project.complexity}
                  </span>
                </div>
              </div>
            )}
            
            {project.year && (
              <div className="detail-item">
                <span className="detail-label">Year:</span>
                <span className="detail-value">{project.year}</span>
              </div>
            )}
            
            <div className="detail-item">
              <span className="detail-label">Status:</span>
              <span className="detail-value">
                {project.highlight ? "Featured" : "Standard"}
              </span>
            </div>
          </div>
        </div>

        {/* Action Links */}
        <div className="modal-section">
          <h3 className="section-title">Links</h3>
          <div className="action-links">
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="action-link repo-link"
            >
              <Github size={18} />
              View Repository
            </a>
            
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="action-link live-link"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
