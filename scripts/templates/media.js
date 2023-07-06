function mediaTemplate(data) {
  const { id, photographerId, title, image, likes, date, price } = data;

  const picture = `assets/images/${image}`;

  function getMedia() {
    //creation de l'article
    const article = document.createElement("article");

    //creation de l'img
    const img = document.createElement("img");
    img.setAttribute("src", picture);

    //affichage et hierarchisation dans le DOM
    article.append(img);

    return article;
  }

  return { getMedia };
}
