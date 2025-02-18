import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  getImageFromIndexedDB,
  saveImageToIndexedDB,
} from '../../../utils/indexedDBService';
import themesColor from '../../../data/themesColor';
import './ThemeModal.scss';
import space1 from '../../../assets/earth2.jpg';
import space2 from '../../../assets/universe.webp';
import space3 from '../../../assets/space3.webp';
import space4 from '../../../assets/earth.webp';
import space5 from '../../../assets/nasaearth.webp';
import AddTheme from './AddTheme';

const defaultThemes = [
  { name: 'background1', image: space1 },
  { name: 'background2', image: space2 },
  { name: 'background3', image: space3 },
  { name: 'background4', image: space4 },
  { name: 'background5', image: space5 },
];

const ThemeModal = ({
  onChangeTheme,
  onChangeColorTheme,
  onChangeExpertMode,
}) => {
  const [themes, setThemes] = useState(defaultThemes);
  const isExpertMode = useSelector((state) => state.mark.isExpertMode);

  // chargement de l'image ajouter par l'utilisateur
  useEffect(() => {
    const loadCustomTheme = async () => {
      const savedCustomTheme = await getImageFromIndexedDB(
        'customBackgroundImage'
      );
      if (savedCustomTheme) {
        setThemes((prevThemes) => [
          ...prevThemes,
          { name: 'Custom', image: savedCustomTheme },
        ]);
      }
    };
    loadCustomTheme();
  }, []);

  // sauvegarde de l'image de l'utilisateur dans indexdb
  const handleAddCustomTheme = async (imageDataUrl) => {
    setThemes((prevThemes) => [
      ...prevThemes,
      { name: 'Custom', image: imageDataUrl },
    ]);
    onChangeTheme(imageDataUrl);

    // Sauvegarder l'image personnalisée
    await saveImageToIndexedDB('customBackgroundImage', imageDataUrl);
    // Définir le thème actuel comme l'image personnalisée
    await saveImageToIndexedDB('currentTheme', imageDataUrl);
  };
  return (
    <div className="theme-modal">
      <h2>Choisissez un thème</h2>
      <div className="theme-grid">
        {themes.map((theme) => (
          <button
            type="button"
            key={theme.name}
            className="theme-option"
            style={{ backgroundImage: `url(${theme.image})` }}
            onClick={() => onChangeTheme(theme.image)}
            aria-label={`Choisir le thème ${theme.name}`}
          />
        ))}
        <AddTheme onAddCustomTheme={handleAddCustomTheme} />
      </div>
      <div className="theme-color-option">
        {themesColor.map((theme) => (
          <button
            type="button"
            key={theme.name}
            className="theme-circle"
            style={{
              backgroundColor: theme.color,
            }}
            onClick={() => onChangeColorTheme(theme)}
            aria-label={`Changer pour le thème ${theme.name}`}
          />
        ))}
      </div>
      <div className="mode-switch">
        <button
          type="button"
          className={`mode-button ${!isExpertMode ? 'active' : ''}`}
          onClick={() => onChangeExpertMode(false)}
        >
          Normal
        </button>
        <button
          type="button"
          className={`mode-button ${isExpertMode ? 'active' : ''}`}
          onClick={() => onChangeExpertMode(true)}
        >
          Expert
        </button>
      </div>
    </div>
  );
};

ThemeModal.propTypes = {
  onChangeTheme: PropTypes.func.isRequired,
  onChangeColorTheme: PropTypes.func.isRequired,
  onChangeExpertMode: PropTypes.func.isRequired,
};

export default ThemeModal;
