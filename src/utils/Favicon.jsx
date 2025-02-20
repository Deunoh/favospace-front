import { useState } from 'react';
import PropTypes from 'prop-types';

const FAVICON_EXCEPTIONS = [
  'github.com',
  'github.io',
  'youtube.com',
  'www.youtube.com',
  'www.canalplus.com',
  'music.apple.com',
];

const getFavicon = (url) => {
  const domain = new URL(url).hostname;
  if (FAVICON_EXCEPTIONS.includes(domain)) {
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
  }
  return `https://www.faviconextractor.com/favicon/${domain}?larger=true`;
};

const Favicon = ({ url, className = '' }) => {
  const [faviconUrl, setFaviconUrl] = useState(getFavicon(url));

  const handleError = () => {
    const domain = new URL(url).hostname;
    if (!FAVICON_EXCEPTIONS.includes(domain)) {
      setFaviconUrl(
        `https://www.google.com/s2/favicons?domain=${domain}&sz=64`
      );
    }
  };

  return (
    <img
      src={faviconUrl}
      alt="favicon"
      className={className}
      onError={handleError}
    />
  );
};

Favicon.propTypes = {
  url: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Favicon;
