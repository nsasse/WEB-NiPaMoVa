
let amountList = document.getElementsByClassName('amount');
let descriptionList = document.getElementsByClassName('description');
let boxCounter = 1;

function calculateSum() {

    let result = 0;
    for (let index = 0; amountList.length > index; index++) {
        let amountValue = parseInt(amountList[index].value);
        if (amountValue === "undefined") {
        }
        result = result + amountValue;
    }
    document.getElementById('result').innerHTML = result;
}

function removeBox(cklicked_id) {
   
    let boxToDel = document.getElementById('box' + cklicked_id);
    let parent = boxToDel.parentNode;
    parent.removeChild(boxToDel);
    calculateSum();
}

function addBox() {
    boxCounter++;

    let input = document.createElement('div');
    input.class = 'row';
    input.id = 'box' + boxCounter;
    document.getElementById('area').appendChild(input);
    let box = '<div class="row rowBottomMargin" id="box' +boxCounter + '">' +
    '<div class="col-2"></div>' +
    '<div class="col-7 colBox">' +
    '<input id="description' +boxCounter +'" type="text" class="form-control textfield description" placeholder="Beschreibung" value="">' +
    '<input id="amount' +boxCounter + '" type="number" name="point" class="form-control textfield amount" step="1" placeholder="Betrag" value="" min="0" oninput="calculateSum()">' +
    '</div>' +
    '<div class="col-1 colBox text-right" id="deletebutton">' +
    '<img src="../ressources/img/Icons/minusIcon.png" id="' +boxCounter +'" height="30vh" onclick="removeBox(this.id)">' +
    '</div>' +
    '<div class="col-2"></div>' +
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
        if (descriptionValue == "" || descriptionValue == null) {
            forwarding = false;
        }
    }

    if (forwarding == false) {
        window.alert("Bitte überprüfen Sie Ihre Eingaben!");
    }
    else {
        sessionStorage.vermoegenAnzahl = boxCounter;

        for (index = 1; index <= boxCounter; index++) {
            let helper1 = 'vermoegenDescription' + index;
            let helper2 = 'vermoegenAmount' + index;
            sessionStorage.setItem(helper1, document.getElementById('description' +index).value);
            sessionStorage.setItem(helper2, document.getElementById('amount' +index).value);
        }

        self.location.href = "../html/Verbindlichkeiten.html";
    }
}

function noSubmit() {
    window.alert("Bitte geben Sie zuerst Ihre Verbindlichkeiten ein!");
}