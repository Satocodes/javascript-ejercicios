// calcular edad promedio de personas ingresadas

let cantidadAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos"));
let edadAlumnos; 

let sumaTotal = sumadorEdades(cantidadAlumnos);

function sumadorEdades(cantidadAlumnos){
    let contadorEdades = 0;

    let n;
    for (n=1; n<=cantidadAlumnos; n++){
        edadAlumnos = parseInt(prompt("Ingrese la edad del alumno " + n));
        contadorEdades += edadAlumnos;
    }

    return contadorEdades;

}

let resultadoFinal = alert("El promedio de edad es " + parseInt(sumaTotal / cantidadAlumnos));


