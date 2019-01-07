<?php
//llamando campos

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Datos para el correo
$destinatario = "ballesterojj@gmail.com";
$asunto = "Mensaje de New Creative Web";

$carta = "De: $nombre \n";
$carta .= "Correo: $email \n";
$carta .= "Telefono: $phone \n";
$carta .= "Mensaje: $message";

//Enviando mail
mail($destinatario, $asunto,$carta);
header('Location:../index.html');
?>