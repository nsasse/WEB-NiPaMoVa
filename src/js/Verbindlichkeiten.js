
let boxList = document.getElementsByClassName('amount');
let boxCounter=1;
let boxReader= document.getElementById('area');

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



function addBox() { 
    boxCounter++;

    let input = document.createElement('div');
    input.class = 'row';
    input.id = 'box' + boxCounter;
    boxReader.appendChild(input);

    

    let box = '<div id="boxes"> ' + '<div class="row">' +
        '<div class="col" id="sidebar"></div>' +
        '<div class="col form-group inputbox">' +
        '<input id="description" type="text" class="form-control textfield" placeholder="Beschreibung" value="">' +
        '<input id="amount" type="number" class="form-control  textfield amount" placeholder="Betrag" value="" min="0" oninput="calculateSum()" >' +
        '</div>' +
        '<div class="col inputbox" id="deletebutton">' +
        '<img src="../ressources/img/Icons/minusIcon.png" width="100%" onclick="removeBox(this.childNodes.id)">' +
        '</div>' +
        '<div class="col" id="sidebar"></div>' +
        '</div>' +
        '</div>' + '</div>';

    

    input.innerHTML = box;

}

function removeBox(){

    document.getElementById("boxes").onclick=function(){
            this.innerHTML=null;
            this.remove();  
        
    }

    
}