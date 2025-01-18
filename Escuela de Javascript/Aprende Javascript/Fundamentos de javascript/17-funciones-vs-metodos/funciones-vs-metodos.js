
/*
 Capacidades que tienen las funciones como

 1. Un callback es una funcion que se pasa como argumentos


 Ejemplo
function a(){}
function b(a){}
b(a)


Retornar funciones dentro de funciones

function a(){
    function b (){
    return b
    }
}

Retornar funciones a variables

const a = function (){}

// asignar funciones a variables (expresion de funcion)

const a = function (){}

fijate que el nombre de fuction se borra y va al nombre de la variable

// tener propiedades y metodos

function a (){}
const obj = {}
a.call(obj)

// andidar funciones -> nested functions


function a(){}
    function b(){
        function c(){

    }
    c()
}

b()
}
a()

// Es posible amlmacenar funcoines en objetos?

const rocket = {
 name: 'Falcon 9',
 launchMessage: function launchMessage(){
  console.log('LANZADO')
  }

 }
rocket.launchMessage();

*/

// estos son metodos (el de lanzado)
const rocket = {
    name: 'Falcon 9',
    launchMessage: function launchMessage(){
     console.log('LANZADO')
     }
   
    }
   rocket.launchMessage();