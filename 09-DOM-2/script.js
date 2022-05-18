var buttonCircle = document.getElementById('circle');
var buttonRect = document.getElementById('rect');
var square = document.getElementById('square');

buttonRect.addEventListener('click', function () {
    square.classList.toggle('rect');
    square.classList.remove('circle');
});

buttonCircle.addEventListener('click', function () {
    square.classList.remove('rect');
    if (square.classList.contains('circle')) { // On vérifie si le carré posséde la classe circle
        square.classList.remove('circle'); // si oui, on enlève la classe circle
    } else {
        square.classList.add('circle'); // On ajoute la classe .circle
        square.classList.toggle('bg-red'); // On retire la classe .bg-red si elle est présente et on l'ajoute
        // si elle est absente
    }
});
