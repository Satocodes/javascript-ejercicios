var productoscomprados = [];

console.log(productoscomprados);

var y = 0;


function mostrarcarrito() {
    let lista_carrito = document.querySelector('#lista_carrito'); //selecciona el id lista_carrito que es un ul y lo guarda en la variable listado_productos

    for (let i = 0; i < productos.length; i++) {

        if (productoscomprados.length == 0) {
            console.log('esta vacio')
        } else {
            console.log('no esta vacio  ')
            for (let j = 0; j < productoscomprados.length; j++) {
                if (productoscomprados[j] == i) {
                    var li2 = document.createElement('li'); //crea un elemento li y lo guarda en la variable li
                    var txt2 = document.createTextNode(productos[i].nombre + " - $" + productos[i].precio); //crea un string de texto, le adjunta el text node a la nueva variable txt
                    li2.appendChild(txt2); //concantena con appendchiuld la etiqueta li al string txt

                    lista_carrito.appendChild(li2) //le guarda el contenido de li en la varible listado_productos que envia al html

                }
            }
        }

    }

}



function limpiarcarrito() {


    let lista_carrito = document.querySelector('#lista_carrito');

    for (let g = 0; g < productoscomprados.length; g++) {
        if (lista_carrito.hasChildNodes()) {
            lista_carrito.removeChild(parrafo.firstChild);
        }
    }



    
}


function limpiarcarrito() {


    let lista_carrito = document.getElementById("lista_carrito");

    for (let e = 0; e < 21; e++) {
        if (lista_carrito.hasChildNodes()) {
            lista_carrito.removeChild(lista_carrito.firstChild);
        }
    }



}
function cargar() {

    let listado_productos = document.querySelector('#listado_productos'); //selecciona el id listado_productos que es un ul y lo guarda en la variable listado_productos


    for (let i = 0; i < productos.length; i++) {
        let li = document.createElement('li'); //crea un elemento li y lo guarda en la variable li
        let txt = document.createTextNode(productos[i].nombre + " - $" + productos[i].precio); //crea un string de texto, le adjunta el text node a la nueva variable txt


        li.appendChild(txt); //concantena con appendchiuld la etiqueta li al string txt

        for (let f = 0; f < productoscomprados.length; f++) {
            if (i == productoscomprados[f]) {
                li.style.backgroundColor = "lightblue";
            }
        }



        li.onclick = function () {
            alHacerclickEnProducto(i);
        };


        listado_productos.appendChild(li) //le guarda el contenido de li en la varible listado_productos que envia al html
    }

}

function alHacerclickEnProducto(i) {
    var i = i;
    if (productoscomprados.includes(i)) {

        removeritem(productoscomprados, i);

    } else {


        productoscomprados.push(i);

     
    }

    console.log('hizo click en producto', i);

    console.log(productoscomprados);

    limpiarlista();
 
    cargar();
    limpiarcarrito();
    mostrarcarrito();

}

function removeritem(arr, item) {
    let i;
    while ((i = arr.indexOf(item)) !== -1) {
        arr.splice(i, 1);
    }


}

function limpiarlista() {


    let parrafo = document.getElementById("listado_productos");

    for (let e = 0; e < 21; e++) {
        if (parrafo.hasChildNodes()) {
            parrafo.removeChild(parrafo.firstChild);
        }
    }



}

window.onload = cargar(), mostrarcarrito();