import './ThemeModal.scss';

const gradients = [
  'linear-gradient(to right, #dc2430, #7b4397)',
  'linear-gradient(to right, #00c6ff, #0072ff)',
  'linear-gradient(to right, #f12711, #f5af19)',
  'linear-gradient(to right, #8e2de2, #4a00e0)',
  'linear-gradient(to right, #134e5e, #71b280)',
  'linear-gradient(to right, #5614b0, #dbd65c)',
];

const ThemeModal = ({ onChangeGradient }) => {
  return (
    <div className="color-modal">
      <h2>Choisissez un dégradé</h2>
      <div className="gradient-grid">
        {gradients.map((gradient, index) => (
          <div
            key={index}
            className="gradient-option"
            style={{ background: gradient }}
            onClick={() => onChangeGradient(gradient)}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeModal;
