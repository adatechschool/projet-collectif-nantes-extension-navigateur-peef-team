//tableau qui va contenir les liens de images
let myRacoons = []
getRacoons()

//function qui va chercher les lines des images de raccoons
async function getRacoons() {
    try {
        const response = await fetch("https://api.racc.lol/v1/raccoons?take=203")
        const json = await response.json()
    
        const data = json.data
        console.log(data)
        
        if (data == undefined) {
            console.log("data is undefined")
            myRacoons = ["404.png"]
        } else {
            console.log("data is NOT undefined")
            myRacoons = data
        }
        raccoon()
    } catch (error) {
        console.log(error)
    }
}


function raccoon()
    {
        //selectionne les miniatures affichés à l'écran qui ne sont pas encore modifiés
        function getThumbnails()
        {
            const thumbnailQuery = "ytm-shorts-lockup-view-model > a > div > img.yt-core-image:only-child, ytd-thumbnail:not(.ytd-video-preview, .ytd-rich-grid-slim-media) a > yt-image > img.yt-core-image:only-child:not(.yt-core-attributed-string__image-element),.ytp-videowall-still-image:not([style*='extension:'])";

            const thumbnail = document.querySelectorAll(thumbnailQuery);

            thumbnail.forEach((image) =>
                {
                    console.log("selecting image")
                    let url = myRacoons[Math.floor(Math.random() * myRacoons.length)].url
                    applyThumbnails(image, url);
                }
            )
        }

        //rajoute une image de raccoon par dessus la miniature selectionné
        function applyThumbnails(image, imageUrl)
        {
                const overlay = document.createElement("img");
                overlay.src = imageUrl;
                overlay.style.position = "absolute";
                overlay.style.top = "0";
                overlay.style.left = "0";
                overlay.style.width = "100%";
                overlay.style.height = "100%";
                overlay.style.zIndex = "0";

                image.style.position = "relative";
                image.parentElement.appendChild(overlay);
        }

        setInterval(getThumbnails, 100);
    }