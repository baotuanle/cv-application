import { useState } from 'react';

function ExperienceInfo({
  onPosition,
  onCompany,
  onEStartDate,
  onEEndDate,
  onECity,
  onECountry,
  onDescription,
  onRemove,
}) {
  const [descriptionValue, setDescriptionValue] = useState('');

  // Handle the description change
  function handleDescriptionChange(event) {
    setDescriptionValue(event.target.value);
    onDescription(event);
  }

  // Handle the Enter key press for the textarea
  function handleDescriptionKeyPress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      setDescriptionValue((prevValue) => prevValue + '\n');
    }
  }

  return (
    <>
      <div id="experience-info">
        <input type="text" placeholder="Position Name" onChange={onPosition} />
        <input type="text" placeholder="Company Name" onChange={onCompany} />
        <input type="text" placeholder="City" onChange={onECity} />
        <input type="text" placeholder="Country" onChange={onECountry} />
        <input type="text" placeholder="Start Date" onChange={onEStartDate} />
        <input type="text" placeholder="End Date" onChange={onEEndDate} />
        <textarea
          placeholder="Description"
          className="description"
          value={descriptionValue}
          onChange={handleDescriptionChange}
          onKeyPress={handleDescriptionKeyPress}
        ></textarea>
        <button className='remove-experience-btn' onClick={onRemove}>Remove</button>
      </div>
    </>
  );
}

export default ExperienceInfo;
