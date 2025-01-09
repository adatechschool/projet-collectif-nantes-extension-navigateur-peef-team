function connectingRacoon() {

    // const connectingSection = document.querySelector("yt-spec-button-shape-next__button-text-content")
    const textConnecting = document.querySelector("yt-core-attributed-string yt-core-attributed-string--white-space-no-wrap")

    if(textConnecting) {
        
        textConnecting.forEach(el => {
            el.textContenT = "Se Racooner"
            console.log("It's ok")
        })
        console.log("It's not ok")
    }
}

connectingRacoon()