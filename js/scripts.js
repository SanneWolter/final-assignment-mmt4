var slider = $(".slider-speed");


slider.slider({
    max: 10,
    min: 1,

    change: function (event, ui) {
        richtingx = ui.value
    }
})


var slider = $(".slider-color");


slider.slider({
    max: 10,
    min: 0,

    change: function (event, ui) {
        driehoekFill = ui.value
    }
})

var slider = $(".slider-background");


slider.slider({
    max: 255,
    min: 0,

    change: function (event, ui) {
        offsetAchtergrondKleur = ui.value
    }
})


var player = videojs('player');
var playBtn = $(".player-btn");
var rewindBtn = $("#rewind");

player.on('ready', function () {
    // als videobestand klaar is dan..

    rewindBtn.click(function () {
        var time = player.currentTime();

        player.currentTime(time - 2);


    })

    playBtn.click(function () {
        //play knop is geklikt.
        if (!player.paused()) {
            // video speelt
            player.pause();
            playBtn.html("►");
        } else {
            // video pauze
            player.play();
            playBtn.html("pause");
        }


    });
})

$('.player-btn').hide();
jQuery('#player').hover(function () {
    $('.player-btn').toggle();
});

$('#rewind').hide();
jQuery('#player').hover(function () {
    $('#rewind').toggle();
});

$("#contact").ready(function () {
    $("#flip").click(function () {
        $("#panel").slideDown("slow");
    });
});