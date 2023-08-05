import { useState } from "react";
import PersonalForm from "./components/forms/personalform.jsx";
import EducationForm from "./components/forms/educationForm.jsx";
import ExperienceForm from "./components/forms/experienceForm.jsx";
import Preview from "./components/preview/preview.jsx";


export default function Content() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [title, setTitle] = useState(null);
  const [address, setAddress] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [educations, setEducations] = useState([]); 
  const [experiences, setExperiences] = useState([]);


  function onFirstName(event) {
    setFirstName(event.target.value);
  }
  function onLastName(event) {
    setLastName(event.target.value);
  }

  function onTitle(event) {
    setTitle(event.target.value);
  }

  function onEmail(event) {
    setEmail(event.target.value);
  }

  function onAddress(event) {
    setAddress(event.target.value);
  }
  function onPhoneNumber(event) {
    setPhoneNumber(event.target.value);
  }

  function addEducationEntry() {
    setEducations([...educations, { school: "", degree: "", startDate: "", endDate: "", city: "", country: "" }]);
  }

  function removeEducationEntry(index) {
    const updatedEducations = [...educations];
    updatedEducations.splice(index, 1);
    setEducations(updatedEducations);
  }

  // Handler to update an education entry
  function updateEducationEntry(index, updatedEducation) {
    const updatedEducations = [...educations];
    updatedEducations[index] = updatedEducation;
    setEducations(updatedEducations);
  }

  function addExperienceEntry() {
    setExperiences([...experiences, { position: "", company: "", EstartDate: "", EendDate: "", Ecity: "", Ecountry: "", description: "" }]);
  }

  function removeExperienceEntry(index) {
    const updatedExperiences = [...experiences];
    updatedExperiences.splice(index, 1);
    setExperiences(updatedExperiences);
  }

  function updateExperienceEntry(index, updatedExperience) {
    const updatedExperiences = [...experiences];
    updatedExperiences[index] = updatedExperience;
    setExperiences(updatedExperiences);
  }

  return (
    <>
      <div className="content">
      <section className="forms-container">
        <section className="personal-form">
          <PersonalForm
            onFirstName={onFirstName}
            onLastName={onLastName}
            onTitle={onTitle}
            onEmail={onEmail}
            onAddress={onAddress}
            onPhoneNumber={onPhoneNumber}
          />
          </section>
        
          <section className="education-form">
          {educations.map((education, index) => (
            <EducationForm
              key={index}
              onSchool={(event) => updateEducationEntry(index, { ...education, school: event.target.value })}
              onDegree={(event) => updateEducationEntry(index, { ...education, degree: event.target.value })}
              onStartDate={(event) => updateEducationEntry(index, { ...education, startDate: event.target.value })}
              onEndDate={(event) => updateEducationEntry(index, { ...education, endDate: event.target.value })}
              onCity={(event) => updateEducationEntry(index, { ...education, city: event.target.value })}
              onCountry={(event) => updateEducationEntry(index, { ...education, country: event.target.value })}
              onRemove={() => removeEducationEntry(index)}
            />
          ))}
          <button className="add-education-btn" onClick={addEducationEntry}>Add Education</button>
        </section>
        <section className="experience-form">
        {experiences.map((experience, index) => (
            <ExperienceForm
              key={index}
              onPosition={(event) => updateExperienceEntry(index, { ...experience, position: event.target.value })}
              onCompany={(event) => updateExperienceEntry(index, { ...experience, company: event.target.value })}
              onEStartDate={(event) => updateExperienceEntry(index, { ...experience, EstartDate: event.target.value })}
              onEEndDate={(event) => updateExperienceEntry(index, { ...experience, EendDate: event.target.value })}
              onECity={(event) => updateExperienceEntry(index, { ...experience, Ecity: event.target.value })}
              onECountry={(event) => updateExperienceEntry(index, { ...experience, Ecountry: event.target.value })}
              onDescription={(event) => updateExperienceEntry(index, { ...experience, description: event.target.value })}
              onRemove={() => removeExperienceEntry(index)}
            />
          ))}
          <button className="add-experience-btn" onClick={addExperienceEntry}>Add Experience</button>
        </section>
        </section>

        <div className="preview">
          <Preview
            firstName={firstName}
            lastName={lastName}
            title={title}
            phoneNumber={phoneNumber}
            address={address}
            email={email}
            educations={educations}
            experiences={experiences}
          />
        </div>
      </div>
    </>
  );
}