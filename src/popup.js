document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("power-button").addEventListener('click', () => {
        chrome.tabs.query({ active: true, currentWindow: true}, (tabs) => {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                files: ["src/modificationTexte.js", "src/liens.js", "src/image.js"]
            })
        })
    })
})