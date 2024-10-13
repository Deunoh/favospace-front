import React from 'react';
import './ThemeModal.scss';
import mountain1 from '../../../assets/mountain-1.jpg';
import mountain2 from '../../../assets/mountain-2.jpg';
import mountain3 from '../../../assets/mountain-3.jpg';
import mountain4 from '../../../assets/mountain-4.jpg';
import mountainDark1 from '../../../assets/mountain_dark-1.png';
import mountainDark2 from '../../../assets/mountain_dark-2.png';
import mountainDark3 from '../../../assets/mountain_dark-3.png';

const themes = [
  { name: 'Mountain 1', image: mountain1 },
  { name: 'Mountain 2', image: mountain2 },
  { name: 'Mountain 3', image: mountain3 },
  { name: 'Mountain 4', image: mountain4 },
  { name: 'Mountain dark 1', image: mountainDark1 },
  { name: 'Mountain dark 2', image: mountainDark2 },
  { name: 'Mountain dark 3', image: mountainDark3 },
];

const ThemeModal = ({ onChangeTheme }) => {
  return (
    <div className="theme-modal">
      <h2>Choisissez un thème</h2>
      <div className="theme-grid">
        {themes.map((theme, index) => (
          <div
            key={index}
            className="theme-option"
            style={{ backgroundImage: `url(${theme.image})` }}
            onClick={() => onChangeTheme(theme.image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeModal;
