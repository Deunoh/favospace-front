import { FaCirclePlus } from 'react-icons/fa6';
import { IoIosRemoveCircle } from 'react-icons/io';
import { IoShare } from 'react-icons/io5';
import { FaRegEdit } from 'react-icons/fa';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SpaceSelect.scss';
import {
  changeSpaceSelect,
  toggleRemoveSpaceModal,
  toggleAddSpaceModal,
  toggleEditSpaceModal,
  fetchMarks,
  showToast,
} from '../../actions/markActions';
import ToastNotification from '../Modals/ToastNotification';

const SpaceSelect = () => {
  const dispatch = useDispatch();
  const spaces = useSelector((state) => state.mark.spaceList);

  const selectedSpace = useSelector((state) => state.mark.spaceSelected);
  const isEditMode = useSelector((state) => state.mark.isEditMode);
  const spaceLabel = spaces.length === 1 ? 'Mon espace' : 'Mes espaces';

  const handleOpenAddSpaceModal = () => {
    dispatch(toggleAddSpaceModal());
  };
  const handleOpenEditSpaceModal = () => {
    dispatch(toggleEditSpaceModal());
  };

  const handleOpenRemoveSpaceModal = () => {
    dispatch(toggleRemoveSpaceModal());
  };

  const handleSpaceChange = (event) => {
    const selectedSpaceName = event.currentTarget.value;
    const space = spaces.find((espace) => espace.name === selectedSpaceName);

    dispatch(
      changeSpaceSelect({
        id: space.id,
        name: space.name,
        shareToken: space.shareToken,
      })
    );
    dispatch(fetchMarks(space.id));
  };

  // TODO a delete quand la fonctionnalité sera terminé, affiche la notification avec le message
  const handleShare = () => {
    const currentSpaceShareToken = selectedSpace.shareToken;
    console.log(selectedSpace);
    const shareLink = `${window.location.origin}/share/${currentSpaceShareToken}`;
    console.log(shareLink);

    // Copier dans le presse-papier
    navigator.clipboard
      .writeText(shareLink)
      .then(() => {
        dispatch(
          showToast(
            'Lien de partage copié dans le presse-papier ! Partagez le !'
          )
        );
      })
      .catch(() => {
        dispatch(showToast('Erreur lors de la copie du lien', 'error'));
      });
  };

  return (
    <div className="select-container">
      <label htmlFor="spaceSelect" className="space-label">
        {spaceLabel}
      </label>
      <div className="select-wrapper">
        {!isEditMode ? (
          <IoShare className="add-icon" onClick={handleShare} />
        ) : (
          <FaRegEdit className="add-icon" onClick={handleOpenEditSpaceModal} />
        )}
        <select
          className={`space-select ${isEditMode ? 'edit-mode' : ''}`}
          name="space-select"
          id="spaceSelect"
          value={selectedSpace?.name || ''}
          aria-label="choisissez votre espace"
          onChange={handleSpaceChange}
          disabled={isEditMode}
        >
          {spaces.map((space) => (
            <option key={space.id}>{space.name}</option>
          ))}
        </select>
        {isEditMode ? (
          <IoIosRemoveCircle
            className="remove-icon"
            onClick={handleOpenRemoveSpaceModal}
          />
        ) : (
          <FaCirclePlus
            className="add-icon"
            onClick={handleOpenAddSpaceModal}
          />
        )}
      </div>
    </div>
  );
};

export default SpaceSelect;
