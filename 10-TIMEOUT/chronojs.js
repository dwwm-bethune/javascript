var titre = document.getElementById('titre');
        var minute = document.getElementById('minute');
        var seconde = document.getElementById('seconde')

        var sec = 0;
        var min = 0;
        document.getElementById('start').addEventListener('click', function () {
            var interval = setInterval(function () {
                sec = sec + 1
                seconde.textContent = sec;
                minute.textContent = min;
                if (sec < 10) {
                    seconde.textContent = '0' + sec;
                }
                if (sec == 60) {
                    seconde.textContent = '00';
                    sec = 0;
                    min = min + 1
                }
                if (min < 10) {
                    minute.textContent = '0' + min;
                }
                document.getElementById('stop').addEventListener('click', function() {
                    clearInterval(interval);
                })
                document.getElementById('azero').addEventListener('click', function() {
                    sec = 0;
                    min = 0;
                    seconde.textContent = '00';
                    minute.textContent = '00';
                })


            }, 1000)



        })

        setInterval(function(){
            var color ='#' + (Math.random() * 0xFFFFFF << 0).toString(16);
            document.getElementById('couleur').style.color = color;
            document.getElementById('couleur').style.borderColor = color;
        }, 300)
