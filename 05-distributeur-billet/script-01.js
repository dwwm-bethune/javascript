function withdraw() {
    do {
        var amount = parseInt(prompt('Combien voulez-vous retirer ?')) || 0;
    } while (amount <= 0);

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

    // Combien de billets de 500 dans 1389 ?
    bankNote500 = Math.floor(rest / 500); // 2,778 devient 2
    rest %= 500; // Reste 389

    // Combien de billets de 200 dans 389 ?
    bankNote200 = Math.floor(rest / 200);
    rest %= 200;

    // Combien de billets de 100 dans 189 ?
    bankNote100 = Math.floor(rest / 100);
    rest %= 100;

    // Combien de billets de 50 dans 89 ?
    bankNote50 = Math.floor(rest / 50);
    rest %= 50;

    // Combien de billets de 20 dans 39 ?
    bankNote20 = Math.floor(rest / 20);
    rest %= 20;

    // Combien de billets de 10 dans 19 ?
    bankNote10 = Math.floor(rest / 10);
    rest %= 10;

    // Combien de billets de 5 dans 9 ?
    bankNote5 = Math.floor(rest / 5);
    rest %= 5;

    // Combien de pièces de 2 dans 4 ?
    bankNote2 = Math.floor(rest / 2);
    rest %= 2;

    // Combien de pièces de 1 dans 0 ?
    bankNote1 = Math.floor(rest / 1);
    rest %= 1;

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
