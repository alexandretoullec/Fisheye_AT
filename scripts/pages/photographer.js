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
  //   const mainCont = document.querySelector("#main");
  //   const photograpHeader = document.createElement("section");
  //   mainCont.prepend(photograpHeader);
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

async function init() {
  const photographer = await getPhotographersById();
  const medias = await getMediasByPhotographersId();

  // console.log(photographer);
  // console.log(medias);
  factory = photographerTemplate(photographer);
  factoryMedia = mediaTemplate(medias);
  await renderHeader();
  await displayMedia(medias);
  Lightbox.init();
}

init();
