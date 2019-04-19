$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//click on x to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut("1000", function() {
       $(this).remove(); 
    });
    event.stopPropagation();
    
});

$("input[type = 'text'").keypress(function(e){
    if(e.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todoText+"</li>");
        
    }
});

$(".fa-plus").click(function(){
    $("input[type = 'text']").fadeToggle("1000");
});