<?php

$data = json_decode(file_get_contents('php://input'), true);


$name =    $data['name'];
$email =   $data['email'];
$subject = $data['subject'];
$message = $data['message'];
// the message

// use wordwrap() if lines are longer than 70 characters
$message = wordwrap($message, 70);

$message .= '<div style="padding:30px">De: ' . $name . ' [ ' . $email . ' ]<br/>Assunto: ' .$subject .'<hr/>' . $message . '</div>';

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <webmaster@example.com>' . "\r\n";
$headers .= 'Cc: myboss@example.com' . "\r\n";

// send email

$done=mail("lutonda@gmail.com", $subject, $message, $headers);

header('Content-Type: application/json');

echo( $done);


?>