// Definir una función que crea una variable global implícita
function crearVariableGlobalImplicita() {
    variableGlobalImplicita = "Soy global implícita";
}
// Llamar a la función para crear la variable global implícita
crearVariableGlobalImplicita();

// Intentar acceder a la variable desde fuera de la función
console.log(variableGlobalImplicita); // 'Soy global implícita'