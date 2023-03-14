

$(".w").click(function () {
    $(".w").fadeOut(100).fadeIn(100)
    var audio1 = new Audio('sounds/tom-1.mp3');
    audio1.play();
});


$(".a").click(function () {
    $(".a").fadeOut(100).fadeIn(100)
    var audio = new Audio('sounds/tom-2.mp3');
    audio.play();
});

$(".s").click(function () {
    $(".s").fadeOut(100).fadeIn(100)
    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();
});

$(".d").click(function () {
    $(".d").fadeOut(100).fadeIn(100)
    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();
});

$(".j").click(function () {
    $(".j").fadeOut(100).fadeIn(100)
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
});

$(".k").click(function () {
    $(".k").fadeOut(100).fadeIn(100)
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
});

$(".l").click(function () {
    $(".l").fadeOut(100).fadeIn(100)
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
});

$(document).keydown(function (event) {

    if (event.key == 'w') {
        $(".w").fadeOut(100).fadeIn(100)
        var audio1 = new Audio('sounds/tom-1.mp3');
        audio1.play();
    }
    if (event.key == 'a') {
        $(".a").fadeOut(100).fadeIn(100)
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();

    }
    if (event.key == 's') {
        $(".s").fadeOut(100).fadeIn(100)
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();

    }
    if (event.key == 'd') {
        $(".d").fadeOut(100).fadeIn(100)
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
    }
    if (event.key == 'j') {
        $(".j").fadeOut(100).fadeIn(100)
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
    }
    if (event.key == 'k') {
        $(".k").fadeOut(100).fadeIn(100)
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
    }
    if (event.key == 'l') {
        $(".l").fadeOut(100).fadeIn(100)
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
    }
});