document.querySelectorAll(".mostrar-hobbies").forEach((btn) => {
  btn.addEventListener("click", () => {
    const ul = btn.nextElementSibling;
    const visible = !ul.hasAttribute("hidden");
    if (visible) {
      ul.setAttribute("hidden", "");
      btn.textContent = "Ver pasatiempos";
    } else {
      ul.removeAttribute("hidden");
      btn.textContent = "Ocultar pasatiempos";
    }
  });
});

document.getElementById("formulario-contacto").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Gracias por tu mensaje. Te contactaremos pronto.");
  e.target.reset();
});
