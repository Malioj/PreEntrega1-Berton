function calcularFrecuenciaCambio(cantidadVacas, cantidadOrdeños, cantidadEquipos) {
    const frecuenciaOrdeños = 2500;
    const totalOrdeños = (cantidadVacas * cantidadOrdeños) / cantidadEquipos;
    const frecuenciaDias = Math.round(frecuenciaOrdeños / totalOrdeños);
    return frecuenciaDias;
}

document.querySelector('.card form').addEventListener('submit', function(event) {
    event.preventDefault();

    const cantidadVacas = parseInt(document.getElementById("cantidadVacas").value);
    const cantidadOrdeños = parseInt(document.getElementById("cantidadOrdeños").value);
    const cantidadEquipos = parseInt(document.getElementById("cantidadEquipos").value);

    if (!isNaN(cantidadVacas) && !isNaN(cantidadOrdeños) && !isNaN(cantidadEquipos) && cantidadVacas > 0 && cantidadOrdeños > 0 && cantidadEquipos > 0) {
        const frecuenciaDias = calcularFrecuenciaCambio(cantidadVacas, cantidadOrdeños, cantidadEquipos);

        alert(`El cambio óptimo en días es de aproximadamente: ${frecuenciaDias} días.`);
    } else {
        alert("Por favor, ingresa números positivos y válidos en todos los campos.");
    }
});


