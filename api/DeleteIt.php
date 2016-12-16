<?php
    
    require_once('dbconfig.php');

    $_POST = json_decode(file_get_contents('php://input'), true);

    if (empty($_POST['id']))
        echo 'id empty';
        $id = $_POST['id'];

    $query = "DELETE FROM info WHERE id='$id'";
    $result = mysqli_query($con,$query);
    $rows = mysqli_affected_rows($con);

    echo $json_response = json_encode($rows);
?>