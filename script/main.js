const buttonContainer = document.getElementById("button-container");

// Moduli disponibili — aggiungi qui i nomi dei moduli che hai creato
const modules = ["Hiragana", "Katakana", "N5"];

// Etichette dei pulsanti
const types = ["Studio", "Esercitazione", "Quiz"];

modules.forEach(moduleName => {
    // Titolo del modulo
    const label = document.createElement("h3");
    label.textContent = moduleName;
    buttonContainer.appendChild(label);

    // Contenitore dei pulsanti
    const buttonRow = document.createElement("div");
    buttonRow.classList.add("button-row");

    types.forEach(type => {
        const btn = document.createElement("button");
        btn.innerText = type;
        btn.onclick = () => {
            // Link alla pagina HTML del modulo con tipo come parametro
            window.location.href = `pages/${moduleName}.html?type=${type}`;
        };
        buttonRow.appendChild(btn);
    });

    buttonContainer.appendChild(buttonRow);
});
