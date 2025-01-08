// Fonction pour extraire l'ID de la vidéo YouTube
function extractYouTubeId(url) {
    try {
        const urlObj = new URL(url);
        
        // Format standard YouTube
        if (urlObj.pathname === '/watch') {
            return urlObj.searchParams.get('v');
        }
        
        // Format Shorts
        if (urlObj.pathname.startsWith('/shorts/')) {
            return urlObj.pathname.split('/shorts/')[1].split('/')[0];
        }
        
        // Format youtu.be
        if (urlObj.hostname === 'youtu.be') {
            return urlObj.pathname.slice(1);
        }
        
        return null;
    } catch (e) {
        console.error('Erreur lors de l\'extraction de l\'ID:', e);
        return null;
    }
}

// Fonction pour gérer les clics sur les liens YouTube
function handleYouTubeClick(event) {
    const target = event.target.closest('a');
    if (!target) return;

    const href = target.href;
    if (!href) return;

    const videoId = extractYouTubeId(href);
    if (!videoId) return;

    event.preventDefault();
    event.stopPropagation();

    const apiUrl = `https://api.racc.lol/v1/video?id=${videoId}`;
    
    // Redirection vers l'API
    window.location.href = apiUrl;
}

// Ajout du listener avec délégation d'événements
document.addEventListener('click', handleYouTubeClick, true);