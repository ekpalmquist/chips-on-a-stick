$(document).ready(function(){
	initialize_two();
});

// Initialize on window load
function initialize_two() {
       // Get our search button and setup an event handler
    //Search Button
    var search = document.getElementById("submit");
    //Event Handler
    //queryNode.onchange = queryLookup;
    
    //Prevent submit if user clicks enter
    var form = document.getElementById("voters");
    form.onsubmit = function(event){
        Search();
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
function Search() {
    createRequest();
    /* Here is the url we will need to call, with the search omitted */
    var url="http://info230.cs.cornell.edu/groups/Chips_on_a_stick/www/AJAX/voting.php";

    var flavor=$('input:radio[name=flav]:checked').val(); 
  	var action=url+"?flavor="+flavor; 
    //Check if no search 
    if (!flavor) {
        alert("Please choose a flavor.");
        return;
    }
      
    /* Set up the Ajax call */
    request.onreadystatechange = processSearch;

    /* Make the Ajax call */
    request.open("POST", action, true);

    request.send(null);
   
}

/*
 *
 * Actually process the results of the AJAX call
 *
 */
function processSearch() {
    //
    if(request.readyState < 4) {

    }
   
    if (request.readyState == 4) {
   	
        
        document.getElementById("voting").innerHTML = request.responseText;
        request = null;
    }
   

}
