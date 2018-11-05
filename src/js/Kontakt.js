
function submit() {

    let salutation = document.getElementById('salutation').value;
    let name = document.getElementById('name').value;
    let firstName = document.getElementById('firstName').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    //Eingabe überprüfen
    if (salutation == "" || name == "" || firstName == "" || email == ""
        || subject == "" || message == "") {

        window.alert("Bitte überprüfen Sie Ihre Eingaben!");
    }
    else {
        //Eingaben Speichern
        sessionStorage.KontaktSalutation = salutation;
        sessionStorage.KontaktName = name;
        sessionStorage.KontaktFirtstName = firstName;
        sessionStorage.KontaktEmail = email;
        sessionStorage.KontaktSubject = subject;
        sessionStorage.KontaktMessage = message;

        window.alert("Vielen Dank für Ihre Nachricht. Wir melden uns in kürze.");
    }
}