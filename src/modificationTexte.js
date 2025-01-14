// document.addEventListener("DOMContentLoaded", () => {
//     document.getElementById("change-text")
//     document.addEventListener("click", () => {
//         chrome.tabs.query({active: true, currentWindow: true}, (tabs) =>{
//             chrome.scripting.executeScript({
//                 target: {tabId: tabs[0].id},
//                 func: changeWords 
//             })
//         })
//     })
// })

// Permet de rajouter devant chaque texte le mot racoon 
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