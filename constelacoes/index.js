//HAMBURGUER FUNFA
let menuHamburguer = document.querySelector(".hamburguer");
let menuContent = document.querySelector(".conteudoMenu");
let menuInfo = document.querySelector(".informacoes");
let infoContent = document.querySelector(".conteudoInformacao");

menuHamburguer.onclick = function() {
    menuHamburguer.classList.toggle("mudar");
    menuContent.classList.toggle("opcoesMenu");
    infoContent.classList.remove("opcoesMenuInfo");
}

menuInfo.onclick = function(e) {
    e.preventDefault();
    infoContent.classList.toggle("opcoesMenuInfo");
}
//--------------------
//MODAL 01 TEST
let modal = document.getElementById('meuModal');
let img = document.getElementById('materias');
let modalImg = document.getElementById("img01");

img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = img01.src;
    span.style.display = "block";
}

let span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}
