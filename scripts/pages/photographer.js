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
  }

  async displayHeader(photographer) {
    //initiate factory photographer template
    this.factory = photographerTemplate(photographer);
    //dom of the header
    const mainCont = document.querySelector(".photograph-header");
    // show the header photograph in the page
    mainCont.innerHTML = this.factory.getUserHeader();
  }

  async displayMedia(medias) {
    //initiate factoty media
    this.factoryMedia = mediaTemplate(medias);

    //DOM media container
    const mediaContainer = document.querySelector(".photograph-imgs-container");

    // for each media create card from factory mediaTemplate getMedia
    medias.forEach((media) => {
      const mediasPhotograph = mediaTemplate(media);
      const userCardDOM = mediasPhotograph.getMedia();
      mediaContainer.appendChild(userCardDOM);
    });
  }

  async counterLike(medias) {
    //dom
    const likesContainer = document.querySelector(".likeprice-container__like");
    const jaime = document.querySelectorAll(".checked");
    const jaimePas = document.querySelectorAll(".unchecked");

    // count likes from datas
    const likes = medias.map((media) => media.likes);
    let likeCounter = likes.reduce((a, b) => a + b);

    // count likes if checked or -1 if unchecked
    let count = 0;
    // jaimePas.forEach((i) => i.addEventListener("click",console.log("clicked");));

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
    app.displayMedia(medias);
    app.counterLike(medias);
    app.renderPrice(photographer);
    Lightbox.init(medias);
  }
}

const app = new App();
app.main();
