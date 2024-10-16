import { useDispatch, useSelector } from 'react-redux';
import { toggleRemoveSpaceModal } from '../../../actions/markActions';
import './RemoveSpaceConfirmModal.scss';

const RemoveSpaceConfirmModal = () => {
  const dispatch = useDispatch();
  const selectedSpace = useSelector((state) => state.mark.spaceSelected);

  const handleConfirmRemove = () => {
    // dispatch(removeSpace(selectedSpace));
    dispatch(toggleRemoveSpaceModal());
    console.log('espace supprimé !');
  };

  const handleCloseModal = () => {
    dispatch(toggleRemoveSpaceModal());
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Confirmer la suppression</h2>
        <p>
          Voulez-vous vraiment supprimer l'espace "{selectedSpace}" ? Cela
          supprimera tous les raccourcis qu'il contient.
        </p>
        <div className="modal-actions">
          <button
            type="button"
            onClick={handleConfirmRemove}
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

export default RemoveSpaceConfirmModal;
