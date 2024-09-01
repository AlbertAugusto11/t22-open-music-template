//theme
const buttonHeader = document.querySelector(".header__button");
const body = document.querySelector("body");
const header = document.querySelector(".body__header");
const headerH1 = document.querySelector(".header__h1");
const h2 = document.querySelectorAll("h2");
const divButtons = document.querySelectorAll(".section1__div__button");
const h3 = document.querySelector("h3");
const h4 = document.querySelectorAll("h4");
const p = document.querySelectorAll("p");
const divCards = document.querySelectorAll(".divMain__divCard")
let darkMode = false;
function darkTema(){
  buttonHeader.classList.toggle("header__button--modifier");
  body.style.backgroundColor = "var(--gray-0)";
  header.style.backgroundColor = "var(--gray-0)";
  headerH1.style.color = "#ffffff";
  divButtons.forEach(element =>{
    element.classList.toggle("section1__div__button--modifier");
  })
  h2.forEach(element => {
    element.style.color = "#ffffff";
  })
  h3.style.color = "#ffffff";
  divCards.forEach(element => {
    element.style.backgroundColor = "var(--gray-1)";
  })
  h4.forEach(element => {
    element.style.color = "#ffffff";
  })
  p.forEach(element => {
    element.style.color = "#ffffff";
  })
}
buttonHeader.addEventListener("click",() =>{
  darkTema();
});

darkMode = !darkMode;
localStorage.setItem("MODO",JSON.stringify(darkMode));
if(localStorage.getItem("MODO")){
  darkTema();
}
//theme