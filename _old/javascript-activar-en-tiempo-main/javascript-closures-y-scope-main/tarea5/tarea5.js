function padre() {
    let variablePadre = "Padre";
    function hijo() {
        console.log(variablePadre); // Accesible aquí
    }
    hijo();
}
padre(); // Imprime: Padre
