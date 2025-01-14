//  Permet de rajouter devant chaque texte le mot racoon 
function changeWords() {

    // Balise YouTube ciblées 
    const elements = document.querySelectorAll("yt-formatted-string") 
        
    if(elements) {
        elements.forEach(el => {
            el.textContent = `Racoon ${el.textContent}`
            console.log("le texte est modifié")
        })
    }else{
        console.log("section non trouvé")
    }
}

// Permet d'attendre que YouTube soit charger 
setTimeout(changeWords, 1000)