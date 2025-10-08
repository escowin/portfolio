import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Briefcase, Code, Database, Cloud, Cpu, TestTube, FileText, Palette, Award, GraduationCap, Globe } from "lucide-react";
import portfolioData from "../assets/data";
import "../assets/css/resume.css";

function Resume() {
  const { resume } = portfolioData;
  const { header, summary, technicalSkills, experience, keyProjects, education, certifications, additionalInfo } = resume;

  // Icon mapping for dynamic icon rendering
  const iconMap = {
    Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Briefcase, Code, Database, Cloud, Cpu, TestTube, FileText, Palette, Award, GraduationCap, Globe
  };

  return (
    <div className="resume-container">
      {/* Header Section */}
      <header className="resume-header">
        <article className="resume-title-section">
          <h1 className="resume-name">{header.name}</h1>
          <h2 className="resume-title">{header.title}</h2>
        </article>
        <article className="resume-contact">
          {header.contact.map((contact, index) => {
            const IconComponent = iconMap[contact.icon];
            return (
              <div key={index} className="contact-item">
                <IconComponent size={16} className="contact-icon" />
                {contact.url ? (
                  <a href={contact.url} target="_blank" rel="noopener noreferrer">
                    {contact.text}
                  </a>
                ) : (
                  <span>{contact.text}</span>
                )}
              </div>
            );
          })}
        </article>
      </header>

      {/* Professional Summary */}
      <section className="resume-section">
        <h3 className="section-title">
          <Briefcase size={20} className="section-icon" />
          Professional Summary
        </h3>
        <p className="summary-text">{summary}</p>
      </section>

      {/* Technical Skills */}
      <section className="resume-section">
        <h3 className="section-title">
          <Code size={20} className="section-icon" />
          Technical Skills
        </h3>
        <article className="skills-grid">
          {technicalSkills.map((skill, index) => (
            <div key={index} className="skill-category">
              <h4 className="skill-category-title">{skill.category}</h4>
              <p>{skill.skills}</p>
            </div>
          ))}
        </article>
      </section>

      {/* Professional Experience */}
      <section className="resume-section">
        <h3 className="section-title">
          <Briefcase size={20} className="section-icon" />
          Professional Experience
        </h3>
        
        {experience.map((exp, expIndex) => (
          <article key={expIndex} className="experience-item">
            <div className="experience-header">
              <h4 className="job-title">{exp.title}</h4>
              <div className="company-info">
                <span className="company-name">{exp.company}</span>
                <span className="job-duration">{exp.duration}</span>
              </div>
            </div>
            <p className="company-description">{exp.description}</p>
            <p className="job-description">{exp.summary}</p>
            
            <div className="experience-details">
              {exp.details.map((detail, detailIndex) => (
                <div key={detailIndex} className="detail-category">
                  <h5 className="detail-title">{detail.category}</h5>
                  <ul className="detail-list">
                    {detail.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      {/* Key Projects */}
      <section className="resume-section">
        <h3 className="section-title">
          <Award size={20} className="section-icon" />
          Key Projects
        </h3>
        
        <article className="projects-grid">
          {keyProjects.map((project, index) => (
            <div key={index} className="project-item">
              <h4 className="project-title">{project.title}</h4>
              <div className="project-details">
                <span className="project-role">{project.role}</span>
                <span className="project-tech">{project.technologies}</span>
              </div>
              <p className="project-impact">{project.impact}</p>
            </div>
          ))}
        </article>
      </section>

      {/* Education */}
      <section className="resume-section">
        <h3 className="section-title">
          <GraduationCap size={20} className="section-icon" />
          Education
        </h3>
        
        {education.map((edu, index) => (
          <article key={index} className="education-item">
            <div className="education-header">
              <h4 className="degree-title">{edu.degree}</h4>
              <div className="education-details">
                <span className="institution">{edu.institution}</span>
                <span className="graduation-year">{edu.year}</span>
              </div>
            </div>
            <p className="coursework">{edu.coursework}</p>
          </article>
        ))}
      </section>

      {/* Certifications & Training */}
      <section className="resume-section">
        <h3 className="section-title">
          <Award size={20} className="section-icon" />
          Certifications & Training
        </h3>
        
        <article className="certifications">
          <h4 className="cert-section-title">{certifications.title}</h4>
          <ul className="cert-list">
            {certifications.items.map((cert, index) => (
              <li key={index}>
                <strong>{cert.category}:</strong> {cert.description}
              </li>
            ))}
          </ul>
        </article>
      </section>

      {/* Additional Information */}
      <section className="resume-section">
        <h3 className="section-title">
          <Globe size={20} className="section-icon" />
          Additional Information
        </h3>
        
        <article className="additional-info">
          {additionalInfo.map((info, index) => (
            <p key={index} className="info-item">
              <strong>{info.label}:</strong> {info.isLink ? (
                <a href={info.value} target="_blank" rel="noopener noreferrer">
                  {info.value}
                </a>
              ) : (
                info.value
              )}
            </p>
          ))}
        </article>
      </section>
    </div>
  );
}

export default Resume;
