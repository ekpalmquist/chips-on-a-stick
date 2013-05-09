$(document).ready(function(){
	
	
	$('#log').on('click',function(event){
		loginthere(event)
	});
	
	$('#logging').on('submit', loginthere );
	
	
	
	$('#username').on('change', function(event){
		user(event)
	});
	
	$('#password').on('change', function(event){
		pw(event)
	});
});

function loginthere(event){
	var a=user(event);
	var b=pw(event);
	return a && b; 
}

function user(event){
	var value=$('#username').val();
	$valid=true;
	if (jQuery.trim(value)=="") {
		$valid= false;
		$('#unamemsg').html("Please enter a username");
	} 

	if($valid){
	$('#unamemsg').html("&nbsp;");
		return true;
	 } 
	 else{
	 return false;
	 }
}

function pw(event){
	var value=$('#password').val();
	$valid=true;
	if (jQuery.trim(value)=="") {
		$valid= false;
		$('#pwmsg').html("Please enter a password");
	} 

	if($valid){
		
		$('#pwmsg').html("&nbsp;");
		return true;
	 } 
	 else{
	 return false;
	 }
}


