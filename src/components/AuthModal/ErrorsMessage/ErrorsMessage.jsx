import PropTypes from 'prop-types';
import './ErrorsMesssage.scss';

const ErrorMessage = ({ fieldName, errors = {} }) => {
  if (errors && errors[fieldName] && errors[fieldName][0]) {
    return <p className="error-message">{errors[fieldName][0]}</p>;
  }
  return null;
};

ErrorMessage.propTypes = {
  fieldName: PropTypes.string.isRequired,
  errors: PropTypes.object,
};

export default ErrorMessage;
