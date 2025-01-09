// Variables pour le contrôle des requêtes
let lastRequestTime = 0;
const COOLDOWN_PERIOD = 2000; // 2 secondes entre chaque requête

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

// Fonction pour obtenir l'ID de la vidéo à partir d'un élément
function getVideoIdFromElement(element) {
    const videoContainer = element.closest('[data-watch-id]');
    if (videoContainer) {
        return videoContainer.getAttribute('data-watch-id');
    }

    const linkElement = element.closest('a');
    if (linkElement && linkElement.href) {
        return extractYouTubeId(linkElement.href);
    }

    return null;
}

// Fonction pour vérifier le rate limit
function canMakeRequest() {
    const now = Date.now();
    if (now - lastRequestTime < COOLDOWN_PERIOD) {
        return false;
    }
    lastRequestTime = now;
    return true;
}

// Fonction pour rediriger vers l'API avec vérification préalable
async function redirectToApi(videoId) {
    if (!canMakeRequest()) {
        alert('Veuillez attendre quelques secondes avant de faire une nouvelle requête.');
        return;
    }

    const apiUrl = `https://api.racc.lol/v1/video?id=${videoId}`;
    
    try {
        // Vérifie d'abord si l'API est accessible
        const response = await fetch(apiUrl, {
            method: 'HEAD'  // Utilise HEAD pour vérifier rapidement la disponibilité
        });

        if (response.status === 429) {
            alert('Limite de requêtes atteinte. Veuillez réessayer dans quelques minutes.');
            return;
        }

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Si tout va bien, redirige
        window.location.href = apiUrl;

    } catch (error) {
        console.error('Erreur lors de la redirection:', error);
        alert('Une erreur est survenue. Veuillez réessayer plus tard.');
    }
}

// Fonction pour gérer les clics sur les éléments YouTube
function handleYouTubeClick(event) {
    const target = event.target;
    
    const isVideoDetail = target.closest('#details') || 
                         target.closest('.ytd-video-meta') ||
                         target.closest('.ytd-channel-name') ||
                         target.closest('.ytd-video-owner-renderer');

    if (!isVideoDetail && !target.closest('a')) return;

    const videoId = getVideoIdFromElement(target);
    if (!videoId) return;

    event.preventDefault();
    event.stopPropagation();

    redirectToApi(videoId);
}

// Ajout du listener avec délégation d'événements
document.addEventListener('click', handleYouTubeClick, true);