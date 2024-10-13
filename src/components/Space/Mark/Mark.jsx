import './Mark.scss';

const Mark = ({ url, name }) => {
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${url}&sz=64`;

  return (
    <a
      role="button"
      href={url}
      target="_blank"
      rel="noreferrer"
      title="apple music"
      className="Mark"
    >
      <div className="TileImgContainer">
        <img src={faviconUrl} alt="Apple Music icon" />
      </div>
      <p className="TileTitle">{name}</p>
    </a>
  );
};

export default Mark;
