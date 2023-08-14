// eslint-disable-next-line no-unused-vars
class PhotoTemplate {
  constructor(data) {
    this._title = data.title;
    this._likes = data.likes;
    this._image = data.image;
    this._picture = `assets/images/${this._image}`;
  }

  getMedia() {
    //creation de l'img
    let articleCont = document.createElement("div");

    const imageArticle = `
      
        <a href="${this._picture}" class="media-img-card" alt=${this._image} aria-label="${this._image}"
        >
          <img src="${this._picture}" alt=${this._image}>
        </a>
        <div class="textContainer">
          <h3>${this._title}</h3>
          <div class="likeContainer">
            <p class="count">${this._likes}</p>
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
