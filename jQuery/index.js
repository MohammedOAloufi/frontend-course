$("h1").on("click" ,function(){
    $("h1").animate({opacity: 0.5})
})

$("button").click(function(){ 
    $("h1").css("color", "purple")
})

$("h1").on("mouseover", function(event) {
    $("h1").css("color", "red")
})

$("h1").on("mouseout", function(event) {    
    $("h1").css("color", "black")
})

