function abrirMenu() {
    var x = document.getElementById("myTopNav");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}

var images = []

function forward() {
    document.getElementById("paragrafo").innerHTML = "Paragraph Changed";
}

function backward() {
    document.getElementById("paragrafo").innerHTML = "Paragraph back";   
}