
function submit() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    //In Datenbank schreiben oder E-Mail an uns versenden

    console.log(name + email + message)
    if (name == "" || email == "" || message == "") {
        window.alert("Bitte überprüfen Sie Ihre Eingaben!");
    }
    else {
        window.alert("Vielen Dank für Ihre Nachricht. Wir melden uns in kürze.");
    }
}