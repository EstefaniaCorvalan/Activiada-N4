document.addEventListener("DOMContentLoaded", function () {
    // 1. Capturamos los parámetros que vienen en la URL
    const parametrosURL = new URLSearchParams(window.location.search);

    // 2. Obtenemos cada valor usando el atributo "name" que definimos en el HTML del Desarrollo A
    const nombre = parametrosURL.get("nombre");
    const email = parametrosURL.get("email");
    const edad = parametrosURL.get("edad");
    const pais = parametrosURL.get("pais");
    const terminos = parametrosURL.get("terminos");

    // 3. Validamos si efectivamente llegaron datos (por si entran a la página directo sin pasar por el formulario)
    if (nombre && email && edad && pais) {
        // Inyectamos los datos en los inputs correspondientes
        document.getElementById("res-nombre").value = nombre;
        document.getElementById("res-email").value = email;
        document.getElementById("res-edad").value = `${edad} años`;
        document.getElementById("res-pais").value = pais;
        
        // Si aceptó los términos, el parámetro viaja como "aceptado"
        document.getElementById("res-terminos").value = terminos === "aceptado" ? "Aceptados correctamente" : "No aceptados";
    } else {
        // Alerta o mensaje amigable si la URL está vacía
        const contenedor = document.getElementById("contenedor-datos");
        contenedor.innerHTML = `<p style="font-size: 1.8rem; color: #ef4444; font-weight: bold; text-align: center;">
                                    No se encontraron datos recibidos en la URL.
                                </p>`;
    }
});