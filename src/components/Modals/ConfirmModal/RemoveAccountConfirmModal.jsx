import { useDispatch, useSelector } from 'react-redux';
import { toggleRemoveAccountModal } from '../../../actions/markActions';
import './ConfirmModal.scss';

const RemoveAccountConfirmModal = () => {
  const dispatch = useDispatch();

  const handleConfirmDelete = () => {
    dispatch(toggleRemoveAccountModal());
    console.log('Compte supprimé !');
    // TODO Logique à faire
  };

  const handleCloseModal = () => {
    dispatch(toggleRemoveAccountModal());
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Confirmer la suppression</h2>
        <p>
          Êtes-vous sûre de vouloir supprimer votre compte ? Cette action est
          irréversible.
        </p>
        <div className="modal-actions">
          <button
            type="button"
            onClick={handleConfirmDelete}
            className="confirm-button"
          >
            Supprimer
          </button>
          <button
            type="button"
            onClick={handleCloseModal}
            className="cancel-button"
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemoveAccountConfirmModal;
