// class Api {
//   /**
//    *
//    * @param {string} url
//    */
//   constructor(url) {
//     this._url = url;
//   }

//   async getPhotographers() {
//     return fetch(this._url)
//       .then((res) => res.json())
//       .then((res) => res.photographers)
//       .catch((err) => console.log("an error occurs", err));
//   }

//   async getMedias() {
//     return fetch(thid._url)
//       .then((res) => res.json())
//       .then((res) => res.media)
//       .catch((err) => console.log("an error occurs", err));
//   }
// }

// class PhotographerApi extends Api {
//   /**
//    *
//    * @param {string} url
//    */
//   constructor(url) {
//     super(url);
//   }

//   async getDatas() {
//     return await this.getPhotographers();
//   }
// }

// class mediasApi extends Api {
//   /**
//    *
//    * @param {string} url
//    */

//   constructir(url){
//     super(url);
//   }

//   async getDatas(){
//     return await this.getMedias();
//   }
// }

class App {
  constructor() {
    this.photographerAPI = new PhotographerApi("data/photographers.json");
    this.mediasApi = new mediasApi("data/photographers.json");
    // this.photographers = this.photographerAPI.photographers;

    // this.params = new URL(document.location).searchParams;
    // this.id = parseInt(this.params.get("id"));

    // this.photographer = this.photographers.find(
    //   (photographer) => photographer.id === id
    // );
  }

  async main() {
    const photographersDatas = await this.photographerAPI.getDatas();
    const mediasData = await this.mediasApi.getDatas();
    console.log(photographersDatas);
    console.log(mediasData);
    const params = new URL(document.location).searchParams;
    const id = parseInt(params.get("id"));

    const photographer = photographersDatas.find(
      (photographer) => photographer.id === id
    );
  }
}

//Mettre le code JavaScript lié à la page photographer.html

// récupérer l'ID du photographe dans l'URL et retourne les datas photographes
async function getPhotographersById() {
  const reponse = await fetch("data/photographers.json");
  const datas = await reponse.json();
  const photographers = datas.photographers;

  const params = new URL(document.location).searchParams;
  const id = parseInt(params.get("id"));

  const photographer = photographers.find(
    (photographer) => photographer.id === id
  );

  return photographer;
}

// récupérer l'ID du photographe dans l'URL et retourne les datas medias
async function getMediasByPhotographersId() {
  const reponse = await fetch("data/photographers.json");
  const datas = await reponse.json();
  const medias = datas.media;

  const params = new URL(document.location).searchParams;
  const photographerId = parseInt(params.get("id"));

  // const media = medias.find((media) => media.photographerId === photographerId);

  const mediasArrayById = medias.filter(
    (media) => media.photographerId === photographerId
  );

  return mediasArrayById;
}

// console.log(getPhotographersById());

let factory = null;
let factoryMedia = null;

async function renderHeader() {
  const mainCont = document.querySelector(".photograph-header");

  mainCont.innerHTML = factory.getUserHeader();
}

async function displayMedia(medias) {
  const mediaContainer = document.querySelector(".photograph-imgs-container");
  // mediaContainer.innerHTML = factoryMedia.getMedia();
  // mediaContainer.innerHTML = `<div>hello</div>`;
  // console.log(medias);
  medias.forEach((media) => {
    // const render = `<div>${media.id}</div>`;
    const mediasPhotograph = mediaTemplate(media);
    const userCardDOM = mediasPhotograph.getMedia();
    mediaContainer.appendChild(userCardDOM);
  });
}

// Counter Likes
async function counterLike(medias) {
  //dom
  const likesContainer = document.querySelector(".likeprice-container__like");
  const jaime = document.querySelectorAll(".checked");
  const jaimePas = document.querySelectorAll(".unchecked");

  // count likes from datas
  const likes = medias.map((media) => media.likes);
  let likeCounter = likes.reduce((a, b) => a + b);

  // count likes if checked or -1 if unchecked
  let count = 0;
  jaimePas.forEach((i) => i.addEventListener("click"));

  const result = `
  <p>
    ${likeCounter} <span><i class="fa-solid fa-heart"></i></span>
  </p>
  `;

  return (likesContainer.innerHTML = result);
}

async function renderPrice() {
  const priceContainer = document.querySelector(".likeprice-container__price");
  priceContainer.innerHTML = factory.getPrice();
}

async function init() {
  const photographer = await getPhotographersById();
  const medias = await getMediasByPhotographersId();

  // console.log(photographer);
  // console.log(medias);
  factory = photographerTemplate(photographer);
  factoryMedia = mediaTemplate(medias);
  await renderHeader();
  await displayMedia(medias);
  Lightbox.init(medias);
  await renderPrice();
  await counterLike(medias);
}

init();
const app = new App();
app.main();
