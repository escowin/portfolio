import { Globe } from "lucide-react";

function ResumeAdditionalInfo({ additionalInfo }) {
  return (
    <section className="resume-section">
      <h3 className="section-title">
        <Globe size={20} className="section-icon" />
        Additional Information
      </h3>
      <article className="additional-info">
        {additionalInfo.map((info, index) => (
          <p key={index} className="info-item">
            <strong>{info.label}:</strong>{" "}
            {info.isLink ? (
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
  );
}

export default ResumeAdditionalInfo;
