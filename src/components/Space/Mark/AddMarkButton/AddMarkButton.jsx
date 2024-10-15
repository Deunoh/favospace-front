import { useDispatch } from 'react-redux';
import { BsBookmarkPlusFill } from 'react-icons/bs';
import './AddMarkButton.scss';
import { toggleMarkModal } from '../../../../actions/markActions';

const AddMarkButton = () => {
  const dispatch = useDispatch();

  const handleOpenMarkModal = () => {
    dispatch(toggleMarkModal());
  };

  return (
    <button
      type="button"
      onClick={handleOpenMarkModal}
      className="AddMarkButton"
    >
      <div className="TileImgContainer">
        <BsBookmarkPlusFill size={40} />
      </div>
      <p className="TileTitle">Ajouter un lien</p>
    </button>
  );
};

export default AddMarkButton;
