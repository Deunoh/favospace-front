import { useSelector } from 'react-redux';
import { IoIosRemoveCircle } from 'react-icons/io';
import './Mark.scss';

const Mark = ({ url, name }) => {
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${url}&sz=64`;
  const isEditMode = useSelector((state) => state.mark.isEditMode);

  const handleRemove = () => {
    console.log('cliqué !');
  };
  return (
    <a
      role="button"
      href={url}
      target="_blank"
      rel="noreferrer"
      className={`Mark ${isEditMode ? 'edit-icon' : ''}`}
      style={{ pointerEvents: isEditMode ? 'none' : 'auto' }}
    >
      {isEditMode && (
        <button
          type="button"
          className="remove-icon-container"
          onClick={handleRemove}
          aria-label="supprimer le raccourci"
        >
          <IoIosRemoveCircle className="remove-icon" />
        </button>
      )}
      <div className="TileImgContainer">
        <img src={faviconUrl} alt="" />
      </div>
      <p className="TileTitle">{name}</p>
    </a>
  );
};

export default Mark;
