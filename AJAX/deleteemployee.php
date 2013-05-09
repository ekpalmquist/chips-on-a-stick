<?php

	require("../db.php");

	$emp = $_REQUEST["eid"];
	
   	$query0 = "SELECT photoID FROM employees WHERE empID = '$emp'";
	$result= $mysqli->query($query0);
					
	while ($row = $result->fetch_assoc()){
        foreach ($row as $type => $item) {
        	$pid = $item;
    	}
    }
				
    $query1= "DELETE FROM employees WHERE empID = '$emp'";
    $mysqli->query($query1);
            		
    $query2= "DELETE FROM photos WHERE photoID = $pid";
    $mysqli->query($query2);
    
?>
