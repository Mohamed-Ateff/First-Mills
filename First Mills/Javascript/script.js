document.addEventListener("DOMContentLoaded", function () {
  const playButton = document.getElementById("playButton");
  const videoPopup = document.getElementById("videoPopup");
  const closeBtn = document.getElementById("closeBtn");

  const player = videojs("video");

  playButton.addEventListener("click", () => {
    videoPopup.style.display = "flex";
    player.ready(() => {
      player.play();
    });
  });

  closeBtn.addEventListener("click", () => {
    player.pause();
    videoPopup.style.display = "none";
  });
});
