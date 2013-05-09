$(document).ready(function(){
	start2();
});

var id=""; 
//var item="";

// Initialize on window load
function start2() {
       // Get our search button and setup an event handler
    //Search Button
    var button = document.getElementById("delete");
    //Event Handler

    //Prevent submit if user clicks enter
    var thedeleteform = document.getElementById("deleteempform");
    thedeleteform.onsubmit = function(event){
    	//item=$("select option:selected").text();
    	id=$("select option:selected").val();
    	
        DeleteEmp();
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
function DeleteEmp() {
    createRequest();
    /* Here is the url we will need to call, with the search omitted */
    var url="http://info230.cs.cornell.edu/groups/Chips_on_a_stick/www/AJAX/deleteemployee.php";
  	var action=url+"?eid="+id; 
    //Check if no search 
    if (id=="Choose a Photo") {
        alert("Please select an employee to delete.");
        return;
    }
      
    /* Set up the Ajax call */
    request.onreadystatechange = processDeleteEmp;

    /* Make the Ajax call */
    request.open("POST", action, true);

    request.send(null);
   
}

/*
 *
 * Actually process the results of the AJAX call
 *
 */
function processDeleteEmp() {
    //
    if(request.readyState < 4) {

    }
   
    if (request.readyState == 4) {
   		alert("The employee has been deleted");
        
        //var str = "[src=\"images/" + item + "\"]";
        //var selectedImg = $(str);
        //selectedImg.remove();
        $("select option:selected").remove();
        $("div").remove('#'+id); 
        request = null;
    }
   

}