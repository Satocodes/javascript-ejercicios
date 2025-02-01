// itera sobre objetos numerables que tienen valores internos

// la estructura sera for(variable in objeto){}




let listaCompra = {
    pan: 3, 
    leche: 2,
    frutas: 6,
    carne: 4,
    especias: 7
}

// ahi listamo la estructura de cada uno
for (item in listaCompra){
    console.log(item);
}

//aca recorreremos el valor

for (item in listaCompra){
    console.log(`${item} : ${listaCompra[item]}`);
}