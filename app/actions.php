<?php

	global $con;

	$hostname = 'localhost'; 	// Host Name
	
	$user = 'root'; 			// username of host
	
	$password = ''; 			// password of host
	
	$dbname = 'angular'; 			//database name
			
	$con = new mysqli($hostname,$user,$password,$dbname);
	if (mysqli_connect_errno())
	{
  		echo "Failed to connect to MySQL: " . mysqli_connect_error();
  		die();
  	}



$insert = "INSERT into angular (id,  name, email, password) VALUES ('$name',  '$email', '$password')";

$update = "UPDATE angular SET name='$name', password='$password', email='$email' WHERE id='$id'";

$delete = "DELETE FROM angular WHERE id='$id";

$select = "SELECT * FROM angular";