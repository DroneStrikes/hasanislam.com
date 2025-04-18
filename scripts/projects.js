// ==== DOM Selectors ====
const ytOverlay = document.querySelector(".player-overlay");
const ytIframe = ytOverlay.querySelector("iframe");

const webOverlay = document.querySelector(".web-overlay");
const webIframe = webOverlay.querySelector("iframe");

const galleryOverlay = document.querySelector(".gallery-overlay");
const galleryPopup = galleryOverlay.querySelector(".gallery-popup");
const galleryContainer = document.getElementById("gallery-images");

const projectLinks = document.querySelectorAll(".header-wrapper");

const filterButtons = document.querySelectorAll(".filter-btn");
const projectItems = document.querySelectorAll(".project-item");

// ==== Gallery Images by Project ID ====
const galleries = {
  "muslim-aid": [
    "./images/projects/muslim-aid/muslim-aid01.jpg",
    "./images/projects/muslim-aid/muslim-aid02.jpg",
    "./images/projects/muslim-aid/muslim-aid03.jpg",
    "./images/projects/muslim-aid/muslim-aid04.jpg",
    "./images/projects/muslim-aid/muslim-aid05.jpg",
    "./images/projects/muslim-aid/muslim-aid06.jpg",
    "./images/projects/muslim-aid/muslim-aid07.jpg",
  ],
  "relentless-nomad": [
    "./images/projects/relentless-nomad/relentless-nomad01.png",
    "./images/projects/relentless-nomad/relentless-nomad02.png",
  ],
  "beacon-institute": [
    "./images/projects/beacon/alimiyah-diploma.jpg",
    "./images/projects/beacon/alimiyah-diploma-online.jpg",
  ],

  "lve-foundation": [
    "./images/projects/lve-foundation/lve-foundation01.jpg",
    "./images/projects/lve-foundation/lve-foundation02.jpg",
    "./images/projects/lve-foundation/lve-foundation03.jpg",
    "./images/projects/lve-foundation/lve-foundation04.png",
    "./images/projects/lve-foundation/lve-flyer01.png",
    "./images/projects/lve-foundation/lve-flyer02.png",
    "./images/projects/lve-foundation/lve-brochure01.jpg",
    "./images/projects/lve-foundation/lve-brochure02.jpg",
  ],

  "bce": [
    "./images/projects/bca/bce-black-history.jpg",
    "./images/projects/bca/bce-live-show01.jpg",
    "./images/projects/bca/bce-live-show02.jpg",
    "./images/projects/bca/vector-and-raster01.jpg",
    "./images/projects/bca/vector-and-raster02.jpg",
    "./images/projects/bca/vector-and-raster03.jpg",
  ],

  "candi": [
    "./images/projects/candi/candi-isoc01.jpg",
    "./images/projects/candi/candi-isoc02.jpg",
  ],

  "early-graphic": [
    "./images/projects/early-graphics/saturday-circle-picnic.jpg",
    "./images/projects/early-graphics/social-media-mmt.jpg",
  ],
};

// ==== Filter Projects by Category ====
filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      projectItems.forEach((item) => {
        const category = item.getAttribute("data-category");

        if (filter === "all" || category === filter) {
          item.classList.remove("hide");
          item.style.display = "flex"; // show item
        } else {
          item.classList.add("hide");
          item.style.display = "none"; // hide item completely
        }
      });
    });
});

// ==== Project Click Handler ====
projectLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const videoId = link.dataset.link;
    const websiteUrl = link.dataset.url;
    const galleryId = link.dataset.gallery;

    // Show Web Overlay
    if (websiteUrl) {
      webIframe.src = websiteUrl;
      const visitSiteButton = webOverlay.querySelector(".visit-site-btn a");
      visitSiteButton.href = websiteUrl;  // Dynamically update the href
      webOverlay.classList.add("active");
    }

    // Show Video Overlay
    else if (videoId) {
      ytIframe.src = `https://www.youtube.com/embed/${videoId}`;
      ytOverlay.classList.add("active");
    }

    // Show Gallery Overlay
    else if (galleryId && galleries[galleryId]) {
      galleryContainer.innerHTML = "";
      galleries[galleryId].forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        galleryContainer.appendChild(img);
      });
      galleryOverlay.classList.add("active");
    }
  });
});

// ==== Close Overlay on Outside Click ====
function setupOverlayClose(overlay, popup, onClose = () => {}) {
  overlay.addEventListener("click", (e) => {
    if (!popup.contains(e.target)) {
      overlay.classList.remove("active");
      onClose();
    }
  });
}

// ==== Apply Close Logic for Each Overlay ====
setupOverlayClose(ytOverlay, ytOverlay.querySelector(".player-popup"), () => {
  ytIframe.src = "";
});

setupOverlayClose(webOverlay, webOverlay.querySelector(".web-popup"), () => {
  webIframe.src = "";
});

setupOverlayClose(galleryOverlay, galleryPopup, () => {
  galleryContainer.innerHTML = "";
});

// Projects Banner Slide-in
const projectNote = document.getElementById("projects-note");
const cookieBanner = document.getElementById("cookie-popup");

// Check cookie banner visibility
function adjustProjectNotePosition() {
  const isCookieVisible = window.getComputedStyle(cookieBanner).display !== "none";

  if (isCookieVisible) {
    projectNote.style.setProperty("--note-offset", "90px"); // adjust for cookie height
  } else {
    projectNote.style.setProperty("--note-offset", "5%");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  adjustProjectNotePosition();
  projectNote.classList.add("show");

  // Auto-hide after 60 seconds
  setTimeout(() => {
    projectNote.classList.remove("show");
  }, 60000); 
});