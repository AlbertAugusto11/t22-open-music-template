//TIRAR DEPOIS
const albumList = [
    {
      title: "Acabou o Chorare",
      genre: "MPB",
      band: "Novos Baianos",
      price: "137.91",
      img: "./src/assets/imgs/cover-1.png",
    },
    {
      title: "The Wall",
      genre: "Rock",
      band: "Pink Floyd",
      price: "123.56",
      img: "./src/assets/imgs/cover-2.png",
    },
    {
      title: "To Pimp a Butterfly",
      genre: "Rap",
      band: "Kendrick Lamar",
      price: "102.66",
      img: "./src/assets/imgs/cover-3.png",
    },
    {
      title: "Thriller",
      genre: "Pop",
      band: "Michael Jackson",
      price: "142.32",
      img: "./src/assets/imgs/thriller.jpg",
    },
    {
      title: "All Eyez on Me",
      genre: "Hip-Hop",
      band: "2Pac",
      price: "50.13",
      img: "./src/assets/imgs/2pac.jpg",
    },
    {
      title: "Dom de Sambar",
      genre: "Samba",
      band: "Turma do Pagode",
      price: "51.67",
      img: "./src/assets/imgs/domSambar.jpg",
    },
];

//TIRAR DEPOIS
function applyInputRangeStyle() {
  const inputRange = document.querySelector(".section2__input");
  inputRange.addEventListener("input", (event) => {
    const currentInputValue = event.target.value;
    const runnableTrackProgress = (currentInputValue / inputRange.max) * 100;
    inputRange.style.background = `linear-gradient(to right, var(--brand-2) ${runnableTrackProgress}%, var(--gray-5) ${runnableTrackProgress}%)`;
  });
}
applyInputRangeStyle()

let modeDark = false;
function rotine(){
}
rotine();

function renderAllAlbums(list){
  const divMain = document.querySelector('.section3__divMain');
  divMain.innerHTML = "";
  list.map((elem) => {
    divMain.insertAdjacentHTML(
      `beforeend`,
      `
      <div class="divMain__divCard">
      <div class="divCard__divImg"><img src=${elem.img} alt="capa"></div>
      <h4 class="divCard__h4">${elem.title}</h4>
      <div class="divCard__divInf">
        <p class="divInf__p">${elem.band}</p>
        <p class="divInf__p">${elem.genre}</p>
      </div>
      <div class="divCard__divPrice">
        <p class="divPrice__p">${elem.price}</p>
        <button>Comprar</button>
      </div>`,
    );
  });
  if(modeDark === true){
    const divMainDivCard = document.querySelectorAll(".divMain__divCard");
    const divCardH4 = document.querySelectorAll(".divCard__h4");
    const divInfP = document.querySelectorAll(".divInf__p");
    divMainDivCard.forEach(element =>{
      element.classList.toggle("divMain__divCard--modifier");
    });
    divCardH4.forEach(element =>{
      element.classList.toggle("divCard__h4--modifier");
    });
    divInfP.forEach(element =>{
      element.classList.toggle("divInf__p--modifier");
    });
  }
};
renderAllAlbums(albumList);

//theme

function darkMode(){
  const buttonHeader = document.querySelector(".header__button");
  const body = document.querySelector("body");
  const header = document.querySelector(".body__header");
  const headerH1 = document.querySelector(".header__h1");
  const section1H2 = document.querySelector(".section1__h2");
  const divButtons = document.querySelectorAll(".section1__div__button");
  const section2H2 = document.querySelectorAll(".section2__div h2");
  const section3H3 = document.querySelector(".section3__h3");
  const divMainDivCard = document.querySelectorAll(".divMain__divCard");
  const divCardH4 = document.querySelectorAll(".divCard__h4");
  const divInfP = document.querySelectorAll(".divInf__p");
  const divPriceP = document.querySelectorAll(".divPrice__p");

  buttonHeader.addEventListener("click", () =>{
    modeDark = !modeDark;
    localStorage.setItem("MODO",JSON.stringify(modeDark));
    buttonHeader.classList.toggle("header__button--modifier");
    body.classList.toggle("body--modifier");
    header.classList.toggle("body__header--modifier");
    headerH1.classList.toggle("header__h1--modifier");
    section1H2.classList.toggle("section1__h2--modifier");
    divButtons.forEach(element =>{
      element.classList.toggle("section1__div__button--modifier");
    });
    section2H2.forEach(element =>{
      element.classList.toggle("section2__div__h2--modifier");
    });
    section3H3.classList.toggle("section3__h3--modifier");
    divMainDivCard.forEach(element =>{
      element.classList.toggle("divMain__divCard--modifier");
    });
    divCardH4.forEach(element =>{
      element.classList.toggle("divCard__h4--modifier");
    });
    divInfP.forEach(element =>{
      element.classList.toggle("divInf__p--modifier");
    });
    divPriceP.forEach(element =>{
      element.classList.toggle("divPrice__p--modifier");
    })

  });
}
darkMode();

function recuperaModo () {
  const buttonHeader = document.querySelector(".header__button");
  let x;
  if(localStorage.getItem("MODO")){
     x = JSON.parse(localStorage.getItem("MODO"));
  }if(x == true){
    buttonHeader.click();
  }
}
recuperaModo();
//theme

function filtraAlbum (){
  const inputRange = document.querySelector(".section2__input");
  const priceRange = document.querySelector("#priceRange");
  inputRange.addEventListener("input",() =>{
    priceRange.innerText = `R$ ${inputRange.value}`;
    let list = albumList.filter(element =>{
    return element.price <= inputRange.valueAsNumber;
    });
    renderAllAlbums(list);
  });
}
filtraAlbum();