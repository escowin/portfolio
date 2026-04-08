import { Briefcase } from "lucide-react";

function ResumeSummary({ summary }) {
  return (
    <section className="resume-section">
      <h3 className="section-title">
        <Briefcase size={20} className="section-icon" />
        Professional Summary
      </h3>
      <p className="summary-text">{summary}</p>
    </section>
  );
}

export default ResumeSummary;
