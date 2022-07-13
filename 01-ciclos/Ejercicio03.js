// Calcular valor final de un producto seleccionado por el usuario en funcion de impuestos y descuentos
let producto = 54000.50;
let impuesto = 0.16;
let descuento = 0.05;
let eleccion = 2;

let total;



do {

    eleccion = prompt("Ingrese:\n 1- TV 75 pulgadas $185000 \n 2- PC Gamer $275000 \n 3- Playstation 5 $250000 \n 4- Nintendo Switch Oled $145800\n Cualquier tecla para salir");

    decidirEleccion(eleccion);

} while (cuotas < 1 || cuotas > 4)



function decidirEleccion(eleccion) {
    switch (eleccion) {
        case "1":
            producto = 185000;
            productoElegido = "TV 75 pulgadas";
            calculoFinal(producto, productoElegido, impuesto, descuento);
            break;
        case "2":
            producto = 275000;
            productoElegido = "PC gamer";
            calculoFinal(producto, productoElegido, impuesto, descuento);
            break;
        case "3":

            producto = 250000;
            productoElegido = "Playstation 5";
            calculoFinal(producto, productoElegido, impuesto, descuento);
            break;
        case "4":

            producto = 145800;
            productoElegido = "Nintendo Switch OLED";
            calculoFinal(producto, productoElegido, impuesto, descuento);
            break;
        default:
            alert("¡Nos vemos!");
    }
}

function calculoFinal(producto, productoElegido, impuesto, descuento) {
    total = producto + (producto * impuesto) + (producto * descuento);
    alert("Elegiste: " + productoElegido + " el precio final con impuestos y descuentos es: \n $" + total);
}