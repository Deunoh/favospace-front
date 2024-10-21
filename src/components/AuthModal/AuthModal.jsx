import React, { useState } from 'react';
import './AuthModal.scss';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import InputWithIcon from './InputWithIcon';

const AuthModal = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? 'Connexion' : 'Inscription', {
      name,
      email,
      password,
    });
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="auth-modal">
      <div className={`card ${isLogin ? 'flipped' : ''}`}>
        <div className="card-inner">
          <div className="card-front">
            <h2 className="title-inscription">Créer un compte</h2>
            <span className="message-inscription">Favospace est gratuit !</span>
            <form onSubmit={handleSubmit}>
              <InputWithIcon
                icon={<FaUser />}
                type="text"
                placeholder="Nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <InputWithIcon
                icon={<FaEnvelope />}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <InputWithIcon
                icon={<FaLock />}
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
          <div className="card-back">
            <h2 className="title-connexion">Connexion</h2>
            <form onSubmit={handleSubmit}>
              <InputWithIcon
                icon={<FaEnvelope />}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <InputWithIcon
                icon={<FaLock />}
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
