import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/Header';
import SpaceSelect from '../SpaceSelect/SpaceSelect';
import './App.scss';
import { fetchMarks, fetchSpaces } from '../../actions/markActions';
import Space from '../Space/Space';
import AddMarkModal from '../Modals/AddMarkModal/AddMarkModal';
import AddSpaceModal from '../Modals/AddSpaceModal/AddSpaceModal';
import RemoveSpaceConfirmModal from '../Modals/ConfirmModal/RemoveSpaceConfirmModal';
import StartButton from '../StartButton/StartButton';
import RemoveAccountConfirmModal from '../Modals/ConfirmModal/RemoveAccountConfirmModal';

function App() {
  const isMarkModalOpen = useSelector((state) => state.mark.isMarkModalOpen);
  const isSpaceModalOpen = useSelector((state) => state.mark.isSpaceModalOpen);
  const spaceList = useSelector((state) => state.mark.spaceList);
  const isSpacesEmpty = spaceList.length === 0;
  const isRemoveSpaceModalOpen = useSelector(
    (state) => state.mark.isRemoveSpaceModalOpen
  );
  const isRemoveAccountModalOpen = useSelector(
    (state) => state.mark.isRemoveAccountModalOpen
  );

  const dispatch = useDispatch();
  // call api to save spaces and marks in state
  useEffect(() => {
    dispatch(fetchSpaces());
    dispatch(fetchMarks());
  }, [dispatch]);

  return (
    <div className="App">
      <Header displayTrash={isSpacesEmpty} />
      {isSpacesEmpty ? (
        <StartButton />
      ) : (
        <>
          <SpaceSelect />
          <Space />
        </>
      )}
      {/* Modals */}
      {isMarkModalOpen && <AddMarkModal />}
      {isSpaceModalOpen && <AddSpaceModal />}
      {isRemoveSpaceModalOpen && <RemoveSpaceConfirmModal />}
      {isRemoveAccountModalOpen && <RemoveAccountConfirmModal />}
    </div>
  );
}

export default App;
