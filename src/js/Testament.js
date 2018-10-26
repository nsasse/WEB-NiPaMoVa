let Testament = class {
    constructor(anrede,firstName, lastName, email, personen,vermoegen,verbindlichkeiten,titel) {
        this.anrede = anrede;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.personen = personen;
        this.vermoegen = vermoegen;
        this.verbindlichkeiten = verbindlichkeiten;
        this.titel = titel;
    }


}

let Person = class {
    constructor(typ,name) {
        this.typ = typ;
        this.name = name;
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

let vermoegen = [
    new Wertinformation('Geld', 2323),
    new Wertinformation('Sachwerte', 22325)
]

let verbindlichkeiten = [
    new Wertinformation('Schulden Peter',232),
    new Wertinformation('Schulden Klaus',2423)
]

let personen = [
    new Person('Frau','Petra Parker'),
    new Person('Kind','Lustig Lol'),
    new Person('Kind','Paddi Waddi')
]


let testament = new Testament('Herr','Peter', 'Mayer', 'Peter.Mayer@gmx.de', personen,vermoegen, verbindlichkeiten);

function loadTestamentData() {
    //Persönliche Daten
    document.getElementById("anrede").innerHTML = testament.anrede;
    if(testament.titel != undefined) {
        document.getElementById("titel").innerHTML = testament.titel;
    }
    document.getElementById("vorname").innerHTML = testament.firstName;
    document.getElementById("nachname").innerHTML = testament.lastName;
    document.getElementById("email").innerHTML = testament.email;

    //Familie

    //Vermögen
    vermoegen.forEach(function (currentValue, index) {
        currentValue.printDescription("vermoegen", index + 1);
    });

    //Verbindlichkeiten
    verbindlichkeiten.forEach(function (currentValue, index) {
        currentValue.printDescription("verbindlichkeiten", index + 1);
    });

    

    console.log("loaded");
}
