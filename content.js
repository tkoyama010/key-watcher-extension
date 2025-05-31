(function() {
  const overlay = document.createElement("div");
  overlay.id = "chrome-key‐watcher‐overlay";
  document.body.appendChild(overlay);

  let hideTimeoutId = null;

  function showKey(keyName) {
    overlay.textContent = `Key: ${keyName}`;
    overlay.classList.add("visible");

    if (hideTimeoutId) {
      clearTimeout(hideTimeoutId);
    }
    hideTimeoutId = setTimeout(() => {
      overlay.classList.remove("visible");
      hideTimeoutId = null;
    }, 1000);
  }

  window.addEventListener("keydown", (event) => {
    showKey(event.key);
  }, true);
})();
