<?php	function frameworkGetSidebar(){	//if session employee variable is set	//echo employee information in the side bar	$output="";	if(isset($_SESSION['logged_user'])){							$output = "";		/**getting the contact info for employees*/				require_once("db.php");		$query="SELECT * FROM employees"; 				$output.= "<h2>Contact Information</h2>";		$result= $mysqli->query($query);			        		if (!$result) {               		$output .= $mysqli->error;                	exit();            	}   			       			while ($row = $result->fetch_assoc()){                	foreach ($row as $type => $item) {            		  $output.="<p>"; 					 if($type=="name"){            		 $output.=$item."<br />";             		 }            		 if($type=="contact"){            		 $output.=$item. "</p> ";             		 }            		}      			}						   	 		   			}		if(!isset($_SESSION['logged_user'])){		 $output=""; 		}		return $output;	}		function frameworkGetContent() {		$output = "";		require("db.php");				//User must login to update		/* Pseudo Code			If login session variable is not set				If username and password inputs are not set					Print log in text boxes				If username and password inputs are correct					Display log out option				Else					Log in was unsuccessful					Print log in text boxes			Else				If log out is clicked					Destroy session 		*/		/*if (!isset($_SESSION['logged_user'])){			 	 if (!isset($_POST['username']) && !isset($_POST['password'])) {					  $output.= "<div class=\"loginhead\">      						  <img src=\"images/login.png\" alt=\"login\" />    							  </div>";	  					$output.="<div class=\"output2\">								  <form id='logging' class=\"login\" action=\"index.php?page=update\" method=\"post\">						  <p>						  Username: <input type='text' name='username' id='username'/> <span class='msg' id='unamemsg'>*</span><br/>						  Password: <input type='password' name='password' id='password' /> <span class='msg' id='pwmsg'>*</span><br/>						 						  <input id='log' type=\"submit\" value=\"Login\" />						 </p>						  </form></div><div class=\"clear\">&nbsp;</div>";						  			  	} 			  	else { 					$username = mysql_real_escape_string(strip_tags($_POST['username']));					$hashpass = hash('sha256', (mysql_real_escape_string(strip_tags($_POST['password']))));										$result = $mysqli->query("SELECT * FROM users WHERE username = '$username' AND password = '$hashpass'");					if($result) {						if($result->num_rows != 0) {												  		$_SESSION['logged_user'] = $_POST['username'];					  		$output.="<div id='loggedhead'><img src='images/schedule.png' alt='schedule'></div>";					  							  		$output.= '<div class="logout2"><form action="?page=update" method="post">						  <input type="submit" name="logout" value="Logout" />						  </form></div><div class=\"clear\">&nbsp;</div>';														$output.="<div id='calendar'>									<iframe scrolling='no' frameborder='0' src='http://30boxes.com/widget/8411603/MattEmery/768d2e943dd0e75027199dfc18f80d75/0/' width='525' height='600' style='border: none; overflow: hidden;'></iframe>				  				</div>";						}						else {							$output.= "						 		<div class='loginhead'>      						  <img src=\"images/login.png\" alt=\"login\" />    							  </div>";	  					$output.="<div class=\"output2\">									<p id='instructions'>You did not login successfully</p>						  <form class=\"login\" action=\"index.php?page=update\" method=\"post\">						  <p>						  Username: <input type='text' name='username' id='username' /> <span id='usermsg'>*</span><br/>						  Password: <input type='password' name='password' id='password' /> <span id='passmsg'>*</span><br/>						 						  <input type='submit' value='Login' id='submit' />						  <span id='msgbox'></span>						 </p>						  </form></div>";						  						}					}				} 			} 		else{*/					/*if (isset($_POST['logout'])) {						$olduser = $_SESSION['logged_user'];						unset($_SESSION['logged_user']);						 						session_destroy();					} else {						$olduser = false;					}					if ($olduser) {						$output.= "<div class=\"loginhead2\">      						  <img src=\"images/login.png\" alt=\"login\" />    							  </div>";	  					$output.="<div class=\"output2\">								  <form class=\"login\" action=\"index.php?page=update\" method=\"post\">						  <p>						  Username: <input type='text' name='username'/> <br/>						  Password: <input type=\"password\" name=\"password\" /> <br/>						 						  <input type=\"submit\" value=\"Login\" />						 </p>						  </form></div>";						  					} else {*/						$output.= '<div class="logout2"><form action="?page=login" method="post">						  <input type="submit" name="logout" value="Logout" />						  </form></div>';												$output.="<div id='loggedhead'><img src='images/schedule.png' alt='schedule'></div>";												$output.="<div id=\"calendar\">									<iframe src='http://30boxes.com/widget/8411603/MattEmery/768d2e943dd0e75027199dfc18f80d75/0/'></iframe>				  				</div>";		 					//}									//}		return $output;						}?>