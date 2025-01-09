chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        // func: changeWords
        files: ["src/modificationTexte.js", "src/liens.js", "src/image.js", "src/connecting.js"]
    });
});
