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
      // anchor.setAttribute("href", picture);

      // anchor.classList.add("media-img-card");
      // img = document.createElement("img");
      // img.setAttribute("src", picture);
    }

    if (video) {
      articleCont.innerHTML = videoArticle;

      // anchor.setAttribute("href", videoLink);
      // anchor.classList.add("media-img-card");
      // img = document.createElement("video");
      // img.setAttribute("src", videoLink);
      // img.setAttribute("controls", "controls");
      // img.setAttribute("width", 400);
      // img.setAttribute("height", 400);
      // const source = document.createElement("source");
      // source.setAttribute("src", videoLink);
      // img.append(source);
    }
    console.log(articleCont);
    //creation du container texte
    // const textContainer = document.createElement("div");
    // textContainer.classList.add("textContainer");
    // const likeContainer = document.createElement("div");
    // likeContainer.classList.add("likeContainer");
    // const titre = document.createElement("h3");
    // const jaime = document.createElement("p");
    // jaime.classList.add("count");
    // const coeurContainer = document.createElement("label");
    // coeurContainer.classList.add("heart-checkbox");
    // const input = document.createElement("input");
    // input.setAttribute("type", "checkbox");
    // const coeurVide = document.createElement("i");
    // coeurVide.classList.add("fa-regular");
    // coeurVide.classList.add("fa-heart");
    // coeurVide.classList.add("unchecked");
    // const coeurPlein = document.createElement("i");
    // coeurPlein.classList.add("fa-solid");
    // coeurPlein.classList.add("fa-heart");
    // coeurPlein.classList.add("checked");
    // titre.innerText = title;
    // jaime.innerText = likes;

    //affichage et hierarchisation dans le DOM
    // article.append(anchor);
    // anchor.append(img);
    // article.append(textContainer);

    // textContainer.append(titre);
    // textContainer.append(likeContainer);
    // likeContainer.append(jaime);
    // likeContainer.append(coeurContainer);
    // coeurContainer.append(input);
    // coeurContainer.append(coeurVide);
    // coeurContainer.append(coeurPlein);

    //<label class="heart-checkbox">
    //    <input type="checkbox" />
    //    <i class="fa-regular fa-heart unchecked"></i>
    //    <i class="fa-solid fa-heart checked"></i>
    //</label>

    return articleCont;
  }

  function getLikeCounter() {}

  return { getMedia, getLikeCounter };
}
