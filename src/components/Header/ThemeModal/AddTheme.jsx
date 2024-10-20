import React, { useRef } from 'react';
import { FaCirclePlus } from 'react-icons/fa6';
import { saveImageToIndexedDB } from '../../../utils/indexedDBService';
import './ThemeModal.scss';

const AddTheme = ({ onAddCustomTheme }) => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const imageDataUrl = e.target.result;
        onAddCustomTheme(imageDataUrl);

        // Save to IndexedDB instead of localStorage
        await saveImageToIndexedDB('customBackgroundImage', imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="add-theme-option theme-option" onClick={handleClick}>
      <FaCirclePlus size={40} />
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default AddTheme;
