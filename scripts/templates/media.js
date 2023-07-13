function mediaTemplate(data) {
  const { id, photographerId, title, image, likes, date, price } = data;

  const picture = `assets/images/${image}`;

  function getMedia() {
    //creation de l'article
    const article = document.createElement("article");
    article.classList.add("media-img-card");
    //creation de l'img
    const img = document.createElement("img");
    img.setAttribute("src", picture);

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
