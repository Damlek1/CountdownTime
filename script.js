var countDownDate = new Date ("Mar 13, 2023 00:00:00").getTime()
        var x = setInterval(function(){
            var now = new Date().getTime()
            var distance = countDownDate - now
            var days = Math.floor(distance/(1000 * 60 *  60 * 24))
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            var seconds = Math.floor((distance % (1000 * 60)) / 1000)
            document.getElementById("countdown").innerHTML = days + "day(s) " + hours + "hr(s) " + minutes + "m " + seconds + "s"
            if (distance < 0) {
                clearInterval(x)
                document.getElementById("countdown").innerHTML = "Happy birthday to me"
            }
        })
