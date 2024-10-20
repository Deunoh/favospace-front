import { useEffect, useState } from 'react';
import {
  getImageFromIndexedDB,
  saveImageToIndexedDB,
} from '../../../utils/indexedDBService';
import './ThemeModal.scss';
import mountain1 from '../../../assets/mountain-1.jpg';
import mountain2 from '../../../assets/mountain-2.jpg';
import mountain3 from '../../../assets/mountain-3.jpg';
import mountain4 from '../../../assets/mountain-4.jpg';
import mountainDark1 from '../../../assets/mountain_dark-1.png';
import mountainDark2 from '../../../assets/mountain_dark-2.png';
import mountainDark3 from '../../../assets/mountain_dark-3.png';
import AddTheme from './AddTheme';

const defaultThemes = [
  { name: 'Mountain 3', image: mountain3 },
  { name: 'Mountain 4', image: mountain4 },
  { name: 'Mountain dark 1', image: mountainDark1 },
  { name: 'Mountain dark 2', image: mountainDark2 },
  { name: 'Mountain dark 3', image: mountainDark3 },
];

const ThemeModal = ({ onChangeTheme }) => {
  const [themes, setThemes] = useState(defaultThemes);

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
        {themes.map((theme, index) => (
          <div
            key={index}
            className="theme-option"
            style={{ backgroundImage: `url(${theme.image})` }}
            onClick={() => onChangeTheme(theme.image)}
          />
        ))}
        <AddTheme onAddCustomTheme={handleAddCustomTheme} />
      </div>
    </div>
  );
};

export default ThemeModal;
