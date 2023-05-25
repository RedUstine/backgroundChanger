$(document).ready(function(){
    $(".my-box").css({background: "#09dba0", margin:'2rem', padding: '2rem' });

     $(".counter-form").on("submit", function(){ 

    //  Toggle for mode-changing on a webpage
         $("#mod").click(function(){
         $("body").toggleClass("dark-mode");              
         });
     

         return false;
         })
    })