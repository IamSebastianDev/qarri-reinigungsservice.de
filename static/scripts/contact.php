<?php

$targetEmail = 'info@qarri-reinigungsservice.de';

$name = $_POST['name']; 
$email = $_POST['email']; 
$phone = $_POST['phone'];
$street = $_POST['street']; 
$city = $_POST['city'];

$maintenance = $_POST['maintenance']; 
$base = $_POST['base']; 
$office = $_POST['office']; 
$window = $_POST['window']; 
$area = $_POST['area']; 

$message = $_POST['message']; 

$received = date("d.m.Y H:i"); 

$to = $targetEmail;

$email_subject = "Neue Angebotsanfrage von: $name";

$email_body = "Du hast eine Neue Angebotsanfrage: \n";
$email_body .= "Eingegangen: $received \n\n";
$email_body .= "Kontaktdaten: \n";
$email_body .= "\t Name: $name \n";
if($email !== "") {
    $email_body .= "\t E-Mail Addresse: $email \n";
}
if($phone !== "") {
    $email_body .= "\t Telefon: $phone \n";
}
$email_body .= "\n";
$email_body .= "Addresse: \n";
$email_body .= "\t $street \n";
$email_body .= "\t $city \n";
$email_body .=  "\n"; 
$email_body .=  "Gewünschte Reinigungsarten: \n"; 
if($maintenance == "true") {
    $email_body .= "\t Unterhaltsreinigung: Ja \n";
} else {
    $email_body .= "\t Unterhaltsreinigung: Nein \n";
}
if($base == "true") {
    $email_body .= "\t Grundreinigung: Ja \n";
} else {
    $email_body .= "\t Grundreinigung: Nein \n";
}
if($office == "true") {
    $email_body .= "\t Büroreinigung: Ja \n";
} else {
    $email_body .= "\t Büroreinigung: Nein \n";
}
if($window == "true") {
    $email_body .= "\t Fensterreinigung: Ja\n";
} else {
    $email_body .= "\t Fensterreinigung: Nein \n";
}
if($area !== "") {
    $email_body .= "\t Quadratmeteranzahl: $area m²\n";
}
$email_body .="\n";
if($message !== ""){
    $email_body .= "Nachricht: $message"; 
}


$headers = "From: $targetEmail\n";
$headers .= "Reply-To: $email";

error_log($email_body); 

mail($to,$email_subject,$email_body,$headers);

?>