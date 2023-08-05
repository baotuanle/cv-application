export default function PreviewPersonal({
  firstName,
  lastName,
  title,
  address,
  email,
  phoneNumber,
}) {
  return (
    <div id="preview-personal">
      <div className="info">
        <div id="info-1">
          <p id="name">
            {firstName} {lastName}
          </p>
          <h2 id="title">{title}</h2>
        </div>
        <div id="info-2">
          <p>
            {address}
          </p>
          <p>
            {phoneNumber}
          </p>
          <p>
            {email}
          </p>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
