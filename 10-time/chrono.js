var startButton = document.getElementById('start');
var stopButton = document.getElementById('stop');
var resetButton = document.getElementById('reset');

// On prépare toutes les variables du chrono en dehors des fonctions
var milliseconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;

var chronoInterval; // On peut déclarer une variable sans affecter de valeur
// Cette variable sert à savoir si le chrono est lancé
var chronoStart = false;

// On récupère les éléments nécessaires dans le DOM
var millisecondsContainer = document.getElementById('milliseconds');
var secondsContainer = document.getElementById('seconds');
var minutesContainer = document.getElementById('minutes');
var hoursContainer = document.getElementById('hours');

startButton.addEventListener('click', function () {
    if (!chronoStart) {
        console.log('start');
        chronoStart = true;

        chronoInterval = setInterval(function () {
            milliseconds += 9;

            if (milliseconds >= 1000) {
                milliseconds = 0;
                seconds++;
            }

            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }

            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }

            if (hours >= 24) {
                milliseconds = 0;
                seconds = 0;
                minutes = 0;
                hours = 0;
            }

            if (milliseconds <= 9) {
                millisecondsContainer.textContent = '00' + milliseconds;
            } else if (milliseconds <= 99) {
                millisecondsContainer.textContent = '0' + milliseconds;
            } else {
                millisecondsContainer.textContent = milliseconds;
            }

            // On utilise le ternaire (comme un if)
            hoursContainer.textContent = hours > 9 ? hours : '0' + hours;
            minutesContainer.textContent = minutes > 9 ? minutes : '0' + minutes;
            secondsContainer.textContent = seconds > 9 ? seconds : '0' + seconds;

            /*
                // Alternative au ternaire
                if (seconds > 9) {
                    secondsContainer.textContent = seconds;
                } else {
                    secondsContainer.textContent = '0' + seconds;
                }
            */
        }, 9);
    }
});

stopButton.addEventListener('click', function () {
    console.log('stop');
    chronoStart = false;
    clearInterval(chronoInterval);
});

resetButton.addEventListener('click', function () {
    console.log('reset');

    clearInterval(chronoInterval);

    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    if (milliseconds <= 9) {
        millisecondsContainer.textContent = '00' + milliseconds;
    } else if (milliseconds <= 99) {
        millisecondsContainer.textContent = '0' + milliseconds;
    } else {
        millisecondsContainer.textContent = milliseconds;
    }

    hoursContainer.textContent = hours > 9 ? hours : '0' + hours;
    minutesContainer.textContent = minutes > 9 ? minutes : '0' + minutes;
    secondsContainer.textContent = seconds > 9 ? seconds : '0' + seconds;
});

// On écoute l'événement keydown sur la fenêtre (si on appuye sur le clavier)
window.addEventListener('keydown', function (event) {
    if (event.key == ' ') {
        if (!chronoStart) {
            console.log('start');
            chronoStart = true;
    
            chronoInterval = setInterval(function () {
                milliseconds += 9;
    
                if (milliseconds >= 1000) {
                    milliseconds = 0;
                    seconds++;
                }
    
                if (seconds >= 60) {
                    seconds = 0;
                    minutes++;
                }
    
                if (minutes >= 60) {
                    minutes = 0;
                    hours++;
                }
    
                if (hours >= 24) {
                    milliseconds = 0;
                    seconds = 0;
                    minutes = 0;
                    hours = 0;
                }
    
                if (milliseconds <= 9) {
                    millisecondsContainer.textContent = '00' + milliseconds;
                } else if (milliseconds <= 99) {
                    millisecondsContainer.textContent = '0' + milliseconds;
                } else {
                    millisecondsContainer.textContent = milliseconds;
                }
    
                // On utilise le ternaire (comme un if)
                hoursContainer.textContent = hours > 9 ? hours : '0' + hours;
                minutesContainer.textContent = minutes > 9 ? minutes : '0' + minutes;
                secondsContainer.textContent = seconds > 9 ? seconds : '0' + seconds;
    
                /*
                    // Alternative au ternaire
                    if (seconds > 9) {
                        secondsContainer.textContent = seconds;
                    } else {
                        secondsContainer.textContent = '0' + seconds;
                    }
                */
            }, 9);
        } else {
            console.log('stop');
            chronoStart = false;
            clearInterval(chronoInterval);
        }
    }

    if (event.key == 'r') {
        console.log('reset');

        clearInterval(chronoInterval);

        milliseconds = 0;
        seconds = 0;
        minutes = 0;
        hours = 0;

        if (milliseconds <= 9) {
            millisecondsContainer.textContent = '00' + milliseconds;
        } else if (milliseconds <= 99) {
            millisecondsContainer.textContent = '0' + milliseconds;
        } else {
            millisecondsContainer.textContent = milliseconds;
        }

        hoursContainer.textContent = hours > 9 ? hours : '0' + hours;
        minutesContainer.textContent = minutes > 9 ? minutes : '0' + minutes;
        secondsContainer.textContent = seconds > 9 ? seconds : '0' + seconds;
    }
});
