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

        container.innerHTML += '<input id="namedesKindes" type="text" class="form-control textfield" placeholder="Name des Kindes" value="">';



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
console.log(vorname1 + nachname1 + geburtstag1 + email1)
    if (vorname1 == "" || nachname1 == "" || geburtstag1 == "" || email1 == "")

    window.alert("Bitte überprüfen Sie Ihre Eingaben!" );   

    else {

        self.location.href = "../html/Vermoegen.html";
    }

}
