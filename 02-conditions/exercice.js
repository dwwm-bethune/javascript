function verifierAge() {
    var age = prompt('Quel est ton âge ?');

    console.log(age);

    if (age < 13) {
        alert('Interdit');
    } else if (age >= 13 && age <= 17) {
        alert('Bientôt dans '+(18 - age)+' an(s).');
    } else {
        alert('Autorisé.');
    }
}

var frigo = {
    tomate: 3,
    oeuf: 4,
    pain: 1,
    jambon: 2,
    poulet: 1,
    fromage: 1,
};

console.log(frigo);

function preparer() {
    if (frigo.pain >= 1 && frigo.jambon >= 1 && (frigo.tomate >= 1 || frigo.fromage >= 1)) {
        frigo.pain--; // frigo.pain = frigo.pain - 1;
        frigo.jambon -= 1;
        // Le ternaire est un if sur une seule ligne
        if (frigo.tomate >= 1) {
            frigo.tomate--;
        } else {
            frigo.fromage--;
        }

        // (frigo.tomate >= 1) ? frigo.tomate-- : frigo.fromage--;

        alert('Je peux faire un sandwich');
    } else if (frigo.poulet >= 1) {
        frigo.poulet--;
        alert('Je mange le poulet');
    } else if (frigo.oeuf >= 3) {
        frigo.oeuf -= 3;
        alert('Je mange une omelette');
    } else {
        alert('Je mange des chips');
    }

    console.log(frigo);
}

function remplir() {
    // frigo.pain = prompt('Combien de pain ?');

    frigo = {
        tomate: prompt('Combien de tomate ?'),
        oeuf: prompt('Combien d\'oeuf ?'),
        pain: prompt('Combien de pain ?'),
        jambon: prompt('Combien de jambon ?'),
        poulet: prompt('Combien de poulet ?'),
        fromage: prompt('Combien de fromage ?'),
    };
}
