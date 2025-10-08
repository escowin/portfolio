import "../assets/css/resume.css";

import ResumeHeader from "../components/ResumeHeader";
import ResumeFooter from "../components/ResumeFooter";
import Skillet from "../components/Skillset";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Extracurricular from "../components/Extracurricular";

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
