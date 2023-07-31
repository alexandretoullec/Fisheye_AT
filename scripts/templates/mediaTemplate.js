function mediaTemplate(data) {
  const { id, photographerId, title, image, likes, video, date, price } = data;

  const picture = `assets/images/${image}`;
  const videoLink = `assets/images/${video}`;

  function getMedia() {
    //creation de l'article
    const article = document.createElement("div");
    const anchor = document.createElement("a");

    //creation de l'img
    let articleCont = document.createElement("div");
    // let img = "";

    const imageArticle = `
    
      <a href="${picture}" class="media-img-card">
        <img src="${picture}">
      </a>
      <div class="textContainer">
        <h3>${title}</h3>
        <div class="likeContainer">
          <p class="count">${likes}</p>
          <label class="heart-checkbox">
            <input type="checkbox"/>
            <i class="fa-regular fa-heart unchecked"></i>
            <i class="fa-solid fa-heart checked"></i>
          </label>
        </div>
      </div>
    `;
    //video html

    const videoArticle = `
    
      <a href="${videoLink}" class="media-img-card">
        <video src="${videoLink}" controls="controls" width="400" height="400">
          <source src="${videoLink}"/></video>
      </a>
      <div class="textContainer">
        <h3>${title}</h3>
        <div class="likeContainer">
          <p class="count">${likes}</p>
          <label class="heart-checkbox">
            <input type="checkbox"/>
            <i class="fa-regular fa-heart unchecked"></i>
            <i class="fa-solid fa-heart checked"></i>
          </label>
        </div>
      </div>
    
    `;

    if (image) {
      articleCont.innerHTML = imageArticle;
    }

    if (video) {
      articleCont.innerHTML = videoArticle;
    }

    return articleCont;
  }

  function getLikeCounter() {}

  return { getMedia, getLikeCounter };
}
