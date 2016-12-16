<?php

    require_once('dbconfig.php');
    
    $data = array();
    $query = "SELECT * FROM info ORDER BY id DESC";
    $result = mysqli_query($con,$query);
    while($row = mysqli_fetch_assoc($result))
    {
        $data[] = $row;
    }

    echo $json_response = json_encode($data);
?>