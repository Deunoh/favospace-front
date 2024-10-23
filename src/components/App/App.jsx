import { Navigate, Route, Routes } from 'react-router-dom';
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
import AuthModal from '../AuthModal/AuthModal';
import ToastNotification from '../Modals/ToastNotification';

// Composants react router pour gérer l'authentification
const ProtectedRoute = ({ children, isConnected }) => {
  if (!isConnected) {
    return <Navigate to="/authenticate" />;
  }
  return children;
};

const PublicRoute = ({ children, isConnected }) => {
  if (isConnected) {
    return <Navigate to="/" />;
  }
  return children;
};

function App() {
  const isUserConnected = useSelector((state) => state.user.isConnected);
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
      <Header displayTrash={isSpacesEmpty} isUserConnected={isUserConnected} />

      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute isConnected={isUserConnected}>
              {isSpacesEmpty ? (
                <StartButton />
              ) : (
                <>
                  <SpaceSelect />
                  <Space />
                </>
              )}
            </ProtectedRoute>
          }
        />

        {/* Route d'authentification */}
        <Route
          path="/authenticate"
          element={
            <PublicRoute isConnected={isUserConnected}>
              <AuthModal />
            </PublicRoute>
          }
        />
      </Routes>

      {/* Modals */}
      {isMarkModalOpen && <AddMarkModal />}
      {isSpaceModalOpen && <AddSpaceModal />}
      {isRemoveSpaceModalOpen && <RemoveSpaceConfirmModal />}
      {isRemoveAccountModalOpen && <RemoveAccountConfirmModal />}
    </div>
  );
}

export default App;
