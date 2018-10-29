
let amountList = document.getElementsByClassName('amount');
let descriptionList = document.getElementsByClassName('description');
let boxCounter = 1;

function calculateSum() {

    let result = 0;
    for (let index = 0; amountList.length > index; index++) {
        let amountValue = parseInt(amountList[index].value);
        if (amountValue === "undefined") {
            //auf undefined prüfen funktioniert nicht
        }
        result = result + amountValue;
    }
    document.getElementById('result').innerHTML = result;
}

function removeBox() {
    //Boxen entfernen
}

function addBox() {
    /*ID vergabe muss noch ergänzt werden*/
    boxCounter++;

    let input = document.createElement('div');
    input.class = 'row';
    input.id = 'box' + boxCounter;
    document.getElementById('area').appendChild(input);

    let box = '<div id="boxes">' +
        '<div class="row">' +
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
        '</div>' +
        '</div>'

    document.getElementById('box' + boxCounter).innerHTML = box;
}

function submit() {
    let forwarding = true;

    for (let index = 0; amountList.length > index; index++) {
        let amountValue = parseInt(amountList[index].value);
        if (isNaN(amountValue)) {
            forwarding = false;
        }
    }

    for (let index = 0; descriptionList > index; index++) {
        let descriptionValue = descriptionList[index].value;
        //Überprüfung funktioniert nicht
        if (descriptionValue == "") {
            forwarding = false;
        }
    }

    if (forwarding == false) {
        window.alert("Bitte überprüfen Sie Ihre Eingaben!");
    }
    else {
        self.location.href = "../html/Verbindlichkeiten.html";
    }
}
