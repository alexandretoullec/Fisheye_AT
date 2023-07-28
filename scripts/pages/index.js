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
