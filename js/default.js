// Media variables
let closeStandMedia = document.getElementById('close-media')

// All stand
let standMedia = document.getElementById('stand-media')

// Image and Video div's
let imageStand = document.getElementById('image-stand')
let videoStand = document.getElementById('video-stand')

// Image and Video tags to display
let imageStandMedia = document.getElementById('image-stand-media')
let videoStandMedia = document.getElementById('video-stand-media')

// Medias location
let medias = ['media/chilli-beans.webp', 'media/burger-king.webp', 'media/pepsi.webp', 'media/alok.webp', 'media/hugo-boss.webp', 'media/mcdonalds.webm']

// Timining in ms
const reopenTime = 3000
const imageTime = 15000
const videoTime = 30000

// Function to make delat
const mediaTimer = async (ms = 15000) => new Promise(resolve => setTimeout(resolve, ms))

// Shows the media
async function pipMedia(initial) {

    for (let i = 0; i < medias.length; i++) {

        // If this media is an image
        if (medias[i].charAt(medias[i].length - 1) == 'p') {
            imageStand.style.display = 'block'
            videoStand.style.display = 'none'
            imageStandMedia.src = medias[i]
            await mediaTimer(imageTime)
        }

        // If this media is a video
        if (medias[i].charAt(medias[i].length - 1) == 'm') {
            await mediaTimer(videoTime)
            imageStand.style.display = 'none'
            videoStand.style.display = 'block'
            videoStandMedia.src = medias[i]
        }
    }
}

// Open media stand when system load
function openStand() {
    // Reopen media if all medias was showed up
    pipMedia()

    let imageCounter = 0
    let videoCounter = 0
    let totalTime = 0
    let howManyVideosAndImage = medias.forEach(e => {
            if(e.charAt(-1) == 'p') imageCounter ++
            if(e.charAt(-1) == 'm') videoCounter ++
            totalTime = (imageCounter * 15000) + (videoCounter * 30000) 
    });

    setInterval(() => { pipMedia(initial) }, totalTime)
}

// Reopen media stand after 1 min of inactivity
function reOpenStand() {
    setTimeout(() => { standMedia.style.display = 'block' }, reopenTime)
}

// Keep stand close if have user interaction

// User closes media stand
function closeStand() {
    standMedia.style.display = 'none'
    reOpenStand()
}
closeStandMedia.addEventListener('click', () => {
    closeStand()
})