<?php	function frameworkGetContent() {		/**print out all of the fan info from the database which will then be presented in a gallery view		using jquery and ajax*/		$output = "";				require_once("db.php");						//if the admin session is set then display the update information				if(isset($_SESSION['logged_user']) && $_SESSION['logged_user'] == 'Admin'){		//Adding New Fans						/* Pseudo Code			If a new fan item is submitted				If a picture was upload					Make sure it was valid					Use SQL to add it to the photos table				Else					Print the upload was unsuccessful				Get photoID using SQL from the file's url				Strip user input of dangerous tags				Insert information into fans table using SQL*/				$output .= "<div id='add'><h2>Add a new Fan</h2>						<form  id='addfan' name='addfan' action='index.php?page=fans' method='post' enctype='multipart/form-data' >";					if (isset($_POST['newFan'])) {				$check = true;								if (isset($_FILES['file'])) {					if ($_FILES['file']['error'] == UPLOAD_ERR_OK) {						move_uploaded_file($_FILES['file']['tmp_name'], "images/".$_FILES['file']['name']);						$_SESSION['photos'] = "uploads/".$_FILES['file']['name'];						$output .= "\nThe file ".$_FILES['file']['name']." was uploaded successfully.\n";						$query = "INSERT INTO photos(url, category) VALUES('".strip_tags($_FILES['file']['name'])."', 'fans')";						$mysqli->query($query);											} else {						$output .= "\nThe file ".$_FILES['file']['name']." was not uploaded.\n";					}				}							$url = mysql_real_escape_string(strip_tags($_FILES['file']['name']));				$getpID = "SELECT photoID FROM photos WHERE url = '$url' AND category = 'fans'";        		$result= $mysqli->query($getpID);        		if (!$result) {               		$output .= $mysqli->error;                	exit();            	}       			$pID="";       			while ($row = $result->fetch_assoc()){                	foreach ($row as $type => $item) {               			$pID=$item;            		}      			}								if ($check) {					//Error checking					$name = mysql_real_escape_string(strip_tags($_POST["name"]));					$about = mysql_real_escape_string(strip_tags($_POST["about"]));					$about = str_replace(Chr(13),'<p>', $about); 					$mName = $_POST["menu_item"];										$getmID = "SELECT menuID FROM menu WHERE name = '$mName'";        			$result= $mysqli->query($getmID);        			if (!$result) {               			$output .= $mysqli->error;                		exit();            		}       				$mID="";       				while ($row = $result->fetch_assoc()){                		foreach ($row as $type => $item) {               				$mID=$item;            			}      				}										$query1 = "INSERT INTO fans(name, about, photoID, menuID) VALUES('$name', '$about', $pID, $mID)";					$mysqli->query($query1);				}			}						$output .= "<p> Name: <input type='text' name='name' id='name' /><span class='msg' id='namemsg'>*</span><br />					About: <textarea rows=9 cols=50 name='about' id='info' ></textarea><span class='msg' id='aboutmsg'>*</span><br />";									$menuItems = "SELECT name FROM menu";        		$result= $mysqli->query($menuItems);        		if (!$result) {               		$output .= $mysqli->error;                	exit();            	}    			    			$output .= "Select Favorite Menu Item: <select name='menu_item' id='item'>";    			$output .= "<option value='item'>Choose an Item</option>";       			while ($row = $result->fetch_assoc()){                	foreach ($row as $type => $item) {               			$output .= "<option value='$item'>$item</option>";            		}      			}      			$output .= "</select><span class='msg' id='slctmsg'>*</span><br />";						$output .= "Photo: <input type='file' name='file' id='photo' /><span class='msg' id='photomsg'>*</span>					</p>";						$output .= "<p>					<input type='submit' name='newFan' value='Add a New Fan' /><br />					<span class='msg' id='submitmsg'>&nbsp;</span>					</p>				</form></div>";									//Delete a Fan 		$output .= "<div id='deleteitem'><h2>Delete a Fan</h2>					<form  id='deletefan' action='?page=fans' method='post' >";						if(isset($_POST['deleteFan'])) {				$fan = $_POST["fan"];				$check = true;				if($check) {					$query0 = "SELECT photoID FROM fans WHERE fanID = '$fan'";					$result= $mysqli->query($query0);										while ($row = $result->fetch_assoc()){                		foreach ($row as $type => $item) {               				$pid = $item;            			}      				}					            		$query1= "DELETE FROM fans WHERE fanID = '$fan'";            		$mysqli->query($query1);            		            		$query2= "DELETE FROM photos WHERE photoID = $pid";            		$mysqli->query($query2);            		$check = false;				}			}						$fans = "SELECT name, fanID FROM fans";        	$result= $mysqli->query($fans);        	if (!$result) {               	$output .= $mysqli->error;                exit();            }    			    		$output .= "Choose a Fan: <select name='fan' id='deletingfans'>";    		$output .= "<option value='item'>Fan Name</option>";       		while ($row = $result->fetch_assoc()){                foreach ($row as $type => $item) {               		if($type == 'name'){                		$name = $item;                	}                	else if($type=='fanID'){                		$id = $item;                	}            	}            	$output .= "<option value='$id'>$name</option>";      		}      		$output .= "</select><br />";      		      		$output .= "<p>      			<input type='submit' name='deleteFan' value='Delete' />				<span class='message'><span id='deletemsg'>&nbsp;</span></span>				</p>			</form></div>";		}				//loutout		if (isset($_POST['logout'])) {			$olduser = $_SESSION['logged_user'];			unset($_SESSION['logged_user']);						session_destroy();		} else {			$olduser = false;		}		if (isset($_SESSION['logged_user'])) {			$output.= '<form class="logout" action="?page=login" method="post">			  <input id="button" type="submit" name="logout" value="Logout" />			  </form>';		}				//view fans		$query = "SELECT * FROM fans";		$result = $mysqli->query($query);		if ($mysqli->errno) {			$output .=$mysqli->error;			exit();		}		$output .= "<div id='fromdb'><div id=\"fanheads\">        <img src=\"images/fans.png\" alt=\"fans\" />      </div>";	  	$output .="<ul class=\"output\" id=\"slider1\">";		while ($row = $result->fetch_assoc()) {						$name= "";			$pic="";			$blrb="";			$menu="";			$class="";			foreach ($row as $type => $item) {				if($type == "fanID") {					$class=$item;					}				else if($type == "name") {						$name=  $item;					}				else if($type == "photoID") {								$query1 = "SELECT url FROM photos WHERE photoID=" . $item;						$result1 = $mysqli->query($query1);						if ($mysqli->errno) {							$output .=$mysqli->error;							exit();						}												while ($row1 = $result1->fetch_assoc()) {							foreach ($row1 as $type1 => $item1) {								$item1=trim($item1);																list($width, $height, $type1, $attr) = getimagesize("images/$item1");								$thumb_w = 200;								$new_w = $thumb_w;								$new_h = floor($height * ($thumb_w/$width));								if($new_h > 300) {									$new_h = 300;								}																$pic= "<img src='images/$item1' width='$new_w' height='$new_h' alt='images/$item1' />";							}						}											}				else if($type == "menuID") {												$query1 = "SELECT name FROM menu WHERE menuID=" . $item;						$result1 = $mysqli->query($query1);						if ($mysqli->errno) {							$output .=$mysqli->error;							exit();						}												while ($row1 = $result1->fetch_assoc()) {							foreach ($row1 as $item1) {								$menu = $item1;							}						}					}				else {						$blurb= $item;					}				}										$line="<li class='".$class."'><h2 class='fanname'>".$name. "</h2>" .$pic."</li><li class='".$class." right'><br/><br/>".$blurb."<br/> <br/><br/>Favorite menu item: ". $menu."</li>";			$output .= $line;		}		$output .= "</ul><div id=\"clear\">&nbsp;</div></div>";				return $output;	}?>