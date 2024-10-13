import { useState } from 'react';
import { FaCirclePlus } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import './SpaceSelect.scss';
import { changeSpaceSelect, addSpace } from '../../actions/markActions';
import AddSpaceModal from '../Modals/AddSpaceModal/AddSpaceModal';

const SpaceSelect = () => {
  const dispatch = useDispatch();
  const spaces = useSelector((state) => state.mark.spaceList);
  const selectedSpace = useSelector((state) => state.mark.spaceSelected);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddSpace = (spaceName) => {
    dispatch(addSpace(spaceName));
  };

  const spaceLabel = spaces.length === 1 ? 'Mon espace' : 'Mes espaces';

  return (
    <div className="select-container">
      <label htmlFor="spaceSelect" className="space-label">
        {spaceLabel}
      </label>
      <div className="select-wrapper">
        <select
          className="space-select"
          name="space-select"
          id="spaceSelect"
          value={selectedSpace}
          aria-label="choisissez votre espace"
          onChange={(event) => {
            dispatch(changeSpaceSelect(event.currentTarget.value));
          }}
        >
          {spaces.map((space) => (
            <option key={space.id}>{space.name}</option>
          ))}
        </select>

        <FaCirclePlus
          className="add-icon"
          onClick={() => setIsModalOpen(true)}
        />
      </div>

      {isModalOpen && (
        <AddSpaceModal
          onClose={() => setIsModalOpen(false)}
          onAddSpace={handleAddSpace}
        />
      )}
    </div>
  );
};

export default SpaceSelect;
