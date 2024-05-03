if (true) {
    var globalVar = "Soy global";
    let localVar = "Soy local";
}
console.log(globalVar); // Imprime: Soy global
console.log(localVar); // ReferenceError: localVar is not defined
