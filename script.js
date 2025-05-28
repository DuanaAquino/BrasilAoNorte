// DROPDOWN MENU

var DropDownMenu = window.document.querySelector(".dropDownMenu .content");

function SlideDown() {
    DropDownMenu.style = "display: inline-block"
}
function SlideUp() {
    DropDownMenu.style = "display: none"
}

//RESTAURANTES

var Boteco = window.document.getElementById("Boteco")
var Rio = window.document.getElementById("Rio")
var BrazilGourmet = window.document.getElementById("BrazilGourmet")
var Mineiros = window.document.getElementById("Mineiros")
var Braziliant = window.document.getElementById("Braziliant")
var restaurantBulletPointLeft = window.document.getElementById("restaurantBulletPointLeft")
var restaurantBulletPointRight = window.document.getElementById("restaurantBulletPointLeft")
var restaurantRightArrow = window.document.getElementById("restaurantRightArrow")
var restaurantLeftArrow = window.document.getElementById("restaurantLeftArrow")

function restaurantScrollRight() {
    Boteco.style = "display: none"
    Braziliant.style = "display: block"
    restaurantBulletPointLeft.style = "display: none"
    restaurantBulletPointRight.style = "display: center; transform: rotate(180deg)"
}

function restaurantScrollLeft() {
    Boteco.style = "display: block"
    Braziliant.style = "display: none"
    restaurantBulletPointLeft.style = "display: center"
}

//BELEZA E ESTÉTICA

var Brisa = window.document.getElementById("Brisa")
var Sil = window.document.getElementById("Sil")
var DonaLucia = window.document.getElementById("DonaLucia")
var Nara = window.document.getElementById("Nara")
var NataliaSimoes = window.document.getElementById("NataliaSimoes")
var beautyBulletPointLeft = window.document.getElementById("beautyBulletPointLeft")
var beautyBulletPointRight = window.document.getElementById("beautyBulletPointLeft")
var beautyRightArrow = window.document.getElementById("beautyRightArrow")
var beautyLeftArrow = window.document.getElementById("beautyLeftArrow")

function beautyScrollRight() {
    Brisa.style = "display: none"
    NataliaSimoes.style = "display: block"
    beautyBulletPointLeft.style = "display: none"
    beautyBulletPointRight.style = "display: center; transform: rotate(180deg)"
}

function beautyScrollLeft() {
    Brisa.style = "display: block"
    NataliaSimoes.style = "display: none"
    beautyBulletPointLeft.style = "display: center"
}

//SAÚDE


var BemStar = window.document.getElementById("BemStar")
var Connecta = window.document.getElementById("Connecta")
var VidaNova = window.document.getElementById("VidaNova")
var Confidence = window.document.getElementById("Confidence")
var BrunaCosta = window.document.getElementById("BrunaCosta")
var healthBulletPointLeft = window.document.getElementById("healthBulletPointLeft")
var healthBulletPointRight = window.document.getElementById("healthBulletPointLeft")
var healthRightArrow = window.document.getElementById("healthRightArrow")
var healthLeftArrow = window.document.getElementById("healthLeftArrow")

function healthScrollRight() {
    BemStar.style = "display: none"
    BrunaCosta.style = "display: block"
    healthBulletPointLeft.style = "display: none"
    healthBulletPointRight.style = "display: center; transform: rotate(180deg)"
}

function healthScrollLeft() {
    BemStar.style = "display: block"
    BrunaCosta.style = "display: none"
    healthBulletPointLeft.style = "display: center"
}