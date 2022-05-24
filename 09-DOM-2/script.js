var buttonCircle = document.getElementById('circle');
var buttonRect = document.getElementById('rect');
var square = document.getElementById('square');

buttonRect.addEventListener('click', function(){
    square.classList.remove('circle');
    square.classList.toggle('rect');
})

buttonCircle.addEventListener('click', function(){
    square.classList.remove('rect');
    if (square.classList.contains('circle')){
        square.classList.remove('circle');
    }
    else{
        square.classList.add('circle');
        square.classList.toggle('bg-red'); // On retire la class si elle est présente et on l'ajoute si elle est absente
    }
})

document.getElementById('circle').addEventListener('click', function(){
    square.classList.add('circle'); // On ajoute une classe .circle
    square.classList.remove('class1'); // On retire une classe .class1
    
});


var card1 = document.getElementsByClassName('card')[0];
var card2 = document.getElementsByClassName('card')[1];
var card3 = document.getElementsByClassName('card')[2];
var boutonFire = document.getElementsByClassName('fire')[0];

card1.addEventListener('click' ,  function(){
    card1.classList.toggle('selected');
    card2.classList.remove('selected');
    card3.classList.remove('selected');
})

card2.addEventListener('click' ,  function(){
    card2.classList.toggle('selected');
    card1.classList.remove('selected');
    card3.classList.remove('selected');
})

card3.addEventListener('click' ,  function(){
    card3.classList.toggle('selected');
    card2.classList.remove('selected');
    card1.classList.remove('selected');
})

boutonFire.addEventListener('click', function(){

    card1.classList.toggle('feu');
    card2.classList.toggle('feu');
    card3.classList.toggle('feu');

})

