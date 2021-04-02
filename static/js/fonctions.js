var id = 0;
document.getElementById("btnUp").disabled = true;
document.getElementById("btnUp").style.backgroundColor = 'white';
document.getElementById("btnLeft").disabled = true;
document.getElementById("btnLeft").style.backgroundColor = 'white';
document.getElementById("btnDown").disabled = true;
document.getElementById("btnDown").style.backgroundColor = 'white';
document.getElementById("btnRight").disabled = true;
document.getElementById("btnRight").style.backgroundColor = 'white';

function zoomOut() {
    id = 0;
    document.getElementById("imageICI").src = "static/images/r500_0.gif";
    document.getElementById("btnUp").disabled = true;
    document.getElementById("btnUp").style.backgroundColor = 'white';
    document.getElementById("btnLeft").disabled = true;
    document.getElementById("btnLeft").style.backgroundColor = 'white';
    document.getElementById("btnDown").disabled = true;
    document.getElementById("btnDown").style.backgroundColor = 'white';
    document.getElementById("btnRight").disabled = true;
    document.getElementById("btnRight").style.backgroundColor = 'white';
    document.getElementById("imageMap").setAttribute("coords", "225,120,350,250");
}

function zoomIn() {
    id = 22;
    document.getElementById("imageICI").src = "static/images/r500_5.gif";
    document.getElementById("btnUp").disabled = false;
    document.getElementById("btnUp").style.backgroundColor = '#c9c9c9';
    document.getElementById("btnLeft").disabled = false;
    document.getElementById("btnLeft").style.backgroundColor = '#c9c9c9';
    document.getElementById("btnDown").disabled = false;
    document.getElementById("btnDown").style.backgroundColor = '#c9c9c9';
    document.getElementById("btnRight").disabled = false;
    document.getElementById("btnRight").style.backgroundColor = '#c9c9c9';
    document.getElementById("imageMap").href = "#";
    document.getElementById("imageMap").setAttribute("coords", "0,0,0,0");
}


function getInfo() {

    var browser = (function(agent) {
        switch (true) {
            case agent.indexOf("edge") > -1:
                return "MS Edge (EdgeHtml)";
            case agent.indexOf("edg") > -1:
                return "MS Edge";
            case agent.indexOf("opr") > -1 && !!window.opr:
                return "Opera";
            case agent.indexOf("chrome") > -1 && !!window.chrome:
                return "Chrome";
            case agent.indexOf("trident") > -1:
                return "Internet Explorer";
            case agent.indexOf("firefox") > -1:
                return "Firefox";
            case agent.indexOf("safari") > -1:
                return "Safari";
            default:
                return "l'espace";
        }
    })(window.navigator.userAgent.toLowerCase());



    var operatingSystem = "Not known";
    if (navigator.appVersion.indexOf("Win") != -1) operatingSystem = "Windows OS";
    if (navigator.appVersion.indexOf("Mac") != -1) operatingSystem = "MacOS";
    if (navigator.appVersion.indexOf("X11") != -1) operatingSystem = "UNIX OS";
    if (navigator.appVersion.indexOf("Linux") != -1) operatingSystem = "Linux OS";

    if (navigator.mimeTypes.length >= 3) {
        alert("Bienvenue à toi, utilisateur de " + browser +
            "\n----------------------------------------" +
            "\nSurnom: " + navigator.appCodeName +
            " \nSystème d'exploitation: " + operatingSystem +
            "\nNombre de MIME: " + navigator.mimeTypes.length +

            "\n\nType: " + navigator.mimeTypes[0].type +
            "\nSuffixe: " + navigator.mimeTypes[0].suffixes +
            "\nDescription: " + navigator.mimeTypes[0].description +

            "\n\nType: " + navigator.mimeTypes[1].type +
            "\nSuffixe: " + navigator.mimeTypes[1].suffixes +
            "\nDescription: " + navigator.mimeTypes[1].description +

            "\n\nType: " + navigator.mimeTypes[2].type +
            "\nSuffixe: " + navigator.mimeTypes[2].suffixes +
            "\nDescription: " + navigator.mimeTypes[2].description);
    } else {
        alert("Bienvenue à toi, utilisateur de " + navigator.vendor +
            "\n----------------------------------------" +
            "\nSurnom: " + navigator.appCodeName +
            " \nSystème d'exploitation: " + operatingSystem +
            "\nNombre de MIME: " + navigator.mimeTypes.length);
    }
}



function viewURL() {
    if (id !== 0) {
        var url = document.getElementById("imageICI").src
        alert(url)
    }
}


