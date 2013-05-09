<?php

	require("../db.php");

	$fan = $_REQUEST["fid"];
	
   	$query0 = "SELECT photoID FROM fans WHERE fanID = $fan";
	$result= $mysqli->query($query0);
	
	$pid = "";
	while ($row = $result->fetch_assoc()){
        foreach ($row as $type => $item) {
            $pid = $item;
    	}
    }
					
    $query1= "DELETE FROM fans WHERE fanID = $fan";
    $mysqli->query($query1);
            		
    $query2= "DELETE FROM photos WHERE photoID = $pid";
    $mysqli->query($query2);
    
?>
