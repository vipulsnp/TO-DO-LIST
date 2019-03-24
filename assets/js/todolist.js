$("ul").on("click","li",trash);
function trash()
{
$(this).toggleClass("completed");
}


$("ul").on('click','.delete',function(event){
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
   event.stopPropagation(); 
});

// keypress event

$("#input").keypress(function(press){
    
    if(press.which===13)
    {
        var newtext=$(this).val();
        if(newtext!=="")
       $("ul").append("<li><span class='delete'> <i class='fas fa-trash-alt'> </i></span>" + newtext + "</li>");
            
        else
            alert("! Empty TO-DO !");
    $(this).val("");
    }
    
});

// plus event

$(".fa-plus-circle").on("click",fade);
function fade()
{
    $("#input").fadeToggle(500);
}