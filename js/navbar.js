$(document).ready(function(){  
  
    //When mouse rolls over  
    $("#dropdown").mouseover(function(){  
        $(this).stop().animate({height:'150px'},{queue:false, duration:500})  
    });  
  
    //When mouse is removed  
    $("#dropdown").mouseout(function(){  
        $(this).stop().animate({height:'35px'},{queue:false, duration:500})  
    });  
       
         //When mouse rolls over  
    $("#dropdown2").mouseover(function(){  
        $(this).stop().animate({height:'150px'},{queue:false, duration:500})  
    });  
  
    //When mouse is removed  
    $("#dropdown2").mouseout(function(){  
        $(this).stop().animate({height:'35px'},{queue:false, duration:500})  
    });  
       
     
  
});  

