// On peut faire des conditions en JavaScript
var genre = confirm('Es-tu un garçon ?'); // confirm renvoie un booléen

if (genre == true) {
    console.log('Tu es un garçon');
} else {
    console.log('Tu es une fille');
}

// On peut combiner les comparaisons (ET, OU)
var demande = prompt('Pain, croissant ou chocolatine ?');
var localisation = prompt('D\'où venez-vous ?');

// || == OU, && == ET
if (demande == 'croissant' || demande == 'pain') {
    console.log('Bienvenue');
} else if (demande == 'chocolatine' && localisation == 'sud') {
    console.log('Sortez');
} else {
    console.log('Attention, on doit dire pain au chocolat');
}

// On peut inverser un booléen
if (!genre) { // genre == false
    console.log('Tu es une fille');
}

// Le switch (un if amélioré)
var choix = prompt('Veuillez choisir une couleur : bleu, rouge.');

switch (choix) {
    case 'bleu':
        console.log('Vous avez choisi bleu');
    break;
    case 'rouge':
    case 'red':
        console.log('Vous avez choisi rouge');
    break;
    default:
        console.log('Veuillez choisir une couleur...');
}
