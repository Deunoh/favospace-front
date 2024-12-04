import React from 'react';
import PropTypes from 'prop-types';
import './ActionButton.scss';

const ActionButton = ({ icon: Icon, label, onClick }) => {
  return (
    <button type="button" onClick={onClick} className="ActionButton">
      <div className="IconContainer">
        <Icon size={32} />
      </div>
      <p className="ActionLabel">{label}</p>
    </button>
  );
};

ActionButton.propTypes = {
  icon: PropTypes.elementType.isRequired, // Nom react icon (par ex. IoShare)
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ActionButton;
