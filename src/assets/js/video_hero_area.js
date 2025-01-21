
// Sound toggle functionality
const video = document.querySelector(".hero-video");
const soundToggle = document.getElementById("sound-toggle");

soundToggle.addEventListener("click", () => {

    if (video.muted) {  // Sound On Icon
        video.muted = false;
        soundToggle.classList.remove('fa-volume-mute');
        soundToggle.classList.add('fa-volume-up');

    } else {
        video.muted = true;
        soundToggle.classList.remove('fa-volume-up');
        soundToggle.classList.add('fa-volume-mute');
    }

});
