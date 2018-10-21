
function calculateSum() {
   /* Über alle Boxen iterieren
    let numberOfBoxes = document.childNodes('boxarea');
    let result = document.getElementById('result');
    for (let i = 0; i < numberOfBoxes.length; index++) {
        result += parseInt(document.getElementById('betrag').value); 
    }
    result.innerHTML; */
    let betrag = parseInt(document.getElementById('betrag').value);

    let result = document.getElementById('result');
    result.innerHTML = betrag;
}

let boxCounter = 1;

function removeBox() {
    /*Box entfernen*/
}

function addBox() {
    /*ID vergabe muss noch ergänzt werden*/
    let box = '<div class="row">' +
        '<div class="col" id="sidebar"></div>' +
        '<div class="col form-group inputbox">' +
        '<input id="beschreibung" type="text" class="form-control textfield" placeholder="Beschreibung" value="">' +
        '<input id="betrag" type="number" class="form-control  textfield" placeholder="Betrag" value="" min="0" onfocusout="calculateSum()">' +
        '</div>' +
        '<div class="col inputbox" id="deletebutton">' +
        '<img src="../ressources/img/Icons/minusIcon.png" width="100%">' +
        '</div>' +
        '<div class="col" id="sidebar"></div>' +
        '</div>' +
        '</div>'

    document.getElementById('boxes').innerHTML = box;
}