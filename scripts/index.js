window.onload = () => {
  const background = document.getElementById("background");

  // Get last image used from localStorage
  let lastImage = localStorage.getItem("lastBackground");

  // Decide which image to use next
  let newImage =
    lastImage === "hasanislam01.webp"
      ? "hasanislam02.webp"
      : "hasanislam01.webp";

  // Apply the background
  background.style.backgroundImage = `url('/images/main-site/${newImage}')`;

  // Save this image as the last used for the next session
  localStorage.setItem("lastBackground", newImage);
};

const img = new Image();
img.onload = () => {
  background.style.backgroundImage = `url('/images/main-site/${newImage}')`;
  localStorage.setItem("lastBackground", newImage);
};
img.onerror = () => {
  console.error("Image not found:", newImage);
};
img.src = `/images/main-site/${newImage}`;
