import './Header.scss';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';
import { IoIosColorPalette } from 'react-icons/io';
import ThemeModal from './ThemeModal/ThemeModal';
import UserModal from './UserModal/UserModal';
import {
  activateEditMode,
  desactivateEditMode,
  toggleRemoveAccountModal,
} from '../../actions/markActions';
import {
  getImageFromIndexedDB,
  saveImageToIndexedDB,
} from '../../utils/indexedDBService';
import { submitLogout } from '../../actions/authActions';
import { Link } from 'react-router-dom';

const Header = ({ displayTrash, isUserConnected }) => {
  const dispatch = useDispatch();
  const isEditMode = useSelector((state) => state.mark.isEditMode);
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  // For mobile header
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // fonction to display bonsoir in evening and bonjour in day
  const whatSalutation = () => {
    const hour = new Date().getHours();
    return hour >= 18 || hour < 4 ? 'Bonsoir' : 'Bonjour';
  };

  const userName = useSelector((state) => state.user.userName);

  const toggleThemeModal = () => {
    setIsThemeModalOpen(!isThemeModalOpen);
    setIsUserModalOpen(false);
  };

  const toggleUserModal = () => {
    setIsUserModalOpen(!isUserModalOpen);
    setIsThemeModalOpen(false);
  };

  const handleLogout = () => {
    dispatch(submitLogout());
    localStorage.removeItem('token_jwt');
    setIsUserModalOpen(false);
  };

  const handleDeleteAccount = () => {
    dispatch(toggleRemoveAccountModal());
    setIsUserModalOpen(false);
  };

  const handleEdit = () => {
    dispatch(activateEditMode());
  };
  const handleFinishEdit = () => {
    dispatch(desactivateEditMode());
  };
  const changeTheme = async (newImageUrl) => {
    document.body.style.backgroundImage = `url(${newImageUrl})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = 'fixed';
    setIsThemeModalOpen(false);

    // Sauvegarder le thème actuel
    await saveImageToIndexedDB('currentTheme', newImageUrl);
  };

  useEffect(() => {
    const loadSavedTheme = async () => {
      const currentTheme = await getImageFromIndexedDB('currentTheme');
      if (currentTheme) {
        changeTheme(currentTheme);
      } else {
        const savedCustomTheme = await getImageFromIndexedDB(
          'customBackgroundImage'
        );
        if (savedCustomTheme) {
          changeTheme(savedCustomTheme);
        }
      }
    };
    loadSavedTheme();
  }, []);

  const renderHeaderContent = () => {
    if (!isUserConnected) {
      return (
        <h1 className="header-main-title">
          Favospace<span className="beta-badge">beta</span>
        </h1>
      );
    }

    if (isEditMode) {
      return (
        <button
          type="button"
          className="finish-edit-button"
          onClick={handleFinishEdit}
        >
          Terminé
        </button>
      );
    }

    return (
      <>
        <h1 className="header-main-title">
          <Link to="/">Favospace</Link>
          <span className="beta-badge">beta</span>
        </h1>
        <div className="header-settings-container">
          {!displayTrash && (
            <button
              type="button"
              onClick={handleEdit}
              className="edit-button"
              title="Éditer les favoris"
            >
              Éditer
            </button>
          )}
          <IoIosColorPalette
            size={28}
            onClick={toggleThemeModal}
            className="clickable-icon"
          />
          {isMobile ? (
            <FaUserCircle
              size={22}
              onClick={toggleUserModal}
              className="clickable-icon"
              title={`${whatSalutation()} ${userName}`}
            />
          ) : (
            <button
              type="button"
              onClick={toggleUserModal}
              className="user-button"
              aria-haspopup="true"
              aria-expanded={isUserModalOpen}
              title={`${whatSalutation()} ${userName}`}
            >
              {whatSalutation()} {userName}
            </button>
          )}
        </div>
      </>
    );
  };

  return (
    <>
      <header className="header-container">{renderHeaderContent()}</header>
      {isUserConnected && isThemeModalOpen && (
        <ThemeModal onChangeTheme={changeTheme} />
      )}
      {isUserConnected && isUserModalOpen && (
        <UserModal
          onLogout={handleLogout}
          onDeleteAccount={handleDeleteAccount}
          onClose={() => setIsUserModalOpen(false)}
        />
      )}
    </>
  );
};

Header.propTypes = {
  displayTrash: PropTypes.bool.isRequired,
  isUserConnected: PropTypes.bool.isRequired,
};

export default Header;
