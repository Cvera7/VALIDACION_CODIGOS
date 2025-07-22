const codigosValidos = ["1", "2", "3", "4", "5"];
let vidas = 6;
let pasoActual = 0;

const inputs = [
  document.getElementById("codigo1"),
  document.getElementById("codigo2"),
  document.getElementById("codigo3"),
  document.getElementById("codigo4"),
  document.getElementById("codigo5"),
];

document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  const inputActual = inputs[pasoActual];
  const valor = inputActual.value.trim();

  const resultado = document.getElementById("resultado");

  if (valor === codigosValidos[pasoActual]) {
    const mensaje = document.createElement("p");
    mensaje.className = "correcto";
    mensaje.textContent = `Código ${pasoActual + 1} correcto ✅`;
    resultado.appendChild(mensaje);

    inputActual.disabled = true;
    pasoActual++;

    if (pasoActual < inputs.length) {
      inputs[pasoActual].disabled = false;
      inputs[pasoActual].focus();
    } else {
      document.getElementById("popup").style.display = "flex";
    }
  } else {
    vidas--;
    const mensaje = document.createElement("p");
    mensaje.className = "incorrecto";
    mensaje.textContent = `Código ${pasoActual + 1} incorrecto ❌`;
    resultado.appendChild(mensaje);

    document.getElementById("vidas").textContent = `Vidas: ${vidas} ❤️`;

    if (vidas <= 0) {
      document.getElementById("formulario").querySelector("button").disabled = true;
      document.getElemen


