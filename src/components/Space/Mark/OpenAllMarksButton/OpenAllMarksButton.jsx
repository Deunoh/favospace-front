import { MdOpenInNew } from 'react-icons/md';
import './OpenAllMarksButton.scss';

const OpenAllMarksButton = ({ marks }) => {
  const handleOpenAllMarks = (e) => {
    e.preventDefault();
    marks.forEach((mark, index) => {
      setTimeout(() => {
        window.open(mark.url, '_blank');
      }, index * 100);
    });
  };

  return (
    <a href="#" onClick={handleOpenAllMarks} className="OpenAllMarksButton">
      <div className="TileImgContainer">
        <MdOpenInNew size={40} />
      </div>
      <p className="TileTitle">Ouvrir tout</p>
    </a>
  );
};

export default OpenAllMarksButton;
