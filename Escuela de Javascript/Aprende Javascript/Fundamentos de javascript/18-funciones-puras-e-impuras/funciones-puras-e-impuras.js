// Funciones puras

// Funciones impuras ocn  Side effects:

// 1. Modificar variables globales
// 2. Modificar parámetros
// 3. Solicitudes HTTP
// 4. Imprimir mensajes en pantalla o consola
// 5. Manipulacion del DOM
// 6. Obtener la hora actual

//Funcion pura
// esta es una funcion pura, amos a hacer siempre lo mismos (sin los side effects)
function sum(a,b){

    return a + b
}

// Funcion pura 
function square(x){
    return x * x
}

// Funciones impuras 
// es funcion impura porque imprimimos mensaje en pantalla
function sum(a,b){
    console.log('A:', a)
    return a + b
}


// funcoin impura que modifica variable global y modifica paramters
let total = 0
function sumWithSideEffect (a){
    total += a
    return total
}


function addTen (y){
    return y + 10
}



const number = 5
const finalResult = addTen(square(number))
