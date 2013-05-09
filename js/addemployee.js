$(document).ready(function(){

	//begin();
	
	//Checks entire form before submit
	$('#submit').on('click',function(event){
		validForm(event)
	});
	
	$('#addemp').on('submit', validForm );
	
	//Checks for a valid username input 
	$('#name').on('change', function(name) {
		validName($('#name').val());
	});
	
	$('#info').on('change', function(info) {
		validInfo($('#info').val());
	});
	
	$('#email').on('change', function(email) {
		validEmail($('#email').val());
	});
	
	$('#photo').on('change', function(photo) {
		validPhoto($('#photo').val());
	});
});



function validForm(event){
	var name= validName($('#name').val());
	var info= validInfo($('#info').val());
	var email= validEmail($('#email').val());
	var photo= validPhoto($('#photo').val());

 	if(name && info && email && photo){ 
 		return true;
 	}
 	else{
 		event.preventDefault();
 		$('#submitmsg').html("<br />Please make sure you have correctly filled in all of the fields<br/>"); 
		return false; 
 	}
}


function validName(name) {
	var check = /^[A-Za-z .'-]+$/;
	var r = $('#namemsg');
		
		if (jQuery.trim(name) == "") {
			r.html("<br/>Please enter a name"); 
			check=false; 
			return false;
		} 
		else if(!check.test(name)){
			r.html("<br/>Please enter a valid name"); 
			check=false;
			return false;
		}
		else {
			r.html("&nbsp;"); 
			return true;
		} 
}


function validInfo(info) {
	var check = /^[A-Za-z0-9 ?!,.'-]+$/;
	var r = $('#aboutmsg');
		
		if (jQuery.trim(info) == "") {
			r.html("<br/>Please enter an 'about me'"); 
			check=false; 
			return false;
		} 
		else if(!check.test(info)){
			r.html("<br/>Please enter a valid 'about me'"); 
			check=false;
			return false;
		}
		else {
			r.html("&nbsp;"); 
			return true;
		} 
	
}

function validEmail(email) {
	var check= /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@(([0-9a-zA-Z])+([-\w]*[0-9a-zA-Z])*\.)+[a-zA-Z]{2,9})$/;
	var r = $('#emailmsg');
	
		if (jQuery.trim(email) == "") {
			r.html("<br/>Please enter an email address"); 
			check=false; 
			return false;
		} 
		else if(!check.test(jQuery.trim(email))){
			r.html("<br/>Please enter a valid email address"); 
			check=false;
			return false;
		}
		else {
			r.html("&nbsp;"); 
			return true;
		} 
	
}

function validPhoto(photo) {
	var check= /(.jpg)|(.gif)|(.png)|(.jpeg)|(.JPG)$/;
	var r=$('#photomsg');
	
	if (jQuery.trim(photo) == "") {
		r.html("<br/>Please upload a photo"); 
		check=false; 
		return false;
	} 
	else if(!check.test(jQuery.trim(photo))){
		console.log(jQuery.trim(photo));
		r.html("<br/>Please enter a valid photo"); 
		check=false;
		return false;
	}
	else {
		r.html("&nbsp;"); 
		return true;
	} 
	
}

