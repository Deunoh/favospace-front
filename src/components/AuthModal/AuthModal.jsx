import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import './AuthModal.scss';
import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaSpinner } from 'react-icons/fa';
import InputWithIcon from './InputWithIcon';
import backgroundVideo from '../../assets/earth_video.mp4';
import backgroundImage from '../../assets/earth_bg.png';
import {
  changeEmailValue,
  changeNameValue,
  changePasswordValue,
  resetSuccessRegister,
  submitLogin,
  submitRegister,
  submitResetPassword,
} from '../../actions/authActions';
import ErrorMessage from './ErrorsMessage/ErrorsMessage';

const AuthModal = () => {
  const dispatch = useDispatch();
  // For reset password
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const name = useSelector((state) => state.user.inputName);
  const email = useSelector((state) => state.user.inputEmail);
  const password = useSelector((state) => state.user.inputPassword);
  const isSuccessRegister = useSelector(
    (state) => state.user.isSuccessfulRegister
  );

  // For turn the form when the register is Ok
  useEffect(() => {
    if (isSuccessRegister) {
      setIsLogin(false);
    }
  }, [isSuccessRegister]);

  // Erreurs et loading formulaire d'inscription
  const isRegisterLoading = useSelector(
    (state) => state.user.isRegisterLoading
  );
  const isLoginLoading = useSelector((state) => state.user.isLoginLoading);
  const errorsRegister = useSelector((state) => state.user.errorsRegister);
  const errorsLogin = useSelector((state) => state.user.errorsLogin);

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    dispatch(submitLogin());
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    dispatch(submitRegister());
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    dispatch(submitResetPassword(resetEmail));
    setShowForgotPassword(false);
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    dispatch(changeNameValue(''));
    dispatch(changeEmailValue(''));
    dispatch(changePasswordValue(''));
    dispatch(resetSuccessRegister());
  };

  const handleGoogleLogin = () => {
    // Add your Google login logic here
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
      <div className="favospace-button-container">
        <a
          href="https://about.favospace.fr/"
          target="_blank"
          rel="noopener noreferrer"
          className="favospace-button"
        >
          C'est quoi, Favospace ?
        </a>
      </div>
      <div className={`card ${isLogin ? 'flipped' : ''}`}>
        <div className="card-inner">
          {showForgotPassword ? (
            <div className="card-front card-forgot">
              <h2>Réinitialisation du mot de passe</h2>
              <form onSubmit={handleResetPassword}>
                <InputWithIcon
                  icon={<FaEnvelope />}
                  type="email"
                  placeholder="Email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  required
                />
                <div className="form-buttons">
                  <button type="submit" className="submit-btn">
                    Envoyer
                  </button>
                  <button
                    type="button"
                    className="cancel-btn"
                    onClick={() => setShowForgotPassword(false)}
                  >
                    Annuler
                  </button>
                </div>
              </form>
            </div>
          ) : (
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
                  onChange={(e) =>
                    dispatch(changePasswordValue(e.target.value))
                  }
                  required
                />
                <ErrorMessage fieldName="message" errors={errorsLogin} />
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isLoginLoading}
                >
                  {isLoginLoading ? (
                    <FaSpinner className="spinner" />
                  ) : (
                    'Se connecter'
                  )}
                </button>
                <button
                  type="button"
                  className="link forgot-pwd"
                  onClick={() => setShowForgotPassword(true)}
                >
                  Mot de passe oublié ?
                </button>
              </form>
              <p className="link-paragraph">
                Pas encore de compte ?{' '}
                <button type="button" className="link" onClick={toggleMode}>
                  S&apos;inscrire
                </button>
              </p>
              <div className="divider">Ou continuer avec</div>
              <button
                className="google-btn"
                type="button"
                onClick={() => handleGoogleLogin()}
              >
                <svg
                  version="1.1"
                  width="20"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  style={{ enableBackground: 'new 0 0 512 512' }}
                >
                  <path
                    style={{ fill: '#FBBB00' }}
                    d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
    c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
    C103.821,274.792,107.225,292.797,113.47,309.408z"
                  />
                  <path
                    style={{ fill: '#518EF8' }}
                    d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
    c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
    c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
                  />
                  <path
                    style={{ fill: '#28B446' }}
                    d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
    c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
    c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
                  />
                  <path
                    style={{ fill: '#F14336' }}
                    d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
    c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
    C318.115,0,375.068,22.126,419.404,58.936z"
                  />
                </svg>
                <span>Google</span>
              </button>
            </div>
          )}

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
              <ErrorMessage fieldName="name" errors={errorsRegister} />
              <InputWithIcon
                icon={<FaEnvelope />}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => dispatch(changeEmailValue(e.target.value))}
                required
              />
              <ErrorMessage fieldName="email" errors={errorsRegister} />
              <InputWithIcon
                icon={<FaLock />}
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => dispatch(changePasswordValue(e.target.value))}
                required
              />
              <ErrorMessage fieldName="password" errors={errorsRegister} />
              <p className="policy-message">
                En vous inscrivant, vous acceptez notre{' '}
                <Link to="/privacy-policy">politique de confidentialité</Link>
              </p>
              <button
                type="submit"
                className="submit-btn"
                disabled={isRegisterLoading}
              >
                {isRegisterLoading ? (
                  <FaSpinner className="spinner" />
                ) : (
                  "S'inscrire"
                )}
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
