function PersonalInfo({
  onFirstName,
  onLastName,
  onAddress,
  onEmail,
  onTitle,
  onPhoneNumber,
}) {
  return (
    <>
      <div id="personal-info">
        <input type="text" placeholder="First Name" onChange={onFirstName} />
        <input type="text" placeholder="Last Name" onChange={onLastName} />
        <input type="text" placeholder="Title" onChange={onTitle} />
        <input type="text" placeholder="Address" onChange={onAddress} />
        <input
          type="text"
          placeholder="Phone Number"
          onChange={onPhoneNumber}
        />
        <input type="text" placeholder="Email" onChange={onEmail} />
      </div>
    </>
  );
}

export default PersonalInfo;
