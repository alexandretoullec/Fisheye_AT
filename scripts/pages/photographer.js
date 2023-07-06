//Mettre le code JavaScript lié à la page photographer.html

// récupérer l'ID du photographe dans l'URL et on retourne les datas
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

console.log(getPhotographersById());

let factory = null;

async function init() {
  const photographer = await getPhotographersById();
  console.log(photographer);
  factory = photographerTemplate(photographer);
  await renderHeader();
  await displayMedia();
}

async function renderHeader() {
  //   const mainCont = document.querySelector("#main");
  //   const photograpHeader = document.createElement("section");
  //   mainCont.prepend(photograpHeader);
  const mainCont = document.querySelector(".photograph-header");

  mainCont.innerHTML = factory.getUserHeader();
}

async function displayMedia(medias) {
  const mediaContainer = document.querySelector(".photograph-imgs-container");

  medias.forEach((photographer) => {
    const mediasPhotograph = mediaTemplate(photographer);
    const userCardDOM = mediasPhotograph.getMedia();
    mediaContainer.appendChild(userCardDOM);
  });
}

init();
