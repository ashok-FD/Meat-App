window.onload = () => {
    document.getElementsByClassName("b1").style.display = "none";
    document.getElementsByClassName("b2").style.display = "none";
    document.getElementsByClassName("b3").style.display = "none";
    document.getElementsByClassName("b4").style.display = "none";
    document.getElementsByClassName("b5").style.display = "none";
    document.getElementsByClassName("b6").style.display = "none";
    document.getElementsByClassName("b7").style.display = "none";
    document.getElementsByClassName("b8").style.display = "none";
}
window.addEventListener("load",function(){
    var load_screen = document.getElementById("load_screen");
    document.body.removeChild(load_screen);
});
$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '60px',
});
$(document).ready(function () {
        $('#overlay').fadeIn().delay(2000).fadeOut();
});
$(document).ready(function () {
    $(".quick1").hover(function () {
        $(".b1").show();
    }, function () {
        $(".b1").hide();
    });
    $(".quick2").hover(function () {
        $(".b2").show();
    }, function () {
        $(".b2").hide();
    });
    $(".quick3").hover(function () {
        $(".b3").show();
    }, function () {
        $(".b3").hide();
    });
    //end first row
    $(".quick4").hover(function () {
        $(".b4").show();
    }, function () {
        $(".b4").hide();
    });
    $(".quick5").hover(function () {
        $(".b5").show();
    }, function () {
        $(".b5").hide();
    });
    $(".quick6").hover(function () {
        $(".b6").show();
    }, function () {
        $(".b6").hide();
    });
    //end secound row
    $(".quick7").hover(function () {
        $(".b7").show();
    }, function () {
        $(".b7").hide();
    });
    $(".quick8").hover(function () {
        $(".b8").show();
    }, function () {
        $(".b8").hide();
    });
    $(".quick9").hover(function () {
        $(".b9").show();
    }, function () {
        $(".b9").hide();
    });
    //end thrid row
});
//overlay content
function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}