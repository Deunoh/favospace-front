import { useState } from 'react';
import './AddMarkModal.scss';
import { useDispatch } from 'react-redux';
import { addMark, toggleMarkModal } from '../../../actions/markActions';

const AddMarkModal = () => {
  const dispatch = useDispatch();
  const [markName, setMarkName] = useState('');
  const [markUrl, setMarkUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (markName.trim() && markUrl.trim()) {
      dispatch(addMark({ name: markName.trim(), url: markUrl.trim() }));
      dispatch(toggleMarkModal());
    }
  };

  const handleCloseMarkModal = () => {
    dispatch(toggleMarkModal());
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Ajouter un nouveau lien</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={markName}
            onChange={(e) => setMarkName(e.target.value)}
            placeholder="Nom du lien"
            required
          />
          <input
            type="url"
            value={markUrl}
            onChange={(e) => setMarkUrl(e.target.value)}
            placeholder="URL du lien"
            required
          />
          <div className="modal-actions">
            <button type="submit">Ajouter</button>
            <button type="button" onClick={handleCloseMarkModal}>
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMarkModal;
