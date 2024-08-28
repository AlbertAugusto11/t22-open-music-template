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

function rotine(){
    applyInputRangeStyle()
}
rotine()

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
            <p>${elem.band}</p>
            <p>${elem.genre}</p>
        </div>
        <div class="divCard__divPrice">
            <p>${elem.price}</p>
            <button>Comprar</button>
        </div>`,
      );
    });
};
renderAllAlbums(albumList);