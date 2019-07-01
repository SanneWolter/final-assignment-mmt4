
$("#accordion").accordion();


$("#btn").click(function () {
    // user heeft geklikt
    // $("#btn").addClass('active');

    if ($("#btn").hasClass("active")) {
        //als aan,zet uit
        $("#btn").removeClass("active");
        $("#accordion").accordion("enable");

    } else {
        // anders, zet aan
        $("#btn").addClass("active");
        $("#accordion").accordion("disable");

    }

});



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
   

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn2");
var span = document.getElementsByClassName("close")[0];


btn.onclick = function () {

    modal.style.display = "block";
   
}
                    
                          

span.onclick = function () {
    modal.style.display = "none";
}
                     

$(document).ready(function () {
    $('.close').click(function () {
        $('button:first').show('#myBtn');
    })

})




$(document).ready(function () {
    $('footer ul').click(function () {
        $('footer ul').toggleClass('active');
        $('body').toggleClass('dark');
        $("#wrapper").toggleClass("dark");
        $('nav').toggleClass('dark');
    })




})
    