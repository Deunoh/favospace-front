import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import './AuthModal.scss';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import InputWithIcon from './InputWithIcon';
import backgroundVideo from '../../assets/earth_video.mp4';
import backgroundImage from '../../assets/earth_bg.png';
import {
  changeEmailValue,
  changeNameValue,
  changePasswordValue,
  submitLogin,
  submitSignin,
} from '../../actions/authActions';

const AuthModal = () => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(false);
  const name = useSelector((state) => state.user.inputName);
  const email = useSelector((state) => state.user.inputEmail);
  const password = useSelector((state) => state.user.inputPassword);

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    dispatch(submitLogin());
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    dispatch(submitSignin());
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    dispatch(changeNameValue(''));
    dispatch(changeEmailValue(''));
    dispatch(changePasswordValue(''));
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
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className={`card ${isLogin ? 'flipped' : ''}`}>
        <div className="card-inner">
          <div className="card-front">
            <h2 className="title-connexion">Connexion</h2>
            <form onSubmit={handleSubmitLogin}>
              <InputWithIcon
                icon={<FaEnvelope />}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => dispatch(changeEmailValue(e.target.value))}
                required
              />
              <InputWithIcon
                icon={<FaLock />}
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => dispatch(changePasswordValue(e.target.value))}
                required
              />
              <button type="submit" className="submit-btn">
                Se connecter
              </button>
            </form>
            <p className="link-paragraph">
              Pas encore de compte ?{' '}
              <button type="button" className="link" onClick={toggleMode}>
                S'inscrire
              </button>
            </p>
          </div>

          <div className="card-back">
            <h2 className="title-inscription">Créer un compte</h2>
            <span className="message-inscription">Favospace est gratuit !</span>
            <form onSubmit={handleSubmitRegister}>
              <InputWithIcon
                icon={<FaUser />}
                type="text"
                placeholder="Nom"
                value={name}
                onChange={(e) => dispatch(changeNameValue(e.target.value))}
                required
              />
              <InputWithIcon
                icon={<FaEnvelope />}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => dispatch(changeEmailValue(e.target.value))}
                required
              />
              <InputWithIcon
                icon={<FaLock />}
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => dispatch(changePasswordValue(e.target.value))}
                required
              />
              <button type="submit" className="submit-btn">
                S'inscrire
              </button>
            </form>
            <p className="link-paragraph">
              Déjà un compte ?{' '}
              <button type="button" className="link" onClick={toggleMode}>
                Se connecter
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
