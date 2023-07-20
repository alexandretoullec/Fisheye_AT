function mediaTemplate(data) {
  const { id, photographerId, title, image, likes, video, date, price } = data;

  const picture = `assets/images/${image}`;
  const videoLink = `assets/images/${video}`;

  function getMedia() {
    //creation de l'article
    const article = document.createElement("div");
    const anchor = document.createElement("a");

    //creation de l'img
    let img = "";

    if (image) {
      anchor.setAttribute("href", picture);

      anchor.classList.add("media-img-card");
      img = document.createElement("img");
      img.setAttribute("src", picture);
    }

    if (video) {
      anchor.setAttribute("href", videoLink);
      anchor.classList.add("media-img-card");
      img = document.createElement("video");
      img.setAttribute("src", videoLink);
      img.setAttribute("controls", "controls");
      img.setAttribute("width", 400);
      img.setAttribute("height", 400);
      const source = document.createElement("source");
      source.setAttribute("src", videoLink);
      img.append(source);
    }

    //creation du container texte
    const textContainer = document.createElement("div");
    textContainer.classList.add("textContainer");
    const likeContainer = document.createElement("div");
    likeContainer.classList.add("likeContainer");
    const titre = document.createElement("h3");
    const jaime = document.createElement("p");
    jaime.classList.add("count");
    const coeurContainer = document.createElement("div");
    coeurContainer.classList.add("coeurContainer");
    const coeurVide = document.createElement("i");
    coeurVide.classList.add("fa-regular");
    coeurVide.classList.add("fa-heart");
    const coeurPlein = document.createElement("i");
    coeurPlein.classList.add("fa-solid");
    coeurPlein.classList.add("fa-heart");
    titre.innerText = title;
    jaime.innerText = likes;

    //affichage et hierarchisation dans le DOM
    article.append(anchor);
    anchor.append(img);
    article.append(textContainer);

    textContainer.append(titre);
    textContainer.append(likeContainer);
    likeContainer.append(jaime);
    likeContainer.append(coeurContainer);
    coeurContainer.append(coeurVide);
    coeurContainer.append(coeurPlein);

    return article;
  }

  function getLikeCounter() {}

  return { getMedia, getLikeCounter };
}
