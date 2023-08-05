export default function PreviewExperience({
  Position,
  Company,
  EStartDate,
  EEndDate,
  ECity,
  ECountry,
  Description,
}) {
    return (
        <div id="preview-experience">
          <div className="experience">
            <div className="experience-info">
              <h3>{Position}</h3>
              <p className="company-dates">
                <span className="company">{Company}</span>
              </p>
            </div>
            <div className="experience-location-dates">
              <p>{ECity}, {ECountry}</p>
              {EStartDate} - {EEndDate}
            </div>
          </div>
          <div className="description"><pre>{Description}</pre></div>
        </div>
      );
    }
