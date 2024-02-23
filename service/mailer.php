<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;

//Load Composer's autoloader
require 'vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new \PHPMailer\PHPMailer\PHPMailer(true);

try {

    $data = json_decode(file_get_contents('php://input'), true);
    
    
    $name = $data['name'];
    $email = $data['email'];
    $subject = $data['subject'];
    $message = $data['message'];
    // the message

    // use wordwrap() if lines are longer than 70 characters
    $message = wordwrap($message, 1000);

    $message = '<div style="padding:30px">De: ' . $name . ' [ ' . $email . ' ]<br/>Assunto: ' . $subject . '<hr/>' . $message . '</div>';


    //Server settings
    //$mail->SMTPDebug = \PHPMailer\PHPMailer\SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host = 'mail.nova.ao';                     //Set the SMTP server to send through
    $mail->SMTPAuth = true;                                   //Enable SMTP authentication
    $mail->Username = 'suport@everest40.hiperbite.ao';                     //SMTP username
    $mail->Password = 'p8vzjjtheu';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryptionaf
    $mail->Port = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('suport@everest40.hiperbite.ao', 'Everest 4.0');
    $mail->addAddress('suport@everest40.hiperbite.ao', 'Joe User');     //Add a recipient
    //$mail->addAddress('ellen@example.com');               //Name is optional
    $mail->addReplyTo($email, $name);
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    //Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $subject;
    $mail->Body = $message;
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (\Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo} {$e}";
}