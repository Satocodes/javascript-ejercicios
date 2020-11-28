<?php
//declarando las variables

$error = '';

$nombre = '';
$apellido = '';
$email = '';
$telefono = ' ';

$datepicker = '';

$mayor_18_anos = '';
$allow_global = '0'; 
$allowbrand = '0';
$acepto_bases_y_condiciones = '';



    $nombre = $_POST["nombre"];
    $nombre = filter_var($nombre, FILTER_SANITIZE_STRING);
    $nombre = trim($nombre);


	
	  $apellido = $_POST["apellido"];
    $apellido = filter_var($apellido, FILTER_SANITIZE_STRING);
    $apellido = trim($apellido);   

    



    $email = $_POST["email"];
    $email = filter_var($email, FILTER_SANITIZE_STRING);
    $email = trim($email); 

    $datepicker = $_POST["datepicker"];
    $datepicker = filter_var($datepicker, FILTER_SANITIZE_STRING);
    $datepicker= trim($datepicker);

    //transforma los datos de birthday final a la forma que envia bunker

    $birthdayfinal = date('Y-m-d', strtotime($datepicker));
  
    /* corrobora si la persona es mayor de 18 años */
  

    $telefono = $_POST["telefono"];
    $telefono = filter_var($telefono, FILTER_SANITIZE_STRING);
    $telefono = trim($telefono);

//validar mayor18
if (isset($_POST["mayor18"])){
$mayor_18_anos = $_POST["mayor18"];
if ($mayor_18_anos == 1){
  $mayor_18_anos = 1;
}else {
    $mayor_18_anos = 0;
    
}}

//validar allow brand
if (isset($_POST["brand"])){
$allowbrand = $_POST["brand"];
if ($allowbrand == 1){
  $allowbrand = 1;
}else {  $allowbrand = 0;}}

//validar allow global
if (isset($_POST["global"])){
$allow_global = $_POST["global"];
if ($allow_global == 1){
  $allow_global = 1;
}else {  $allow_global = 0;}}

//validar acepto_bases_y_condiciones
if (isset($_POST["byc"])){
$acepto_bases_y_condiciones = $_POST["byc"];
if ($acepto_bases_y_condiciones == 1){
  $acepto_bases_y_condiciones = 1;
}else {  $acepto_bases_y_condiciones = 0;}}

$byc = $acepto_bases_y_condiciones;

//guarda el mail del administrador
$mailmio = "modalsurveyus@gmail.com";
//asunto del mensaje
$asunto = "Formulario ALA para diluir Enviado con éxito";
//Guarda la info para enviar al mail del administrador
$mensajemio = 
"Nombre: ".$nombre." 
"."Apellido: ".$apellido." 
"."Telefono: ".$email." 
"."Email: ".$email." 
"."Fecha de nacimiento: ".$birthdayfinal." 
"."Teléfono Celular: ".$telefono." 
"."Soy mayor de 18: ".$mayor_18_anos." 
"."Acepto que ALA: ".$allowbrand." 
"."Acepto que unilever: ".$allow_global." 
"."Acepto bases y condiciones: ".$byc." 
";

//ENVIAR CORREO
if($error == ''){
 

//guarda el mensaje para enviar al usuario satisfactoriamente
//$mensajeusuario = "¡Ya estás participando para ALA para diluir!";

//
mail ($mailmio, $asunto, $mensajemio);

//conexion con la base y seleccion de la basede datos
include ("../conect.php");



//ejecución de la sentencia sql
/* VALUES
('Fabian', 'Gonzalez', 'fabiansato@gmail.com', '1986-07-08', 0, 'otro', 'por la tele', 'por su olor', 1, 0, 'me gusta', 'asdasdasdasdasdsad', 1, 1, 1, 1);
*/
mysqli_query($conexion, "INSERT INTO `lux2020` (`first_name`, `last_name`, `phone`, `email`, `birthday`, `mayor_18_anos`, `allow_global`, `allow_brand`, `acepto_bases_y_condiciones`) VALUES 
('$nombre', '$apellido', '$telefono', '$email', '$birthdayfinal',  '$mayor_18_anos', '$allowbrand', '$allow_global', '$byc')");


//agregar si quiere recibir el usuario un mail
//mail ($email, $asunto, $mensajeusuario);

//Envio del JSON
$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => "https://ar.eagle-latam.com/api/v4/consumers",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => false,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS =>" {
      \r\n    
      \"first_name\": \"$nombre\",\r\n   
      \"last_name\": \"$apellido\",\r\n    
      \"email\": \"$email\",\r\n    
      \"birthday\": \"$birthdayfinal\",\r\n    
      \"cellphone\": \"$telefono\",\r\n    
      \"mayor_18_anos\": \"$mayor_18_anos\",
      \"allow_global\": \"$allowbrand\",
      \"allow_brand\": \"$allow_global\",
      \"acepto_bases_y_condiciones\": \"$byc\"\r\n
      \r\n  
    } ",
   

    
      CURLOPT_HTTPHEADER => array(
        "Content-Type: application/json",
        "Authorization: Bearer 29fc17e276408d2aa9bda8547f3a8cf569c037c9",
        "Cookie: PHPSESSID=g91k6fkpqhcoi44o3re80aacnl"
      ),
    ));
    
    $response = curl_exec($curl);
     //  echo $response;


  

    

    //Seccion de conexion con bdd
    



 // header("Location: ../exito.html");

    

}else{
    echo $error;
    echo "No se pudo mandar el formulario";
}

// ---


  //print json en pantalla

    curl_close($curl);

    echo '----Resultados------</br>';
    echo "Nombre ".$nombre."</br>";
    echo "Apellido ".$apellido."</br>";
    echo "Telefono ".$telefono."</br>";
    echo "Email ".$email."</br>";
 
    echo "Mayor 18?: ".$mayor_18_anos."</br>";
    echo "Acepta marca mande?: ".$allowbrand."</br>";
    echo "Acepta Unilever mande?: ".$allow_global."</br>";
    echo "Acepta bases y condiciones?: ".$byc."</br>";



?>  