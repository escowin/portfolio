import "./index.css";

import ResumeHeader from "../ResumeHeader";
import ResumeFooter from "../ResumeFooter";
import Skillet from "../ResumeSkillset";
import Experience from "../ResumeExp";
import Education from "../ResumeEdu";
import Extracurricular from "../ResumeExtra";

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
