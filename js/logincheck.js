$(document).ready(function(){
	
	//Checks entire form before submit
	$('#submit').on('click',function(event){
		validForm(event)
	});
	
	$('form').on('submit', validForm );
	
	//Checks for a valid username input 
	$('#username').on('change', function() {
		validInfo();
	});
	
	$('#password').on('change', function() {
		validInfo();
	});
});

function validForm(event){
	console.log("validForm");
	var name= validInfo($('#username').val());

	var pass= validInfo($('#password').val());

 	if(name && pass){ 
 		return true;
 	}
 	else{
 		event.preventDefault();
 			$('#msgbox').html("Please make sure you have correctly entered a username and password<br/>"); 

 	return false; 
 	}
}




function validInfo(info) {
	var check = /^[A-Za-z0-9]$/;
	var r=""; 
	if(info == $('#username').val()){
		r=$('#usermsg');
		if (info == "") {
			r.html("<br/>Please enter a valid username"); 
			check=false; 
			return false;
		} 
		else {
			r.html("&nbsp;"); 
			return true;
		} 
	}
    if(info == $('#password').val()){
		r=$('#passmsg'); 
		if (info == "") {
			r.html("<br/>Please enter a valid password"); 
			check=false; 
			return false;
		} 
		else {
			r.html("&nbsp;"); 
			return true;
		} 
	}
	
}

function trim(str){
  return str.replace(/^\s+|\s+$/g, ''); 
}

}
