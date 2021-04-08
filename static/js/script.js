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
    html2canvas(screenshotTarget).then((canvas) => {
        const base64image = canvas.toDataURL("image/png");
        window.location.href = base64image;
    });
}

function extend() {
    html2canvas(document.body, {
        onrendered: function(canvas) {
            var img = canvas.toDataURL()
            $.post("save_screenshot.php", { data: img }, function(file) {
                window.location.href = "save_screenshot.php?file=" + file
            });
        }
    });
}