import React, { useState } from "react";
import { Search, Filter, X, SortAsc, SortDesc } from "lucide-react";
import "./index.css";

function FilterBar({ onFilterChange, onSortChange, onSearchChange, totalProjects, filteredCount }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTech, setSelectedTech] = useState("");
  const [selectedComplexity, setSelectedComplexity] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // Technology options for filtering
  const techOptions = [
    "React", "TypeScript", "JavaScript", "Node.js", "Python", "MongoDB", 
    "PostgreSQL", "Express", "Vite", "Zustand", "Three.js", "WebGL",
    "Google Sheets", "IndexedDB", "Docker", "Jest", "Axios"
  ];

  // Complexity options
  const complexityOptions = ["low", "medium", "high"];

  // Sort options
  const sortOptions = [
    { value: "name", label: "Project Name" },
    { value: "complexity", label: "Complexity" },
    // { value: "year", label: "Year" }
  ];

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  const handleTechFilter = (tech) => {
    const newTech = selectedTech === tech ? "" : tech;
    setSelectedTech(newTech);
    onFilterChange({ tech: newTech, complexity: selectedComplexity });
  };

  const handleComplexityFilter = (complexity) => {
    const newComplexity = selectedComplexity === complexity ? "" : complexity;
    setSelectedComplexity(newComplexity);
    onFilterChange({ tech: selectedTech, complexity: newComplexity });
  };

  const handleSort = (sortValue) => {
    const newSortBy = sortBy === sortValue ? "" : sortValue;
    setSortBy(newSortBy);
    onSortChange({ sortBy: newSortBy, sortOrder });
  };

  const toggleSortOrder = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);
    onSortChange({ sortBy, sortOrder: newOrder });
  };

  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedTech("");
    setSelectedComplexity("");
    setSortBy("");
    setSortOrder("asc");
    onSearchChange("");
    onFilterChange({ tech: "", complexity: "" });
    onSortChange({ sortBy: "", sortOrder: "asc" });
  };

  const hasActiveFilters = searchTerm || selectedTech || selectedComplexity || sortBy;

  return (
    <section className="filter-bar">
      <article className="filter-header">
        <h3 className="filter-title">
          <Filter size={18} className="filter-icon" />
          Filter & Search Projects
        </h3>
        <div className="project-count">
          Showing {filteredCount} of {totalProjects} projects
        </div>
      </article>

      <article className="filter-controls">
        {/* Search Bar */}
        <div className="search-container">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search projects by name or description..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>

        {/* Technology Filter */}
        <div className="filter-group">
          <label className="filter-label">Technology:</label>
          <div className="filter-chips">
            {techOptions.map((tech) => (
              <button
                key={tech}
                onClick={() => handleTechFilter(tech)}
                className={`filter-chip ${selectedTech === tech ? "active" : ""}`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Complexity Filter */}
        <div className="filter-group">
          <label className="filter-label">Complexity:</label>
          <div className="filter-chips">
            {complexityOptions.map((complexity) => (
              <button
                key={complexity}
                onClick={() => handleComplexityFilter(complexity)}
                className={`filter-chip complexity-${complexity} ${selectedComplexity === complexity ? "active" : ""}`}
              >
                {complexity}
              </button>
            ))}
          </div>
        </div>

        {/* Sort Options */}
        <div className="filter-group">
          <label className="filter-label">Sort by:</label>
          <div className="sort-controls">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSort(option.value)}
                className={`sort-button ${sortBy === option.value ? "active" : ""}`}
              >
                {option.label}
              </button>
            ))}
            {sortBy && (
              <button
                onClick={toggleSortOrder}
                className="sort-order-button"
                title={`Sort ${sortOrder === "asc" ? "Descending" : "Ascending"}`}
              >
                {sortOrder === "asc" ? <SortAsc size={16} /> : <SortDesc size={16} />}
              </button>
            )}
          </div>
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <button onClick={clearAllFilters} className="clear-filters-button">
            <X size={16} />
            Clear All Filters
          </button>
        )}
      </article>
    </section>
  );
}

export default FilterBar;
