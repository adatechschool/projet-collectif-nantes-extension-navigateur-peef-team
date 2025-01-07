const thumbnail = document.getElementsByTagName("img")

let myRacoons = []

async function zaWorldo() {
    myRacoons = await getRacoons()
    changeThumbnail()
    addEventListener('scroll', () => {
        console.log("scroll detected!")
        changeThumbnail()
    })
}

async function getRacoons() {
    try {
        const response = await fetch("https://api.racc.lol/v1/raccoons?take=50&random=true")
        const json = await response.json()
    
        const data = json.data
        console.log(data)
        
        if (data == undefined) {
            console.log("data is undefined")
            return ["404.png"]
        } else {
            console.log("data is NOT undefined")
            return data
        }
    } catch (error) {
        console.log(error)
    }
}

function changeThumbnail() {
    console.log("changing thumbnail...")
    for (const image of thumbnail) {
        const i = Math.floor(Math.random() * myRacoons.length)
        image.src = myRacoons[i].url
    }
}

zaWorldo()