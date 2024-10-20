import './Header.scss';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';
import { IoIosColorPalette } from 'react-icons/io';
import ThemeModal from './ThemeModal/ThemeModal';
import UserModal from './UserModal/UserModal';
import {
  activateEditMode,
  desactivateEditMode,
} from '../../actions/markActions';

const Header = ({ displayTrash }) => {
  const dispatch = useDispatch();
  const isEditMode = useSelector((state) => state.mark.isEditMode);
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);

  // TODO à dynamiser
  const userName = 'Denovann';

  const toggleThemeModal = () => {
    setIsThemeModalOpen(!isThemeModalOpen);
    setIsUserModalOpen(false);
  };

  const toggleUserModal = () => {
    setIsUserModalOpen(!isUserModalOpen);
    setIsThemeModalOpen(false);
  };

  const handleLogout = () => {
    // TODO logique à faire
    console.log('Déconnexion');
    setIsUserModalOpen(false);
  };

  const handleDeleteAccount = () => {
    // TODO logique à faire
    console.log('Suppression du compte');
    setIsUserModalOpen(false);
  };

  const handleEdit = () => {
    console.log('mode edit');
    dispatch(activateEditMode());
  };
  const handleFinishEdit = () => {
    console.log('finished edit mode');
    dispatch(desactivateEditMode());
  };
  const changeTheme = (newImageUrl) => {
    document.body.style.backgroundImage = `url(${newImageUrl})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = 'fixed';
    localStorage.setItem('selectedTheme', newImageUrl);
    setIsThemeModalOpen(false);
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
      changeTheme(savedTheme);
    }
  }, []);

  return (
    <>
      <header className="header-container">
        {isEditMode ? (
          <button
            type="button"
            className="finish-edit-button"
            onClick={handleFinishEdit}
          >
            Terminé
          </button>
        ) : (
          <>
            <h1 className="header-main-title">Favospace</h1>
            <div className="header-settings-container">
              {!displayTrash && (
                <FaTrashAlt
                  size={22}
                  className="clickable-icon"
                  onClick={handleEdit}
                />
              )}

              <IoIosColorPalette
                size={22}
                onClick={toggleThemeModal}
                className="clickable-icon"
              />
              <button
                type="button"
                onClick={toggleUserModal}
                className="user-button"
                aria-haspopup="true"
                aria-expanded={isUserModalOpen}
                title={`Bonjour ${userName}`}
              >
                Bonjour {userName}
              </button>
            </div>
          </>
        )}
      </header>
      {isThemeModalOpen && <ThemeModal onChangeTheme={changeTheme} />}
      {isUserModalOpen && (
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
};

export default Header;
