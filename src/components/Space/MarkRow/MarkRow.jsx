import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { FiEdit2 } from 'react-icons/fi';
import { IoIosRemoveCircle } from 'react-icons/io';
import './MarkRow.scss';
import { toggleEditMarkModal, deleteMark } from '../../../actions/markActions';
import getFavicon from '../../../utils/getFavicon';

const MarkRow = ({ id, url, name, description }) => {
  const dispatch = useDispatch();
  const isEditMode = useSelector((state) => state.mark.isEditMode);
  const spaceId = useSelector((state) => state.mark.spaceSelected.id);
  const faviconUrl = getFavicon(url);

  const handleEditIcon = () => {
    dispatch(toggleEditMarkModal({ id, url, name, description }));
  };

  const handleRemove = () => {
    dispatch(deleteMark(id, spaceId));
  };

  return (
    <a target="_blank" rel="noreferrer" href={url} className="MarkRow">
      <div className="mark-content">
        <div className="mark-field name-field">
          <img src={faviconUrl} alt="" className="favicon" />
          <span>{name}</span>
        </div>
        <div className="mark-field mark-field-description">{description}</div>
        <div className="mark-field">{url}</div>
      </div>

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
    </a>
  );
};

MarkRow.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default MarkRow;
