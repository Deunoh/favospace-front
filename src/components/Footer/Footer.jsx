import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer-container">
      <ul>
        <Link to="/privacy-policy">politique de confidentialité</Link>
        <p>
          Développé par <a href="https://denovann.fr/">Denovann</a>
        </p>
        <Link to="/mentions-legales">Mentions légales</Link>
      </ul>
    </footer>
  );
};

export default Footer;
