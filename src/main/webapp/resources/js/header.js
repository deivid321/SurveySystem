$(document).ready(function() {
    $(".nav a").on("click", function () {
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");

    });
    $('#nav-icon').click(function(){
        $(this).toggleClass('collapsed');
    });
    $('#datetimepicker').datetimepicker();

});