import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <p className="lost-text">
          On dirait que vous êtes perdu dans l'espace...
        </p>
        <p className="back-text">
          <a href="/">Retour à vos espaces</a>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
