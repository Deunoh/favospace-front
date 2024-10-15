import { FaCirclePlus } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import './SpaceSelect.scss';
import { changeSpaceSelect, toggleSpaceModal } from '../../actions/markActions';

const SpaceSelect = () => {
  const dispatch = useDispatch();
  const spaces = useSelector((state) => state.mark.spaceList);
  const selectedSpace = useSelector((state) => state.mark.spaceSelected);
  const spaceLabel = spaces.length === 1 ? 'Mon espace' : 'Mes espaces';

  const handleOpenSpaceModal = () => {
    dispatch(toggleSpaceModal());
  };

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

        <FaCirclePlus className="add-icon" onClick={handleOpenSpaceModal} />
      </div>
    </div>
  );
};

export default SpaceSelect;
