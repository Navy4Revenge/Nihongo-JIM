const buttonContainer = document.getElementById("button-container");

// Lista statica o fetch dinamico (se vuoi caricarli da server)
// Puoi usare fetch se hai un server, altrimenti hardcoded così:
const pages = ["Hiragana", "Katakana", "Grammatica"]; // basta aggiungere nuovi nomi qui

pages.forEach(page => {
    const div = document.createElement("div");
    div.classList.add("module-buttons");

    const types = ["Studio", "Esercitazione", "Quiz"];
    types.forEach(type => {
        const btn = document.createElement("button");
        btn.innerText = `${type}`;
        btn.onclick = () => {
            // Va al modulo corrispondente, es: /pages/Hiragana.html?type=Studio
            window.location.href = `pages/${page}.html?type=${type}`;
        };
        div.appendChild(btn);
    });

    const label = document.createElement("p");
    label.innerText = page;
    label.classList.add("label");

    buttonContainer.appendChild(label);
    buttonContainer.appendChild(div);
});
