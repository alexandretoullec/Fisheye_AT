class Index {
  constructor() {
    this.photographerSection = document.querySelector(".photographer_section");
    this.photographerAPI = new PhotographerApi("data/photographers.json");
  }

  async main() {
    const photographersDatas = await this.photographerAPI.getDatas();
    photographersDatas.forEach((photographer) => {
      const photographerModel = photographerTemplate(photographer);
      const userCardDOM = photographerModel.getUserCardDOM();
      this.photographerSection.appendChild(userCardDOM);
    });
  }
}

const index = new Index();
index.main();

async function getPhotographers() {
  // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet,
  // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
  // Récupération des pièces depuis le fichier JSON
  //
  // const reponse = await fetch("data/photographers.json");
  // const datas = await reponse.json();
  // const photographersDatas = datas.photographers;
  // console.log(datas.photographers);
  // et bien retourner le tableau photographers seulement une fois récupéré
  // return {
  //   photographers: [...photographersDatas],
  // };
}

// async function displayData(photographers) {
//   const photographersSection = document.querySelector(".photographer_section");

//   photographers.forEach((photographer) => {
//     const photographerModel = photographerTemplate(photographer);
//     const userCardDOM = photographerModel.getUserCardDOM();
//     photographersSection.appendChild(userCardDOM);
//   });
// }

async function init() {
  // Récupère les datas des photographes
  // this.photographerAPI = new PhotographerApi("data/photographers.json");
  // this.mediasApi = new mediasApi("data/photographers.json");
  // const photographersDatas = await this.photographerAPI.getDatas();
  // const mediasData = await this.mediasApi.getDatas();
  // console.log(photographersDatas);
  // console.log(mediasData);
  // const { photographers } = await getPhotographers();
  // displayData(photographersDatas);
}

// init();
