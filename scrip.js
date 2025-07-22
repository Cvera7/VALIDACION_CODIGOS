const codigosValidos = ["1", "2", "3", "4", "5"];
let vidas = 6;
let indiceActual = 0;

document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();

  if (vidas <= 0 || indiceActual >= 5) return;

  const campo = document.getElementById(`codigo${indiceActual + 1}`);
  const valor = campo.value.trim();

  const resultado = document.getElementById("resultado");

  if (valor === codigosValidos[indiceActual]) {
    resultado.innerHTML += `<p class="correcto">Código ${indiceActual + 1} correcto ✅</p>`;
    campo.disabled = true;

    indiceActual++;

    if (indiceActual < 5) {
      document.getElementById(`codigo${indiceActual + 1}`).disabled = false;
      document.getElementById(`codigo${indiceActual + 1}`).focus();
    } else {
      document.getElementById("popup").style.display = "flex";
    }

  } else {
    resultado.innerHTML += `<p class="incorrecto">Código ${indiceActual + 1} incorrecto ❌</p>`;
    vidas--;
    document.getElementById("vidas").textContent = `Vidas restantes: ${vidas}`;
    campo.value = "";
    campo.focus();

    if (vidas === 0) {
      document.getElementById("formulario").querySelectorAll("input").forEach(input => input.disabled = true);
      document.getElementById("gameOver").classList.remove("oculto");
    }
  }
});

function cerrarPopup() {
  document.getElementById("popup").style.display = "none";
}
