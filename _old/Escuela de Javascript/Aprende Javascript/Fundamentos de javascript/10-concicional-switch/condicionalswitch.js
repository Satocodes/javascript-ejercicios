let fruta = "manzana";
let frutados = "pera";
let cantidad = 5;
//La clave de switch debe ser true para poder agregar estrucutras condicionales
switch (true) {
    case (fruta === frutados):
        console.log('No son iguales');
        break;
    case (fruta === "naranja"):
        console.log("Es una naranja.");
        break;
    default:
        console.log("Fruta no reconocida.");
}