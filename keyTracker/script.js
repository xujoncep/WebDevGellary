const container = document.getElementById("keyContainer");
container.innerHTML = generateHTML("-", "-", "-");

window.addEventListener("keydown", (e) => {
  container.innerHTML = generateHTML(e.key, e.code, e.key.charCodeAt(0));
});

function generateHTML(key, code, keyCode) {
  return `
    <div class="key-container">
        <h4>Pressed Key</h4>
        <div class="key-content">${key === "" ? "Space" : key}</div>
    </div>
    <div class="key-container">
        <h4>Key Name</h4>
        <div class="key-content">${code}</div>
    </div>
    <div class="key-container">
        <h4>ASCII-Code</h4>
        <div class="key-content">${keyCode}</div>
    </div>
    `;
}
