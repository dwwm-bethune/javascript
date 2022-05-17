// Récap opérations
var a = 10 + 4;
var b = 20 + a;
var c = 10 * 2;

// c vaut 34
c += a; // c = c + a

// b vaut 35
console.log(b++); // Affiche 34
// b vaut 36
console.log(++b); // Affiche 36

// Division
var d = 10 / 2; // affiche 5
// Modulo (Reste division)
var e = 10 % 3; // Affiche 1
console.log(e);

// Puissance
console.log(10 ** 2);

// Les boucles (for et while)
// Le for a 3 instructions
// - Initialisation (i = 0)
// - Condition jusqu'à (i < 10)
// - Incrémentation (i++ ou i = i + 1)
for (var i = 0; i < 10; i++) {
    console.log(i);
}

// Le for permet de parcourir un tableau
var products = ['Café', 'Thé'];
for (var product of products) {
    console.log(product);
}

// Le while
// On dit que weather est true quand il fait beau
var weather = true;
while (weather == true) {
    console.log('Je sors dehors');
    weather = confirm('Fait-il beau ?');
}

// Le do while se fait au moins 1 fois
var night = false;
do {
    console.log('On voit rien');
    night = confirm('Fait-il nuit ?');
} while (night);

// Comparaison avec ===
'45' == 45; // true
'45' === 45; // false
// On peut convertir une chaine en nombre
// Le || 0 permet de s'assurer qu'il tape un nombre
var nombre = parseInt(prompt('Nombre ?')) || 0;
