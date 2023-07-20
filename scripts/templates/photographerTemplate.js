//factory function simplified version of classes

function photographerTemplate(data) {
  //destructuring objects from data
  const { id, name, portrait, city, country, tagline, price } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    //creation de l'article
    const article = document.createElement("article");

    //creation de l'anchor tag lien vers la page du photographe
    const containerLink = document.createElement("a");
    containerLink.setAttribute("href", `./photographers.html?id=${id}`);
    containerLink.setAttribute("aria-label", `lien vers la page de ${name}`);

    //creation de l'image
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", `photo de ${name}`);
    const h2 = document.createElement("h2");
    h2.textContent = name;

    //creation de la location
    const location = document.createElement("h3");
    location.innerText = `${city} , ${country}`;

    // creation de la tagline
    const tagLine = document.createElement("h4");
    tagLine.innerText = tagline;

    // creation du prix
    const priceData = document.createElement("p");
    priceData.textContent = `${price}€/jour`;

    //affichage et hierarchisation dans le DOM
    article.appendChild(containerLink);
    containerLink.appendChild(img);
    containerLink.appendChild(h2);
    article.appendChild(location);
    article.appendChild(tagLine);
    article.appendChild(priceData);

    return article;
  }

  function getUserHeader() {
    const headerPhotographer = `
      <div class="photograph-header-descr">
        <h2>${name}</h2>
        <h3> ${city} , ${country}</h3>
        <h4>${tagline}</h4>
      </div>

      <button class="contact_button" onclick="displayModal()">
      Contactez-moi
      </button>
      
      <img src=${picture} alt=photo de ${name}>
      
    
  `;

    return headerPhotographer;
  }

  function getPrice() {
    return `    
      <p>${price}€/ jour</p>
    `;
  }

  return {
    name,
    picture,
    getUserCardDOM,
    getUserHeader,
    getPrice,
  };
}
