function calcularFrecuenciaCambio(cantidadVacas, cantidadOrdeños, cantidadEquipos) {
    const frecuenciaOrdeños = 2500;
    const totalOrdeños = (cantidadVacas * cantidadOrdeños) / cantidadEquipos;
    const frecuenciaDias = frecuenciaOrdeños / totalOrdeños ;
    return frecuenciaDias;
}

function obtenerNumero(mensaje) {
    let input;
    let esNumero = false;

    while (!esNumero) {
        input = prompt(mensaje);

        if (input === null) {
            return null; // Si el usuario presiona "Cancelar", retornar null
        }

        esNumero = !isNaN(input) && input.trim() !== ""; // Validar que sea un número y no esté en blanco
        if (!esNumero) {
            alert("Por favor, ingresa un número válido.");
        }
    }

    return parseInt(input);
}

document.querySelector('.card form').addEventListener('submit', function(event) {
    event.preventDefault();

    const cantidadVacas = parseInt(document.getElementById("cantidadVacas").value);
    const cantidadOrdeños = parseInt(document.getElementById("cantidadOrdeños").value);
    const cantidadEquipos = parseInt(document.getElementById("cantidadEquipos").value);

    if (!isNaN(cantidadVacas) && !isNaN(cantidadOrdeños) && !isNaN(cantidadEquipos)) {
        const frecuenciaDias = calcularFrecuenciaCambio(cantidadVacas, cantidadOrdeños, cantidadEquipos);

        alert(`El cambio óptimo en días es de: ${frecuenciaDias} días.`);
    } else {
        alert("Por favor, ingresa números válidos en todos los campos.");
    }
});


