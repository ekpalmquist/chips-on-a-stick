$(document).ready(function(){
	$('#submit').on('click',function(event){
		validForm(event)
	});
	$('form').on('submit', validForm );
	
	
	
	/**checks input fields on change*/
	
	$('#firstname').on('change', function(event){
		validFname(event)
	});
	
	$('#lastname').on('change', function(event){
		validLname(event)
	});
	
	$('#ename1').on('change', function(event){
		validEname1(event)
	});
	
	$('#ename2').on('change', function(event){
		validEname2(event)
	});
	
	$('#eres1').on('change', function(event){
		validEres1(event)
	});
	
	$('#eres2').on('change', function(event){
		validEres2(event)
	});
	
	$('#phonenumber').on('change', function(event){
		phoneNumber(event)
	});
	
	$('#enumber1').on('change', function(event){
		phoneNumber1(event)
	});
	
	$('#enumber2').on('change', function(event){
		phoneNumber2(event)
	});
	
	$('#contactemail').on('change', function(event){
		validEmail(event);
	});
	
	$('#dates1').on('change', function(event){
		edates1(event);
	});
	
	$('#dates2').on('change', function(event){
		edates2(event);
	});
	
});

function validForm(event){
	console.log("validForm");
	var a= phoneNumber(event);

	var b= phoneNumber1(event);

 	var c= phoneNumber2(event);

 	var d= validFname(event);
 	
 	var e= validLname(event);
 	
 	var f= validEname1(event);

 	var g= validEname2(event);

 	var h= validEres1(event);

 	var i= validEres2(event);
 	var j=validEmail(event); 
 	var k= radioOne(); 
 	var l= radioTwo();
 	var m=Avail();
 	if(a && b && c && d && e && f && g && h && i && j && k && l && m){
 		sendApp();
 		return false;
 	}
 	else{
 		event.preventDefault();
 			$('#submitmsg').html("Please make sure all your information is entered<br/>"); 

 	return false; 
 	}
}


 function validFname(event){
	var check= /^[A-Za-z ]+$/;	
	variable=$('#firstname').val();
	entry=$('#fname'); 
	if (jQuery.trim(variable) == "") {
		entry.html("<br/>Please enter valid information that contains no symbols"); 

		return false;
	} 
	else if(!check.test(variable)){
		entry.html("<br/>Please enter valid information that contains no symbols"); 
		}
	else {
			
		entry.html("&nbsp;"); 
		return true;
	} 
	}
	
	
 function validLname(event){
	var check= /^[A-Za-z ]+$/;	
	variable=$('#lastname').val();
	entry=$('#lname'); 
	if (jQuery.trim(variable) == "") {
		entry.html("<br/>Please enter valid information that contains no symbols"); 

		return false;
	} 
	else if(!check.test(variable)){
		entry.html("<br/>Please enter valid information that contains no symbols"); 
		}
	else {
			
		entry.html("&nbsp;"); 
		return true;
	 } 
}
	
function validEname1(event){
	var check= /^[A-Za-z ]+$/;	
	variable=$('#ename1').val();
	entry=$('#empname1'); 
	if (jQuery.trim(variable) == "") {
		entry.html("<br/>Please enter valid information that contains no symbols"); 

		return false;
	} 
	else if(!check.test(variable)){
		entry.html("<br/>Please enter valid information that contains no symbols"); 
		}
	else {
			
		entry.html("&nbsp;"); 
		return true;
	 } 
	}
	
	
function validEname2(event){
	var check= /^[A-Za-z ]+$/;	
	variable=$('#ename2').val();
	entry=$('#empname2'); 
	if (jQuery.trim(variable) == "") {
		entry.html("<br/>Please enter valid information that contains no symbols"); 

		return false;
	} 
	else if(!check.test(variable)){
		entry.html("<br/>Please enter valid information that contains no symbols"); 
		}
	else {
			
		entry.html("&nbsp;"); 
		return true;
	 } 
	}
	
function validEres1(event){	
	var check= /^[A-Za-z ]+$/;	
	variable=$('#eres1').val();
	entry=$('#respons1');  
	if (jQuery.trim(variable) == "") {
		entry.html("<br/>Please enter <br/>your information"); 

		return false;
	} 
	else if(!check.test(variable)){
		entry.html("<br/>Please enter <br/>your information"); 
		}
	else {
			
		entry.html("&nbsp;"); 
		return true;
	 } 
	}
	
function validEres2(event){	
	var check= /^[A-Za-z ]+$/;	
	variable=$('#eres2').val();
	entry=$('#respons2');  
	if (jQuery.trim(variable) == "") {
		entry.html("<br/>Please enter <br/>your information"); 

		return false;
	} 
	else if(!check.test(variable)){
		entry.html("<br/>Please enter <br/>your information"); 
		}
	else {
			
		entry.html("&nbsp;"); 
		return true;
	 } 
	}
	
/**phone number checking on change*/
	function phoneNumber(event){	
		var check = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
		var number=$('#number'); 
		var phone=$('#phonenumber').val();
	
	if (phone == "") {
		number.html("<br/>Please enter a phone number in the form xxx-xxx-xxxx"); 
		check=false; 
		return false;
	} 
	else if(!check.test(phone)){
			number.html("<br/>Please enter a phone number in the form xxx-xxx-xxxx"); 
		check=false;
		return false;
		}
	else {
		number.html("&nbsp;"); 
		return true;
	} 
}

function phoneNumber1(event){	
		var check = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
		var number=$('#enum1'); 
		var phone=$('#enumber1').val();
	
	if (phone == "") {
		number.html("<br/>Please enter a phone number in the form xxx-xxx-xxxx"); 
		check=false; 
		return false;
	} 
	else if(!check.test(phone)){
			number.html("<br/>Please enter a phone number in the form xxx-xxx-xxxx"); 
		check=false;
		return false;
		}
	else {
		number.html("&nbsp;"); 
		return true;
	} 
}

