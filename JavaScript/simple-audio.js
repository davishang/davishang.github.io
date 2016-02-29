var myNode = document.querySelector('.player');
var audioPlayer = document.createElement('audio');
audioPlayer.src = 'http://planetoftheweb.com/i/audio.zip';
myNode.addEventListener('click',function() {
    audioPlayer.play();
}, false);

