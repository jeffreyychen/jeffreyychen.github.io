$(document).ready(function() {
    var colors = [
        '.intro', '#red', '#orange', '#yellow', '#green', '#blue', '#purple'
    ];
    var current = -1;
    var showNextColor = function () {
        current = (current + 1) % colors.length;
        for (var i = 0; i < colors.length; ++i) {
            if (i == current) {
                $(colors[i]).removeClass('hidden');
            }
            else {
                $(colors[i]).addClass('hidden');
            }
        }
    }

    $('.color').on('click', showNextColor);

    showNextColor();

    $('.item').on('click', function(event) {
        var target = $('.section' + $(this).attr('data-scroll-to') + ':not(.hidden)');
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
    });
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= $(window).outerHeight() - $('#navbar').outerHeight()) {
        $("#navbar").addClass("fixednav");
    }
    else{
        $("#navbar").removeClass("fixednav");
    }
 });


$(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
});

$(document).ready(function(){
    $("#ele2").click(function(){
        $("#elee2").fadeIn()
    });
    $("#ele3").click(function(){
        $("#elee3").show()
    });
    $("#ele4").click(function(){
        $("#elee4").show()
    });
    $("#ele5").click(function(){
        $("#elee5").show()
    });
    $("#ele6").click(function(){
        $("#elee6").show()
    });
    $("#ele7").click(function(){
        $("#elee7").show()
    });
});

$(document).ready(function(){
    $("#clickme").click(function(){
        $("#aboutme").fadeIn()
    });
    $("#sys1").click(function(){
        $("#add").fadeIn()
        $("#additive").fadeIn()
        $("#sub").fadeOut()
        $("#subtractive").fadeOut()
    });
    $("#sys2").click(function(){
        $("#sub").fadeIn()
        $("#subtractive").fadeIn()
        $("#add").fadeOut()
        $("#additive").fadeOut()
    });
    $("#x2").click(function(){
        $("#w2").fadeIn()
        $("#w1").fadeOut()
        $("#w3").fadeOut()
        $("#w4").fadeOut()
        $("#w5").fadeOut()
        $("#w6").fadeOut()
        $("#w7").fadeOut()
    });
    $("#x3").click(function(){
        $("#w3").fadeIn()
        $("#w1").fadeOut()
        $("#w2").fadeOut()
        $("#w4").fadeOut()
        $("#w5").fadeOut()
        $("#w6").fadeOut()
        $("#w7").fadeOut()
    });
    $("#x4").click(function(){
        $("#w4").fadeIn()
        $("#w1").fadeOut()
        $("#w2").fadeOut()
        $("#w3").fadeOut()
        $("#w5").fadeOut()
        $("#w6").fadeOut()
        $("#w7").fadeOut()
    });
    $("#x4").click(function(){
        $("#w4").fadeIn()
        $("#w1").fadeOut()
        $("#w2").fadeOut()
        $("#w3").fadeOut()
        $("#w5").fadeOut()
        $("#w6").fadeOut()
        $("#w7").fadeOut()
    });
   $("#x5").click(function(){
        $("#w5").fadeIn()
        $("#w1").fadeOut()
        $("#w2").fadeOut()
        $("#w3").fadeOut()
        $("#w4").fadeOut()
        $("#w6").fadeOut()
        $("#w7").fadeOut()
    });
    $("#x6").click(function(){
        $("#w6").fadeIn()
        $("#w1").fadeOut()
        $("#w2").fadeOut()
        $("#w3").fadeOut()
        $("#w4").fadeOut()
        $("#w5").fadeOut()
        $("#w7").fadeOut()
    });
   $("#x7").click(function(){
        $("#w7").fadeIn()
        $("#w1").fadeOut()
        $("#w2").fadeOut()
        $("#w3").fadeOut()
        $("#w4").fadeOut()
        $("#w6").fadeOut()
        $("#w5").fadeOut()
    });
});



