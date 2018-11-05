let Testament = class {
    constructor(anrede, firstName, lastName, birthdate, email, personen, vermoegen, verbindlichkeiten, titel, anteile) {
        this.anrede = anrede;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthdate = birthdate;
        this.email = email;
        this.personen = personen;
        this.vermoegen = vermoegen;
        this.verbindlichkeiten = verbindlichkeiten;
        this.titel = titel;
        this.anteile = anteile;
    }
}

let Person = class {
    constructor(typ, name) {
        this.typ = typ;
        this.name = name;
    }

    printInformation(area, count) {
        let input = document.createElement('div');
        input.class = 'row';
        input.id = area + 'row' + count;
        document.getElementById(area).appendChild(input);


        let html =
            '<div class="row">' +
            '<div class="col-2" id="typ">' + this.typ + ':</div>' +
            '<div class="col-6" id="name">' + this.name + '</div>' +
            '</div>';

        document.getElementById(area + 'row' + count).innerHTML = html;
    }
}

let Anteil = class {
    constructor(desc, amount) {
        this.desc = desc;
        this.amount = amount;
    }
}

let Wertinformation = class {
    constructor(description, value) {
        this.description = description;
        this.value = value;
    }

    printDescription(area, count) {
        let input = document.createElement('div');
        input.class = 'row';
        input.id = area + 'row' + count;
        document.getElementById(area).appendChild(input);


        let html =
            '<div class="row">' +
            '<div class="col-1" id="num">' + count + '.</div>' +
            '<div class="col-6" id="value">' + this.description + '</div>' +
            '<div class="col-1" id="desc">' + this.value + '€</div>' +
            '</div>';

        document.getElementById(area + 'row' + count).innerHTML = html;
    }

}

let personen = []
let vermoegen = []
let verbindlichkeiten = []
let anteile = []

function loadArrayData() {
    //Personen
    let ehePartner = sessionStorage.ehePartner;
    if (ehePartner != null) {
        personen.push(new Person('Ehepartner', ehePartner))
    }
    for (i = 1; i <= 100; i++) {
        let kind = sessionStorage.getItem("kind" + i);

        if (kind == null) {
            break;
        }
        personen.push(new Person('Kind', kind));
    };

    //Vermögen
    for (i = 1; i <= sessionStorage.vermoegenAnzahl; i++) {
        let vermoegenDesc = sessionStorage.getItem("vermoegenDescription" + i);
        let vermoegenAmount = sessionStorage.getItem("vermoegenAmount" + i);

        vermoegen.push(new Wertinformation(vermoegenDesc, vermoegenAmount));
    };

    //Verbindlichkeiten
    for (i = 1; i <= 100; i++) {
        let verbDesc = sessionStorage.getItem("verbindlichkeitDescription" + i);
        let verbAmount = sessionStorage.getItem("verbindlichkeitAmount" + i);

        if (verbDesc == null) {
            break;
        }
        verbindlichkeiten.push(new Wertinformation(verbDesc, verbAmount));
    };

    //Anteile
    let anteil = sessionStorage.AnteilEhePartner;
    if (anteil != null) {
        anteile.push(new Anteil('Anteil des Ehepartners', anteil))
    }
    for (i = 0; i <= 100; i++) {
        let kindAnteil = sessionStorage.getItem("AnteilKind" + i);
        let kindName = sessionStorage.getItem("kind" + (i+1));

        if (kindAnteil == null) {
            break;
        }

        anteile.push(new Anteil(kindName, kindAnteil));
    };

}

let testament = new Testament(sessionStorage.anrede, sessionStorage.vorname, sessionStorage.nachname, sessionStorage.geburtstag,
    sessionStorage.email, personen, vermoegen, verbindlichkeiten, sessionStorage.titel,anteile);

function loadTestamentData() {
    loadArrayData();

    //Persönliche Daten
    document.getElementById("anrede").innerHTML = testament.anrede;
    if (testament.titel != undefined) {
        document.getElementById("titel").innerHTML = testament.titel;
    }
    document.getElementById("vorname").innerHTML = testament.firstName;
    document.getElementById("nachname").innerHTML = testament.lastName;
    document.getElementById("birthdate").innerHTML = testament.birthdate;
    document.getElementById("email").innerHTML = testament.email;

    //Familie
    personen.forEach(function (currentValue, index) {
        currentValue.printInformation("personen", index + 1);
    });


    //Vermögen
    vermoegen.forEach(function (currentValue, index) {
        currentValue.printDescription("vermoegen", index + 1);
    });

    //Verbindlichkeiten
    verbindlichkeiten.forEach(function (currentValue, index) {
        currentValue.printDescription("verbindlichkeiten", index + 1);
    });

}

function writeTestament(testament) {
    firebase.database().ref('testamente/' + Math.floor((Math.random() * 10000) + 1)).set(testament);
}

function nextSite() {
    console.log(testament);
    writeTestament(testament);

    self.location.href = "../html/Abschluss.html";
}
