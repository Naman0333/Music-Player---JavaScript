const audio = document.getElementById('song');
const playPauseBtn = document.getElementById('ctrlIcon');
const progress = document.getElementById('progress');

let isPlaying = false;


function togglePlay() {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.classList.remove('fa-pause');
        playPauseBtn.classList.add('fa-play');
    } else {
        audio.play();
        playPauseBtn.classList.remove('fa-play');
        playPauseBtn.classList.add('fa-pause');
    }
    isPlaying = !isPlaying;
}

// Event listener for play/pause button
playPauseBtn.addEventListener('click', togglePlay);

// Update progress bar as the audio plays
audio.addEventListener('timeupdate', function() {
    const { currentTime, duration } = audio;
    const progressPercent = (currentTime / duration) * 100;
    progress.value = progressPercent;
});

// Seek functionality
progress.addEventListener('click', function(e) {
    const progressWidth = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / progressWidth) * duration;
});

// Update play/pause button based on audio state
audio.addEventListener('play', function() {
    isPlaying = true;
    playPauseBtn.classList.remove('fa-play');
    playPauseBtn.classList.add('fa-pause');
});

audio.addEventListener('pause', function() {
    isPlaying = false;
    playPauseBtn.classList.remove('fa-pause');
    playPauseBtn.classList.add('fa-play');
});

