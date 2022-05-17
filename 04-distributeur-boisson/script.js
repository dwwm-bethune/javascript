var distributor = {
    money: 0,
    caf: 10,
    the: 10,
    cho: 10,
    sugar: 10,
    milk: 10,
    usage: 0,
    state: true,
};

function choose() {
    do {
        var choice = prompt('Que voulez-vous boire ? Café (caf), thé (the) ou chocolat (cho) ?').toLowerCase();

        // On vérifie si la machine est en panne
        if (!distributor.state) {
            alert('La machine est en panne...');
            choice = '';
        }

        // On vérifie si la boisson est en stock
        if (choice == 'caf' && distributor.caf <= 0 || choice == 'the' && distributor.the <= 0 || choice == 'cho' && distributor.cho <= 0) {
            alert('Il n\'y a plus cette boisson...');
            choice = '';
        }
    } while (choice != 'caf' && choice != 'the' && choice != 'cho');

    var sugar = prompt('Quelle dose de sucre souhaitez-vous ? 0, 1 ou 2');
    // Permet de s'assurer que le sucre est entre 0 et 2
    if (sugar != 0 && sugar != 1 && sugar != 2) {
        sugar = 0;
    }

    var milk = prompt('Souhaitez-vous du lait ? 0 ou 1');
    if (milk != 1) {
        milk = 0;
    }

    var price = 40;
    if (choice == 'cho') {
        price = 60;
    }
    price = price + sugar * 5 + milk * 15;

    var result = 'Votre ';

    switch (choice) {
        case 'caf':
            result += 'café'; // Votre café
            distributor.caf--; // Réduire les doses du distributeur
        break;
        case 'the':
            result += 'thé'; // Votre thé
            distributor.the--; // Réduire les doses du distributeur
        break;
        case 'cho':
            result += 'chocolat'; // Votre chocolat
            distributor.cho--; // Réduire les doses du distributeur
        break;
    }

    if (sugar == 0) {
        result += ' sans sucre'; // Votre café sans sucre
    } else if (sugar == 1) {
        result += ' sucré'; // Votre café sucré
    } else if (sugar == 2) {
        result += ' très sucré'; // Votre café très sucré
    }

    result += (milk == 1) ? ' avec lait' : ' sans lait'; // Votre café très sucré avec lait OU BIEN Votre café très sucré sans lait
    result += ' est prêt.'; // Votre café très sucré avec lait est prêt.

    // Ajoute l'argent dans le distributeur
    distributor.money += price;

    // Réduire les doses du distributeur
    distributor.sugar -= sugar;
    distributor.milk -= milk;

    // Panne de la machine
    distributor.usage++;
    var breakdown = Math.random() > 0.5;
    
    if (distributor.usage >= 1 && breakdown || distributor.usage >= 2) {
        distributor.state = false;
        distributor.usage = 0;
    }

    alert('Vous devez payer ' + price + ' centimes. ' + result);
}

function showBank() {
    alert('Il y a ' + (distributor.money / 100) + ' dans la caisse.');
}

function fill() {
    do {
        var choice = prompt('Que voulez-vous ajouter ? Café (caf), thé (the), chocolat (cho), sucre (sugar), lait (milk) ?').toLowerCase();
    } while (choice != 'caf' && choice != 'the' && choice != 'cho' && choice != 'sugar' && choice != 'milk');

    var quantity = prompt('Quelle quantité ? Un entier');
    // Permet de s'assurer que la quantité est un entier
    quantity = parseInt(quantity) || 0;

    switch (choice) {
        case 'caf':
            distributor.caf += quantity;
        break;
        case 'the':
            distributor.the += quantity;
        break;
        case 'cho':
            distributor.cho += quantity;
        break;
        case 'sugar':
            distributor.sugar += quantity;
        break;
        case 'milk':
            distributor.milk += quantity;
        break;
    }
}

function repair() {
    if (!distributor.state) {
        distributor.state = true;
        alert('La machine est réparée');
    } else {
        alert('La machine est OK');
    }
}
