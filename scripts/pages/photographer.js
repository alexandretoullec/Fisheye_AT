/* eslint-disable no-undef */

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
    this.anchorImgs = this.mediaContainer.querySelectorAll("a");
  }

  async displayHeader(photographer) {
    //initiate factory photographer template

    this.factory = photographerTemplate(photographer);
    //dom of the header
    const mainCont = document.querySelector(".photograph-header");
    // show the header photograph in the page
    mainCont.innerHTML = this.factory.getUserHeader();
  }

  async displayLightbox(medias) {
    Lightbox.init(medias);
  }

  async displayMedia(medias) {
    //initiate factoty media

    this.factoryMedia = mediaTemplate(medias);

    // for each media create card from factory mediaTemplate getMedia
    medias.forEach((media) => {
      const mediasPhotograph = mediaTemplate(media);
      const userCardDOM = mediasPhotograph.getMedia();
      this.mediaContainer.appendChild(userCardDOM);
    });
    app.displayLightbox();
  }

  async sortMedia(medias) {
    const selectElement = document.querySelector(".selected");
    selectElement.setAttribute("aria-expanded", false);
    const options = document.querySelector(".options");
    const optPop = document.querySelector(".optPop");
    const optDate = document.querySelector(".optDate");
    const optTitre = document.querySelector(".optTitre");

    let sortedMedia = [];

    selectElement.addEventListener("click", () => {
      document.querySelector(".fa-chevron-down").classList.toggle("chevron-up");
      let ariaExpanded = selectElement.getAttribute("aria-expanded");
      ariaExpanded == "true"
        ? (ariaExpanded = "false")
        : (ariaExpanded = "true");
      selectElement.setAttribute("aria-expanded", ariaExpanded);
      options.classList.toggle("hidden");
    });

    optDate.addEventListener("click", () => {
      this.mediaContainer.innerHTML = "";

      sortedMedia = medias.sort((a, b) => new Date(a.date) - new Date(b.date));
      app.displayMedia(sortedMedia);
      app.counterLike(medias);
    });

    optPop.addEventListener("click", () => {
      this.mediaContainer.innerHTML = "";
      sortedMedia = medias.sort((a, b) => b.likes - a.likes);
      app.displayMedia(sortedMedia);
      app.counterLike(medias);
    });

    optTitre.addEventListener("click", () => {
      this.mediaContainer.innerHTML = "";
      sortedMedia = medias.sort((a, b) => (a.title < b.title ? -1 : 1));
      app.displayMedia(sortedMedia);
      app.counterLike(medias);
    });
  }

  async counterLike(medias) {
    //dom
    const likesContainer = document.querySelector(".likeprice-container__like");
    const likeBtn = document.querySelectorAll(".fa-heart");

    // count likes from datas
    const likes = medias.map((media) => media.likes);
    let likeCounter = likes.reduce((a, b) => a + b);

    // count likes if checked or -1 if unchecked

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

  async renderForm(photographer) {
    const btnModalOpen = document.querySelector(".contact_button");
    const main = document.querySelector("#main");

    this.modal = contactForm(photographer);

    const modalCont = document.getElementById("contact_modal");
    modalCont.innerHTML = this.modal.getFormContact();
    modalCont.setAttribute("aria-hidden", true);
    modalCont.setAttribute("aria-describedby", "modalTitle");
    main.setAttribute("aria-hidden", false);

    btnModalOpen.addEventListener("click", () => {
      modalCont.ariaHidden = "false";
      main.ariaHidden = "true";
      modalCont.style.display = "block";
      document.getElementById("prenom").focus();
    });

    const btnCloseModal = document.querySelector(".closeModalBtn");
    btnCloseModal.addEventListener("click", closeModal);

    function closeModal() {
      modalCont.ariaHidden = "true";
      main.ariaHidden = "false";
      modalCont.style.display = "none";
    }

    document.addEventListener("keyup", onKeyUp);

    function onKeyUp(e) {
      if (e.key === "Escape") {
        closeModal();
      }
    }

    this.modal.logOnSubmit();
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
    // sortMedia(medias);
    app.displayHeader(photographer);
    app.sortMedia(medias);
    app.displayMedia(medias);
    app.renderPrice(photographer);
    app.renderForm(photographer);
    app.counterLike(medias);
  }
}

const app = new App();
app.main();
