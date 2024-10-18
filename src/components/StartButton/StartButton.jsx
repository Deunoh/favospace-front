import { useDispatch } from 'react-redux';
import './StartButton.scss';
import { toggleSpaceModal } from '../../actions/markActions';

const StartButton = () => {
  const dispatch = useDispatch();
  const handleOpenSpaceModal = () => {
    dispatch(toggleSpaceModal());
  };
  return (
    <div className="start-btn-container">
      <button
        className="start-btn"
        type="button"
        onClick={handleOpenSpaceModal}
      >
        Créer mon premier éspace
      </button>
    </div>
  );
};

export default StartButton;
