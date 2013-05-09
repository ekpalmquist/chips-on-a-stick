<?php
	
	$message=$_REQUEST['msg'];
	$to="bigreddogsithaca@gmail.com";
	$subject="Application";
	
	mail($to, $subject, $message);
	
?>