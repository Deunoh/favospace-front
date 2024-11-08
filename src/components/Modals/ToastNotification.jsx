import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { IoClose } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { hideToast } from '../../actions/markActions';

const ToastNotification = ({ message, type = 'info' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      dispatch(hideToast());
    }, 5000);

    return () => clearTimeout(timer);
  }, [message, dispatch]);

  const bgColor = type === 'error' ? '#EF4444' : '#3B82F6';

  const notificationStyle = {
    position: 'fixed',
    top: 0,
    left: '50%',
    transform: `translate(-50%, ${isVisible ? '0' : '-100%'})`,
    backgroundColor: bgColor,
    color: 'white',
    padding: '1rem',
    borderRadius: '0 0 20px 20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '20rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'transform 0.3s ease-in-out',
    zIndex: 3000,
  };

  const buttonStyle = {
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <div style={notificationStyle}>
      <span>{message}</span>
      <button
        type="button"
        onClick={() => setIsVisible(false)}
        style={buttonStyle}
      >
        <IoClose size={20} />
      </button>
    </div>
  );
};

ToastNotification.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default ToastNotification;
