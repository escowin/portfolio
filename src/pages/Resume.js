import "../assets/css/resume.css";

import ResumeHeader from "../components/ResumeHeader";
import ResumeFooter from "../components/ResumeFooter";
import Skillet from "../components/ResumeSkillset";
import Experience from "../components/ResumeExp";
import Education from "../components/ResumeEdu";
import Extracurricular from "../components/ResumeExtra";

function Resume() {
  return (
    <>
      <ResumeHeader />
      <Skillet />
      <Experience />
      <Education />
      <Extracurricular />
      <ResumeFooter />
    </>
  );
}

export default Resume;
