import PropTypes from 'prop-types';
import { useState } from 'react';
import './AddSpaceModal.scss';

const AddSpaceModal = ({ onClose, onAddSpace }) => {
  const [spaceName, setSpaceName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (spaceName.trim()) {
      onAddSpace(spaceName.trim());
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Ajouter un nouvel espace</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={spaceName}
            onChange={(e) => setSpaceName(e.target.value)}
            placeholder="Nom de l'espace"
            required
          />
          <div className="modal-actions">
            <button type="submit">Ajouter</button>
            <button type="button" onClick={onClose}>
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

AddSpaceModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onAddSpace: PropTypes.func.isRequired,
};

export default AddSpaceModal;
