// Function to animate progress bars when they come into view
function animateProgressBars() {
  const progressBars = document.querySelectorAll(".progress-bar");
  progressBars.forEach((progressBar) => {
    const progress = progressBar.querySelector(".progress");
    const progressValue = progressBar.getAttribute("data-value");
    const progressBarTop = progressBar.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;
    if (progressBarTop < windowHeight) {
      progress.style.height = progressValue + "%";
    }
  });
}

// Initial animation when page loads
animateProgressBars();

// Event listener to animate progress bars on scroll
window.addEventListener("scroll", animateProgressBars);



