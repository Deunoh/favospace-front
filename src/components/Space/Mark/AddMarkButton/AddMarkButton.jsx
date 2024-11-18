import { useDispatch } from 'react-redux';
import { BsBookmarkPlusFill } from 'react-icons/bs';
import './AddMarkButton.scss';
import { toggleAddMarkModal } from '../../../../actions/markActions';

const AddMarkButton = () => {
  const dispatch = useDispatch();

  const handleOpenMarkModal = () => {
    dispatch(toggleAddMarkModal());
  };

  return (
    <button
      type="button"
      onClick={handleOpenMarkModal}
      className="AddMarkButton"
    >
      <div className="TileImgContainer">
        <BsBookmarkPlusFill size={32} />
      </div>
      <p className="TileTitle">Ajouter</p>
    </button>
  );
};

export default AddMarkButton;
