function loadTestaments(suchString) {
    document.getElementById('table').innerHTML="";

    if (suchString == undefined) {
        var ref = firebase.database().ref("testamente");
        var testaments = [];
        ref.once("value")
            .then(function (snapshot) {

                for (i = 0; i <= 10000; i++) {
                    var loadedTestament = snapshot.child(i).val();

                    if (loadedTestament != null) {
                        testaments.push(loadedTestament);
                    }
                }

                loadTable(testaments);
            });
    }
    else {
        var ref = firebase.database().ref("testamente");
        var testaments = [];
        ref.once("value")
            .then(function (snapshot) {

                for (i = 0; i <= 10000; i++) {
                    var loadedTestament = snapshot.child(i).val();

                    if (loadedTestament != null) {

                        if(loadedTestament.firstName.toLowerCase().includes(suchString.toLowerCase()))
                            testaments.push(loadedTestament);
                    }
                }

                loadTable(testaments);
            });
    }
};

function loadTable(testamentArray) {
    for (i = 0; i < testamentArray.length; i++) {
        let input = document.createElement('div');
        input.class = 'row';
        input.id = 'area' + i;
        document.getElementById('table').appendChild(input);

        let gesamtVerm = 0;
        let gesamtVerb = 0;

        for (j = 0; j < testamentArray[i].vermoegen.length; j++) {
            gesamtVerm += testamentArray[i].vermoegen[j].value;
        }

        for (j = 0; j < testamentArray[i].vermoegen.length; j++) {
            gesamtVerb += testamentArray[i].verbindlichkeiten[j].value;
        }

        let row;
        if ((i % 2) == 0) {
            row = '<div class="row testamentRow">' +
                '<div class="col-1" id="firstName">' +
                testamentArray[i].firstName +
                '</div>' +
                '<div class="col-1" id="lastName">' +
                testamentArray[i].lastName +
                '</div>' +
                '<div class="col-2" id="birthday">' +
                testamentArray[i].birthdate +
                '</div>' +
                '<div class="col-2" id="email">' +
                testamentArray[i].email +
                '</div>' +
                '<div class="col-3" id="countVermoegen">' +
                gesamtVerm + ' €' +
                '</div>' +
                '<div class="col-3" id="countVerbindl">' +
                gesamtVerb + ' €' +
                '</div>' +
                '</div>'
        }
        else {
            row = '<div class="row testamentRow" style="background-color:#dedfe0">' +
                '<div class="col-1" id="firstName">' +
                testamentArray[i].firstName +
                '</div>' +
                '<div class="col-1" id="lastName">' +
                testamentArray[i].lastName +
                '</div>' +
                '<div class="col-2" id="birthday">' +
                testamentArray[i].birthdate +
                '</div>' +
                '<div class="col-2" id="email">' +
                testamentArray[i].email +
                '</div>' +
                '<div class="col-3" id="countVermoegen">' +
                gesamtVerm + ' €' +
                '</div>' +
                '<div class="col-3" id="countVerbindl">' +
                gesamtVerb + ' €' +
                '</div>' +
                '</div>'
        }

        document.getElementById('area' + i).innerHTML = row;
    }
};

function search() {
    console.log(document.getElementById('vorname').value);
    loadTestaments(document.getElementById('vorname').value);
}