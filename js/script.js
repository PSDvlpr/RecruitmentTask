// TASK 1 //

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

    // TASK ONE

   $('.square-one').click(function() {
       $(this).addClass('grow').mouseleave(function() {
            $(this).removeClass('grow')
       })
   })

    // TASK 4 //

    $(function () {
        $(".count").each(function () {
            $(this).prop("Counter", 0).animate({
                Counter: $(this).text()
            }, {
                duration: 50000,
                easing: "swing",
                step: function (d) {
                    $(this).text(Math.ceil(d))
                }
            })
        })
    })

    // TASK 5 CAROUSEL 5 sec interval

    $('.carousel').carousel({
        interval: 5000
    })

    // NAVBAR HANDLER

    $('.mobile-nav').click(function () {
        $('.menu').toggleClass('showNav')
    })

    $('.menu-item a').click(function () {
        $('.menu').removeClass('showNav')
    })
})

new WOW().init();



function loop() {
    let i = 0
    let arr = []

    while(i < 10) {
        i += 1
        arr.push(i)
    }
}

loop()
