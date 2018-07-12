let timerStart = Math.floor(Date.now() / 1000)

function timer() {
    let timeNow = Math.floor(Date.now() / 1000)
    let diff = timeNow - timerStart
    let minutes = Math.floor(diff / 60)
    let seconds = Math.floor(diff % 60)

    minutes = minutes > 9 ? minutes : `0${minutes}`
    seconds = seconds > 9 ? seconds : `0${seconds}`

    setTimeout(timer, 1000)

    document.querySelector('.seconds').textContent = seconds
    document.querySelector('.minutes').textContent = minutes
}

timer()

$(function () {
   $('.mobile-nav').click(function() {
       $('.menu').toggleClass('showNav');
   });

   $('.square-one').click(function() {
       $(this).addClass('grow').mouseleave(function() {
            $(this).removeClass('grow');
       });
   });

   $('.square-two').mouseenter(function() {
       $('.icon').fadeOut(2000, function() {
           $('.square-two p').fadeIn(1000);
       });
   }).mouseleave(function() {
        $('.square-two p').fadeOut(2000, function () {
            $('.icon').fadeIn(1000);
        });
    });

    $('.carousel').carousel({
        interval: 5000
    })

    let fired = false;

    $(function () {
        $(".count").each(function () {
            $(this).prop("Counter", 0).animate({
                Counter: $(this).text()
            }, {
                duration: 50000,
                easing: "swing",
                step: function (d) {
                    $(this).text(Math.ceil(d));
                    fired = true
                }
            })
        })
    })
})();
