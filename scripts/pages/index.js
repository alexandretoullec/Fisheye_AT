class Api {
  /**
   *
   * @param {string} url
   */
  constructor(url) {
    this._url = url;
  }

  async getPhotographers() {
    return fetch(this._url)
      .then((res) => res.json())
      .then((res) => res.photographers)
      .catch((err) => console.log("an error occurs", err));
  }

  async getMedias() {
    return fetch(this._url)
      .then((res) => res.json())
      .then((res) => res.media)
      .catch((err) => console.log("an error occurs", err));
  }
}

class PhotographerApi extends Api {
  /**
   *
   * @param {string} url
   */
  constructor(url) {
    super(url);
  }

  async getDatas() {
    return await this.getPhotographers();
  }
}

class Index {
  constructor() {
    this.photographerSection = document.querySelector(".photographer_section");
    // eslint-disable-next-line no-undef
    this.photographerAPI = new PhotographerApi("data/photographers.json");
  }

  async main() {
    const photographersDatas = await this.photographerAPI.getDatas();
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
