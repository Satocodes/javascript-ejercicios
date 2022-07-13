
// calcular costo total de productos y/o servicios seleccionados por el usuario

let total = 0;
let eleccion = 0;
let totalProductosNombre = " ";
do {
    eleccion = prompt("Ingrese:\n 1- Monitor LCD 32 $85000 \n 2- Luces Audioritmicas $5000 \n 3- Mesa para living $55000 \n 4- Camara Web USB $5235\n Cualquier tecla para salir");
    if(eleccion == 1){
        total += 85000;
        totalProductosNombre += "- Monitor LCD 32 \n";
    }else if(eleccion == 2){
        total += 5000;
        totalProductosNombre += "- Luces Audioritmicas \n";
    }else if(eleccion == 3){
        total += 55000;
        totalProductosNombre += "- Mesa para living \n";
    }else if(eleccion == 4){
        total += 5235;
        totalProductosNombre += "- Camara Web USB  \n";
    }
}  while (eleccion > 0 && eleccion < 5);

alert("Te compraste todos estos productos\n" + totalProductosNombre + "El total a pagar es de: \n $ " + total );
