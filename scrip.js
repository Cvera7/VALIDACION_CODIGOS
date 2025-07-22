const codigosValidos = ["1", "2", "3", "4", "5"];
let vidas = 6;

document.getElementById("btn-validar").addEventListener("click", function () {
  if (vidas <= 0) return;

  const ingresados = [
    document.getElementById("codigo1").value.trim(),
    document.getElementById("codigo2").value.trim(),
    document.getElementById("codigo3").value.trim(),
    document.getElementById("codigo4").value.trim(),
    document.getElementById("codigo5").value.trim()
  ];

  let resultado = "";
  let todosCorrectos = true;

  ingresados.forEach((codigo, index) => {
    if (codigo === codigosValidos[index]) {
      resultado += `<p class="correcto">Código ${index + 1} es correcto ✅</p>`;
    } else {
      resultado += `<p class="incorrecto">Código ${index + 1} es incorrecto ❌</p>`;
      todosCorrectos = false;
    }
  });

  if (!todosCorrectos) {
    vidas--;
    actualizarVidas();
  }

  document.getElementById("resultado").innerHTML = resultado;

  if (vidas <= 0) {
    document.getElementById("gameover").textContent = "😢 Game Over. Has perdido todas tus vidas.";
    document.getElementById("btn-validar").disabled = true;
    document.querySelectorAll("input").forEach(input => input.disabled = true);
    return;
  }

  if (todosCorrectos) {
    document.getElementById("popup").style.display = "flex";
  }
});

function actualizarVidas() {
  document.getElementById("vidas").textContent = vidas;
}

function cerrarPopup() {
  document.getElementById("popup").style.display = "none";
}


