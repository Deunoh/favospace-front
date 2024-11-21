import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosRemoveCircle } from 'react-icons/io';
import { BsFillPatchQuestionFill } from 'react-icons/bs';
import { FiEdit2 } from 'react-icons/fi';
import './Mark.scss';
import { deleteMark, toggleEditMarkModal } from '../../../actions/markActions';
import DescriptionModal from '../../Modals/DescriptionModal/DescriptionModal';
import defaultIcon from '../../../assets/default-mark-icon.png';

const Mark = ({ id, url, name, description = null }) => {
  const [showDescriptionModal, setShowDescriptionModal] = useState(false);
  const dispatch = useDispatch();
  const domain = new URL(url).hostname;
  // With google
  // const faviconUrl = `https://www.google.com/s2/favicons?sz=64&domain=${url}`;
  // With faviconextractor
  const faviconUrl = `https://www.faviconextractor.com/favicon/${domain}?larger=true`;
  // With icon horse (limited request)
  // const faviconUrl = `https://icon.horse/icon/${domain}`;
  // With duckduckgo (poor quality)
  // const faviconUrl = `https://icons.duckduckgo.com/ip3/${domain}.ico`;

  const isEditMode = useSelector((state) => state.mark.isEditMode);
  const spaceId = useSelector((state) => state.mark.spaceSelected.id);
  const handleRemove = () => {
    dispatch(deleteMark(id, spaceId));
  };

  const handleDescription = () => {
    setShowDescriptionModal(true);
  };

  const handleEditIcon = () => {
    dispatch(toggleEditMarkModal({ id, url, name, description }));
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
          title={name}
        >
          {description && (
            <button
              type="button"
              className="info-icon-container"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleDescription();
              }}
              aria-label="voir la description"
            >
              <BsFillPatchQuestionFill className="info-icon" />
            </button>
          )}

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
            <button
              type="button"
              className="edit-icon-button"
              onClick={handleEditIcon}
              aria-label="modifier l'icône"
            >
              <FiEdit2 className="edit-pencil" />
            </button>
          </div>
          <p className="TileTitle">{name}</p>
        </div>
      )}
      {showDescriptionModal && description && (
        <DescriptionModal
          description={description}
          onClose={() => setShowDescriptionModal(false)}
        />
      )}
    </>
  );
};

Mark.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
};
export default Mark;
