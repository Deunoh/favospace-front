import { useParams } from 'react-router-dom';
import { FaLock, FaSpinner } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import '../AuthModal.scss';
import backgroundVideo from '../../../assets/earth_video.mp4';
import backgroundImage from '../../../assets/earth_bg.png';
import InputWithIcon from '../InputWithIcon';
import ErrorMessage from '../ErrorsMessage/ErrorsMessage';
import { submitNewPassword } from '../../../actions/authActions';

const ResetPassword = () => {
  const { token } = useParams();
  const dispatch = useDispatch();
  const isLoginLoading = useSelector((state) => state.user.isLoginLoading);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorPasswordMessage, setErrorPasswordMessage] = useState({});

  const handleSubmitPassword = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setErrorPasswordMessage({
        message: ['Les mots de passe ne correspondent pas.'],
      });
      return;
    }

    setErrorPasswordMessage({});
    dispatch(submitNewPassword(token, newPassword));
  };

  return (
    <div className="auth-modal">
      <video
        className="background-video"
        poster={backgroundImage}
        autoPlay
        loop
        muted
        playsInline
        // onError={backgroundImage}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="card">
        <div className="card-front">
          <h2>Réinitialisation du mot de passe</h2>
          <form onSubmit={handleSubmitPassword}>
            <InputWithIcon
              icon={<FaLock />}
              type="password"
              placeholder="Nouveau mot de passe"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <InputWithIcon
              icon={<FaLock />}
              type="password"
              placeholder="Confirmer le mot de passe"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <ErrorMessage fieldName="message" errors={errorPasswordMessage} />

            <button
              type="submit"
              className="submit-btn"
              disabled={isLoginLoading}
            >
              Réinitialiser
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