function showImage(id) {
    switch (id) {
        case 11:
            document.getElementById("imageICI").src = "static/images/r500_1.gif";
            document.getElementById("btnUp").disabled = true;
            document.getElementById("btnUp").style.backgroundColor = 'white';
            document.getElementById("btnLeft").disabled = true;
            document.getElementById("btnLeft").style.backgroundColor = 'white';
            break;

        case 12:
            document.getElementById("imageICI").src = "static/images/r500_2.gif";
            document.getElementById("btnUp").disabled = true;
            document.getElementById("btnUp").style.backgroundColor = 'white';
            break;

        case 13:
            document.getElementById("imageICI").src = "static/images/r500_3.gif";
            document.getElementById("btnUp").disabled = true;
            document.getElementById("btnUp").style.backgroundColor = 'white';
            document.getElementById("btnRight").disabled = true;
            document.getElementById("btnRight").style.backgroundColor = 'white';
            break;

        case 21:
            document.getElementById("imageICI").src = "static/images/r500_4.gif";
            document.getElementById("btnLeft").disabled = true;
            document.getElementById("btnLeft").style.backgroundColor = 'white';
            break;

        case 22:
            document.getElementById("imageICI").src = "static/images/r500_5.gif";
            break;

        case 23:
            document.getElementById("imageICI").src = "static/images/r500_6.gif";
            document.getElementById("btnRight").disabled = true;
            document.getElementById("btnRight").style.backgroundColor = 'white';
            break;

        case 31:
            document.getElementById("imageICI").src = "static/images/r500_7.gif";
            document.getElementById("btnDown").disabled = true;
            document.getElementById("btnDown").style.backgroundColor = 'white';
            document.getElementById("btnLeft").disabled = true;
            document.getElementById("btnLeft").style.backgroundColor = 'white';
            break;

        case 32:
            document.getElementById("imageICI").src = "static/images/r500_8.gif";
            document.getElementById("btnDown").disabled = true;
            document.getElementById("btnDown").style.backgroundColor = 'white';
            break;

        case 33:
            document.getElementById("imageICI").src = "static/images/r500_9.gif";
            document.getElementById("btnDown").disabled = true;
            document.getElementById("btnDown").style.backgroundColor = 'white';
            document.getElementById("btnRight").disabled = true;
            document.getElementById("btnRight").style.backgroundColor = 'white';
            break;

        default:
            document.getElementById("imageICI").src = "static/images/r500_0.gif";
    };
}


function left() {
    document.getElementById("btnUp").disabled = false;
    document.getElementById("btnUp").style.backgroundColor = '#c9c9c9';
    document.getElementById("btnLeft").disabled = false;
    document.getElementById("btnLeft").style.backgroundColor = '#c9c9c9';
    document.getElementById("btnDown").disabled = false;
    document.getElementById("btnDown").style.backgroundColor = '#c9c9c9';
    document.getElementById("btnRight").disabled = false;
    document.getElementById("btnRight").style.backgroundColor = '#c9c9c9';
    id = id - 1;
    console.info(id)
    showImage(id);
}

function up() {
    document.getElementById("btnUp").disabled = false;
    document.getElementById("btnUp").style.backgroundColor = '#c9c9c9';
    document.getElementById("btnLeft").disabled = false;
    document.getElementById("btnLeft").style.backgroundColor = '#c9c9c9';
    document.getElementById("btnDown").disabled = false;
    document.getElementById("btnDown").style.backgroundColor = '#c9c9c9';
    document.getElementById("btnRight").disabled = false;
    document.getElementById("btnRight").style.backgroundColor = '#c9c9c9';
    id = id - 10;
    console.info(id)
    showImage(id);
}

function down() {
    document.getElementById("btnUp").disabled = false;
    document.getElementById("btnUp").style.backgroundColor = '#c9c9c9';
    document.getElementById("btnLeft").disabled = false;
    document.getElementById("btnLeft").style.backgroundColor = '#c9c9c9';
    document.getElementById("btnDown").disabled = false;
    document.getElementById("btnDown").style.backgroundColor = '#c9c9c9';
    document.getElementById("btnRight").disabled = false;
    document.getElementById("btnRight").style.backgroundColor = '#c9c9c9';
    id = id + 10;
    console.info(id)
    showImage(id)
}

function right() {
    document.getElementById("btnUp").disabled = false;
    document.getElementById("btnUp").style.backgroundColor = '#c9c9c9';
    document.getElementById("btnLeft").disabled = false;
    document.getElementById("btnLeft").style.backgroundColor = '#c9c9c9';
    document.getElementById("btnDown").disabled = false;
    document.getElementById("btnDown").style.backgroundColor = '#c9c9c9';
    document.getElementById("btnRight").disabled = false;
    document.getElementById("btnRight").style.backgroundColor = '#c9c9c9';
    id = id + 1;
    console.info(id)
    showImage(id)
}

//======= Fenetre Ajouter Info ===========
function openInfo() {
    window.open('Info.html', 'MyWindow', 'width=400,height=480');
}

function byeBye() {
    window.open('', '_self').close();
}

//======= Fenetre Ajouter Info ===========
function addInfo() {
    window.open('addInfo.html', 'MyWindow', 'width=400,height=480');
}

function checkForm() {
    var regex_number = /[0-9]/;
    var regex_symbols = /[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/;
    var regex_tab = "\t";
    var regex_space = " ";
    var name = document.getElementById("nom").value;
    if (name.match(regex_symbols)) {
        alert("Erreur caractere dans le champs nom");
    } else if (name.match(regex_number)) {
        alert("Erreur chiffre dans le champs nom");
    } else if (name.match(regex_space)) {
        alert("Erreur espace dans le champs nom");
    } else if (name.match(regex_tab)) {
        alert("Erreur tablature dans le champs nom");
    } else if (name.length > 0) {
        var affichage;
        if (document.getElementById("Prive").checked) {
            affichage = "prive";
        } else {
            affichage = "public";
        }
        alert("Nom: " + document.getElementById("nom").value +
            "\nTexte: " + document.getElementById("texte").value +
            "\nAffichage: " + affichage)
        window.open('', '_self').close();
    }
}

function clearAllData() {
    document.getElementById("nom").value = "";
    document.getElementById("texte").value = "";
    document.getElementById("texte").placeholder = "Voici ma description...";
    document.getElementById("Public").checked = false;
    document.getElementById("Prive").checked = false;
}