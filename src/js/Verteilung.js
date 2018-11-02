
let jaButton = document.getElementById("ja");
let neinButton = document.getElementById("nein");


eheverteilen();
function eheverteilen() {
    if (jaButton.checked) {
        let eheg = sessionStorage.getItem('ehePartner');

        let container = document.getElementById("platzehe");
        container.innerHTML = "";
        if (eheg == null) {
            container.innerHTML = "<p>kein Ehegatte vorhanden!</p>";
        } else {
            container.innerHTML += '<label >' + eheg + '<input class="form-control inputkind" type="number" id="eheg" name="kindverteilen" oninput="count()" />%' +
                '</label><br />'
        }
    }

}



let ja2Button = document.getElementById("ja2");
let nein2Button = document.getElementById("nein2");

let kind = document.getElementById("kind");


kindverteilen();
function kindverteilen() {
    if (ja2Button.checked) {
        let anzahl = sessionStorage.getItem('anzahlderkinder');

        let container = document.getElementById("platzkinder");


        container.innerHTML = "";
        if (anzahl == null) {
            container.innerHTML = "<p>keine Kinder vorhanden!</p>";
        } else {
            for (i = 1; i <= anzahl; i++) {
                let helper = "kind" + i;

                container.innerHTML += '<label>' + sessionStorage.getItem(helper) + '<input class="form-control inputkind" type="number"  id="kind' + i + '" name="kindverteilen" oninput="count()" />% </label><br />'; //new
            }
        }
    }

}

let javButton = document.getElementById("jav");
let neinvButton = document.getElementById("neinv");

let indiv = document.getElementById("indivVert");



verteilen();
function verteilen() {
    if (neinvButton.checked) {
        indiv.style.display = "block";
    }
    else {
        indiv.style.display = "none";
    }
}

function count() {
    let boxList = document.getElementsByName('kindverteilen');

    let result = 0;

    for (let index = 0; boxList.length > index; index++) {
        let boxValue = parseInt(boxList[index].value) || 0;
        result = result + boxValue;
    }

    document.getElementById('result').innerHTML = result;
}

function ueberpruefung() {

    let ehe = document.getElementById('eheg');
    let counter = document.getElementById('result');
    let anzahlKinder = sessionStorage.getItem('anzahlderkinder');
    sessionStorage.removeItem('Anteil')
    if (javButton.checked == false && neinvButton.checked == false) {
        window.alert("Bitte treffen Sie eine Auswahl");
    } else {
        if (neinvButton.checked) {
            if ((ja2Button.checked == false && nein2Button.checked == false) || (jaButton.checked == false && neinButton.checked == false)) {
                window.alert("Bitte treffen Sie für Ihren Ehepartner und für ihre Kinder eine Auswahl");
            } else {
                if (counter.innerHTML != 100) {
                    window.alert("Bitte überprüfen Sie die Verteilung! Es müssen 100% verteilt werden.")
                } else {
                    if (jaButton.checked) {

                        sessionStorage.AnteilEhePartner = ehe.value;
                    }
                    if (ja2Button.checked) {
                        for (var i = 1; i <= anzahlKinder; i++) {
                            let helper = 'AnteilKind' + i;
                            sessionStorage.setItem(helper, document.getElementById('kind' + i).value);
                        }
                    }
                    self.location.href = "../html/Zusammenfassung.html"
                }
            }
        } else {
            sessionStorage.AnteilEhePartner = 50;


            var anteilKind = 50 / anzahlKinder;
            for (var i = 0; i <= anzahlKinder; i++) {
                let helper = 'AnteilKind' + i;
                sessionStorage.setItem(helper, anteilKind);
                self.location.href = "../html/Zusammenfassung.html";

            }
        }
    }
}
