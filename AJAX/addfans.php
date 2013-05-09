<?php

	require("../db.php");
	
	$name = $_REQUEST["name"];
	$info = $_REQUEST["info"];
	$info = str_replace(Chr(13),'<p>', $info); 
	$mName = $_REQUEST["item"];
					
	$getmID = "SELECT menuID FROM menu WHERE name = '$mName'";
    $result= $mysqli->query($getmID);
    
    $mID="";
    while ($row = $result->fetch_assoc()){
        foreach ($row as $type => $item) {
            $mID=$item;
        }
    }
					
	$query = "INSERT INTO fans(name, about, photoID, menuID) VALUES('$name', '$about', $pID, $mID)";
	$mysqli->query($query);

?>
