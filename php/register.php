<?php

    include "conn.php";

    $fname = $_POST['fullName'];               
    $email = $_POST['eMail'];       
    $college = $_POST['collegeName'];
    $branch = $_POST['branchName'];
    $contact = $_POST['contact'];    
    $eve = $_POST['event'];  
               
    if($conn->connect_error){
        echo "connection error";
    }
    else{
        $ins = "INSERT INTO events VALUES('$fname','$contact','$email','$college','$branch', '$eve');";
        $conn->query($ins);
    }

?>