import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/Header';
import SpaceSelect from '../SpaceSelect/SpaceSelect';
import './App.scss';
import {
  changeSpaceSelect,
  fetchMarks,
  fetchSpaces,
} from '../../actions/markActions';
import Space from '../Space/Space';
import AddMarkModal from '../Modals/MarkModal/AddMarkModal';
import AddSpaceModal from '../Modals/SpaceModal/AddSpaceModal';
import RemoveSpaceConfirmModal from '../Modals/ConfirmModal/RemoveSpaceConfirmModal';
import StartButton from '../StartButton/StartButton';
import RemoveAccountConfirmModal from '../Modals/ConfirmModal/RemoveAccountConfirmModal';
import AuthModal from '../AuthModal/AuthModal';
import ToastNotification from '../Modals/ToastNotification';
import Footer from '../Footer/Footer';
import { verifyUser } from '../../actions/authActions';
import EditMarkModal from '../Modals/MarkModal/EditMarkModal';
import EditSpaceModal from '../Modals/SpaceModal/EditSpaceModal';

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
  const isToastVisible = useSelector((state) => state.mark.isToastVisible);
  const toastMessage = useSelector((state) => state.mark.toastMessage);
  const isSuccessRegister = useSelector(
    (state) => state.user.isSuccessfulRegister
  );
  const isUserConnected = useSelector((state) => state.user.isConnected);
  const isAddMarkModalOpen = useSelector(
    (state) => state.mark.isAddMarkModalOpen
  );
  const isEditMarkModalOpen = useSelector(
    (state) => state.mark.isEditMarkModalOpen
  );
  const isAddSpaceModalOpen = useSelector(
    (state) => state.mark.isAddSpaceModalOpen
  );
  const isEditSpaceModalOpen = useSelector(
    (state) => state.mark.isEditSpaceModalOpen
  );
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
    if (isUserConnected) {
      dispatch(fetchSpaces());
    }
  }, [dispatch, isUserConnected]);

  useEffect(() => {
    if (isUserConnected && spaceList.length > 0) {
      dispatch(
        changeSpaceSelect({
          id: spaceList[0].id,
          name: spaceList[0].name,
        })
      );
      dispatch(fetchMarks(spaceList[0].id));
    }
  }, [dispatch, spaceList, isUserConnected]);

  // Verify token for keep authentication
  useEffect(() => {
    const token = localStorage.getItem('token_jwt');
    dispatch(verifyUser(token));
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
      <Footer />

      {/* Modals */}
      {isAddMarkModalOpen && <AddMarkModal />}
      {isEditMarkModalOpen && <EditMarkModal />}
      {isAddSpaceModalOpen && <AddSpaceModal />}
      {isEditSpaceModalOpen && <EditSpaceModal />}
      {isRemoveSpaceModalOpen && <RemoveSpaceConfirmModal />}
      {isRemoveAccountModalOpen && <RemoveAccountConfirmModal />}
      {isToastVisible && <ToastNotification message={toastMessage} />}
      {/* TODO A SUPPRIMER */}
      {isSuccessRegister && (
        <ToastNotification message="Inscription réussie, veuillez vous connecter" />
      )}
    </div>
  );
}

export default App;
