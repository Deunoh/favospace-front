import './UserModal.scss';

const UserModal = ({ onLogout, onDeleteAccount, onOpenUserInfos }) => {
  return (
    <div className="user-modal">
      <div className="user-modal-content">
        <button type="button" onClick={onLogout}>
          Se déconnecter
        </button>
        <button type="button" onClick={onOpenUserInfos}>
          Mes informations
        </button>
        <button
          type="button"
          onClick={onDeleteAccount}
          className="delete-account"
        >
          Supprimer mon compte
        </button>
      </div>
    </div>
  );
};

export default UserModal;
