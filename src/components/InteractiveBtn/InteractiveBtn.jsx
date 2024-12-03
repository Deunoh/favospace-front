import PropTypes from 'prop-types';
import './InteractiveBtn.scss';

const InteractiveBtn = ({ label, onClick, title }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="interactive-button"
      title={title}
    >
      {label}
    </button>
  );
};

InteractiveBtn.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
export default InteractiveBtn;
