import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiEdit2 } from 'react-icons/fi';
import { IoIosRemoveCircle } from 'react-icons/io';
import './MarkRow.scss';
import { toggleEditMarkModal, deleteMark } from '../../../actions/markActions';
import Favicon from '../../../utils/Favicon';

const MarkRow = ({ id, url, name, description = null }) => {
  const dispatch = useDispatch();
  const isEditMode = useSelector((state) => state.mark.isEditMode);
  const spaceId = useSelector((state) => state.mark.spaceSelected.id);
  const [isRemoving, setIsRemoving] = useState(false);

  const handleEditIcon = () => {
    dispatch(toggleEditMarkModal({ id, url, name, description }));
  };

  const handleRemove = () => {
    setIsRemoving(true);
    setTimeout(() => {
      dispatch(deleteMark(id, spaceId));
    }, 300);
  };

  return (
    <div className={`MarkRow ${isRemoving ? 'removing' : ''}`}>
      <a target="_blank" rel="noreferrer" href={url} className="mark-content">
        <div className="mark-field name-field">
          <Favicon url={url} className="favicon" />
          <span>{name}</span>
        </div>
        <div className="mark-field description-field">
          <span>{description}</span>
        </div>
        <div className="mark-field url-field">
          <span>{url}</span>
        </div>
      </a>

      {isEditMode && (
        <div className="actions">
          <button type="button" onClick={handleEditIcon} aria-label="modifier">
            <FiEdit2 />
          </button>
          <button
            type="button"
            onClick={handleRemove}
            aria-label="supprimer"
            className="delete-button"
          >
            <IoIosRemoveCircle />
          </button>
        </div>
      )}
    </div>
  );
};

MarkRow.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default MarkRow;
