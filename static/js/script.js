let map;

function over(selected) {
    var selected = selected.id
    document.getElementById(selected).style.backgroundColor = "white";
}

function left(selected) {
    var selected = selected.id
    document.getElementById(selected).style.backgroundColor = "#BBBBBB";
}

function search() {
    var user = prompt("Insert the usernam, you want to search")
        //lastPosition = get last position of user
        //zoom on lastPosiiton
}

function save() {
    var printContent = document.getElementById('text');
    var WinPrint = window.open('', '', 'width=700,height=650');
    WinPrint.document.write(printContent.innerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
}

function extend() {
    window.open("index.html", "_self")
}