$(document).ready(function(){

    var healthPoints = 100;
    var defender;
    var player;
    var attack;

    $("#sailor-moon").on("click", function() {
        $("#sailor-moon").appendTo("#enemy-line-up");
        // alert("health points are...");
        console.log($("sailor-moon"));

    });

    $("#jade").on("click", function() {
        $("#jade").detach().appendTo("#col-md-4");
        
    });

    $("#kunz").on("click", function() {
        $("#kunz").detach().appendTo("#col-md-4");
        
    });

    $("#queen-b").on("click", function() {
        $("#queen-b").detach().appendTo("#col-md-4");
        
    });

    



























});