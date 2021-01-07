var productos = [
    { 
        nombre: "harina", 
        precio: 35
    },
    {
        nombre: "pan", 
        precio: 25
    },
    {
        nombre: "papa", 
        precio: 52
    },
    {
        nombre: "palta", 
        precio: 55
    },
    {
        nombre: "fideos", 
        precio: 85
    },
    {
        nombre: "aceite",
        precio: 350
    },
    {
        nombre: "sopa",
        precio: 86
    },
    {
        nombre: "mermelada",
        precio: 108
    },
    {
        nombre: "porotos",
        precio: 69
    },
    {
        nombre: "lentejas",
        precio: 85
    },
    {
        nombre: "mandarina",
        precio: 43
    },
    {
        nombre: "banana",
        precio: 79
    },		
    {
        nombre: "leche de almendras",
        precio: 145
    },
    {
        nombre: "papel higiénico",
        precio: 147
    },
    {
        nombre: "lavandina",
        precio: 55
    },
    {
        nombre: "alcohol en gel",
        precio: 123
    },
    {
        nombre: "shampoo",
        precio: 400
    },
    {
        nombre: "arroz",
        precio: 66
    },
    {
        nombre: "harina",
        precio: 35
    },
    {
        nombre: "salsa de tomate", 
        precio: 35
    }
];
/*
let listado_productos = document.querySelector('#listado_productos'); //selecciona el id listado_productos que es un ul
//console.log(listado_productos);
let li = document.createElement('li'); //crea un elemento li y lo guarda en la variable li
let txt = document.createTextNode('Nombre porducto - $11'); //crea un string de texto, le adjunta el text node a la nueva variable txt
li.appendChild(txt); //concantena con appendchiuld la etiqueta li al string txt
listado_productos.appendChild(li) //le guarda el contenido de li en la varible listado_productos que envia al html
console.log(listado_productos);
*/

var productoscomprados = [];
var validar = 0;
console.log(productoscomprados);

var y = 0;


function cargar(){
    
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



        li.onclick = function () { alHacerclickEnProducto(i); };





        listado_productos.appendChild(li) //le guarda el contenido de li en la varible listado_productos que envia al html



    }
   
}

function alHacerclickEnProducto(i) {
    var i = i;
    if (productoscomprados.includes(i)){
        
        removeritem(productoscomprados, i);
        
        validar = 0;
    }else{
        
       
        productoscomprados.push(i);

        validar = 1;
    }

    console.log('hizo click en producto', i);

    console.log(productoscomprados);

    limpiar();
    
    cargar();


}

function removeritem(arr, item){
    let i;
    while((i = arr.indexOf(item)) !== -1){
        arr.splice(i, 1);
    }


}

function limpiar(){
    

    let parrafo = document.getElementById("listado_productos");
  
    for (let e = 0; e < 21; e++){
    if (parrafo.hasChildNodes()) {
    parrafo.removeChild(parrafo.firstChild);
    }
}
    
    

}

window.onload = cargar;
