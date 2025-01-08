// const thumbnail = document.getElementsByTagName("img")

let myRacoons = []
getRacoons()

// async function zaWorldo() {
//     myRacoons = await getRacoons()
//     changeThumbnail()
//     addEventListener('scroll', () => {
//         console.log("scroll detected!")
//         changeThumbnail()
//     })
// }

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

// function changeThumbnail() {
//     console.log("changing thumbnail...")
//     for (const image of thumbnail) {
//         const i = Math.floor(Math.random() * myRacoons.length)
//         image.src = myRacoons[i].url
//     }
// }

// zaWorldo()

function raccoon()
    {
        var isEnabled = true;

        //NOTE: The purpose of this function is to get all YouTube thumbnails on the page
        function getThumbnails()
        {
            const thumbnailQuery = "ytd-thumbnail:not(.ytd-video-preview, .ytd-rich-grid-slim-media) a > yt-image > img.yt-core-image:only-child:not(.yt-core-attributed-string__image-element)";
            // ytd-thumbnail:not(.ytd-video-preview, .ytd-rich-grid-slim-media) a > yt-image > img.yt-core-image:only-child:not(.yt-core-attributed-string__image-element),.ytp-videowall-still-image:not([style*='extension:'])
            // yt-core-image shortsLockupViewModelHostThumbnail yt-core-image--fill-parent-height yt-core-image--fill-parent-width yt-core-image--content-mode-scale-aspect-fill yt-core-image--loaded

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
            if (image.nodeName == "IMG")
            {
                // image.src = myRacoons[Math.floor(Math.random() * myRacoons.length)]
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
            else if (image.nodeName == "DIV")
            {
                image.style.backgroundImage = `url("${imageUrl}"), ` + image.style.backgroundImage;
            }
        }

        //runs the functions
        if(isEnabled) //checks if the user has disabled the plugin or not
        {
            setInterval(getThumbnails, 100);
        }
    }