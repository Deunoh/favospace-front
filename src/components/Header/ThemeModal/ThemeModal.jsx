import { useEffect, useState } from 'react';
import {
  getImageFromIndexedDB,
  saveImageToIndexedDB,
} from '../../../utils/indexedDBService';
import './ThemeModal.scss';
import space1 from '../../../assets/space1.webp';
import space2 from '../../../assets/space2.webp';
import space3 from '../../../assets/space3.webp';
import star from '../../../assets/star.webp';
import forest from '../../../assets/forest.webp';
import AddTheme from './AddTheme';

const defaultThemes = [
  { name: 'background1', image: space1 },
  { name: 'background2', image: space2 },
  { name: 'background3', image: space3 },
  { name: 'background4', image: star },
  { name: 'background5', image: forest },
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
