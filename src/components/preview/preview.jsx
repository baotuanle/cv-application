import PreviewPersonal from "./previewpersonal.jsx";
import PreviewEducation from "./previeweducation.jsx";
import PreviewExperience from "./previewexperience.jsx";

import "./preview.css";

function Preview({
  firstName,
  lastName,
  title,
  address,
  email,
  phoneNumber,
  description,
  educations,
  experiences,
}) {
  return (
    <section className="cv-preview">
      <PreviewPersonal
        firstName={firstName}
        lastName={lastName}
        title={title}
        address={address}
        email={email}
        phoneNumber={phoneNumber}
        description={description}
      />
    <div className="education-title">Education</div>
     {educations.map((education, index) => (
        <PreviewEducation
          key={index}
          School={education.school}
          Degree={education.degree}
          StartDate={education.startDate}
          EndDate={education.endDate}
          City={education.city}
          Country={education.country}
        />
        ))}
    <div className="experience-title">Experience</div>
     {experiences.map((experience, index) => (
        <PreviewExperience
          key={index}
          Position={experience.position}
          Company={experience.company}
          EStartDate={experience.EstartDate}
          EEndDate={experience.EendDate}
          ECity={experience.Ecity}
          ECountry={experience.Ecountry}
          Description={experience.description}
        />
        ))}
  </section>
  );
}

export default Preview;