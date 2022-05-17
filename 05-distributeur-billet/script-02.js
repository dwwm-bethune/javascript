var bankNotes = {
    b500: 10, b200: 10, b100: 10, b50: 10, b20: 10, b10: 10, b5: 10, b2: 10, b1: 10
};

function withdraw() {
    var total = bankNotes.b500 * 500 + bankNotes.b200 * 200 + bankNotes.b100 * 100
                + bankNotes.b50 * 50 + bankNotes.b20 * 20 + bankNotes.b10 * 10
                + bankNotes.b5 * 5 + bankNotes.b2 * 2 + bankNotes.b1 * 1;

    do {
        var amount = parseInt(prompt('Combien voulez-vous retirer ?')) || 0;

        if (amount > total) {
            alert('Pas assez d\'argent dans le distributeur (' + total + ').');
            amount = -1;
        }
    } while (amount <= 0);

    do {
        var clipping = prompt('Quelle coupure ?');
    } while (clipping != 500 && clipping != 200 && clipping != 100 &&
             clipping != 50 && clipping != 20 && clipping != 10 && clipping != 5 &&
             clipping != 2 && clipping != 1 && clipping !== '0');

    // Quantité de billets
    var bankNote500 = 0;
    var bankNote200 = 0;
    var bankNote100 = 0;
    var bankNote50 = 0;
    var bankNote20 = 0;
    var bankNote10 = 0;
    var bankNote5 = 0;
    var bankNote2 = 0;
    var bankNote1 = 0;
    var rest = amount;

    // Vérifie qu'on a assez de coupure si demandé
    if (clipping != 0 && bankNotes['b'+clipping] < Math.floor(rest / clipping)) {
        clipping = 0;
    }

    // On vérifie si on veut TOUTES coupures confondues ou uniquement des coupures de 500
    // On vérifie également qu'on a assez de billets en stock
    if (clipping == 0 || clipping == 500) {
        // Combien de billets de 500 dans 1389 ?
        bankNote500 = Math.min(Math.floor(rest / 500), bankNotes.b500); // 2,778 devient 2
        rest -= bankNote500 * 500; // Reste 389
        bankNotes.b500 -= bankNote500;
    }

    if (clipping == 0 || clipping == 200) {
        // Combien de billets de 200 dans 389 ?
        bankNote200 = Math.min(Math.floor(rest / 200), bankNotes.b200);
        rest -= bankNote200 * 200;
        bankNotes.b200 -= bankNote200;
    }

    if (clipping == 0 || clipping == 100) {
        // Combien de billets de 100 dans 189 ?
        bankNote100 = Math.min(Math.floor(rest / 100), bankNotes.b100);
        rest -= bankNote100 * 100;
        bankNotes.b100 -= bankNote100;
    }

    if (clipping == 0 || clipping == 50) {
        // Combien de billets de 50 dans 89 ?
        bankNote50 = Math.min(Math.floor(rest / 50), bankNotes.b50);
        rest -= bankNote50 * 50;
        bankNotes.b50 -= bankNote50;
    }

    if (clipping == 0 || clipping == 20) {
        // Combien de billets de 20 dans 39 ?
        bankNote20 = Math.min(Math.floor(rest / 20), bankNotes.b20);
        rest -= bankNote20 * 20;
        bankNotes.b20 -= bankNote20;
    }

    if (clipping == 0 || clipping == 10) {
        // Combien de billets de 10 dans 19 ?
        bankNote10 = Math.min(Math.floor(rest / 10), bankNotes.b10);
        rest -= bankNote10 * 10;
        bankNotes.b10 -= bankNote10;
    }

    if (clipping == 0 || clipping == 5) {
        // Combien de billets de 5 dans 9 ?
        bankNote5 = Math.min(Math.floor(rest / 5), bankNotes.b5);
        rest -= bankNote5 * 5;
        bankNotes.b5 -= bankNote5;
    }

    if (clipping == 0 || clipping == 2) {
        // Combien de pièces de 2 dans 4 ?
        bankNote2 = Math.min(Math.floor(rest / 2), bankNotes.b2);
        rest -= bankNote2 * 2;
        bankNotes.b2 -= bankNote2;
    }

    if (clipping == 0 || clipping == 1) {
        // Combien de pièces de 1 dans 0 ?
        bankNote1 = Math.min(Math.floor(rest / 1), bankNotes.b1);
        rest -= bankNote1 * 1;
        bankNotes.b1 -= bankNote1;
    }

    // S'il a choisit des coupures de 500 et qu'il veut 520, il reste 20
    if (rest > 0) {
        if (bankNote500 + Math.floor(rest / 500) <= bankNotes.b500) {
            bankNote500 += Math.floor(rest / 500);
            rest -= bankNote500 * 500;
            bankNotes.b500 -= bankNote500;
        }

        if (bankNote200 + Math.floor(rest / 200) <= bankNotes.b200) {
            bankNote200 += Math.floor(rest / 200);
            rest -= bankNote200 * 200;
            bankNotes.b200 -= bankNote200;
        }

        if (bankNote100 + Math.floor(rest / 100) <= bankNotes.b100) {
            bankNote100 += Math.floor(rest / 100);
            rest -= bankNote100 * 100;
            bankNotes.b100 -= bankNote100;
        }

        if (bankNote50 + Math.floor(rest / 50) <= bankNotes.b50) {
            bankNote50 += Math.floor(rest / 50);
            rest -= bankNote50 * 50;
            bankNotes.b50 -= bankNote50;
        }

        if (bankNote20 + Math.floor(rest / 20) <= bankNotes.b20) {
            bankNote20 += Math.floor(rest / 20);
            rest -= bankNote20 * 20;
            bankNotes.b20 -= bankNote20;
        }

        if (bankNote10 + Math.floor(rest / 10) <= bankNotes.b10) {
            bankNote10 += Math.floor(rest / 10);
            rest -= bankNote10 * 10;
            bankNotes.b10 -= bankNote10;
        }

        if (bankNote5 + Math.floor(rest / 5) <= bankNotes.b5) {
            bankNote5 += Math.floor(rest / 5);
            rest -= bankNote5 * 5;
            bankNotes.b5 -= bankNote5;
        }

        if (bankNote2 + Math.floor(rest / 2) <= bankNotes.b2) {
            bankNote2 += Math.floor(rest / 2);
            rest -= bankNote2 * 2;
            bankNotes.b2 -= bankNote2;
        }

        if (bankNote1 + Math.floor(rest / 1) <= bankNotes.b1) {
            bankNote1 += Math.floor(rest / 1);
            rest -= bankNote1 * 1;
            bankNotes.b1 -= bankNote1;
        }
    }

    // On veut retirer 2876 sur 3079, on doit partir dans l'autre sens...
    if (rest > 0) {
        bankNote1 += Math.min(Math.floor(rest / 1), bankNotes.b1); // Si 2876 aveec 9 pièces de 1, on prend bien 9 pièces...
        rest -= bankNote1 * 1; // On ne peut plus faire le modulo car on part dans l'autre sens...
        bankNotes.b1 -= bankNote1;

        bankNote2 += Math.min(Math.floor(rest / 2), bankNotes.b2);
        rest -= bankNote2 * 2;
        bankNotes.b2 -= bankNote2;

        bankNote5 += Math.min(Math.floor(rest / 5), bankNotes.b5);
        rest -= bankNote5 * 5;
        bankNotes.b5 -= bankNote5;

        bankNote10 += Math.min(Math.floor(rest / 10), bankNotes.b10);
        rest -= bankNote10 * 10;
        bankNotes.b10 -= bankNote10;

        bankNote20 += Math.min(Math.floor(rest / 20), bankNotes.b20);
        rest -= bankNote20 * 20;
        bankNotes.b20 -= bankNote20;

        bankNote50 += Math.min(Math.floor(rest / 50), bankNotes.b50);
        rest -= bankNote50 * 50;
        bankNotes.b50 -= bankNote50;

        bankNote100 += Math.min(Math.floor(rest / 100), bankNotes.b100);
        rest -= bankNote100 * 100;
        bankNotes.b100 -= bankNote100;

        bankNote200 += Math.min(Math.floor(rest / 200), bankNotes.b200);
        rest -= bankNote200 * 200;
        bankNotes.b200 -= bankNote200;

        bankNote500 += Math.min(Math.floor(rest / 500), bankNotes.b500);
        rest -= bankNote500 * 500;
        bankNotes.b500 -= bankNote500;
    }

    var result = bankNote500 + " billets de 500\n";
    result += bankNote200 + " billets de 200\n";
    result += bankNote100 + " billets de 100\n";
    result += bankNote50 + " billets de 50\n";
    result += bankNote20 + " billets de 20\n";
    result += bankNote10 + " billets de 10\n";
    result += bankNote5 + " pièces de 5\n";
    result += bankNote2 + " pièces de 2\n";
    result += bankNote1 + " pièces de 1\n";

    alert(result);
}

function fill() {
    bankNotes = {
        b500: bankNotes.b500 + parseInt(prompt('Combien de billets de 500 ?')),
        b200: bankNotes.b200 + parseInt(prompt('Combien de billets de 200 ?')),
        b100: bankNotes.b100 + parseInt(prompt('Combien de billets de 100 ?')),
        b50: bankNotes.b50 + parseInt(prompt('Combien de billets de 50 ?')),
        b20: bankNotes.b20 + parseInt(prompt('Combien de billets de 20 ?')),
        b10: bankNotes.b10 + parseInt(prompt('Combien de billets de 10 ?')),
        b5: bankNotes.b5 + parseInt(prompt('Combien de pièces de 5 ?')),
        b2: bankNotes.b2 + parseInt(prompt('Combien de pièces de 2 ?')),
        b1: bankNotes.b1 + parseInt(prompt('Combien de pièces de 1 ?')),
    };
}
