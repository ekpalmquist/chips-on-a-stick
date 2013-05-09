$(document).ready(function(){

	//start2();
	
	//Checks entire form before submit
	$('#submit').on('click',function(event){
		validForm(event)
	});
	
	$('#addmenu').on('submit', validForm );
	
	//Checks for a valid username input 
	$('#name').on('change', function(name) {
		validName($('#name').val());
	});
	
	$('#desc').on('change', function(desc) {
		validDesc($('#desc').val());
	});
	
	$('#price').on('change', function(price) {
		validPrice($('#price').val());
	});
	
	$('#photo').on('change', function(photo) {
		validPhoto($('#photo').val());
	});
});

/*function start2() {
       // Get our search button and setup an event handler
    //Search Button
    var submit = document.getElementById("submit");
    //Event Handler
    //Prevent submit if user clicks enter
    var thedeleteform = document.getElementById("addmenu");
    thedeleteform.onsubmit = function(event){
    	name = $("#name").val();
    	desc = $("#desc").val();
    	price = $("#price").val();
    	photo = $("#photo").val();
    	
        addFan();
        return false;
    }

    // Setup our request object
    request = null;
    createRequest();  
}
/*
 *
 * This function creates the Ajax request object; don't need to understand this
 *
 */

/*function createRequest() {
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
/*function addMenu() {
    createRequest();
    /* Here is the url we will need to call, with the search omitted */
    //var url="http://info230.cs.cornell.edu/groups/Chips_on_a_stick/www/AJAX/addfans.php";
  	//var action=url+"?name="+name+"?desc="+desc+"?price="+price+"?photo="+photo; 
    //Check if no search 
    //if (id=="Choose a Photo") {
      //  alert("Please select a photo to delete.");
        //return;
    //}
      
    /* Set up the Ajax call */
   // request.onreadystatechange = processAddMenu;

    /* Make the Ajax call */
    //request.open("POST", action, true);

    //request.send(null);
   
//}

/*
 *
 * Actually process the results of the AJAX call
 *
 */
/*function processAddMenu() {
    //
    if(request.readyState < 4) {

    }
   
    if (request.readyState == 4) {
   		alert("The fan has been added!");
   		
   		var str = "<div class='fanline'><div class='fanname'>"+name+"</div>"+desc+
   				"<div class='fanpic'><img src='"+photo+"' width='200' height='266' alt='"+photo+"' /></div>"+
				price+"</div>"
        console.log(str);
        $('#fromdb').append(str);
        
       // var selectedImg = $(str);
       // selectedImg.remove();
       // $("select option:selected").remove();
   		
        request = null;
    }
   

}*/


function validForm(event){
	var name= validName($('#name').val());
	var desc= validDesc($('#desc').val());
	var price= validPrice($('#price').val());
	var photo= validPhoto($('#photo').val());

 	if(name && desc && price && photo){ 
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
		else if(!check.test(jQuery.trim(name))){
			r.html("<br/>Please enter a valid name"); 
			check=false;
			return false;
		}
		else {
			r.html("&nbsp;"); 
			return true;
		} 
}


function validDesc(desc) {
	var check = /^[A-Za-z0-9 ?!.'-]+$/;
	var r = $('#descmsg');
		
		if (jQuery.trim(desc) == "") {
			r.html("<br/>Please enter a description"); 
			check=false; 
			return false;
		} 
		else if(!check.test(jQuery.trim(desc))){
			r.html("<br/>Please enter a valid description"); 
			check=false;
			return false;
		}
		else {
			r.html("&nbsp;"); 
			return true;
		} 
	
}

function validPrice(price) {
	var check = /^[0-9]{1,5}(.)[0-9]{2}$/;
	var r = $('#pricemsg');
	
		if (jQuery.trim(desc) == "") {
			r.html("<br/>Please enter a price of form 0.00"); 
			check=false; 
			return false;
		}
		else if(!check.test(jQuery.trim(price))){
			r.html("<br/>Please enter a valid price in the form 0.00"); 
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
