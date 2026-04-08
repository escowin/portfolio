import React from "react";
import portfolioData from "../assets/data";
import "../assets/css/resume.css";
import ResumeHeader from "../components/resume/ResumeHeader";
import ResumeSummary from "../components/resume/ResumeSummary";
import ResumeTechnicalSkills from "../components/resume/ResumeTechnicalSkills";
import ResumeExperience from "../components/resume/ResumeExperience";
import ResumeKeyProjects from "../components/resume/ResumeKeyProjects";
import ResumeEducation from "../components/resume/ResumeEducation";
import ResumeCertifications from "../components/resume/ResumeCertifications";
import ResumeAdditionalInfo from "../components/resume/ResumeAdditionalInfo";

function Resume() {
  const { resume } = portfolioData;
  const {
    header,
    summary,
    technicalSkills,
    experience,
    keyProjects,
    education,
    certifications,
    additionalInfo
  } = resume;

  return (
    <div className="resume-container">
      <ResumeHeader header={header} />
      <ResumeSummary summary={summary} />
      <ResumeTechnicalSkills technicalSkills={technicalSkills} />
      <ResumeExperience experience={experience} />
      <ResumeKeyProjects keyProjects={keyProjects} />
      <ResumeEducation education={education} />
      <ResumeCertifications certifications={certifications} />
      <ResumeAdditionalInfo additionalInfo={additionalInfo} />
    </div>
  );
}

export default Resume;
