let isEmailOK = false;
let isPwdOK = false;

function verifEmail(tag) {
    console.log(tag.value);
    let pattern = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/i;
    let regex = new RegExp(pattern);
    if (tag.value.match(regex)) {
        console.log("Ca match");
        tag.style.border = "2px solid green"
        isEmailOK = true;
    } else {
        console.log("ca match pas");
        tag.style.border = "2px solid red"
        isEmailOK = false;
    }
}


function verifpwd(tag) {
    console.log(tag.value);
    let pattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/
    let regex = new RegExp(pattern);
    if (tag.value.match(regex)) {
        console.log("ca match");
        tag.style.border = "2px solid green"
        isPwdOK = true;
    } else {
        console.log("ca match pas");
        tag.style.border = "2px solid red"
        isPwdOK = false;
    }
}

function verifCalcul(tag) {
    let btn = document.getElementById('btn-submint')
    if (resultat === parseInt(tag.value) && isEmailOK && isPwdOK) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}

function calcul() {
    let cap = document.getElementById('captcha_calcul');
    let a = getRandomArbitrary(-100, 101);
    let b = getRandomArbitrary(-100, 101);
    let str = `${a} + ${b}`;
    cap.innerHTML = str;
    resultat = eval(str);

}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}