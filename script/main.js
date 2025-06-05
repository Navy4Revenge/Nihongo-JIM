const buttonContainer = document.getElementById("button-container");

// Moduli disponibili — aggiungi qui i nomi dei moduli HTML (senza estensione)
const modules = ["Hiragana", "Katakana", "N5_section"];

// Etichette dei tipi + emoji per renderlo più intuitivo
const typeLabels = {
  "Studio": "📘 Studio",
  "Quiz": "❓ Quiz"
};

modules.forEach(moduleName => {
  // Titolo del modulo
  const label = document.createElement("h3");
  label.textContent = moduleName;
  buttonContainer.appendChild(label);

  // Contenitore dei pulsanti
  const buttonRow = document.createElement("div");
  buttonRow.classList.add("button-row");

  Object.entries(typeLabels).forEach(([type, labelText]) => {
    const btn = document.createElement("button");
    btn.innerText = labelText;
    btn.onclick = () => {
      // Aggiunge ?type= al link
      window.location.href = `pages/${moduleName}.html?type=${type}`;
    };
    buttonRow.appendChild(btn);
  });

  buttonContainer.appendChild(buttonRow);
});
