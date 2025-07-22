const codigosValidos = ["1", "2", "3", "4", "5"];
let vidas = 6;
let pasoActual = 0;

const inputs = [
  document.getElementById("codigo1"),
  document.getElementById("codigo2"),
  document.getElementById("codigo3"),
  document.getElementById("codigo4"),
  document.getElementById("codigo5")
];

const resultado = document.getElementById("resultado");
const vidasDisplay = document.getElementById("vidas");

function actualizarVidas() {
  vidasDisplay.textContent = `Vidas restantes: ${vidas}`;
}

function mostrarPopup(mensaje, imagen = null) {
  const popup = document.getElementById("popup");
  const contenido = document.querySelector(".popup-content");
  contenido.innerHTML = `
    ${imagen ? `<img src="${imagen}" alt="resultado">` : ""}
    <h2>${mensaje}</h2>
    <button onclick="cerrarPopup()">Cerrar</button>
  `;
  popup.style.display = "flex";
}

function cerrarPopup() {
  document.getElementById("popup").style.display = "none";
  location.reload(); // Reinicia el juego al cerrar
}

// Bloquea todos menos el primero al inicio
inputs.forEach((input, i) => {
  input.disabled = i !== 0;
});

inputs.forEach((input, index) => {
  input.addEventListener("change", () => {
    const valor = input.value.trim();

    if (codigosValidos[index] === valor) {
      resultado.innerHTML += `<p class="correcto">Código ${index + 1} correcto ✅</p>`;
      input.disabled = true;
      pasoActual++;

      if (pasoActual < inputs.length) {
        inputs[pasoActual].disabled = false;
        inputs[pasoActual].focus();
      } else {
        mostrarPopup("🎉 ¡Ganaste!", "https://cdn-icons-png.flaticon.com/512/2278/2278992.png");
      }

    } else {
      vidas--;
      actualizarVidas();
      resultado.innerHTML += `<p class="incorrecto">Código ${index + 1} incorrecto ❌</p>`;

      if (vidas <= 0) {
        mostrarPopup("💀 Game Over", "https://cdn-icons-png.flaticon.com/512/1828/1828665.png");
        inputs.forEach(inp => inp.disabled = true);
      } else {
        input.value = ""; // Borrar input para reintentar
        input.focus();
      }
    }
  });
});

actualizarVidas();

