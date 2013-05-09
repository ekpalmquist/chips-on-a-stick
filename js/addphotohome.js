$(document).ready(function(){
	addPhotoAJAX();
});

var fname=""; 
var item="";
// Initialize on window load
function addPhotoAJAX() {
       // Get our search button and setup an event handler
    //Search Button
    //Event Handler

    //Prevent submit if user clicks enter
    var theaddform = document.getElementById("addpicture");
    theaddform.onsubmit = function(event){
    	item=$("#file")[0].files[0];
		fname=item.name;
		

		
    	
	     	
        Add();
        return false;
    }


	  var search = document.getElementById("submit");
 
    // Setup our request object
    request = null;
    createRequest();  
}
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
function Add() {
    createRequest();
    /* Here is the url we will need to call, with the search omitted */
    var url="http://info230.cs.cornell.edu/groups/Chips_on_a_stick/www/AJAX/addphotohome.php";
  	var action=url+"?url="+fname; 
    //Check if no search 
      
    /* Set up the Ajax call */
    request.onreadystatechange = processAdd;

    /* Make the Ajax call */
    request.open("POST", action, true);

    request.send(null);
   
}

/*
 *
 * Actually process the results of the AJAX call
 *
 */
function processAdd() {
    //
    if(request.readyState < 4) {

    }
   
    if (request.readyState == 4) {
   		alert("Your photo has been added");
		var e = document.createElement("INPUT")
      e.type = "hidden";
      e.name ="APC_UPLOAD_PROGRESS";
       e.value = u.data().name;
       u.addElement(e, 0); 
		item.jsupload(); 
		$('#galleria').append("<img src='images/"+item"'/>");
        request = null;
    }
   

}
