const messages = [
  "Oops! This page doesn't exist. 🤷‍♂️",
  "You're in the 404 dimension — it's chill here. ✨",
  "This isn't the page you were looking for… 👀",
  "Even the best explorers get lost sometimes. 🧭",
  "Page went out for a coffee. ☕ Be right back.",
];

  const messageEl = document.getElementById("randomMessage");
  let currentIndex = Math.floor(Math.random() * messages.length);

  // Set initial message
  messageEl.textContent = messages[currentIndex];

  setInterval(() => {
    // Fade out
    messageEl.style.opacity = 0;

    // After fade out, change the text and fade back in
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % messages.length;
      messageEl.textContent = messages[currentIndex];
      messageEl.style.opacity = 1;
    }, 500); // match this delay to CSS transition
  }, 5000);

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    icon.name = "sunny-outline";
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");
    icon.name = isDark ? "sunny-outline" : "moon-outline";
    localStorage.setItem("theme", isDark ? "dark" : "light");
});