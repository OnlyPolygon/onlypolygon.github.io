// Asset 2 functionality
let selectedInstall = null;
let selectedLayout = null;

function resetInstallUI() {
  selectedInstall = null;
  selectedLayout = null;

  document.getElementById("install-options").innerHTML = `
          <div id="cloud" class="install-option" style="flex: 1;">
            <h4>⭐️<strong> Cloud Install </strong>⭐️</h4>
            <p>With this version the overlay will automatically update with no extra effort on your end. Just set and forget!</p>
            <button id="cloud-btn" onclick="toggleInstallOption('cloud')">Use Cloud Install</button>
          </div>
          <div id="local" class="install-option" style="flex: 1;">
            <h4>Local Install</h4>
            <p>With this version you'll need to check back after each patch to see if there is an update.</p>
            <button id="local-btn" onclick="toggleInstallOption('local')">Use Local Install</button>
          </div>`;

  document.getElementById("layout-options").style.display = "none";
  document.getElementById("layout-options").innerHTML = `
          <div id="stacked" style="flex: 1;">
            <img src="img/phasmo_stack.png" alt="Stacked layout">
            <button onclick="selectLayout('stacked')">Stacked Layout</button>
          </div>
          <div id="inline" style="flex: 1;">
            <img src="img/phasmo_inline.PNG" alt="Inline layout">
            <button onclick="selectLayout('inline')">Inline Layout</button>
          </div>`;

  document.getElementById("final-instructions").style.display = "none";
}

function toggleInstallOption(type) {
  if (selectedInstall === type) {
    resetInstallUI();
    return;
  }
  const other = type === "cloud" ? "local" : "cloud";
  const typeBtn = document.getElementById(`${type}-btn`);
  document.getElementById(other).remove();
  typeBtn.textContent = "Go back";
  document.getElementById(type).style.textAlign = "center";
  document.getElementById("layout-options").style.display = "flex";
  selectedInstall = type;
}

function selectLayout(layout) {
  const other = layout === "stacked" ? "inline" : "stacked";
  document.getElementById(other).remove();
  document.getElementById(layout).style.textAlign = "center";

  const finalInstructions = document.getElementById("final-instructions");
  const installType = selectedInstall;

  let installText = "";

  if (installType === "cloud") {
    if (layout === "stacked") {
      installText = `<ol>
                <li>
                  In OBS add a Browser Source and paste this in the URL:
                  <code>https://onlypolygon.github.io/phasmophobia-overlay/overlay.html</code>
                </li>
                <li>
                  Set Width to 1390, Height to 1250, and check to enable refresh on activation
                </li>
                <li>
                  Resize to fit your needs
                </li>
              </ol>`;
    } else {
      installText = `<ol>
                <li>
                  In OBS add a Browser Source and paste this in the URL:
                  <code>https://onlypolygon.github.io/phasmophobia-overlay/overlay.html</code>
                </li>
                <li>
                  Set Width to 2400, Height to 1000, and check to enable refresh on activation
                </li>
                <li>
                  Resize to fit your needs
                </li>
              </ol>`;
    }
  } else if (installType === "local") {
    if (layout === "stacked") {
      installText = `<ol>
                <li>
                  Go to <a href="https://github.com/OnlyPolygon/phasmophobia-overlay/releases/latest">Releases</a>
                  and download the Source Code (zip)
                </li>
                <li>
                  Extract folder where ever you find most convenient
                </li>
                <li>
                  In OBS add a Browser Source and choose local file and point it to
                  the overlay.html
                </li>
                <li>
                  Set Width to 1390, Height to 1250, and check to enable refresh on activation
                </li>
                <li>
                  Resize to fit your needs
                </li>
              </ol>`;
    } else {
      installText = `<ol>
                <li>
                  Go to <a href="https://github.com/OnlyPolygon/phasmophobia-overlay/releases/latest">Releases</a>
                  and download the Source Code (zip)
                </li>
                <li>
                  Extract folder where ever you find most convenient
                </li>
                <li>
                  In OBS add a Browser Source and choose local file and point it to
                  the overlay.html
                </li>
                <li>
                  Set Width to 2400, Height to 1000, and check to enable refresh on activation
                </li>
                <li>
                  Resize to fit your needs
                </li>
              </ol>`;
    }
  }

  finalInstructions.innerHTML = `
          <h4>Installation Instructions</h4>
          ${installText}
          <h4>How to Use</h4>
          <ul>
            <li>
              To interact with overlay, right click the browser source and choose interact
            </li>
            <li>
              In OBS Studio you can use the context bar when selecting the source
            </li>
            <li>To enter Evidence, simply click the relavent icon</li>
            <li>
              To reset the overlay, click the lower box where "Searching..." and the ghost names appear
            </li>
          </ul>`;

  finalInstructions.style.display = "block";
  selectedLayout = layout;
}

function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
}

function closeMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.remove("show");
}

document.querySelectorAll('[data-toggle="modal"]').forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.getElementById(button.dataset.target);
    if (modal) {
      if (modal.id === "modal-asset") resetInstallUI();
      modal.showModal();
    }
  });
});

document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", () => {
    const dialog = button.closest("dialog");
    dialog.close();
    if (dialog.id === "modal-asset") resetInstallUI();
  });
});

// Asset 2 functionality
let selectedInstall2 = null;
let selectedLayout2 = null;

