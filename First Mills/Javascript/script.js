const video = document.getElementById("video");
const videoPlayer = document.getElementById("videoPlayer");
const playButton = document.getElementById("playButton");
const header = document.querySelector(".header");

// Handle click anywhere except button and header
document.body.addEventListener("click", (e) => {
  if (!playButton.contains(e.target) && !header.contains(e.target)) {
    if (video.paused) {
      video.style.display = "block";
      playButton.style.display = "none";
      video.play();
    } else {
      video.pause();
      video.style.display = "none";
      playButton.style.display = "block";
    }
  }
});

// Handle play button click separately
playButton.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent body click event
  if (video.paused) {
    video.style.display = "block";
    playButton.style.display = "none";
    video.play();
  } else {
    video.pause();
    video.style.display = "none";
    playButton.style.display = "block";
  }
});

// Handle video click to pause
video.addEventListener("click", (e) => {
  e.stopPropagation();
  if (!video.paused) {
    video.pause();
    video.style.display = "none";
    playButton.style.display = "block";
  }
});
