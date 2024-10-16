import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/Header';
import SpaceSelect from '../SpaceSelect/SpaceSelect';
import './App.scss';
import { fetchMarks, fetchSpaces } from '../../actions/markActions';
import Space from '../Space/Space';
import AddMarkModal from '../Modals/AddMarkModal/AddMarkModal';
import AddSpaceModal from '../Modals/AddSpaceModal/AddSpaceModal';
import RemoveSpaceConfirmModal from '../Modals/RemoveSpaceConfirmModal/RemoveSpaceConfirmModal';

function App() {
  const isMarkModalOpen = useSelector((state) => state.mark.isMarkModalOpen);
  const isSpaceModalOpen = useSelector((state) => state.mark.isSpaceModalOpen);
  const isRemoveSpaceModalOpen = useSelector(
    (state) => state.mark.isRemoveSpaceModalOpen
  );
  const dispatch = useDispatch();
  // call api to save spaces in state
  useEffect(() => {
    const action = fetchSpaces();
    dispatch(action);
  }, [dispatch]);

  // call api to save spaces in state
  useEffect(() => {
    const action = fetchMarks();
    dispatch(action);
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <SpaceSelect />
      <Space />
      {/* Modals */}
      {isMarkModalOpen && <AddMarkModal />}
      {isSpaceModalOpen && <AddSpaceModal />}
      {isRemoveSpaceModalOpen && <RemoveSpaceConfirmModal />}
    </div>
  );
}

export default App;
