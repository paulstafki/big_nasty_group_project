function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}





$(document).ready(function(){
    $('body').append("<button class='clickyButton'>Generate Project</button>");





    $("body").on('click', '.clickyButton', function(){
        console.log("clickyButton clicked!");
        $.ajax({
            url: "/data-request",
            success: function(data){
                console.log(data.message);
            }
        });
    });
});