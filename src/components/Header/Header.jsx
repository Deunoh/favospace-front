import './Header.scss';
import { FaTrashAlt } from 'react-icons/fa';
import { IoIosColorPalette } from 'react-icons/io';
import ThemeModal from './ThemeModal/ThemeModal';
import { useState } from 'react';

const Header = () => {
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);

  const toggleModal = () => {
    setIsThemeModalOpen(!isThemeModalOpen);
  };

  const changeGradient = (newGradient) => {
    document.body.style.background = newGradient;
    setIsThemeModalOpen(false);
  };
  return (
    <>
      <header className="header-container">
        <h1 className="header-main-title">Favospace</h1>
        <div className="header-settings-container">
          <FaTrashAlt size={22} />
          <IoIosColorPalette
            size={22}
            onClick={toggleModal}
            style={{ cursor: 'pointer' }}
          />
          <p>Bonjour Denovann</p>
        </div>
      </header>
      {isThemeModalOpen && <ThemeModal onChangeGradient={changeGradient} />}
    </>
  );
};

export default Header;
