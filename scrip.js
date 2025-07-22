const codigosValidos = ["1", "2", "3", "4", "5"];
let vidas = 6;
let actual = 0;

document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();

  if (vidas <= 0 || actual >= 5) return;

  const campo = document.getElementById("codigo" + (actual + 1));
  const valor = campo.value.trim();
  const resultado = document.getElementById("resultado");

  if (valor === codigosValidos[actual]) {
    resultado.innerHTML += `<p class="correcto">Código ${actual + 1} correcto ✅</p>`;
    campo.disabled = true;
    actual++;

    if (actual < 5) {
      document.getElementById("codigo" + (actual + 1)).disabled = false;
      document.getElementById("codigo" + (actual + 1)).focus();
    }

    if (actual === 5) {
      document.getElementById("popup").style.display = "flex";
    }
  } else {
    vidas--;
    resultado.innerHTML += `<p class="incorrecto">Código ${actual + 1} incorrecto ❌ - Te quedan ${vidas} vidas</p>`;
    document.getElementById("vidas").textContent = `Vidas: ${vidas} ❤️`;

    if (vidas <= 0) {
      document.getElementById("popup-derrota").style.display = "flex";
    }
  }
});

function cerrarPopup() {
  document.getElementById("popup").style.display = "none";
}

