import PropTypes from 'prop-types';
import { IoClose } from 'react-icons/io5';
import './DescriptionModal.scss';

const DescriptionModal = ({ description, onClose }) => {
  return (
    <div className="description-modal-overlay" onClick={onClose}>
      <div
        className="description-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="close-button"
          onClick={onClose}
          aria-label="fermer la description"
        >
          <IoClose />
        </button>
        <div className="description-content">
          <h3>Description</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

DescriptionModal.propTypes = {
  description: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DescriptionModal;
