// calcular tiempo de espera promedio en relacion a la cantidad de turnos registrados


let cantidadTurnos = parseInt(prompt("Ingrese la cantidad de turnos registrados"));
let tiempoEspera; 

let sumaTotal = sumadorDeTurnos(cantidadTurnos);

function sumadorDeTurnos(cantidadTurnos){
    let contadorTurnos = 0;

    let n;
    for (n=1; n<=cantidadTurnos; n++){
        tiempoEspera = parseInt(prompt("Ingresa la cantidad de minutos de espera aprox del turno " + n));
        contadorTurnos += tiempoEspera;
    }

    return contadorTurnos;

}

let resultadoFinal = alert("El promedio de espera de turnos es " + parseInt(sumaTotal / cantidadTurnos));

