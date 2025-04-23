function encontrarPareja(arr) {
    arr.sort();
    let inicio = 0;
    let fin = 1;
    let parejasEncontradas = [];
    while (fin < arr.length) {
        if (arr[inicio][0].toLowerCase() === arr[fin][0].toLowerCase()) {
            parejasEncontradas.push([arr[inicio], arr[fin]]);
        }
        inicio++;
        fin++;
    }
    if (parejasEncontradas.length <= 0) {
        return 'No se encontraron parejas con la misma letra en su nombre.';
    }
    return parejasEncontradas
}

const invitados = ['Ana', 'Andres', 'Carlos', 'Camilo', 'Andrea'];
console.log(encontrarPareja(invitados));
