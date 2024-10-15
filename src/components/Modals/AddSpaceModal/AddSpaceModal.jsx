import PropTypes from 'prop-types';
import { useState } from 'react';
import './AddSpaceModal.scss';
import { useDispatch } from 'react-redux';
import { addSpace, toggleSpaceModal } from '../../../actions/markActions';

const AddSpaceModal = () => {
  const [spaceName, setSpaceName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (spaceName.trim()) {
      dispatch(addSpace(spaceName.trim()));
      dispatch(toggleSpaceModal());
    }
  };

  const handleCloseSpaceModal = () => {
    dispatch(toggleSpaceModal());
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
            <button type="button" onClick={handleCloseSpaceModal}>
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSpaceModal;
