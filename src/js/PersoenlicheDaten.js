let jaButton = document.getElementById("ja");
let neinButton = document.getElementById("nein");

let ehegatt = document.getElementById("namedesehegattin");


heiraten(); 

function heiraten () {

    if (jaButton.checked) {
        ehegatt.style.display = "block";
    }

    else{
        ehegatt.style.display = "none";
    }


}
let ja2Button = document.getElementById("ja2");
let nein2Button = document.getElementById("nein2");

let kind = document.getElementById("anzahlderkinder");

kinder();

function kinder (){

if (ja2Button.checked){
    kind.style.display = "block";
}

else{
    kind.style.display = "none";
}

}

function addFields () {
    let anzahl = document.getElementById("anzahlderkinder").value;

    let container = document.getElementById("container");

    container.innerHTML  = "";
    for (i=1; i<=anzahl; i++) {

    container.innerHTML += '<input id="namedesKindes" type="text" class="form-control textfield" placeholder="Name des Kindes" value="">';

  
    
    }


}

function nullFields () {

    let container = document.getElementById("container");

    container.innerHTML  = "";

    


}