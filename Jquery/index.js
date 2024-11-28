$("body").css("background-color", "blue");

$("body").keypress(function(event){
    $("h1").text(event.key);
});

$("h1").on("mouseover", function(){
    $("h1").text("Hey you touched me");});
    