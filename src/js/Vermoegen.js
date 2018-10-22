
let boxList = document.getElementsByClassName('amount');

function calculateSum() {

    let result = 0;
    for (let index = 0; boxList.length > index; index++) {
        let boxValue = parseInt(boxList[index].value);
        if (boxValue === "undefined") {
            //auf undefined prüfen funktioniert nicht
        }
        result = result + boxValue;
    }
    document.getElementById('result').innerHTML = result;
}

function removeBox() {
    /*Box entfernen*/
}

function addBox() {
    /*ID vergabe muss noch ergänzt werden*/
    let box = '<div class="row">' +
        '<div class="col" id="sidebar"></div>' +
        '<div class="col form-group inputbox">' +
        '<input id="description" type="text" class="form-control textfield" placeholder="Beschreibung" value="">' +
        '<input id="amount" type="number" class="form-control  textfield amount" placeholder="Betrag" value="" min="0" onfocusout="calculateSum()">' +
        '</div>' +
        '<div class="col inputbox" id="deletebutton">' +
        '<img src="../ressources/img/Icons/minusIcon.png" width="100%">' +
        '</div>' +
        '<div class="col" id="sidebar"></div>' +
        '</div>' +
        '<div id="boxes"></div>' +
        '</div>';

        document.getElementById('boxes').innerHTML = box;
}