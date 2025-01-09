let myRacoons = []
getRacoons()

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
        //NOTE: The purpose of this function is to get all YouTube thumbnails on the page
        function getThumbnails()
        {
            const thumbnailQuery = "ytm-shorts-lockup-view-model > a > div > img.yt-core-image:only-child, ytd-thumbnail:not(.ytd-video-preview, .ytd-rich-grid-slim-media) a > yt-image > img.yt-core-image:only-child:not(.yt-core-attributed-string__image-element),.ytp-videowall-still-image:not([style*='extension:'])";
            // yt-core-image yt-core-image--fill-parent-height yt-core-image--fill-parent-width yt-core-image--content-mode-scale-aspect-fill yt-core-image--loaded
            // ytd-thumbnail:not(.ytd-video-preview, .ytd-rich-grid-slim-media) a > yt-image > img.yt-core-image:only-child:not(.yt-core-attributed-string__image-element),.ytp-videowall-still-image:not([style*='extension:'])

            // yt-core-image shortsLockupViewModelHostThumbnail yt-core-image--fill-parent-height yt-core-image--fill-parent-width yt-core-image--content-mode-scale-aspect-fill yt-core-image--loaded
            // ytm-shorts-lockup-view-model > a > div > img.yt-core-image:only-child

            const thumbnail = document.querySelectorAll(thumbnailQuery);

            thumbnail.forEach((image) =>
                {
                    console.log("selecting image")
                    let url = myRacoons[Math.floor(Math.random() * myRacoons.length)].url
                    applyThumbnails(image, url);
                }
            )
        }

        //NOTE: The purpose of this function is to apply the thumbnail images to the thumbnails on YouTube.com
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

        //runs the functions
        setInterval(getThumbnails, 100);
    }