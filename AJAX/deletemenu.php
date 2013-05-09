<?php

	require("../db.php");

	$mID = $_REQUEST["mid"];
	
   	$query0 = "SELECT photoID FROM menu WHERE menuID = $mID";
	$result= $mysqli->query($query0);
					
	$pid = "";
	while ($row = $result->fetch_assoc()){
    	foreach ($row as $type => $item) {
            $pid = $item;
    	}
    }
				
    $query1= "DELETE FROM menu WHERE menuID = $mID";
    $mysqli->query($query1);
            		
    $query2= "DELETE FROM photos WHERE photoID = $pid";
    $mysqli->query($query2);
    
?>
