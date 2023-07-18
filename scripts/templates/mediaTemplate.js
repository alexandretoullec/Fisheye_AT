function mediaTemplate(data) {
  const { id, photographerId, title, image, likes, video, date, price } = data;

  const picture = `assets/images/${image}`;
  const videoLink = `assets/images/${video}`;
  function getMedia() {
    //creation de l'article
    const article = document.createElement("a");

    //creation de l'img
    let img = "";

    if (image) {
      article.setAttribute("href", picture);

      article.classList.add("media-img-card");
      img = document.createElement("img");
      img.setAttribute("src", picture);
    }

    if (video) {
      article.setAttribute("href", videoLink);
      article.classList.add("media-img-card");
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
    const coeur = document.createElement("i");
    coeur.classList.add("fa-regular");
    coeur.classList.add("fa-heart");
    titre.innerText = title;
    jaime.innerText = likes;

    //affichage et hierarchisation dans le DOM
    article.append(img);
    article.append(textContainer);

    textContainer.append(titre);
    textContainer.append(likeContainer);
    likeContainer.append(jaime);
    likeContainer.append(coeur);

    return article;
  }

  return { getMedia };
}
