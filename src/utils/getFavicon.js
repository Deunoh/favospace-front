const FAVICON_EXCEPTIONS = [
  'github.com',
  'github.io',
  'youtube.com',
  'www.youtube.com',
  'www.canalplus.com',
];

// With google
// const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
// With faviconextractor (best)
// const faviconUrl = `https://www.faviconextractor.com/favicon/${domain}?larger=true`;
// With icon horse (limited request)
// const faviconUrl = `https://icon.horse/icon/${domain}`;
// With duckduckgo (poor quality)
// const faviconUrl = `https://icons.duckduckgo.com/ip3/${domain}.ico`;

// const getFavicon = (url) => {
//   const domain = new URL(url).hostname;
//   return FAVICON_EXCEPTIONS.includes(domain)
//     ? `https://www.google.com/s2/favicons?domain=${domain}&sz=64`
//     : `https://www.faviconextractor.com/favicon/${domain}?larger=true`;
// };

// ==================================================================================
// FaviconExtractor Down Second version of get favicon

const FAVICON_GOOGLE_EXCEPTIONS = [
  'mail.google.com',
  'www.cvboost.ai',
  'react-icons.github.io',
];
const getFavicon = (url) => {
  const domain = new URL(url).hostname;
  return FAVICON_GOOGLE_EXCEPTIONS.includes(domain)
    ? `https://icons.duckduckgo.com/ip3/${domain}.ico`
    : `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
};

export default getFavicon;

// const getFavicon = async (url) => {
//   const domain = new URL(url).hostname;
//   const googleFaviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
//   const iconHorseUrl = `https://icon.horse/icon/${domain}`;

//   try {
//     const response = await fetch(googleFaviconUrl, { method: 'HEAD' });
//     if (response.ok) {
//       return googleFaviconUrl;
//     }
//   } catch (error) {
//     console.error(
//       `Erreur lors de la récupération du favicon pour ${domain}:`,
//       error
//     );
//   }

//   // Fallback sur icon.horse si Google ne trouve pas l'icône
//   return iconHorseUrl;
// };
