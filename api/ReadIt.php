<?php

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

    $data = array();
    $query = "SELECT * FROM info ORDER BY id DESC";
    $result = mysqli_query($con,$query);
    while($row = mysqli_fetch_assoc($result))
    {
        $data[] = $row;
    }

    echo $json_response = json_encode($data);
?>