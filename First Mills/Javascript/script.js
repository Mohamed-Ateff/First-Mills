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

document.body.style.overflow = "hidden"; // prevent scroll during load


window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");
  const content = document.getElementById("main-content");

  loader.classList.add("fade-out");

  setTimeout(() => {
    loader.style.display = "none";
    content.style.display = "block";
    document.body.style.overflow = "auto"; // re-enable scroll
  }, 500);
});