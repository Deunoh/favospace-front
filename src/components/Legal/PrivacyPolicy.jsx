import { Link } from 'react-router-dom';
import './Legal.scss';

const PrivacyPolicy = () => {
  return (
    <div className="legal-container">
      <div className="legal-content">
        <h1>Politique de Confidentialité</h1>

        <section>
          <h2>Données personnelles collectées</h2>
          <p>
            Dans le cadre de votre utilisation de Favospace, nous collectons
            uniquement votre nom d'utilisateur et votre adresse e-mail. Ces
            informations sont strictement nécessaires pour créer votre compte et
            permettre votre connexion sécurisée à la plateforme.
          </p>

          <p>
            Ces données sont utilisées exclusivement pour l'authentification et
            la gestion de votre compte utilisateur, conformément à votre
            consentement lors de l'inscription.
          </p>
        </section>

        <section>
          <h2>Utilisation des données</h2>
          <p>
            Vos données sont utilisées uniquement pour assurer le bon
            fonctionnement de votre compte Favospace. Elles ne sont ni
            partagées, ni vendues à des tiers.
          </p>

          <p>
            Le traitement de vos données est basé sur votre consentement, que
            vous nous accordez lors de votre inscription. Vous pouvez retirer ce
            consentement à tout moment en supprimant votre compte.
          </p>
        </section>

        <section>
          <h2>Vos droits</h2>
          <p>
            Conformément au RGPD, vous pouvez à tout moment supprimer votre
            compte et toutes les données associées directement depuis
            l'application. Pour toute modification de vos données (nom
            d'utilisateur, email) ou pour obtenir une copie de vos données, vous
            pouvez nous contacter à l'adresse : denovann@live.fr.
          </p>

          <p>
            Nous traiterons toute demande relative à vos données dans un délai
            maximum de 30 jours.
          </p>
        </section>

        <section>
          <h2>Cookies et stockage local</h2>
          <p>
            Actuellement, Favospace n'utilise pas de cookies. Pour le
            fonctionnement de l'authentification, nous utilisons uniquement le
            stockage local de votre navigateur pour conserver votre jeton de
            connexion de manière sécurisée.
          </p>

          <p>
            Cette politique pourra être mise à jour si des modifications sont
            apportées à notre utilisation des cookies ou du stockage local. Vous
            serez informés de tout changement significatif.
          </p>
        </section>

        <div className="back-link">
          <Link to="/">Retour à vos espaces</Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
