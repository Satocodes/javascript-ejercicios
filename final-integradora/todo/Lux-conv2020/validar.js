    /* Funciopn para no enviar el formulario si hay errores validacion de forms con javascript */ 
    function checkForm(e) { 
      e.returnValue = false; 
} 





/* empieza la validacion  de campos */
function validacionDeCampos() {
  var errornacimiento = "0";
var errorcc;
var errorprle;

/*----------validación de fecha de nacimiento-------------*/

var datepicker = document.getElementById("datepicker").value , errorfdn; /* toma la fecha de nacimiento por teclado*/
fechatotal = datepicker.toString();

/* divide y guarda el dia, mes y año  ingresado en datepicker*/
   var diaingresado = datepicker.split('-');
   var dia = diaingresado[0].split(',');
   var mes = diaingresado[1].split(',');
   var anio = diaingresado[2].split(',');

/* transforma en strings los arrays ingresados de datepicker*/
   diaingresado = diaingresado.toString();
   dia = dia.toString();
   mes = mes.toString();
   anio = anio.toString();

  /* convierte en int los dias, meses y año actuales */
  var dia = parseInt(dia);
  var mes = parseInt(mes); 
  var anio = parseInt(anio);

/* obtiene la fecha actual */

var hoy = new Date();
var dd = hoy.getDate();
var mm = hoy.getMonth()+1;
var yyyy = hoy.getFullYear();


 console.log('dia ingresado: ', diaingresado);
 console.log('dia: ', dia);
 console.log('mes ingresado: ', mes);
 console.log('año ingresado: ', anio);

console.log('dia actual completo: ',hoy);
console.log('dia actual : ',dd);
console.log('mes actual : ',mm);
console.log('anio actual : ',yyyy);

console.log('sarasa',fechatotal);


 //corrobora si la fecha de nacimiento esta vacía
 if (yyyy-anio<18){
  errorfdn = "No tenés 18 años &#128517;";
 
  checkForm(event);/*llama  a la funcion para no validar el evento de checkform */
  window.location.href = "#datepicker";
/*busca el anchor "datepicker" guardado en name y muestra esa parte*/

}else {
  errorfdn = "";
  errortodo = "";
  errornacimiento = "1";
  }
  

  
/*-----------------------------------*/

    /*
    _________________ Declaración de variables
    */
     // Toma el valor de el campo "nombre" y lo guarda en la variable de js "nombre"
    var nombre = document.getElementById("nombre").value, errornombre;
    var apellido = document.getElementById("apellido").value, errorapellido;
    var email = document.getElementById("email").value, erroremail;
   var telefono = document.getElementById("telefono").value, errortelefono; 
   

    //al ser checkboxes se usa la función "checked" que guarda un boolean si esta o no tildado el checkbox
    var mayor = document.getElementById("mayor18").checked, errormayor;
   var byc = document.getElementById("byc").checked, errorbyc;
 
  var errortodo = "", mostrarerrortodo;
    
  

    /*
 
    _________________ Validacion de variables
    */
    // Si el coantidad de caracteres de nombre tiene menos de 3 caracteres arroja un error
    if (nombre.length == 0) {
    errornombre = "No dejés vacío tu nombre";
    errortodo += "error"; //variable  para guardar si existe errores y ejecutar una funcion si no hay errores
    }else if (nombre.length > 0 && nombre.length < 3) {
    errornombre = "El nombre no puede ser tan corto";
    errortodo += "error"; //variable  para guardar si existe errores y ejecutar una funcion si no hay errores
    } else {
    errornombre = " ";
    errortodo = "";
    }


    if (apellido.length == 0) {
      errorapellido = "No dejés vacío tu apellido";
      errortodo += "error";
      }else if (apellido.length > 0 && apellido.length < 3) {
      errorapellido = "El apellido no pude ser tan corto";
      errortodo += "error";
    } else {
      errorapellido = "";
      errortodo = "";
    }

    //Valida si el telefono ingresado es válido
    var expresionRegular1=/^([0-9]+){9}$/;//<--- con esto vamos a validar el numero
    var expresionRegular2=/\s/;//<--- con esto vamos a validar que no tenga espacios en blanco
   
    if(telefono.value==''){
    errortelefono = "El campo de teléfono no puede ir vacio";
    errortodo += "error";
  } else if(expresionRegular2.test(telefono.value)){
    errorapellido = "Existen espacios en blanco en el teléfono";
    errortodo += "error";
  } else if(!expresionRegular1.test(telefono.value)){
  errortelefono = "Número de teléfono incorrecto";
    errortodo += "error";
  }else{
    errortelefono = "";
    errortodo = "";
  }


//Validacion de email (es diferente a las demas)
if (emailIsValid(email)){
  erroremail = "";
  errornombre = "";
  errortodo = "";
}else if (email === ''){
  erroremail = "No dejés vacío tu email";
  errortodo += "error";
}
else {
  erroremail = "No es un email válido";
  errortodo += "error";
}




//esta funcion nueva es para verificar si el mail contiene los parámetros válidos
function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

  
   //validacion de numero telefonico
   if (telefono === '') {
    errortelefono = "El teléfono no puede ir vacío";
    errortodo += "error";
  }else if (telefono.length <= 4){
    errortelefono = "El teléfono es muy corto";
    errortodo += "error";
  }else if (isNaN(telefono)) {
    errortelefono = "Ingresá solamente números en el teléfono";
    errortodo += "error";
  } else {
    errortelefono = "";
    errortodo = "";
  }


  //validación de mayor de 18 
if (!mayor){
  errormayor= "Debes ser mayor de 18 años";
  errortodo += "error";
}else {
  errormayor = "";
  errornombre = "";
  errortodo = "";
}

//validación de mayor bases y condiciones
if (!byc){
  errorbyc= "Debes aceptar las bases y condiciones";
  errortodo += "error";
}else {
  errorbyc = "";
  errornombre = "";
}

    
if (errortodo==""&&errornacimiento == "1"){
  mostrarerrortodo = ""; //ejecuta las funciones si no hay errores en el form
  ocultarenviar();
  mostrarenviando();
  setTimeout(function() { 

    mostrarthankyou(); 

  },3000)
     
  }else {
    mostrarerrortodo = "Hay un error &#x274c;";
  
  }


  
    //manda errornombre al campo errornombre del html
    document.getElementById("errornombre").innerHTML = errornombre;
    document.getElementById("errorapellido").innerHTML = errorapellido;
    document.getElementById("errortelefono").innerHTML = errortelefono;
    document.getElementById("erroremail").innerHTML = erroremail;
    document.getElementById("errorfdn").innerHTML = errorfdn;
        /*- provincia*/
    
    document.getElementById("errormayor").innerHTML = errormayor;
    document.getElementById("errorbyc").innerHTML = errorbyc;

    document.getElementById("mostrarerrortodo").innerHTML = mostrarerrortodo;

  }

