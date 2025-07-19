const codigosValidos = ["1", "2", "3", "4", "5"];

document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();
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
    if (codigosValidos.includes(codigo)) {
      resultado += `<p class="correcto">Código ${index + 1} es correcto ✅</p>`;
    } else {
      resultado += `<p class="incorrecto">Código ${index + 1} es incorrecto ❌</p>`;
      todosCorrectos = false;
    }
  });

  document.getElementById("resultado").innerHTML = resultado;

  if (todosCorrectos) {
    document.getElementById("popup").style.display = "flex";
  }
});

function cerrarPopup() {
  document.getElementById("popup").style.display = "none";
}
