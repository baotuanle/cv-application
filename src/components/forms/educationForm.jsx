function EducationInfo({
  onSchool,
  onDegree,
  onStartDate,
  onEndDate,
  onCity,
  onCountry,
  onRemove,
}) {
  return (
    <>
      <div id="education-info">
        <input type="text" placeholder="School Name" onChange={onSchool} />
        <input type="text" placeholder="Degree Program" onChange={onDegree} />
        <input type="text" placeholder="City" onChange={onCity} />
        <input type="text" placeholder="Country" onChange={onCountry} />
        <input type="text" placeholder="Start Date" onChange={onStartDate} />
        <input type="text" placeholder="End Date" onChange={onEndDate} />
        <button className='remove-education-btn ' onClick={onRemove}>Remove</button>
      </div>
    </>
  );
}

export default EducationInfo;
