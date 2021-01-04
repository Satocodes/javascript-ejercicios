
var productosComprados = [0]
var cantidadComprados = 0
var gastoTotal = 0

for(let i = 0; i <20 ; i++) {

    let tabla = document.getElementById("ListaProductos");
    let renglonNuevo = document.createElement("tr");
    let itemNuevo = document.createElement("td");
    let precioNuevo = document.createElement("td");
    let celdaBoton = document.createElement("td");
    let botonNuevo = document.createElement("button");
    let leyendaBoton = document.createTextNode("Agregar al carro");
    let nombreItem = document.createTextNode(productos[i].nombre);
    let precioItem = document.createTextNode(productos[i].precio)
    itemNuevo.appendChild(nombreItem);
    precioNuevo.appendChild(precioItem);
    renglonNuevo.appendChild(itemNuevo);
    renglonNuevo.appendChild(precioNuevo);
    botonNuevo.appendChild(leyendaBoton);
    botonNuevo.setAttribute("id", i);
    botonNuevo.setAttribute("onclick", "agregarProducto(event)");
    celdaBoton.appendChild(botonNuevo);
    renglonNuevo.appendChild(celdaBoton);
    tabla.appendChild(renglonNuevo);   
    }

function agregarProducto(e) {
        let tablaCarrito = document.getElementById("CarritoCompras");
        let productoAgregado = e.target.id;
        let renglonCarrito = document.createElement("tr");
        renglonCarrito.setAttribute("id", "ab" + productoAgregado);
        renglonCarrito.setAttribute("class", "renglonCarrito");
        let numeroComprado = document.createElement("td");
        let numeroRenglon = cantidadComprados + 1 
        let leyendaNumeroComprado = document.createTextNode(numeroRenglon);
        let celdaPrecio=  document.createElement("td");
        let celdaNombre=  document.createElement("td");
        let celdaBoton=  document.createElement("td");
        let nombreItem = document.createTextNode(productos[productoAgregado].nombre);
        let precioItem = document.createTextNode(productos[productoAgregado].precio);
        let botonQuitar = document.createElement("button")
        botonQuitar.setAttribute("id", "b" + productoAgregado);
        botonQuitar.setAttribute("onclick", "quitarProducto(event)");
        let nombreQuitar = document.createTextNode("Quitar")
        numeroComprado.appendChild(leyendaNumeroComprado);
        renglonCarrito.appendChild(numeroComprado);
        renglonCarrito.appendChild(celdaNombre);
        celdaNombre.appendChild(nombreItem);
        numeroComprado.setAttribute("id", "q" + numeroRenglon);
        renglonCarrito.appendChild(celdaPrecio);        
        botonQuitar.appendChild(nombreQuitar);
        celdaPrecio.appendChild(precioItem);
        celdaBoton.appendChild(botonQuitar); 
        renglonCarrito.appendChild(celdaBoton);       
        tablaCarrito.appendChild(renglonCarrito);        
        gastoTotal = gastoTotal + productos[productoAgregado].precio;
        let mostrarPrecioTotal = document.getElementById("precioTotal");
        mostrarPrecioTotal.innerHTML = gastoTotal;
        productosComprados[cantidadComprados] = productos[productoAgregado].nombre;
        cantidadComprados++;        
}

function quitarProducto(e) {
    let productoQuitado = e.target.id;    
    let renglonQuitar = document.getElementById("a" + productoQuitado);
    let indiceRemover = renglonQuitar.firstChild.id.substring(1) - 1; 
    renglonQuitar.remove();
    let indiceQuitado = productoQuitado.substring(1);
    gastoTotal = gastoTotal - productos[indiceQuitado].precio;
    let mostrarPrecioTotal = document.getElementById("precioTotal");
    mostrarPrecioTotal.innerHTML = gastoTotal;
    cantidadComprados = cantidadComprados - 1;
    for (let i = 0; i < cantidadComprados; i++)     {
        let renglonActual = document.getElementsByClassName("renglonCarrito")[i];
        let numeroRenglon = i+1
        renglonActual.firstChild.firstChild.nodeValue = (numeroRenglon);
        renglonActual.firstChild.setAttribute("id", "q" + numeroRenglon);
    }
productosComprados.splice(indiceRemover, 1);  
}

function mostrarCompras() {
alert("Los productos comprados son: " + productosComprados + " y el precio total de la compra es " + gastoTotal);
}