let boxCounter = 1;

function calculateSum() {
    let boxList = document.getElementsByClassName('amount');

    let result = 0;

    for (let index = 0; boxList.length > index; index++) {
        let boxValue = parseInt(boxList[index].value) || 0;
        result = result + boxValue;
    }

    document.getElementById('result').innerHTML = result;
}



function addBox() {
    boxCounter++;

    let input = document.createElement('div');
    input.class = 'row';
    input.id = 'box' + boxCounter;
    document.getElementById('area').appendChild(input);

    let box = '<div class="row">' +
        '<div class="col-2"></div>' +
        '<div class="col form-group inputbox">' +
        '<input id="description" type="text" class="form-control textfield" placeholder="Beschreibung" value="">' +
        '<input id="amount" type="number" class="form-control  textfield amount" placeholder="Betrag" value="" min="0" oninput="calculateSum()">' +
        '</div>' +
        '<div class="col inputbox deleteButton">' +
        '<img src="../ressources/img/Icons/minusIcon.png" id="' + boxCounter + '" width="100%" onclick="removeBox()">' +
        '</div>' +
        '<div class="col-2"></div>' +
        '</div>' +
        '</div>';

    document.getElementById('box' + boxCounter).innerHTML = box;
}

function removeBox() {
    if (event.target.id == "") {
        return;
    }

    let boxToDel = document.getElementById('box' + event.target.id);
    let parent = boxToDel.parentNode;
    parent.removeChild(boxToDel);
}

function ueberpruefung() {
    //Später abspeichern und check
}