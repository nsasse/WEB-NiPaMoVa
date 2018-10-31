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
        '<input id="description' + boxCounter + '" type="text" class="form-control textfield description" placeholder="Beschreibung" value="">' +
        '<input id="amount' + boxCounter+'" type="number" class="form-control  textfield amount" placeholder="Betrag" value="" min="0" oninput="calculateSum()">' +
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
    let forwarding = true;
    let amountList=document.getElementsByClassName('amount');
    let descriptionList = document.querySelectorAll('input[id="description"]');
    if (forwarding) {
        for (let index = 0; amountList.length > index; index++) {
            let amountValue = parseInt(amountList[index].value);
            if (isNaN(amountValue)) {
                window.alert("Bitte füllen Sie jeden Betrag aus!");
                forwarding= false;
            }
        }
    
        for (let index = 0; descriptionList.length > index; index++) {
            let descValue=document.getElementById('description'+index).Beschreibung.value;
            //Überprüfung funktioniert nicht
            if (descValue==null) {
                window.alert("Bitte füllen Sie alle Beschreibungen aus!");
                forwarding=false;
            }
        }
        if(forwarding){
            sessionStorage.vermoegenAnzahl = boxCounter;
    
            for (index = 1; index < boxCounter + 1; index++) {
                let helper1 = "verbindlichkeitDescription" + index;
                let helper2 = "verbindlichkeitAmount" + index;
                sessionStorage.setItem(helper1,document.getElementById("description"+index).value);
                sessionStorage.setItem(helper2, document.getElementById("amount" + index).value);
            }
    
            //self.location.href = "../html/Verteilung.html";
        }
    }
    
}