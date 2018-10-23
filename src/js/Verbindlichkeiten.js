
let boxList = document.getElementsByClassName('amount');
let boxCounter = 1;
let boxReset = document.createElement('div');

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
    let boxnummer=document.getElementById(boxReset.id);
    boxnummer.removeChild(boxnummer.appendChild);   
}

function addBox() {
    boxCounter++;

    let input = document.createElement('div');
    input.class = 'row';
    input.id = 'box' + boxCounter;
    document.getElementById('area').appendChild(input);

    let box = '<div class="row">' +
        '<div class="col" id="sidebar"></div>' +
        '<div class="col form-group inputbox">' +
        '<input id="description" type="text" class="form-control textfield" placeholder="Beschreibung" value="">' +
        '<input id="amount" type="number" class="form-control  textfield amount" placeholder="Betrag" value="" min="0" oninput="calculateSum()">' +
        '</div>' +
        '<div class="col inputbox" id="deletebutton">' +
        '<img src="../ressources/img/Icons/minusIcon.png" width="100%" onclick="removeBox()">' +
        '</div>' +
        '<div class="col" id="sidebar"></div>' +
        '</div>' +
        '<div id="boxes"></div>' +
        '</div>';

    document.getElementById('box' + boxCounter).innerHTML = box;

    boxReset.id=input.id
}