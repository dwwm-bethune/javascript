var choice = prompt('Saisir un nombre entre 1 et 100');
var min = 1;
var max = 100;
var good = Math.floor(Math.random() * (max - min + 1)) + 1; // 0.991234 * 100 = 99.1234 = 99 + 1 => 100
var count = 1;

console.log(good);

while (choice != good) {
    count++;

    if (choice < good) {
        alert('C\'est plus !');
    } else if (choice > good) {
        alert('C\'est moins !');
    }

    choice = prompt('Saisir un nombre entre 1 et 100');
}

alert('Tu as trouvé le nombre ' + good + ' en ' + count + ' fois.');
