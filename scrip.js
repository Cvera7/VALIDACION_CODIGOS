const codigosValidos = ["1", "2", "3", "4", "5"];
let vidas = 6;
let actual = 0;

document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();

  if (vidas === 0 || actual >= 5) return;

  const inputActual = document.getElementById(`codigo${actual + 1}`);
  const valorIngresado = inputActual.value.trim();
  const resultado = document.getElementById("resultado");

  if (valorIngresado === codigosValidos[actual]) {
    resultado.innerHTML += `<p class="correcto">Código ${actual + 1} correcto ✅</p>`;
    inputActual.disabled = true;
    actual++;

    if (actual < 5) {
      document.getElementById(`codigo${actual + 1}`).disabled = false;
      document.getElementById(`codigo${actual + 1}`).focus();
    } else {
      document.getElementById("popup").style.display = "block";
    }

  } else {
    resultado.innerHTML += `<p class="incorrecto">Código ${actual + 1} incorrecto ❌</p>`;
    vidas--;
    inputActual.value = "";
    inputActual.focus();
    document.getElementById("vidas").textContent = `Vidas: ${vidas}`;

    if (vidas === 0) {
      document.getElementById("formulario").querySelectorAll("input").forEach(i => i.disabled = true);
      document.querySelector("button").disabled = true;
      document.getElementById("gameOver").classList.remove("oculto");
    }
  }
});

function cerrarPopup() {
  document.getElementById("popup").style.display = "none";
}


function cerrarPopup() {
  document.getElementById("popup").style.display = "none";
}
