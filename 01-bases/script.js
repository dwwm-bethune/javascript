// On peut déclarer des variables en JS
var prenom = 'Fiorella';

// On peut afficher un truc dans la console
console.log('Salut ' + prenom);

// On peut faire des calculs
var nombre1 = 10;
var nombre2 = nombre1 + 5;

// On peut afficher un truc dans une popup
// alert(nombre2);

// On peut ajouter un truc sur la page (non conseillé)
// document.write('Salut JavaScript');

function presentation() {
    // On peut demander un truc à l'utilisateur
    var nom = prompt('Qui es-tu ?');

    console.log('Tu es ' + nom);
}

// On peut créer des tableaux
var notes = [15, 4, 12, 'toto'];

// Pour afficher 12, on utilise l'index 2
// L'indexation des éléments commence à 0
// alert(notes[2]);

// On peut créer des objets (littéral)
// var personne = ['Mota', 'Fiorella', [31, 12, 2019]];
var personne = {
    nom: 'Mota',
    prenom: 'Fiorella',
    dateDeNaissance: [31, 12, 2019]
};

// On peut afficher la clé d'un objet
// alert(personne['prenom']);
// alert(personne.prenom);
console.log(personne);

// Manipuler les tableaux (ou les chaines)
console.log(notes.length); // Affiche la taille du tableau
console.log(personne.prenom.toUpperCase()); // Affiche le prénom en majuscule

// On doit parfois échapper les quotes ou double quotes
console.log('Fiorella dit : "Papa l\'meilleur \\"');
console.log("Fiorella dit : \"Papa l'meilleur \\\"");
