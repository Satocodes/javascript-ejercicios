    /* Funciopn para no enviar el formulario si hay errores validacion de forms con javascript */ 
    function checkForm(e) { 
      e.returnValue = false; 
} 





/* empieza la validacion  de campos */
function validacionDeCampos() {
  var errornacimiento = "0";
var errorcc;
var errorprle;


  

  
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



    
if (errortodo==""){
  mostrarerrortodo = ""; //ejecuta las funciones si no hay errores en el form
  ocultarenviar();

  setTimeout(function() { 

    mostrarthankyou(); 

  },100 )
     
  }else {
    mostrarerrortodo = "Hay un error &#x274c;";
  
  }


  
    //manda errornombre al campo errornombre del html
    document.getElementById("errornombre").innerHTML = errornombre;
    document.getElementById("errorapellido").innerHTML = errorapellido;
    document.getElementById("errortelefono").innerHTML = errortelefono;
    document.getElementById("erroremail").innerHTML = erroremail;
  
        /*- provincia*/
    



    document.getElementById("mostrarerrortodo").innerHTML = mostrarerrortodo;

  }

