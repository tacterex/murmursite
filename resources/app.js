alert("Swipe on screen to hear purring")

let main = document.querySelector('#main')

var audio = new Audio('./resources/sound.mp3')
audio.playbackRate = 0.7

main.addEventListener('mousedown', function(){
    console.log('Pur')
    audio.play()
    navigator.vibrate([200])
})

main.addEventListener('mouseup', function(){
    audio.pause()
    audio.currentTime = 0
})

main.addEventListener('touchstart', function(){
    console.log('Pur')
    audio.play()
    navigator.vibrate([200])
})

main.addEventListener('touchend', function(){
    audio.pause()
    audio.currentTime = 0
})
