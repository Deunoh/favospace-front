import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BsBookmarkPlusFill } from 'react-icons/bs';
import AddMarkModal from '../../../Modals/AddMarkModal/AddMarkModal';
import './AddMarkButton.scss';
import { addMark } from '../../../../actions/markActions';

const AddMarkButton = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddMark = (newMark) => {
    dispatch(addMark(newMark));
    handleCloseModal();
  };

  return (
    <>
      <button type="button" onClick={handleOpenModal} className="AddMarkButton">
        <div className="TileImgContainer">
          <BsBookmarkPlusFill size={40} />
        </div>
        <p className="TileTitle">Ajouter un lien</p>
      </button>
      {isModalOpen && (
        <AddMarkModal onClose={handleCloseModal} onAddMark={handleAddMark} />
      )}
    </>
  );
};

export default AddMarkButton;
