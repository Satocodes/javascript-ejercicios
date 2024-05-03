const tareas = require('./vector_tareas.js').tareas; //importamos el contenido de tareas

//FIND
/// como trabajamos la funcion find:
    //tareas.find(esElementoBuscado) // vector.find(elementoamandar)
    //recibe una funcion que devuelve true o false y se busca en cada uno de los elementos del vector
    // en algun momento devuelte TRUE si 1 sola vez encuentra el elemento. (un solo elemento)
    // si devuelve false es que no encuetra nada en el vector.
    // el find cuando no encuentra nada devuelve UNDEFINED

//forma final:
const elementoEncontrado = tareas.find((unElemento) => unElemento.id == 5 ?  true : false);
console.log (elementoEncontrado);

// findindex
// lo mismo que find, pero solo devuelve el indice de donde se encuentra lo buscado/encontrado

// const elementoEncontradoIndex = tareas.findIndex(esElementoBuscado);
// si no ecuentra nada retorna -1

const elementoEncontradoIndex = tareas.findIndex((unElemento) => unElemento.id == 5 ?  true : false);
console.log("El index donde se encuentra el elemento es: ", elementoEncontradoIndex);

// filter
// con filter guardamos en un vector todos los contenidos que contengan el mismo patrón, a diferencia de findindex o find guarda TODOS y no solo 1
// si no ecuentra nada retorna [] o sea un vector vacío
const elementoEncontradoFilter = tareas.filter((unElemento) => unElemento.userId == 10 ?  true : false);
console.log("Elementos encontrados con filter: ", elementoEncontradoFilter);

//slice
// nos permite traer un arreglo inicial con un indice inicial y un indice final
//.slice(indexStart, indexEnd)

const posicion = tareas.findIndex((unElemento) => unElemento.userId == 2 ?  true : false);
const parteUnoVector = tareas.slice(0, posicion);
const parteDosVector = tareas.slice(posicion+1)

const nuevoVector = parteUnoVector.concat(parteDosVector); //concatena ambos
console.log("Slice: ", nuevoVector);


// map
// map recorta y guarda en un nuevo vector contenido
// toma todos los elementos de un vector y recorta información del contenido
// ejemplo tengo un vector que tiene contenido userid, id, title etc quiero solo un vector que SOLO tenga userid e ID
// el map se usa bastante para usar jx en return con <div>{}</div>
/*
const taresSimplificadas = tareas.map((unElemento) => { //si empezamos con llaves tenemos que dar return
    return {
        id: unElemento.id,
        titulo: unElemento.title
    }
})
*/
//simplificado
const taresSimplificadas = tareas.map((unElemento) => ({id: unElemento.id, titulo: unElemento.title} ) )



console.log("Map simplificado", taresSimplificadas);
