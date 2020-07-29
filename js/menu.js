function abrirMenu() {
    var x = document.getElementById("myTopNav");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}

window.location = "#wall-1";

function forward() {}