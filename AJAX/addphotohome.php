<?php

require("../db.php");

		
						
					
		
				$url=$_REQUEST['url'];
				
						$query = "INSERT INTO photos(url, category) VALUES('".$url."', 'latenight')";
						$mysqli->query($query);
						



?>