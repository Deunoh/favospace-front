import PropTypes from 'prop-types';

const InputWithIcon = ({
  icon,
  type,
  placeholder,
  value,
  onChange,
  required = 'false',
}) => (
  <div className="input-container">
    {icon}
    <div className="separator">|</div>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);

InputWithIcon.propTypes = {
  icon: PropTypes.element.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export default InputWithIcon;
