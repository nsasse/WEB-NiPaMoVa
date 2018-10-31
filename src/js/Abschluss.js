function ueberpruefung1() {

    let vorname2 = document.getElementById("vornamerechnung").value;
    let nachname2 = document.getElementById("nachnamerechnung").value;
    let straße2 = document.getElementById("straßerechnung").value;
    let ort2 = document.getElementById("ortrechnung").value;
    let hausnummer2 = document.getElementById("hausnummerrechnung").value;
    let plz2 = document.getElementById("plzrechnung").value;

    console.log(vorname2 + nachname2 + straße2 + ort2 + hausnummer2 + plz2); /* diehnt der Überprüfung */
    if (vorname2 == "" || nachname2 == "" || straße2 == "" || ort2 == ""
        || hausnummer2 == "" || plz2 == ""){
        window.alert("Bitte überprüfen Sie Ihre Eingaben!");
    }
    else {

        sessionStorage.vornamerechnung = vorname2;
        sessionStorage.nachnamerechnung = nachname2;
        sessionStorage.geburtstagrechnung = straße2;
        sessionStorage.ortrechnung = ort2;
        sessionStorage.hausnummerrechnung = hausnummer2;
        sessionStorage.plzrechnung = plz2;

        self.location.href = "../html/Vermoegen.html";  /* Link noch ändern */ 
    }
}