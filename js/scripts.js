$(document).ready(function () {
    $('.switch ul').click(function () {
        $('.switch ul').toggleClass('active');
        $('body').toggleClass('dark');
        $('nav').toggleClass('dark');
        $('.person').toggleClass('dark');
        $('.square').toggleClass('dark');
    })




})



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

$(function () {
    $("#accordion").accordion({
        animate: 1200,
        heightStyle: "content",
        header: ".video-cont .acc-bar"
    });
});

$(document).ready(function () {
    $("video").each(function () {


 var player = videojs(this.id, {
         });

        $("button#rewind").click(function () {
          player.currentTime(-10);
        });

        $("button#forward").click(function () {
            player.currentTime(+10);
        });


       let geklikt = false;

       $("button#toggle").click(function () {
           var video = $(this).closest('.video-wrapper').find('video')[0]; 
             if (!geklikt) {
                 video.play();
                 geklikt = true;
             } else {
                 video.pause();
                 geklikt = false;
            }
        });


    });

});




$("video").each(function () {

    var modal = document.querySelector(".modal");
     var closeButton = document.querySelector(".close-button");



    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }
    

    $('.video-js').on('ended', function () {
        toggleModal('show');
    });
 
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);

});
