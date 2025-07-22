const codigosValidos = ["1", "2", "3", "4", "5"];
let vidas = 6;
let codigoActual = 0;

const form = document.getElementById("formulario");
const campos = [
  document.getElementById("codigo1"),
  document.getElementById("codigo2"),
  document.getElementById("codigo3"),
  document.getElementById("codigo4"),
  document.getElementById("codigo5"),
];
const resultado = document.getElementById("resultado");
const vidasTexto = document.getElementById("vidas");
const popup = document.getElementById("popup");
const gameover = document.getElementById("gameover");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (vidas <= 0 || codigoActual >= codigosValidos.length) return;

  const campo = campos[codigoActual];
  const valor = campo.value.trim();

  if (valor === codigosValidos[codigoActual]) {
    resultado.innerHTML += `<p class="correcto">Código ${codigoActual + 1} correcto ✅</p>`;
    campo.disabled = true;
    if (codigoActual < 4) {
      campos[codigoActual + 1].disabled = false;
      campos[codigoActual + 1].focus();
    }
    codigoActual++;
  } else {
    resultado.innerHTML += `<p class="incorrecto">Código ${codigoActual + 1} incorrecto ❌</p>`;
    vidas--;
    vidasTexto.textContent = `Vidas restantes: ${vidas}`;
  }

  campo.value = "";

  if (codigoActual === 5) {
    popup.style.display = "flex";
  }

  if (vidas === 0) {
    form.querySelector("button").disabled = true;
    campos.forEach(input => input.disabled = true);
    gameover.style.display = "flex";
  }
});

function cerrarPopup() {
  popup.style.display = "none";
}

