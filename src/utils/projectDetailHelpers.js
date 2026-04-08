/**
 * Tech strings and derived key features (formerly in ProjectModal).
 */

export function buildTechBreakdown(project) {
  return {
    languages: project.languages ? project.languages.split(" ") : [],
    libraries: project.libraries ? project.libraries.split(" ") : [],
    database: project.database ? project.database.split(" ") : [],
  };
}

export function getProjectKeyFeatures(project) {
  const techBreakdown = buildTechBreakdown(project);
  const features = [];

  if (project.liveUrl) features.push("Live Demo Available");
  if (project.collaboration) features.push("Collaborative Project");
  if (project.highlight) features.push("Featured Project");
  if (project.complexity === "high") features.push("Advanced Implementation");

  if (techBreakdown.libraries.includes("react")) features.push("React Application");
  if (techBreakdown.libraries.includes("react-router-dom")) {
    features.push("Client-Side Routing");
  }
  if (techBreakdown.libraries.includes("apollo-client")) {
    features.push("GraphQL Client");
  }

  if (techBreakdown.libraries.includes("three.js")) features.push("3D Visualization");
  if (techBreakdown.libraries.includes("webgl")) features.push("WebGL Rendering");

  if (techBreakdown.libraries.includes("zustand")) features.push("State Management");
  if (techBreakdown.libraries.includes("express-session")) {
    features.push("Session Management");
  }
  if (techBreakdown.libraries.some((lib) => ["bcrypt", "jwt"].includes(lib))) {
    features.push("Secure Authentication");
  }

  if (techBreakdown.libraries.includes("webpack")) features.push("Webpack Build System");
  if (techBreakdown.libraries.includes("webpack-pwa-manifest")) {
    features.push("Progressive Web App");
  }
  if (techBreakdown.libraries.includes("jest")) features.push("Comprehensive Testing");
  if (techBreakdown.libraries.includes("nodemon")) {
    features.push("Development Hot Reload");
  }

  if (techBreakdown.database.includes("indexeddb")) features.push("Offline Capability");
  if (techBreakdown.database.includes("google-sheets")) {
    features.push("Google Sheets Integration");
  }
  if (techBreakdown.database.includes("mongodb")) features.push("NoSQL Database");
  if (
    techBreakdown.database.some((db) => ["postgresql", "mysql", "sqlite3"].includes(db))
  ) {
    features.push("SQL Database");
  }

  if (techBreakdown.libraries.some((lib) => ["express", "fastapi"].includes(lib))) {
    features.push("Backend API");
  }
  if (techBreakdown.libraries.some((lib) => ["sequelize", "mongoose"].includes(lib))) {
    features.push("Database ORM");
  }
  if (techBreakdown.libraries.includes("graphql")) features.push("GraphQL API");

  if (techBreakdown.libraries.includes("fontawesome")) features.push("Icon Library");
  if (techBreakdown.libraries.includes("react-horizontal-scrolling-menu")) {
    features.push("Custom UI Components");
  }
  if (techBreakdown.libraries.includes("express-handlebars")) {
    features.push("Server-Side Rendering");
  }

  if (techBreakdown.libraries.includes("inquirer")) features.push("Interactive CLI");
  if (techBreakdown.libraries.includes("dayjs")) features.push("Date/Time Processing");
  if (techBreakdown.libraries.includes("jquery")) features.push("DOM Manipulation");
  if (techBreakdown.libraries.includes("gh-pages")) features.push("GitHub Pages Deployment");

  if (techBreakdown.libraries.includes("docker")) features.push("Docker Containerization");
  if (techBreakdown.libraries.includes("nginx")) features.push("Nginx Web Server");
  if (techBreakdown.libraries.includes("ollama")) features.push("AI/ML Integration");

  return features;
}
