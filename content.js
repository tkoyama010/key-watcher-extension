// content.js

(function() {
  // 1) Create the overlay div and append it to <body>:
  const overlay = document.createElement("div");
  overlay.id = "chrome-key‐watcher‐overlay";
  overlay.textContent = ""; // initially empty
  document.body.appendChild(overlay);

  // 2) Function to display a key in the overlay:
  let hideTimeoutId = null; 

  function showKey(keyName) {
    // Update text
    overlay.textContent = `Key: ${keyName}`;
    // Add visible class
    overlay.classList.add("visible");

    // If a previous timeout exists, clear it
    if (hideTimeoutId) {
      clearTimeout(hideTimeoutId);
    }

    // After 1 second, hide again
    hideTimeoutId = setTimeout(() => {
      overlay.classList.remove("visible");
      hideTimeoutId = null;
    }, 1000);
  }

  // 3) Listen for keydown on window
  window.addEventListener("keydown", (event) => {
    // event.key gives a human-readable key (e.g. "a", "A", "Enter", "ArrowLeft", etc.)
    showKey(event.key);
  }, true);
})();
