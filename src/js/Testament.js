let Testament = class {
    constructor(firstName,lastName,email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}

let Vermoegen = class {
    constructor(value,description) {
        this.value = value;
        this.description = description;
    }
}

let testament = new Testament('Peter','Mayer','Peter.Mayer@gmx.de');

function loadTestamentData() {
    //Persönliche Daten
    document.getElementById("vorname").innerHTML = testament.firstName;
    document.getElementById("nachname").innerHTML = testament.lastName;
    document.getElementById("email").innerHTML = testament.email;

    //Vermögen
    

    //Verbindlichkeiten

    console.log("loaded");
}
