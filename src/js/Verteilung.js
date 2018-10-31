
let jaButton = document.getElementById("ja");
let neinButton = document.getElementById("nein");

let ehe = document.getElementById("eheg");


eheverteilen();
function eheverteilen(){
    if (jaButton.checked) {
        ehe.style.display = "block";
    }
    else {
        ehe.style.display = "none";
    }

}


let ja2Button = document.getElementById("ja2");
let nein2Button = document.getElementById("nein2");

let kind = document.getElementById("kind");


kindverteilen();
function kindverteilen(){
    if (ja2Button.checked) {
        kind.style.display = "block";
    }
    else {
        kind.style.display = "none";
    }
}

let javButton = document.getElementById("jav");
let neinvButton = document.getElementById("neinv");

let indiv = document.getElementById("indivVert");



verteilen();
function verteilen(){
    if (neinvButton.checked) {
        indiv.style.display = "block";
    }
    else {
        indiv.style.display = "none";
    }
}

function addFields(){
    let anzahl =3 // document.getElementById("anzahlKind").value;

    let container = document.getElementById("platzkinder");

    container.innerHTML = "";
    for (i = 1; i <= anzahl; i++) {
        container.innerHTML += '<label id="kind" onchange="addFields()" onclick="addFields()">Name Kind:  <input class="form-control inputkind" type="text" name="kindverteilen" />% </label><br />'; //new
    }
}

function nullFields() {

    let container = document.getElementById("platzkinder");

    container.innerHTML = "";
}

function ueberpruefung(){

    self.location.href = "../html/Zusammenfassung.html"
}