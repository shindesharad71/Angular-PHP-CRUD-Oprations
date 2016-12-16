<?php

	$_POST = json_decode(file_get_contents('php://input'), true);

	global $con;

    $hostname = 'localhost';    // Host Name
    
    $user = 'root';             // username of host
    
    $password = '';             // password of host
    
    $dbname = 'angular';            //database name
            
    $con = new mysqli($hostname,$user,$password,$dbname);
    if (mysqli_connect_errno())
    {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
        die();
    }

	if (empty($_POST['name']))
		echo 'name empty';
		$name = $_POST['name'];
  
	if (empty($_POST['email']))
		echo 'email empty';
  		$email = $_POST['email'];

	if (empty($_POST['password']))
		echo 'password empty';
		$password = $_POST['password'];

	$query = "INSERT into info (name, email, password) VALUES ('$name',  '$email', '$password')";
	$result = mysqli_query($con,$query);
    $rows = mysqli_affected_rows($con);

	echo $json_response = json_encode($rows);