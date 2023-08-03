// eslint-disable-next-line no-unused-vars
function mediaTemplate(data) {
  const { title, image, likes, video } = data;

  const picture = `assets/images/${image}`;
  const videoLink = `assets/images/${video}`;

  function getMedia() {
    //creation de l'img
    let articleCont = document.createElement("div");
    // let img = "";

    const imageArticle = `
    
      <a href="${picture}" class="media-img-card" alt=${image} aria-label="${image}"
      >
        <img src="${picture}" alt=${image}>
      </a>
      <div class="textContainer">
        <h3>${title}</h3>
        <div class="likeContainer">
          <p class="count">${likes}</p>
          <label class="heart-checkbox">
            <p class="explain">like counter</p>
            <input type="checkbox"/>
            <i class="fa-regular fa-heart unchecked"></i>
            <i class="fa-solid fa-heart checked"></i>
          </label>
        </div>
      </div>
    `;
    //video html

    const videoArticle = `
    
      <a href="${videoLink}" class="media-img-card" alt=${video} aria-label="${video}">
        <p class="explain">link ${video}</p>
        <video src="${videoLink}"  width="400" height="400" alt=${video}>
          <source src="${videoLink}"/></video>
      </a>
      <div class="textContainer">
        <h3>${title}</h3>
        <div class="likeContainer">
          <p class="count">${likes}</p>
          <label class="heart-checkbox">
            <p class="explain">like counter</p>
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
