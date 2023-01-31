$(document).ready(function () {
    let element = $("#test");

    console.log(element);

    $("#btn").click(function () {
        element.fadeToggle(3000);
    });

    $("#btn2").click(function () {
        $("li").fadeIn(1500);
    })

    $("li").click(function () {
        let clr = $("#test").css("background-color");
        $(this).parent().css("color", clr);
        // console.log( $(this).parent().css("color") );
    });

    $("#red, #green, #blue").click(function () {
        let clr = $(this).text();
        console.log(clr);
        $("#output").css("color", clr);
    });

    $("#red, #green, #blue").dblclick(function () {
        let clr = $(this).text();
        console.log(clr);
        $("#output").css("background-color", clr);
    });


});
