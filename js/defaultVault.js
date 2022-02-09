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
let reopenTime = 3000

// Defines timer to stand media
const mediaTimer = async (ms = 15000) =>
    new Promise(resolve => setTimeout(resolve, ms))

// Shows the media
async function pipMedia() {
    for (let i = 0; i < medias.length; i += 1) {

        // If this media is an image
        if(medias[i].charAt(medias[i].length - 1) == 'p'){
            imageStand.style.display = 'block'
            videoStand.style.display = 'none'
            imageStandMedia.src = medias[i]
            await mediaTimer(3000)
        }

        // If this media is a video
        if(medias[i].charAt(medias[i].length - 1) == 'm'){
            imageStand.style.display = 'none'
            videoStand.style.display = 'block'
            videoStandMedia.src = medias[i]
            await mediaTimer(30000)
        }
    }
}

// Open media stand when system load
function openStand() {
    // Reopen media if all medias was showed up
    pipMedia()
    setInterval(() => { pipMedia() }, 15000 * medias.length + 1)
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