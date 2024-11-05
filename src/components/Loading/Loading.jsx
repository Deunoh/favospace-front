import './Loading.scss';

const Loading = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-container">
        <div className="solar-system">
          <div className="planet" />
          <div className="orbit">
            <div className="star star-1" />
            <div className="star star-2" />
            <div className="star star-3" />
          </div>
        </div>
        <p className="loading-text">Chargement en cours...</p>
      </div>
    </div>
  );
};

export default Loading;
