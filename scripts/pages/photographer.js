class App {
  constructor() {
    this.photographerAPI = new PhotographerApi("data/photographers.json");
    this.mediasApi = new mediasApi("data/photographers.json");
    //show the url of the page
    this.params = new URL(document.location).searchParams;
    //searcj for id in the url of the page
    this.id = parseInt(this.params.get("id"));

    //initiate factories
    this.factory = null;
    this.factoryMedia = null;
    //DOM media container
    this.mediaContainer = document.querySelector(".photograph-imgs-container");
  }

  async displayHeader(photographer) {
    //initiate factory photographer template
    this.factory = photographerTemplate(photographer);
    //dom of the header
    const mainCont = document.querySelector(".photograph-header");
    // show the header photograph in the page
    mainCont.innerHTML = this.factory.getUserHeader();
  }

  displayMedia(medias) {
    //initiate factoty media
    this.factoryMedia = mediaTemplate(medias);

    // for each media create card from factory mediaTemplate getMedia
    medias.forEach((media) => {
      const mediasPhotograph = mediaTemplate(media);
      const userCardDOM = mediasPhotograph.getMedia();
      this.mediaContainer.appendChild(userCardDOM);
    });
    Lightbox.init();
  }

  sortMedia(medias) {
    const optPop = document.querySelector(".optPop");
    const optDate = document.querySelector(".optDate");
    const optAlpha = document.querySelector(".optAlpha");
    // let sortContainer = document.querySelector(".photograph-imgs-container");

    let sortedMedia = [];

    const sortBydate = () => {
      this.mediaContainer.innerHTML = "";
      sortedMedia = medias.sort((a, b) => new Date(a.date) - new Date(b.date));
      app.displayMedia(sortedMedia);
      // Lightbox.init();
    };

    const sortByPopularity = () => {
      this.mediaContainer.innerHTML = "";
      sortedMedia = medias.sort((a, b) => b.likes - a.likes);
      app.displayMedia(sortedMedia);
      // sortedMedia = [];
      // Lightbox.init();
    };

    const sortByTitle = () => {
      this.mediaContainer.innerHTML = "";
      sortedMedia = medias.sort((a, b) => (a.title < b.title ? -1 : 1));
      app.displayMedia(sortedMedia);
      // sortedMedia = [];
      // Lightbox.init();
    };

    optDate.addEventListener("click", sortBydate);
    optPop.addEventListener("click", sortByPopularity);
    optAlpha.addEventListener("click", sortByTitle);
  }

  async counterLike(medias) {
    //dom
    const likesContainer = document.querySelector(".likeprice-container__like");
    const likeBtn = document.querySelectorAll(".fa-heart");
    const jaimePas = document.querySelectorAll(".unchecked");

    // count likes from datas
    const likes = medias.map((media) => media.likes);
    let likeCounter = likes.reduce((a, b) => a + b);

    // count likes if checked or -1 if unchecked

    let count = 0;

    likeBtn.forEach((i) =>
      i.addEventListener("click", () => {
        if (i.classList.contains("fa-regular")) {
          likesContainer.innerHTML = `${
            parseInt(likesContainer.textContent) + 1
          } <span><i class="fa-solid fa-heart"></i></span>`;
        }
        if (i.classList.contains("fa-solid")) {
          likesContainer.innerHTML = `${
            parseInt(likesContainer.textContent) - 1
          } <span><i class="fa-solid fa-heart"></i></span>`;
        }
      })
    );

    console.log(count);

    const result = `
    <p>
      ${likeCounter} <span><i class="fa-solid fa-heart"></i></span>
    </p>
    `;

    return (likesContainer.innerHTML = result);
  }

  async renderPrice(photographer) {
    this.factory = photographerTemplate(photographer);
    const priceContainer = document.querySelector(
      ".likeprice-container__price"
    );
    priceContainer.innerHTML = this.factory.getPrice();
  }

  async main() {
    // import datas from json files
    const photographersDatas = await this.photographerAPI.getDatas();
    // const mediasData = await this.mediasApi.getDatas();

    //looks the id in the url and send back photographer data with the matched url
    const photographer = photographersDatas.find(
      (photographer) => photographer.id === this.id
    );

    //import medias datas from json files
    const mediasData = await this.mediasApi.getDatas();

    //filter medias by photographers ID
    const medias = mediasData.filter(
      (media) => media.photographerId === this.id
    );

    app.displayHeader(photographer);
    app.sortMedia(medias);
    app.displayMedia(medias);
    app.counterLike(medias);
    app.renderPrice(photographer);
  }
}

const app = new App();
app.main();
