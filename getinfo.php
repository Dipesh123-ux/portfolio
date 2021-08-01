<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

$email_Subject = 'New form submission';
$to = "jaswanidipesh8@gmail.com";      
$headers = "From : $visitor_email \r\n"


if(mail($to,$email_Subject,$message,$headers))
{
    echo "Mail sent successfully";
}
else
{
    echo "Mail cannot be sent";
}


 ?>