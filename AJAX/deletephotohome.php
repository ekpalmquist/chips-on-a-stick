<?php

	require("../db.php");
	
	
		$pid = $_REQUEST["pid"];
	
            
      		
            		
            $query1= "DELETE FROM photos WHERE photoID = $pid";
            $mysqli->query($query1);


?>
