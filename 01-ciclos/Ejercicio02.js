// calculoar pago en cuotas sobre un monto determinado
let monto = 0;
let cuotas = 1;
let interes = 0;
let total = 0;
let totalEnCuotas = 0;

monto = parseInt(prompt("Ingrese el monto total a pagar"));

do {
    cuotas = parseInt(prompt("Elige las cuotas a pagar:\n 1 cuota Sin interes  \n 2 a 3 cuotas (10% de interes) \n 4 a 6 (15% de interes) \n 7 a 12 (25% de interes) \n"));

} while (cuotas < 1 || cuotas > 12);

decidircuotas(cuotas);

function decidircuotas(cuotas) {
    
if (cuotas == 1){
    interes = 0;  
    
    calcularInteres(interes);

}else if (cuotas >= 2 && cuotas <= 3) {
    interes = 0.10;

    calcularInteres(interes);

}else if (cuotas >= 4 && cuotas <= 6) {
    interes = 0.15;
    calcularInteres(interes);

}else if (cuotas >= 7 && cuotas <= 12) {
    interes = 0.25;

    calcularInteres(interes);

}
}

function calcularInteres(interes){
    
    total = monto + (monto * interes);
    totalEnCuotas = (total / cuotas).toFixed(2);
    alert("La cantidad de cuotas es de: " + cuotas + "\nCada cuota es de : $" + totalEnCuotas + " \nTotal a pagar con impuestos: \n $" + total);


}