// Gallery Banner
const note = document.getElementById("gallery-note");
const cookie = document.getElementById("cookie-popup");

// Show note on load
window.addEventListener("DOMContentLoaded", () => {
  // Check if cookie banner is visible
  const cookieVisible = window.getComputedStyle(cookie).display !== "none";

  // Adjust gallery note position if cookie banner is showing
  if (cookieVisible) {
    note.style.setProperty("--gallery-note-offset", "90px"); // shift up to sit above cookie
  } else {
    note.style.setProperty("--gallery-note-offset", "5%"); // default spacing
  }

  note.classList.add("show");

  // Auto-hide after 60 seconds
  setTimeout(() => {
    dismissGalleryNote();
  }, 60000);
});

function dismissGalleryNote() {
  note.classList.remove("show");
}

function dismissGalleryNote() {
  note.classList.remove("show");
}

// Get the modal
var modal = document.getElementById("myModal");

// Get all images with the class 'myImg' and bind the click event
var imgs = document.getElementsByClassName("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (var i = 0; i < imgs.length; i++) {
  imgs[i].onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks anywhere outside of the image, close the modal
modal.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
