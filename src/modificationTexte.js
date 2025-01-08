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

function changeWords() {

    const exploreSection = document.getElementById("items")

    if(exploreSection) {
        const elements = document.querySelectorAll("yt-formatted-string") 
        
        elements.forEach(el => {
            el.textContent = `Racoon ${el.textContent}`
        })
        console.log("le texte est modifié")
    }else{
        console.log("section non trouvé")
    }
}

changeWords()