// eslint-disable-next-line no-unused-vars
class VideoTemplate {
  constructor(data) {
    this._title = data.title;
    this._likes = data.likes;
    this._video = data.video;
    this._videoLink = `assets/images/${this._video}`;
  }

  getMedia() {
    //creation de l'img
    let articleCont = document.createElement("article");

    const videoArticle = `
    
      <a href="${this._videoLink}" class="media-img-card" alt=${this._video} aria-label="${this._video}">
        <p class="explain">link ${this._video}</p>
        <video src="${this._videoLink}"  width="400" height="400" alt=${this._video}>
          <source src="${this._videoLink}"/></video>
      </a>
      <div class="textContainer">
        <h3>${this._title}</h3>
        <div class="likeContainer">
          <p class="count">${this._likes}</p>
          <label class="heart-checkbox">
            <p class="explain">like counter</p>
            <input type="checkbox"/>
            <em class="fa-regular fa-heart unchecked"></em>
            <em class="fa-solid fa-heart checked"></em>
          </label>
        </div>
      </div>
    
    `;

    articleCont.innerHTML = videoArticle;

    return articleCont;
  }
}
