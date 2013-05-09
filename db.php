<?php
    $db = array(
        "username" => "Chips_on_a_stick",
        "password" => "mnmyh221ere",
        "localhost" => "localhost",
        "dbname" => "info230_SP12FP_Chips_on_a_stick"
    );
    
    $mysqli = new mysqli($db['localhost'], $db['username'], $db['password'], $db['dbname']);
    
    if($mysqli->connect_errno) {
        print "Failed to connect to MySQL: " . $mysqli->connect_error;
    }  
?>
