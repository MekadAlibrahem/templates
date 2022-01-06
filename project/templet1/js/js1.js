$(document).ready(function(){
    $(".links").click(function(){
        console.log("Hello");
    });
   $(".links").hover(
       
    function(){
        $(".list-links").css("display" , "block");
        $("span.icon").children().css("width" , "100%" );
    }
    ,
    function(){
        $(".list-links").css("display" , "none");
        $("span.icon").children().eq(1).css("width" , "60%" );
    }
   );





});