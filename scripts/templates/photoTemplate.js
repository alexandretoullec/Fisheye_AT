// eslint-disable-next-line no-unused-vars
class ImageTemplate {
  constructor(data) {
    this._title = data.title;
    this._likes = data.likes;
    this._image = data.image;

    this._picture = `assets/images/${this._image}`;
    // this._videoLink = `assets/images/${video}`;
  }

  getMedia() {
    //creation de l'img
    let articleCont = document.createElement("div");
    // let img = "";

    const imageArticle = `
      
        <a href="${this._picture}" class="media-img-card" alt=${this.image} aria-label="${this.image}"
        >
          <img src="${this._picture}" alt=${this.image}>
        </a>
        <div class="textContainer">
          <h3>${this.title}</h3>
          <div class="likeContainer">
            <p class="count">${this.likes}</p>
            <label class="heart-checkbox">
              <p class="explain">like counter</p>
              <input type="checkbox"/>
              <i class="fa-regular fa-heart unchecked"></i>
              <i class="fa-solid fa-heart checked"></i>
            </label>
          </div>
        </div>
      `;

    articleCont.innerHTML = imageArticle;

    return articleCont;
  }
}
