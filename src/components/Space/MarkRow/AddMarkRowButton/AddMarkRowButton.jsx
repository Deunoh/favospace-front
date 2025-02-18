import { useDispatch } from 'react-redux';
import { BsBookmarkPlusFill } from 'react-icons/bs';
import './AddMarkRowButton.scss';
import { toggleAddMarkModal } from '../../../../actions/markActions';

const AddMarkRowButton = () => {
  const dispatch = useDispatch();

  const handleOpenMarkModal = () => {
    dispatch(toggleAddMarkModal());
  };

  return (
    <button
      type="button"
      onClick={handleOpenMarkModal}
      className="AddMarkRowButton"
    >
      <div className="mark-content">
        <div className="mark-field name-field">
          <BsBookmarkPlusFill className="add-icon" />
          <span>Ajouter un favoris</span>
        </div>
      </div>
    </button>
  );
};

export default AddMarkRowButton;
