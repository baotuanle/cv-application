
export default function PreviewEducation({
  School,
  Degree,
  StartDate,
  EndDate,
  City,
  Country,
}) {
  return (
    <div id="preview-education">
      <div className="education">
        <div className="education-info">
          <h3>{School}</h3>
          <p className="degree-dates">
            <span className="degree">{Degree}</span>
          </p>
        </div>
        <div className="education-location-dates">
          <p>{City}, {Country}</p>
          {StartDate} - {EndDate}
        </div>
      </div>
    </div>
  );
}
