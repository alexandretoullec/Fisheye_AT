class Index {
  constructor() {
    //dom container
    this.photographerSection = document.querySelector(".photographer_section");

    // eslint-disable-next-line no-undef
    this.photographerAPI = new PhotographerApi("data/photographers.json");
  }

  async main() {
    const photographersDatas = await this.photographerAPI.getDatas();

    //Display each photographer datas threw cards
    photographersDatas.forEach((photographer) => {
      // eslint-disable-next-line no-undef
      const photographerModel = photographerTemplate(photographer);
      const userCardDOM = photographerModel.getUserCardDOM();
      this.photographerSection.appendChild(userCardDOM);
    });
  }
}

const index = new Index();
index.main();
