// Le CSS à injecter - version avec sélecteur robuste
const logoCSS = `
ytd-topbar-logo-renderer #logo-icon, 
ytd-topbar-logo-renderer #logo-icon-container,
ytd-topbar-logo-renderer #logo {
    position: relative !important;
    width: 90px !important;
    height: 20px !important;
}

ytd-topbar-logo-renderer #logo-icon::after,
ytd-topbar-logo-renderer #logo-icon-container::after,
ytd-topbar-logo-renderer #logo::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://i.ibb.co/Mc7ZPHY/Raco-Tube-2.jpg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 1000;
}

ytd-topbar-logo-renderer #logo-icon > *,
ytd-topbar-logo-renderer #logo-icon-container > *,
ytd-topbar-logo-renderer #logo > * {
    display: none !important;
}`;

// Gérer le clic sur l'icône de l'extension
chrome.action.onClicked.addListener(async (tab) => {
    if (tab.url.includes("youtube.com")) {
        try {
            // Injecter le CSS
            await chrome.scripting.insertCSS({
                target: { tabId: tab.id },
                css: logoCSS
            });

            // Injecter le code JavaScript
            await chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: replaceLogo
            });
        } catch (error) {
            console.error('Erreur lors de la modification du logo:', error);
        }
    }

    // Injecter les autres fichiers JavaScript
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["src/modificationTexte.js", "src/liens.js", "src/image.js", "src/connecting.js"]
    });
});

function replaceLogo() {
    function cleanAndReplaceLogo(logo) {
        if (!logo.dataset.modified) {
            logo.dataset.modified = 'true';
            
            // Supprimer tous les enfants existants
            while (logo.firstChild) {
                logo.removeChild(logo.firstChild);
            }
            
            // Créer un conteneur vide pour maintenir les dimensions
            const placeholder = document.createElement('div');
            placeholder.style.width = '100%';
            placeholder.style.height = '100%';
            logo.appendChild(placeholder);
        }
    }

    // Observer pour gérer les logos dynamiques
    const observer = new MutationObserver((mutations) => {
        const logoElements = document.querySelectorAll('ytd-topbar-logo-renderer #logo-icon, ytd-topbar-logo-renderer #logo-icon-container, ytd-topbar-logo-renderer #logo');
        logoElements.forEach(cleanAndReplaceLogo);
    });

    // Observer le document pour les changements
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Traiter les logos existants
    const logoElements = document.querySelectorAll('ytd-topbar-logo-renderer #logo-icon, ytd-topbar-logo-renderer #logo-icon-container, ytd-topbar-logo-renderer #logo');
    logoElements.forEach(cleanAndReplaceLogo);
}
