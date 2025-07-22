const codigosValidos = ["1", "2", "3", "4", "5"];
let vidas = 6;
let codigoActual = 0;

document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();

  if (codigoActual >= codigosValidos.length || vidas <= 0) return;

  const input = document.getElementById(`codigo${codigoActual + 1}`);
  const valor = input.value.trim();
  const resultadoDiv = document.getElementById("resultado");

  if (valor === codigosValidos[codigoActual]) {
    resultadoDiv.innerHTML += `<p class="correcto">Código ${codigoActual + 1} correcto ✅</p>`;
    input.disabled = true;
    codigoActual++;

    if (codigoActual < codigosValidos.length) {
      const siguienteInput = document.getElementById(`codigo${codigoActual + 1}`);
      siguienteInput.disabled = false;
      siguienteInput.focus();
    } else {
      mostrarPopup("🎉 ¡Victoria! Todos los códigos son correctos 🎉");
    }
  } else {
    vidas--;
    document.getElementById("vidas").innerText = `Vidas: ${vidas} ❤️`;
    resultadoDiv.innerHTML += `<p class="incorrecto">Código ${codigoActual + 1} incorrecto ❌</p>`;

    if (vidas <= 0) {
      mostrarPopup("💀 Game Over. Se acabaron las vidas.");
      deshabilitarInputs();
    }
  }
});

function mostrarPopup(mensaje) {
  document.getElementById("popup-mensaje").innerText = mensaje;
  document.getElementById("popup").style.display = "flex";
}

function cerrarPopup() {
  document.getElementById("popup").style.display = "none";
}

function deshabilitarInputs() {
  for (let i = 1; i <= 5; i++) {
    document.getElementById(`codigo${i}`).disabled = true;
  }
}

