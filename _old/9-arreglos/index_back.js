
/// mostrar todos los elementos
//console.log(tareas);

// Funcion Find
// buscar dentro del vector

function esElementoBuscado(unElemento){
    //devuelve true o false
    // podriamos escribirlo así:
     if(unElemento.id == 5) {
         return true;
    } else {
        return false;
    } 
  
    // podemos hacerlo con operadores termarios
 return unElemento.id == 5 ?  true : false; // si el elemento.id es igual a 5 devuelve true sino false.
} 

//const elementoEncontrado = tareas.find(esElementoBuscado)
// es lo mismo que hacer:
// todo en una funcion arrow 

const elementoEncontrado = tareas.find((unElemento) => {
    return unElemento.id == 5 ?  true : false;
})


console.log("El elemento encontrado es: ", elementoEncontrado);

// otra forma de hacerlo:
const esElElementoEncontrado =  (unElemento) => unElemento.id == 5 ? true : false

const elementoentontradootraforma = tareas.find(esElElementoEncontrado);
console.log("El elemento encontrado es de otra forma: ", elementoentontradootraforma);

/// como trabajamos la funcion find:
//tareas.find(esElementoBuscado) // vector.find(elementoamandar)
//recibe una funcion que devuelve true o false y se busca en cada uno de los elementos del vector
// en algun momento devuelte TRUE si 1 sola vez encuentra el elemento. (un solo elemento)
// si devuelve false es que no encuetra nada en el vector.
// el find cuando no encuentra nada devuelve UNDEFINED

//slice
// nos permite traer un arreglo inicial con un indice inicial y un indice final
//.slice(indexStart, indexEnd)
/*
let array = [10, 20, 30, 40, 50];
let subarray = array.slice(0,3);
console.log(subarray)

//clone array
function cloneArray(array){
    return array.slice(0)
}

cloneArray(array);


*/