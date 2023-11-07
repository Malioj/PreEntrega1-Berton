//CALCULO MATEMATICO
function calcularFrecuenciaCambio(cantidadVacas, cantidadOrdeños, cantidadEquipos) {
    const frecuenciaOrdeños = 2500;
    const totalOrdeños = (cantidadVacas * cantidadOrdeños) / cantidadEquipos;
    const frecuenciaDias = frecuenciaOrdeños / totalOrdeños;
    return frecuenciaDias;
}
//VERIFICO QUE LA CARGA DE DATOS SEA NUMEROS
function obtenerNumero(mensaje) {
    let input;
    let esNumero = false;

    while (!esNumero) {
        input = prompt(mensaje);

        if (input === null) {
            return null; // SI SE PRESIONA CANCELAR RETORNA NULL
        }

        esNumero = !isNaN(input) && input.trim() !== ""; // VALIDO QUE SEA NUM Y NO ESPACIO EN BLANCO
        if (!esNumero) {
            alert("Por favor, ingresa un número válido.");
        }
    }

    return parseInt(input);
}

// Solicitar datos al usuario
const cantidadVacas = obtenerNumero("Cantidad de vacas en ordeño:");
const cantidadOrdeños = obtenerNumero("Ingrese la cantidad de ordeños al día:");
const cantidadEquipos = obtenerNumero("Ingrese la cantidad de equipos de ordeño:");

if (cantidadVacas !== null && cantidadOrdeños !== null && cantidadEquipos !== null) {
    // Calcular la frecuencia de cambio
    const frecuenciaDias = calcularFrecuenciaCambio(cantidadVacas, cantidadOrdeños, cantidadEquipos);

    // Mostrar el resultado
    alert(`El cambio óptimo en días es de: ${frecuenciaDias} días.`);
} else {
    alert("Se canceló la entrada de datos. Refresca la página para volver a empezar.");
}
