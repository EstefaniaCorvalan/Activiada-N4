const formRegistro = document.getElementById("form-registro");

formRegistro.addEventListener("submit", function (e) {

    let formularioValido = true;

    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const edad = document.getElementById("edad");
    const pais = document.getElementById("pais");
    const terminos = document.getElementById("terminos");

    document.querySelectorAll(".error").forEach(error => {
        error.textContent = "";
    });

    document.querySelectorAll("input, select").forEach(campo => {
        campo.classList.remove("input-error");
    });

    // Nombre
    if (nombre.value.trim().length < 5) {
        document.getElementById("error-nombre").textContent =
            "El nombre debe tener al menos 5 caracteres.";
        nombre.classList.add("input-error");
        formularioValido = false;
    }

    // Email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email.value.trim())) {
        document.getElementById("error-email").textContent =
            "Ingrese un correo válido.";
        email.classList.add("input-error");
        formularioValido = false;
    }

    // Edad
    const valorEdad = parseInt(edad.value);

    if (isNaN(valorEdad) || valorEdad < 18 || valorEdad > 60) {
        document.getElementById("error-edad").textContent =
            "La edad debe estar entre 18 y 60 años.";
        edad.classList.add("input-error");
        formularioValido = false;
    }

    // País
    if (pais.value === "") {
        document.getElementById("error-pais").textContent =
            "Seleccione un país.";
        pais.classList.add("input-error");
        formularioValido = false;
    }

    // Términos
    if (!terminos.checked) {
        document.getElementById("error-terminos").textContent =
            "Debe aceptar los términos y condiciones.";
        formularioValido = false;
    }
if (!formularioValido) {
    e.preventDefault();
} else {

    e.preventDefault(); // para que no cambie de página

    const toast = document.createElement("div");
    toast.className = "toast-exito";
    toast.textContent = "✅ Datos enviados correctamente";

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}
});