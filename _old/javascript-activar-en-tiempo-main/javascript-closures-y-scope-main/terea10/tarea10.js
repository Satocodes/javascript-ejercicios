function pruebaModoEstricto() {
    "use strict";

    // Intentando asignar a una variable no declarada dentro de una función
    pi = 3.14;
    return pi;
}

console.log(pruebaModoEstricto());  // Esto generará un error: ReferenceError: pi is not defined
