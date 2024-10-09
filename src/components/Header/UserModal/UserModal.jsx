import './UserModal.scss';

const UserModal = ({ onLogout, onDeleteAccount, onClose }) => {
  return (
    <div className="user-modal">
      <div className="user-modal-content">
        <button type="button" onClick={onLogout}>
          Se déconnecter
        </button>
        <button
          type="button"
          onClick={onDeleteAccount}
          className="delete-account"
        >
          Supprimer mon compte
        </button>
        {/* <button type="button" onClick={onClose} className="close-modal">
          X
        </button> */}
      </div>
    </div>
  );
};

export default UserModal;
