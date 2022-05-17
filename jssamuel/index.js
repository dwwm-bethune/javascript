let a = "hello world"


// paramètre passé par valeur (copie)
function upper(chaine) {
    chaine = chaine.toUpperCase();
    return chaine;
}


a = upper(a)
console.log(a);

let lower = function(chaine) {
    chaine = chaine.toLowerCase(chaine);
    return chaine;
}

a = lower(a);
console.log(a);


//si on a un seul paramètre, pas obligé de mettre les parenthèse du parametre
let capitalize = (chaine) => chaine.slice(0, 1).toUpperCase() + chaine.slice(1);

a = capitalize(a);
console.log(a);



function formupper() {
    console.log(document.formulaire.email.value);
    document.formulaire.email.value = document.formulaire.email.value.toUpperCase();
}

let c = 'sam';
console.log(typeof c);

c = 13;
console.log(typeof c);

c = 12.6;
console.log(typeof c);

c = true;
console.log(typeof c);

c = "chaine";
console.log(typeof c);

c = [];
console.log(typeof c);


console.log(parseInt('45862589575'));
console.log(parseInt('45862589575.25687'));
console.log(parseInt('c3', 16));
console.log(parseInt('25', 8));
console.log(parseFloat('258'));
console.log(parseFloat('258.854e+1'));
console.log(parseFloat('258.25 + 875'));
console.log(eval("87.98 + 27456"));
let somme = 125;
console.log(eval("somme + 87.98 + 245"));

let d = +"23.12"
console.log(typeof a);


function calculer(chaine) {
    console.log(eval(document.exo1.resultat.value));
    document.exo1.resultat.value = eval(document.exo1.calcul.value);
    return chaine;
}


//ternaire
/*
let j = 10;
let i = "";
if (i >= 18) {
    i = "Tu est majeur"
} else {
    i = "Tu est mineur"
}

console.log(i)
*/
// peut aussi s'ecrire en ternaire 

let j = 10;
let i = "";
i = j >= 18 ? "Tu es majeur" : "tu est mineur ";
console.log(i)

let k = 10
if (a == "10") {
    console.log("true")
} else {
    console.log("false")
}
// renvoie true 


if (a === "10") {
    console.log("true")
} else {
    console.log("false")
}
//renvoie false 

console.log("coucou" + 10);
//renvoie coucou 10


let e = "<div>";
e += 10;
e += "</div>"

console.log(e);
//affiche <div>10</div>


//creation de tableau
let notes = [12,10.25,8.75,6,13.5,18];
let tab = [];
tab[0] = "sam";
tab[1] = "mich";
tab.push("sabrina");

console.table(notes);
console.table(tab);

let sommes = 0;
let sommes2= 0;
let countSup10 = 0;
for(let f = 0; f< notes.length; f++) {
    console.log(notes[f]);
    sommes = sommes + notes[f];

    if (notes[f] > 10) {
        countSup10++;
        sommes2 += notes[f];
        continue; //permet de passer a la boucle suivante sans lire la suite de la boucle
    }

}

console.log("La moyenne est ");
console.log(sommes / notes.length);

console.log("La somme des notes supperieur a 10");
console.log(sommes2);

//le mot clé break permet de stoper totallement une boucle 
//exemple

let countg = 0;
for(let g = 1; g<50; g++) {
    if (g > 30) {
        break;
    }
    countg = countg + 1
}

console.log("la boucle s'arrete avec g = ");
console.log(countg);

console.log(document.forms);


console.log(document);
console.dir(document);

console.dir(document.links);


//mode dark

function check() {
    let form = document.sombre;
    if (form.dark.checked) {
        document.body.style.backgroundColor = "#3c3c3c";
        document.body.style.color = "#fff";
    }else {
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";
    }
}


//exo fond et texte color

function check2() {
    let formexo = document.colexo;
    if (formexo.exocheck.checked) {

        document.body.style.backgroundColor = formexo.fondexo.value;
        document.body.style.color = formexo.textexo.value;
        formexo.afffond.value = formexo.fondexo.value;
        formexo.afftext.value = formexo.textexo.value;

    }else {

        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";

    }


}

//autr facon avec le this.form

function check3(formulaire) {
    if (formulaire.exocheck1.checked) {

        document.body.style.backgroundColor = formulaire.fondexo1.value;
        document.body.style.color = formulaire.textexo1.value;
        formulaire.afffond1.value = formulaire.fondexo1.value;
        formulaire.afftext1.value = formulaire.textexo1.value;

    }else {

        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";

    }


}

//Objet 

let inception = {
    name: "inception",
    img: "https://img.over-blog-kiwi.com/0/66/79/72/20150125/ob_2485e6_inception-7205.jpg",
    date: "21/07/2010",
    synopsis: "Synopsis: Dom Cobb est un voleur expérimenté dans l'art périlleux de `l'extraction' : sa spécialité consiste à s'approprier les secrets les plus précieux d'un individu, enfouis au plus profond de son subconscient, pendant qu'il rêve et que son esprit est particulièrement vulnérable. Très recherché pour ses talents dans l'univers trouble de l'espionnage industriel, Cobb est aussi devenu un fugitif traqué dans le monde entier. Cependant, une ultime mission pourrait lui permettre de retrouver sa vie d'avant."
};

let movie = document.getElementById("movie"); //Version 1
let movie2 = document.querySelector("#movie"); //Version 2
console.log(movie);
console.log(movie2);


movie.innerHTML = /*html*/`
<div>
    <h3>${inception.name.toUpperCase()}</h3>
    <p>${inception.synopsis}</p>
    <figure>
        <img src=${inception.img} alt=${inception.name}>
        <figcaption><date>${inception.date}</date></figcaption>
    </figure>

</div>
`;

