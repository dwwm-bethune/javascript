// 1. Grâce à la boucle for, écrire les nombres de 1 à 10.
// let au lieu de var permet de cloisoner i uniquement dans la boucle

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Grâce à la boucle for, écrire les nombres de 10 à 2.
console.log('--------------------');
for (var i = 10; i >= 2; i--) {
    console.log(i);
}

// 3. Grâce à la boucle for, afficher les nombres de 1 à 100 mais uniquement les nombres pairs.
console.log('--------------------');
for (var i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// 4. Grâce au while, demandez à l'utilisateur s'il veut continuer sur le site, il doit répondre "oui", "non", "o" ou "n". Tant qu'il ne répond pas une de ces valeurs, lui reposer la question.
console.log('--------------------');
var answer = prompt('Veux-tu continuer sur le site ?');

while (answer != 'oui' && answer != 'non' && answer != 'o' && answer != 'n') {
    answer = prompt('Veux-tu continuer sur le site ?');
}

if (answer == 'oui' || answer == 'o') {
    console.log('On entre sur le site');
} else {
    console.log('On entre PAS sur le site');
}

// 2ème version avec le do while
do {
    var answer = prompt('Veux-tu continuer sur le site ?');

    if (answer == 'oui' || answer == 'o') {
        console.log('On entre sur le site');
    } else if (answer == 'non' || answer == 'n') {
        console.log('On entre PAS sur le site');
    }
} while (answer != 'oui' && answer != 'non' && answer != 'o' && answer != 'n');

// Exemple ternaire (Hors sujet exercice)
if (answer == 'non' || answer == 'n') {
    retry = false;
} else if (answer == 'oui' || answer == 'o') {
    retry = true;
}

var retry = (answer == 'oui' || answer == 'o') ? true : false;
var retry = (answer == 'oui' || answer == 'o');
