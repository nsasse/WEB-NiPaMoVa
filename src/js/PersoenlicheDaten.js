let jaButton = document.getElementById("ja");
let neinButton = document.getElementById("nein");

let ehegatt = document.getElementById("namedesehegattin");


heiraten();

function heiraten() {
    if (jaButton.checked) {
        ehegatt.style.display = "block";
    }

    else {
        ehegatt.style.display = "none";
    }
}

let ja2Button = document.getElementById("ja2");
let nein2Button = document.getElementById("nein2");

let kind = document.getElementById("anzahlderkinder");

kinder();

function kinder() {
    if (ja2Button.checked) {
        kind.style.display = "block";
    }
    else {
        kind.style.display = "none";
    }
}

function addFields() {
    let anzahl = document.getElementById("anzahlderkinder").value;

    let container = document.getElementById("container");

    container.innerHTML = "";
    for (i = 1; i <= anzahl; i++) {
        container.innerHTML += '<input id="nameDesKindes' + i+ '" type="text" class="form-control textfield namedesKindes" placeholder="Name des Kindes" value="">'; //new
    }
}

function nullFields() {

    let container = document.getElementById("container");

    container.innerHTML = "";
}



function ueberpruefung() {

    let vorname1 = document.getElementById("vorname").value;
    let nachname1 = document.getElementById("nachname").value;
    let geburtstag1 = document.getElementById("geburtsdatum").value;
    let email1 = document.getElementById("e-mail").value;
    let anrede = document.getElementById("anrede").value;
    let titel = document.getElementById("titel").value;
    let ehegattja = document.getElementById("ja").checked;
    let ehegattnein = document.getElementById("nein").checked;
    let kinderja = document.getElementById("ja2").checked;
    let kindernein = document.getElementById("nein2").checked;
    let namedesehegattin = document.getElementById("namedesehegattin").value;
    let kinderzahl = document.getElementById("anzahlderkinder").value;

    console.log(vorname1 + nachname1 + geburtstag1 + email1); /* diehnt der Überprüfung */
    if (vorname1 == "" || nachname1 == "" || geburtstag1 == "" || email1 == ""
        || (!ehegattja && !ehegattnein) || (!kinderja && !kindernein) || anrede == "" || titel == ""
        || (namedesehegattin == "" && ehegattja) || !kindernamepruefung() || (kinderja && kinderzahl == "")) {

        window.alert("Bitte überprüfen Sie Ihre Eingaben!");
    }
    else {
        sessionStorage.vorname = vorname1;
        sessionStorage.nachname = nachname1;
        sessionStorage.geburtstag = geburtstag1;
        sessionStorage.email = email1;
        sessionStorage.anrede = anrede;
        sessionStorage.titel = titel;
        sessionStorage.anzahlderkinder = kinderzahl;

        if (ehegattja) {
            sessionStorage.ehePartner = namedesehegattin;
        }

        for (i = 1; i <= kinderzahl; i++) {
            let helper = "kind" + i;
            sessionStorage.setItem(helper, document.getElementById("nameDesKindes" + i).value);
        }


        self.location.href = "../html/Vermoegen.html";
    }
}

function kindernamepruefung() {

    let kinderzahl = document.getElementById("anzahlderkinder").value;
    let ausgefuellt = true;

    console.log(kinderzahl);

    for (i = 1; i <= kinderzahl; i++) {
        let kindername = document.getElementById("nameDesKindes" + i);
        if (kindername.value == "") {
            ausgefuellt = false;
        }
    }

    return ausgefuellt;
}