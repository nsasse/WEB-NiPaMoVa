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
        '<input id="description' + boxCounter + '" type="text" name="description" class="form-control textfield description" placeholder="Beschreibung" value="">' +
        '<input id="amount' + boxCounter + '" type="number" class="form-control  textfield amount" placeholder="Betrag" value="" min="0" oninput="calculateSum()">' +
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
    calculateSum();
}

function ueberpruefung() {
    let amountList = document.getElementsByClassName('amount');
    
    for (let index = 0; amountList.length > index; index++) {
        let amountValue = parseInt(amountList[index].value);
        if (isNaN(amountValue)) {
            window.alert("Bitte füllen Sie jeden Betrag aus!");
            return false;
        }
        let helper = 'description' + (index + 1);
        let descValue = document.getElementById(helper).value;
        if (descValue == "") {
            window.alert("Bitte füllen Sie alle Beschreibungen aus!");
            return false;
        }
    }
    for (var i = 1; i <= amountList.length; i++) {
        let helper1 = "verbindlichkeitDescription" + i;
        let helper2 = "verbindlichkeitAmount" + i;
        sessionStorage.setItem(helper1, document.getElementById("description" + i).value);
        sessionStorage.setItem(helper2, document.getElementById("amount" + i).value);
        
    }
    self.location.href = "../html/Verteilung.html";
}
