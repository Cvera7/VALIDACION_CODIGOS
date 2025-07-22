const codigosValidos = ["1", "2", "3", "4", "5"];
let vidasRestantes = 6;

document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();

  if (vidasRestantes <= 0) return;

  const campos = [
    document.getElementById("codigo1"),
    document.getElementById("codigo2"),
    document.getElementById("codigo3"),
    document.getElementById("codigo4"),
    document.getElementById("codigo5")
  ];

  const ingresados = campos.map(c => c.value.trim());
  let resultado = "";
  let todosCorrectos = true;
  let huboError = false;

  ingresados.forEach((codigo, index) => {
    if (codigosValidos[index] === codigo) {
      resultado += `<p class="correcto">Código ${index + 1} correcto ✅</p>`;
    } else {
      resultado += `<p class="incorrecto">Código ${index + 1} incorrecto ❌</p>`;
      todosCorrectos = false;
      huboError = true;
    }
  });

  if (huboError) {
    vidasRestantes--;
    document.getElementById("vidas").textContent = `Vidas restantes: ${vidasRestantes}`;
  }

  document.getElementById("resultado").innerHTML = resultado;

  if (todosCorrectos) {
    mostrarPopup("¡Ganaste!");
    deshabilitarFormulario();
  } else if (vidasRestantes <= 0) {
    mostrarPopup("Game Over");
    deshabilitarFormulario();
  }
});

function mostrarPopup(mensaje) {
  document.getElementById("mensajeFinal").textContent = mensaje;
  document.getElementById("popup").style.display = "flex";
}

function cerrarPopup() {
  document.getElementById("popup").style.display = "none";
}

function deshabilitarFormulario() {
  document.querySelectorAll("input").forEach(input => input.disabled = true);
  document.querySelector("button").disabled = true;
}
