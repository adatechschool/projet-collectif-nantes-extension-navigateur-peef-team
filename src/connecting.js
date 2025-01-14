
// Fonction permettant de modifier les "se connecter" en "se racooner" 
function connectingRacoon() {
    // Cible l'id parent de la balise a modifier
    const connectingSection = document.querySelector('#end.style-scope.ytd-masthead')

    if (connectingSection) {
        // Cible le texte du bouton "Se connecter"
        const textConnecting = connectingSection.querySelector('.yt-spec-button-shape-next__button-text-content')

        if (textConnecting) {
            // Modifie le texte du bouton
            textConnecting.textContent = "Se Racooner"
            console.log("Texte du bouton en haut modifié avec succès !")
        } else {
            console.log("Le texte du bouton en haut'Se connecter' n'a pas été trouvé.")
        }
    } else {
        console.log("La section contenant le bouton en haut'Se connecter' n'a pas été trouvée.")
    }
    // modifie le "se connecter" qui se trouve sur la gauche
    const connectingSectionLeft = document.querySelector("#sign-in-button")

    if(connectingSectionLeft) {
        const textConnectingLeft = connectingSectionLeft.querySelector(".yt-core-attributed-string, .yt-core-attributed-string--white-space-no-wrap")

        if(textConnectingLeft) {
            textConnectingLeft.textContent = "Se Racooner"
            console.log("Texte du bouton à gauche modifié avec succès !")
        }else[
            console.log("Le texte du bouton à gauche'Se connecter' n'a pas été trouvé.")
        ]
    }else{
        console.log("La section contenant le bouton à gauche'Se connecter' n'a pas été trouvée.") 
    }
}

// Exécuter la fonction après le chargement du DOM
document.addEventListener("DOMContentLoaded", () => {
    connectingRacoon()
})

connectingRacoon()