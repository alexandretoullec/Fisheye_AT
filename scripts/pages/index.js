async function getPhotographers() {
  return fetch("./data/photographers.json")
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (data) {
      return data;
    })
    .catch(function (err) {
      alert("Erreur : " + err);
    });
}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = new PhotographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM.article);
  });
}

async function init() {
  // Récupère les datas des photographes
  const datas = await getPhotographers();
  console.log(datas.photographers);
  displayData(datas.photographers);
}

init();
