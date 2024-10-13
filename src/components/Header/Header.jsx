import React, { useState } from 'react';
import './Header.scss';
import { FaTrashAlt } from 'react-icons/fa';
import { IoIosColorPalette } from 'react-icons/io';
import ThemeModal from './ThemeModal/ThemeModal';
import UserModal from './UserModal/UserModal';

const Header = () => {
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

  const changeTheme = (newImageUrl) => {
    document.body.style.backgroundImage = `url(${newImageUrl})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = 'fixed';
    setIsThemeModalOpen(false);
  };

  return (
    <>
      <header className="header-container">
        <h1 className="header-main-title">Favospace</h1>
        <div className="header-settings-container">
          <FaTrashAlt size={22} className="clickable-icon" />
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

export default Header;
