$(document).ready(function(){
	initialize();
	
	$('#newPic').on('click',function(event){
		validPhoto(event)
	});
	
	$('#addpicture').on('submit', validPhoto );
	
	
	
	$('#file').on('change', function(event){
		validPhoto(event)
	});
});

function validPhoto(event){
	var value=$('#file').val();
		var check= /.*(.(jpeg)|(jpg)|(png)|(gif)|(JPG)|(JPEG)|(GIF)|(PNG))$/;	
	$valid=true;
	if (jQuery.trim(value) == ""|| (!check.test(value))) {
		$valid= false;
		$('#submitmsg').text("Please select a valid photo");
	} 

	if($valid){
		return true;
		$('#submitmsg').text("<br/><br/>You have added a photo");

	 } 
	 else{
	 return false;
	 }
}



var id=""; 
var item="";
// Initialize on window load
function initialize() {
       // Get our search button and setup an event handler
    //Search Button
    var button1 = document.getElementById("deletebutton");
    //Event Handler

    //Prevent submit if user clicks enter
    var thedeleteform = document.getElementById("deletepic");
    thedeleteform.onsubmit = function(event){
    	item=$("select option:selected").text();
    	id=$("select option:selected").val();
    	
        Delete();
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
function Delete() {
    createRequest();
    /* Here is the url we will need to call, with the search omitted */
    var url="http://info230.cs.cornell.edu/groups/Chips_on_a_stick/www/AJAX/deletephotohome.php";
  	var action=url+"?pid="+id; 
    //Check if no search 
    if (id=="Choose a Photo") {
        alert("Please select a photo to delete.");
        return;
    }
      
    /* Set up the Ajax call */
    request.onreadystatechange = processDelete;

    /* Make the Ajax call */
    request.open("POST", action, true);

    request.send(null);
   
}

/*
 *
 * Actually process the results of the AJAX call
 *
 */
function processDelete() {
    //
    if(request.readyState < 4) {

    }
   
    if (request.readyState == 4) {
   		alert("Your photo has been deleted");
        var str = "[src=\"images/" + item + "\"]";
        var selectedImg = $(str);
        selectedImg.remove();
        $("select option:selected").remove(); 
        request = null;
    }
   

}
