const codigos = ["123", "456", "789", "abc", "xyz"];
let intentos = 6;
let actual = 0;

document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  const input = document.getElementById(`codigo${actual + 1}`);
  const valor = input.value.trim();

  if (valor === codigos[actual]) {
    input.disabled = true;
    actual++;

    if (actual === 5) {
      document.getElementById("popup").style.display = "flex";
    } else {
      const siguiente = document.getElementById(`codigo${actual + 1}`);
      siguiente.disabled = false;
      siguiente.focus();
      mostrarMensaje("✅ Código correcto", "green");
    }
  } else {
    intentos--;
    document.getElementById("vidas").textContent = `Vidas: ${intentos} ❤️`;
    mostrarMensaje("❌ Código incorrecto", "red");

    if (intentos === 0) {
      document.getElementById("gameover").style.display = "flex";
    }
  }
});

function mostrarMensaje(msg, color) {
  const div = document.getElementById("resultado");
  div.textContent = msg;
  div.style.color = color;
}

function cerrarPopup() {
  document.getElementById("popup").style.display = "none";
}
