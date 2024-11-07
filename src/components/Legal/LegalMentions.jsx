import { Link } from 'react-router-dom';
import './Legal.scss';

const LegalMentions = () => {
  return (
    <div className="legal-container">
      <div className="legal-content">
        <h1>Mentions Légales</h1>

        <section>
          <h2>Éditeur du site</h2>
          <p>Denovann Belloir</p>
          <p>Développeur indépendant</p>
          <p>Beauvais</p>
          <p>Email : denovann@live.fr</p>
          <p>Directeur de la publication : Denovann Belloir</p>
        </section>

        <section>
          <h2>Hébergement</h2>
          <p>IONOS SARL</p>
          <p>7 Place de la Gare, 57200 Sarreguemines, France</p>
          <p>Téléphone : 0970808911</p>
        </section>

        <section>
          <h2>Propriété intellectuelle</h2>
          <p>
            Favospace est un projet personnel open source, son utilisation et sa
            reproduction sont libres.
          </p>
        </section>

        <div className="back-link">
          <Link to="/">Retour à vos espaces</Link>
        </div>
      </div>
    </div>
  );
};

export default LegalMentions;