function resetInstallUI2() {
  selectedInstall2 = null;
  selectedLayout2 = null;

  document.getElementById("install-options-2").innerHTML = `
          <div id="cloud2" class="install-option" style="flex: 1;">
            <h4>⭐️<strong> Cloud Install </strong>⭐️</h4>
            <p>With this version the overlay will automatically update with no extra effort on your end. Just set and forget!</p>
            <button id="cloud2-btn" onclick="toggleInstallOption2('cloud2')">Use Cloud Install</button>
          </div>
          <div id="local2" class="install-option" style="flex: 1;">
            <h4>Local Install</h4>
            <p>With this version you'll need to check back after each patch to see if there is an update.</p>
            <button id="local2-btn" onclick="toggleInstallOption2('local2')">Use Local Install</button>
          </div>`;

  document.getElementById("layout-options-2").style.display = "none";
  document.getElementById("layout-options-2").innerHTML = `
          <div id="stacked2" style="flex: 1;">
            <img src="img/demon_stack.PNG" alt="Stacked layout">
            <button onclick="selectLayout2('stacked2')">Stacked Layout</button>
          </div>
          <div id="inline2" style="flex: 1;">
            <img src="img/demon_inline.PNG" alt="Inline layout">
            <button onclick="selectLayout2('inline2')">Inline Layout</button>
          </div>`;

  document.getElementById("final-instructions-2").style.display = "none";
}

function toggleInstallOption2(type) {
  if (selectedInstall2 === type) {
    resetInstallUI2();
    return;
  }
  const other = type === "cloud2" ? "local2" : "cloud2";
  const typeBtn = document.getElementById(`${type}-btn`);
  document.getElementById(other).remove();
  typeBtn.textContent = "Go back";
  document.getElementById(type).style.textAlign = "center";
  document.getElementById("layout-options-2").style.display = "flex";
  selectedInstall2 = type;
}

function selectLayout2(layout) {
  const other = layout === "stacked2" ? "inline2" : "stacked2";
  document.getElementById(other).remove();
  document.getElementById(layout).style.textAlign = "center";

  const finalInstructions = document.getElementById("final-instructions-2");
  const installType = selectedInstall2;

  let installText = "";

  if (installType === "cloud2") {
    if (layout === "stacked2") {
      installText = `<ol>
                <li>
                  In OBS add a Browser Source and paste this in the URL:
                  <code>https://onlypolygon.github.io/Demonologist-Overlay/DemonologistOverlay.html</code>
                </li>
                <li>
                  Set Width to 1390, Height to 1250, and check to enable refresh on activation
                </li>
                <li>
                  Resize to fit your needs
                </li>
              </ol>`;
    } else {
      installText = `<ol>
                <li>
                  In OBS add a Browser Source and paste this in the URL:
                  <code>https://onlypolygon.github.io/Demonologist-Overlay/DemonologistOverlay.html</code>
                </li>
                <li>
                  Set Width to 2400, Height to 800, and check to enable refresh on activation
                </li>
                <li>
                  Resize to fit your needs
                </li>
              </ol>`;
    }
  } else if (installType === "local2") {
    if (layout === "stacked2") {
      installText = `<ol>
                <li>
                  Go to <a href="https://github.com/OnlyPolygon/Demonologist-Overlay/releases/latest">Releases</a>
                  and download the Source Code (zip)
                </li>
                <li>
                  Extract folder where ever you find most convenient
                </li>
                <li>
                  In OBS add a Browser Source and choose local file and point it to
                  the DemonologistOverlay.html
                </li>
                <li>
                  Set Width to 1390, Height to 1250, and check to enable refresh on activation
                </li>
                <li>
                  Resize to fit your needs
                </li>
              </ol>`;
    } else {
      installText = `<ol>
                <li>
                  Go to <a href="https://github.com/OnlyPolygon/Demonologist-Overlay/releases/latest">Releases</a>
                  and download the Source Code (zip)
                </li>
                <li>
                  Extract folder where ever you find most convenient
                </li>
                <li>
                  In OBS add a Browser Source and choose local file and point it to
                  the DemonologistOverlay.html
                </li>
                <li>
                  Set Width to 2400, Height to 800, and check to enable refresh on activation
                </li>
                <li>
                  Resize to fit your needs
                </li>
              </ol>`;
    }
  }

  finalInstructions.innerHTML = `
          <h4>Installation Instructions</h4>
          ${installText}
          <h4>How to Use</h4>
          <ul>
            <li>
              To interact with overlay, right click the browser source and choose interact
            </li>
            <li>
              In OBS Studio you can use the context bar when selecting the source
            </li>
            <li>To enter Evidence, simply click the relavent icon</li>
            <li>
              To reset the overlay, click the lower box where "Searching..." and the ghost names appear
            </li>
          </ul>`;

  finalInstructions.style.display = "block";
  selectedLayout2 = layout;
}

// Hook up modal open/close for asset 2
document.querySelectorAll('[data-toggle="modal"]').forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.getElementById(button.dataset.target);
    if (modal) {
      if (modal.id === "modal-asset") resetInstallUI();
      if (modal.id === "modal-asset2") resetInstallUI2();
      modal.showModal();
    }
  });
});

document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", () => {
    const dialog = button.closest("dialog");
    dialog.close();
    if (dialog.id === "modal-asset") resetInstallUI();
    if (dialog.id === "modal-asset2") resetInstallUI2();
  });
});

let lastScrollTop = 0;
const navbar = document.querySelector("nav.container-fluid");

window.addEventListener("scroll", () => {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    navbar.classList.add("hidden");
  } else {
    // Scrolling up
    navbar.classList.remove("hidden");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Avoid negative scroll
});
