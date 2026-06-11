const formRegistro = document.getElementById("form-registro");

formRegistro.addEventListener("submit", function(e) {
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const edad = parseInt(document.getElementById("edad").value, 10);
    const pais = document.getElementById("pais").value;
    const terminos = document.getElementById("terminos").checked;

    //Validacion Nombre
    if (nombre.length < 5) {
        e.preventDefault(); // Frenamos el envío
        alert("El nombre debe tener al menos 5 caracteres.");
        return;
    }

    //Validacion del Correo
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        e.preventDefault();
        alert("Por favor, ingrese un correo electrónico válido.");
        return;
    }

    //Validacion de la Edad
    if (isNaN(edad) || edad < 18 || edad > 60) {
        e.preventDefault();
        alert("La edad debe estar entre 18 y 60 años.");
        return;
    }

    //Validacion del País
    if (pais === "") {
        e.preventDefault();
        alert("Por favor, seleccione un país de la lista.");
        return;
    }

    //Validacion de Terminos Aceptados
    if (!terminos) {
        e.preventDefault();
        alert("Debe aceptar los términos y condiciones para continuar.");
        return;
    }

    alert("¡Validación exitosa! Enviando datos...");
});