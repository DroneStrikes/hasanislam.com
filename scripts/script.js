//Menu Toggle
function toggleNav(x) {
  const overlay = document.getElementById("myNav");
  const menuIcon = document.getElementById("menuIcon");
  const closeBtn = document.getElementById("closeBtn");
  const body = document.body;

  // Toggle overlay visibility
  overlay.classList.toggle("show");

  // Toggle hamburger menu visibility
  menuIcon.classList.toggle("change"); // Transforms icon
  body.classList.toggle("overlay-active"); // Controls visibility of elements

  // Show or hide close button
  closeBtn.style.display = overlay.classList.contains("show")  ? "block" : "none";
  
  // Replace with functionality to close the menu
  function closeMenu() {
    alert("Close button clicked!"); 
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Get elements for contact form and modal
  const contactButton = document.getElementById("contactBtn");
  const contactForm = document.getElementById("contactForm");
  const closeButton = document.getElementById("closeButton");
  const formContent = document.getElementById("formContent");

  const contactModal = document.getElementById("contactLightbox");
  const closeModal = document.getElementById("closeModal");

  // Open contact form modal when clicking the contact button
  contactButton.addEventListener("click", () => {
    contactModal.style.display = "flex"; // Show the modal
  });

  // Close contact form modal when clicking the close button
  closeButton.addEventListener("click", () => {
    contactModal.style.display = "none"; // Hide the modal
    contactModal.classList.remove("flipped");
  });

  // Close contact form modal when clicking outside the modal
  window.addEventListener("click", (e) => {
    if (e.target === contactModal) {
      contactModal.style.display = "none"; // Hide modal when clicking outside
      contactModal.classList.remove("flipped");
    }
  });

  // Handle form submission with tick on success
document.querySelector(".form-box").addEventListener("submit", (e) => {
  e.preventDefault();

  const captchaResponse = grecaptcha.getResponse(); // ✅ Check reCAPTCHA first
  if (!captchaResponse) {
    alert("Please complete the CAPTCHA.");
    return;
  }

  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const submitBtn = document.querySelector(".animated-submit");

  if (fname && lname && email && message) {
    // Start loader animation
    submitBtn.classList.add("loading");

    // After 2s, stop loader and show tick
    setTimeout(() => {
      submitBtn.classList.remove("loading");
      submitBtn.classList.add("submitted");
    }, 2000);

    // Keep tick on screen for 4s more (total 6s), then close or reset
    setTimeout(() => {
      document.getElementById("contactLightbox").style.display = "none";
      submitBtn.classList.remove("submitted");
      grecaptcha.reset(); // ♻️ Reset CAPTCHA so form can be used again
    }, 6000);
  } else {
    alert("Please fill out all required fields.");
  }
});

  // Social FAB functionality: toggle social media links when the checkbox is checked
  const fabCheckbox = document.getElementById("fabCheckbox");
  const fabActions = document.querySelectorAll(".fab-action");

  fabCheckbox.addEventListener("change", () => {
    fabActions.forEach((action) => {
      action.style.display = fabCheckbox.checked ? "block" : "none"; // Show/Hide social media links
    });
  });
});

// To top button
let mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Footer
  const messages = [
    "🚀 Built by Hasan with love and caffeine.",
    "🧮 Over 1,500 lines of code... and counting.",
    "🛠️ Work in progress — more to come.",
    "📷 No AI-generated images — just the real stuff.",
    "📖 Guided by Bismillah, styled with CSS.",
    "🚧 Console.log('Still improving...')",
    "✨ Built by hand with HTML, CSS, and JS.",
  ];

  const messageElement = document.getElementById("footer-message");
  let currentIndex = 0;

  function showNextMessage() {
    if (!messageElement) return;

    // Fade out
    messageElement.style.opacity = "0";

    setTimeout(() => {
      // Update message
      messageElement.textContent = messages[currentIndex];
      // Fade in
      messageElement.style.opacity = "0.8";

      // Loop through messages
      currentIndex = (currentIndex + 1) % messages.length;
    }, 400); // Match this to the CSS transition
  }

  // Start cycling every 4 seconds
  window.addEventListener("DOMContentLoaded", () => {
    showNextMessage(); // Show first one immediately
    setInterval(showNextMessage, 4000); // Change every 4s
  });

// Cookie Popup
  function acceptCookies() {
    const popup = document.getElementById("cookie-popup");
    if (popup) {
      popup.style.display = "none";

      // Optional: Save acceptance to localStorage or cookies
      localStorage.setItem("cookiesAccepted", "true");
    }
  }

  // Optional: Auto-hide if accepted already
  window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("cookiesAccepted") === "true") {
      document.getElementById("cookie-popup").style.display = "none";
    }
  });