import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { IoIosRemoveCircle } from 'react-icons/io';
import './Mark.scss';

const Mark = ({ url, name }) => {
  // With google
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${url}&sz=64`;
  // With icon horse
  // let domain = new URL(url);
  // domain = domain.hostname.replace('www.', '');
  // const faviconUrl = `https://icon.horse/icon/${domain}`;

  const isEditMode = useSelector((state) => state.mark.isEditMode);

  const handleRemove = () => {
    console.log('cliqué !');
  };

  return (
    <>
      {!isEditMode && (
        <a
          role="button"
          href={url}
          target="_blank"
          rel="noreferrer"
          className="Mark"
        >
          <div className="TileImgContainer">
            <img src={faviconUrl} alt="" />
          </div>
          <p className="TileTitle">{name}</p>
        </a>
      )}
      {isEditMode && (
        <div className="Mark edit-icon">
          <button
            type="button"
            className="remove-icon-container"
            onClick={handleRemove}
            aria-label="supprimer le raccourci"
          >
            <IoIosRemoveCircle className="remove-icon" />
          </button>
          <div className="TileImgContainer">
            <img src={faviconUrl} alt="" />
          </div>
          <p className="TileTitle">{name}</p>
        </div>
      )}
    </>
  );
};

Mark.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default Mark;
