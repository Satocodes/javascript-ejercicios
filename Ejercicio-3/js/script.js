var numerouno = 3;
var numerodos = 5;
var sumar = numerouno + numerodos;
var restar = numerouno - numerodos;
var multiplicar = numerouno * numerodos;
var dividir = numerouno / numerodos;

document.write("La suma de " + numerouno + " entre " + numerodos + " es: " + sumar + "</br>");
document.write("La resta de " + numerouno + " entre " + numerodos + " es:  " + restar + "</br>");
document.write("La multiplicación de " + numerouno + " entre " + numerodos + " es: "  + multiplicar + "</br>");
document.write("La división de " + numerouno + " entre " + numerodos + " es: "  + dividir + "</br>");


var peliculas = ['Volver al futuro','Brazil','Matrix','Titanic','Gladiador'];

peliculas.sort();

document.write("</br><b>Peliculas ordenadas alfabéticamente:</b></br>");
for (var i=0;i<peliculas.length;i++){
    document.write("" + peliculas[i] + "</br>");    
}
