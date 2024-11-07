import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer-container">
      <ul>
        <Link to="/privacy-policy" className="footer-link">
          Politique de confidentialité
        </Link>
        <p>
          Développé par{' '}
          <a
            href="https://denovann.fr/"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            Denovann
          </a>
        </p>
        <Link to="/legal-mentions" className="footer-link">
          Mentions légales
        </Link>
      </ul>
    </footer>
  );
};

export default Footer;
