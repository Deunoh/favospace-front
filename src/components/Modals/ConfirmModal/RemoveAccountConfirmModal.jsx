import { useDispatch } from 'react-redux';
import { toggleRemoveAccountModal } from '../../../actions/markActions';
import '../Modals.scss';
import { deleteAccountUser } from '../../../actions/authActions';

const RemoveAccountConfirmModal = () => {
  const dispatch = useDispatch();

  const handleConfirmDelete = () => {
    dispatch(toggleRemoveAccountModal());
    dispatch(deleteAccountUser());
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
