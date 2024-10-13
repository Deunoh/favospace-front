import './Mark.scss';

const Mark = () => {
  const url = 'https://music.apple.com/fr/new';
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
      <p className="TileTitle">Apple music avec un titre long</p>
    </a>
  );
};

export default Mark;
