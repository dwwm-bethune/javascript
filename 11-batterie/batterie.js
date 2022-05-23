var keys = document.getElementsByClassName('key'); // [d, s, q, g ...]

for (var key of keys) {
    key.addEventListener('click', function () {
        let key = this.dataset.key; // this représente la touche pressée
        // let audio = document.getElementById('audio-' + key);

        // Alternative avec la balise audio dans le JS
        let touch = document.getElementById('key-' + key);
        if (touch) {
            var audio = new Audio('sounds/'+touch.dataset.sound+'.wav');
        }

        if (audio) { // On vérifie que la balise audio pour la touche saisie existe
            audio.currentTime = 0; // Remets le player audio à 0
            audio.play();

            // Alternative au setTimeout...
            // document.getElementById('key-' + key).addEventListener('transitionend', function () {
            //     this.classList.remove('playing');
            // }, { once: true });

            document.getElementById('key-' + key).classList.add('playing');
            setTimeout(function () {
                document.getElementById('key-' + key).classList.remove('playing');
            }, 250);
            document.body.classList.add(key);
            setTimeout(function () {
                document.body.classList.remove('s', 'd', 'f', 'g', 'h', 'k', 'j', 'q', 'l');
            }, 250);
        }
    });
}

window.addEventListener('keydown', function (event) {
    let key = event.key;
    // let audio = document.getElementById('audio-' + key);

    // Alternative avec la balise audio dans le JS
    let touch = document.getElementById('key-' + key);
    if (touch) {
        var audio = new Audio('sounds/'+touch.dataset.sound+'.wav');
    }

    if (audio) { // On vérifie que la balise audio pour la touche saisie existe
        audio.currentTime = 0; // Remets le player audio à 0
        audio.play();

        // Alternative au setTimeout...
        // document.getElementById('key-' + key).addEventListener('transitionend', function () {
        //     this.classList.remove('playing');
        // }, { once: true });

        document.getElementById('key-' + key).classList.add('playing');
        setTimeout(function () {
            document.getElementById('key-' + key).classList.remove('playing');
        }, 250);
        document.body.classList.add(key);
        setTimeout(function () {
            document.body.classList.remove('s', 'd', 'f', 'g', 'h', 'k', 'j', 'q', 'l');
        }, 250);
    }
});

// document.body.addEventListener('transitionend', function () {
//     this.classList.remove('s', 'd', 'f', 'g', 'h', 'k', 'j', 'q', 'l');
// });
