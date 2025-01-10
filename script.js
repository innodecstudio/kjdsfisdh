// Initialize Lenis
const lenis = new Lenis({
  duration: 1.2, // Smooth scroll duration
  // wrapper: document.querySelector(".container"),
  easing: (t) => t * (2 - t), // Optional easing function
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Handle anchor link clicks for smooth scroll
document.querySelectorAll('.navbar-item').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor tag behavior
    
    const targetID = anchor.getAttribute('href').replace("#", ""); // Get the target ID
    const targetElement = document.getElementById(targetID); // Find the element to scroll to

    if (targetElement) {
      lenis.scrollTo(targetElement, {
        duration: 1.5, // Scroll duration
        easing: (t) => t * (2 - t), // Optional easing
      });
    }
  });
});

// Optionally, force scroll to top after page load
window.onload = function() {
  window.scrollTo(0, 0); // Make sure user is at the top
};
document.addEventListener("DOMContentLoaded", function () {
  const cookieBanner = document.getElementById("cookie-banner");
  const acceptButton = document.getElementById("accept-cookies");

  // Show banner only if cookies are not accepted
  if (!localStorage.getItem("cookiesAccepted")) {
    cookieBanner.style.display = "block"; // Banner appears
  }

  // Accept button click event
  acceptButton.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "true"); // Save consent
    cookieBanner.style.display = "none"; // Hide banner
  });
  });
