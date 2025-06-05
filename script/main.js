const buttonContainer = document.getElementById("button-container");

// Moduli disponibili — aggiungi qui i nomi dei moduli HTML (senza estensione)
const modules = [
  { label: "Hiragana", file: "Hiragana" },
  { label: "Katakana", file: "Katakana" },
  { label: "N5", file: "N5_section" } // ✅ Qui eviti ambiguità
];

// Etichette dei tipi + emoji per renderlo più intuitivo
const typeLabels = {
  "Studio": "📘 Studio",
  "Quiz": "❓ Quiz"
};

modules.forEach(({ label, file }) => {
  const title = document.createElement("h3");
  title.textContent = label;
  buttonContainer.appendChild(title);

  const buttonRow = document.createElement("div");
  buttonRow.classList.add("button-row");

  Object.entries(typeLabels).forEach(([type, labelText]) => {
    const btn = document.createElement("button");
    btn.innerText = labelText;
    btn.onclick = () => {
      window.location.href = `pages/${file}.html?type=${type}`;
    };
    buttonRow.appendChild(btn);
  });

  buttonContainer.appendChild(buttonRow);
});
