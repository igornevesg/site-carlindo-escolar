let imagens = document.querySelectorAll('.small_img');
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal_img');
let btClose = document.querySelector('#bt_close');
let srcVal = "";

for (let i = 0; i < imagens.length; i++) {
    imagens[i].addEventListener('click', function() {
        srcVal = imagens[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal_active');
    });

}

btClose.addEventListener('click', function() {
    modal.classList.toggle('modal_active');
})

function abrirMenu() {
    var x = document.getElementById("myTopNav");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}

function myFunction(x) {
    if (x.matches) {
        document.getElementById("myTopNav").style.display = 'block';
    } else {
        document.getElementById("myTopNav").style.display = 'none';
    }
}

var x = window.matchMedia("(min-width: 769px)")
myFunction(x);
x.addListener(myFunction);