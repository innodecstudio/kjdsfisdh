const scroll = new LocomotiveScroll({
  el: document.querySelector('.container'),
  smooth: true,

});


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

