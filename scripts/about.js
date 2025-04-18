function startDownload() {
  const btn = document.getElementById("downloadBtn");
  const loader = document.getElementById("downloadLoader");
  const text = btn.querySelector(".download-text");

  btn.classList.add("loading");
  loader.style.width = "100%";
  text.textContent = "Preparing...";

  setTimeout(() => {
    window.location.href = "./documents/Hasan Islam CV.docx";
    btn.classList.remove("loading");
    loader.style.width = "0%";
    text.textContent = "Download";
  }, 1500);
}

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

let currentOpenTab = null; // Track currently open tab

function openTab(tabId) {
  const allTabs = document.getElementsByClassName("containerTab");

  // If the same tab is clicked again, close it
  if (currentOpenTab === tabId) {
    document.getElementById(tabId).style.display = "none";
    currentOpenTab = null;
    return;
  }

  // Hide all tabs
  for (let i = 0; i < allTabs.length; i++) {
    allTabs[i].style.display = "none";
  }

  // Show the selected tab
  document.getElementById(tabId).style.display = "block";
  currentOpenTab = tabId;
}

// Hide all tabs by default on page load
window.onload = function () {
  const allTabs = document.getElementsByClassName("containerTab");
  for (let i = 0; i < allTabs.length; i++) {
    allTabs[i].style.display = "none";
  }
};
