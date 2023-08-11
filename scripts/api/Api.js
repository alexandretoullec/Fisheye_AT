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

//extended class from Api for photographer data

// eslint-disable-next-line no-unused-vars
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

//extended class from Api for medias data

// eslint-disable-next-line no-unused-vars
class mediasApi extends Api {
  /**
   *
   * @param {string} url
   */

  constructor(url) {
    super(url);
  }

  async getDatas() {
    return await this.getMedias();
  }
}