function phoneNumber2(event){	
		var check = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
		var number=$('#enum2'); 
		var phone=$('#enumber2').val();
	
	if (phone == "") {
		number.html("<br/>Please enter a phone number in the form xxx-xxx-xxxx"); 
		check=false; 
		return false;
	} 
	else if(!check.test(phone)){
			number.html("<br/>Please enter a phone number in the form xxx-xxx-xxxx"); 
		check=false;
		return false;
		}
	else {
		number.html("&nbsp;"); 
		return true;
	} 
}


function edates1(event){	
		var check = /^[A-Za-z0-9 ]+$/;
		var phone=$('#dates1').val();
		var number=$('#edates1');
	
	if (jQuery.trim(phone) == "") {
		number.html("<br/>Please enter your dates"); 
		check=false; 
		return false;
	} 
	else if(!check.test(phone)){
	number.html("<br/>Please enter your dates"); 
		check=false;
		return false;
		}
	else {
		number.html("&nbsp;"); 
		return true;
	} 
}

function edates2(event){	
var check = /^[A-Za-z0-9 ]+$/;
		var phone=$('#dates2').val();
		var number=$('#edates2');
	
	if (jQuery.trim(phone) == "") {
		number.html("<br/>Please enter your dates"); 
		check=false; 
		return false;
	} 
	else if(!check.test(phone)){
		number.html("<br/>Please enter your dates"); 
		check=false;
		return false;
		}
	else {
		number.html("&nbsp;"); 
		return true;
	} 
}




function validEmail(event){
 add=$('#contactemail').val();
var check= /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@(([0-9a-zA-Z])+([-\w]*[0-9a-zA-Z])*\.)+[a-zA-Z]{2,9})$/; 
	if (jQuery.trim(add) == "") {
		$('#email').html("<br/>Please enter a valid email address"); 

		return false;
	} 
	else if(!check.test(add)){
		$('#email').html("<br/>Please enter a valid email address"); 
		}
	else {
			
		$('#email').html("&nbsp;"); 
		return true;
	} 
}

function radioOne(){
	var elem = $('input[name=call1]:radio:checked');
	if (elem.hasClass('b')){
		$('#ref1').html("&nbsp;"); 	
		return true;
	}
	else {
	$('#ref1').html("<br/>Please select Yes or No<br/>"); 
	return false;
	}
}

function radioTwo(){
	var elem = $('input[name=call2]:radio:checked');
	if (elem.hasClass('c')){
		$('#ref2').html("&nbsp;"); 	
		return true;
	}
	else {
	$('#ref2').html("<br/>Please select Yes or No<br/>"); 
	return false;
	}
}
	
function Avail(){
	var elem = $('input:checkbox:checked').length;
	if (elem>0){
		
		$('#avail').html("&nbsp;"); 	
		return true;
	}
	else {
	$('#avail').html("<br/>Please check you're availability<br/>"); 
	return false; 
	}
}

/**AJAX for application*/


/*
 *
 * This function creates the Ajax request object; don't need to understand this
 *
 */

function createRequest() {
    // From "Head Rush Ajax" by Brett McLaughlin

    try {
        request = new XMLHttpRequest();
    } catch (trymicrosoft) {
        try {
            request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (othermicrosoft) {
            try {
                request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (failed) {
                request = null;
            }
        }
    }
   
    if (request == null) {
        alert("Error making request");
}
}
/*
 *
 * This is the function that is called when the "search" button is clicked
 * It gets the Query from the text input and sends it to the appropriate URL.
 * It then sets up the callback function to process the results.
 * And it provides some information about what's going on.
 *
 */
function sendApp() {
    createRequest();
    /* Here is the url we will need to call, with the search omitted */
		
		var ins = document.getElementsByName('availability')
		var i;
		var j=0;
		var vals= new Array();
		for(i=0;i<ins.length;i++){
			if(ins[i].checked) {
				vals[j]=ins[i].value;
				j++;
			}
		}

  	   var message="Name: "+$('#firstname').val()+" "+$('#lastname').val()+"\n   Email: "+$('#contactemail').val()+"\n Phone Number: "+$('#phonenumber').val()+ "\n Availability: "+vals+ " \n Employer 1: \n Name: "+$('#ename1').val()+" Dates worked: "+$('#dates1').val()+"\n  Number: "+$('#enumber1').val()+ "\n Responsibilities: "+$('#eres1').val()+ "\n Can we contact them? "+$('input[name=call1]:radio:checked').val()+  " \n Employer 1: \n Name: "+$('#ename2').val()+" Dates worked: "+$('#dates2').val()+"\n  Number: "+$('#enumber2').val()+ "\n Responsibilities: "+$('#eres2').val()+ "\n Can we contact them? "+$('input[name=call2]:radio:checked').val();

    var url="http://info230.cs.cornell.edu/groups/Chips_on_a_stick/www/AJAX/sendapp.php";
  	var action=url+"?msg="+message; 
  		//console.log(message);
   
    /* Set up the Ajax call */
    request.onreadystatechange = processAPP;

    /* Make the Ajax call */
    request.open("POST", action, true);

    request.send(null);
   
}

/*
 *
 * Actually process the results of the AJAX call
 *
 */
function processAPP() {
    //
    if(request.readyState < 4) {

    }
   
    if (request.readyState == 4) {
   		$('.output2').html("<h3>Thank You</h3> <p>We have received your application and will be in contact with you if we feel you are a good fit</p>"); 
        request = null;
    }
   

}

