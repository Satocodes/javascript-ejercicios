var nombre = prompt("ingrese su nombre")
var curso = prompt("ingrese su curso")

var elemento1 = document.getElementById('caja1')

elemento1.innerHTML = '<h1>Bienvenid@'+nombre+'</h1><h2>Clase virtual de'+curso+'</h2>'

var elemento2 = document.getElementById('caja2')

var color = prompt("Seleccione un color de fondo: Rojo - Verde - Azul")

if(color=='rojo'){
    elemento2.style.backgroundColor= 'red'
}
if(color=='verde'){
    elemento2.style.backgroundColor= 'green'
}

if(color=='azul'){
    elemento2.style.backgroundColor= 'blue'
}

var parrafos = document.getElementsByTagName('p')

parrafos[0].style.color='#FFFFFF'
parrafos[1].style.fontSize='22px'
parrafos[2].style.display='none'

var elemento3 = document.getElementById('caja3')

var lista = confirm("Desea ver la info de la caja 3?")

if(lista) {
    var info = document.getElementById('info')
    info.style.display='block'

    var items = documt.getElementsByTagName('li')

    items[0].style.textTranform = 'uppercase'
    items[1].style.fontWeight = 'bold'
    items[2].style.color = 'orange'
}