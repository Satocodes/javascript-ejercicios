    /* Funciopn para no enviar el formulario si hay errores validacion de forms con javascript */ 
    function checkForm(e) { 
      e.returnValue = false; 
} 





/* empieza la validacion  de campos */
function validacionDeCampos() {
  var errornacimiento = "0";



  
/*-----------------------------------*/

    /*
    _________________ Declaración de variables
    */
     // Toma el valor de el campo "nombre" y lo guarda en la variable de js "nombre"
    var nombre = document.getElementById("nombre").value, errornombre;
    var apellido = document.getElementById("apellido").value, errorapellido;
    var email = document.getElementById("email").value, erroremail;
   var telefono = document.getElementById("telefono").value, errortelefono; 
   var mensaje = document.getElementById("mensaje").value, errormensaje; 
   
  /*  _________________ Validacion de variables
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




    /*  _________________ Validacion de variables
    */
    // Si el coantidad de caracteres dele mensaje tiene menos de 3 caracteres arroja un error
    if (mensaje.length == 0) {
      errormensaje = "No dejés vacío tu mensaje";
      errortodo += "error"; //variable  para guardar si existe errores y ejecutar una funcion si no hay errores
      }else if (mensaje.length > 0 && mensaje.length < 3) {
      errormensaje = "El mensaje no puede ser tan corto";
      errortodo += "error"; //variable  para guardar si existe errores y ejecutar una funcion si no hay errores
      } else {
      errormensaje = " ";
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
    document.getElementById("errormensaje").innerHTML = errormensaje;
 
    document.getElementById("mostrarerrortodo").innerHTML = mostrarerrortodo;

  }

