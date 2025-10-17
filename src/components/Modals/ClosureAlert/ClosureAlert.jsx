import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './ClosureAlert.scss';

const ClosureAlert = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const isUserConnected = useSelector((state) => state.user.isConnected);
  const userName = useSelector((state) => state.user.userName);

  useEffect(() => {
    // Afficher l'alerte uniquement si l'utilisateur est connecté
    if (isUserConnected) {
      setIsVisible(true);
    }
  }, [isUserConnected]);

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      const token = localStorage.getItem('token_jwt');
      
      const response = await axios.get(
        'https://api.favospace.fr/api/user/export-bookmarks',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          responseType: 'blob',
        }
      );

      // Créer un lien de téléchargement
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      
      // Générer le nom du fichier avec la date
      const date = new Date().toISOString().split('T')[0];
      const filename = `favospace_bookmarks_${userName.replace(/\s+/g, '-').toLowerCase()}_${date}.html`;
      
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Erreur lors du téléchargement des favoris:', error);
      alert('Une erreur est survenue lors du téléchargement. Veuillez réessayer.');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible || !isUserConnected) {
    return null;
  }

  return (
    <div className="closure-alert-overlay">
      <div className="closure-alert">
        <button 
          className="closure-alert__close" 
          onClick={handleClose}
          aria-label="Fermer"
        >
          ×
        </button>
        
        <div className="closure-alert__content">
          <h2 className="closure-alert__title">
            ⚠️ Fermeture de Favospace
          </h2>
          
          <p className="closure-alert__message">
            Nous vous informons que <strong>Favospace fermera définitivement ses portes le 1er novembre 2025</strong>.
          </p>
          
          <p className="closure-alert__message">
            Avant cette date, pensez à télécharger tous vos favoris au format HTML compatible avec Chrome, Firefox, Edge et Safari.
          </p>
          
          <button 
            className="closure-alert__download-btn"
            onClick={handleDownload}
            disabled={isDownloading}
          >
            {isDownloading ? (
              <>
                <span className="closure-alert__spinner"></span>
                Téléchargement en cours...
              </>
            ) : (
              <>
                📥 Télécharger mes favoris
              </>
            )}
          </button>
          
          <p className="closure-alert__thank-you">
            Merci de votre confiance et de votre fidélité. 💙
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClosureAlert;
