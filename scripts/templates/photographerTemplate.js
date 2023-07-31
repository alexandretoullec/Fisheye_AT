//factory function simplified version of classes

function photographerTemplate(data) {
  //destructuring objects from data
  const { id, name, portrait, city, country, tagline, price } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const photographerCard = `
    
      <a href="./photographers.html?id=${id}" aria-label="lien vers la page de ${name}">
        <img src="${picture}" alt="${name}">
        <h2>${name}</h2>
      </a>
        <h3>${city} , ${country}</h3>
        <h4>${tagline}</h4>
        <p>${price}€/jour</p>
    
    `;

    const article = document.createElement("article");
    article.innerHTML = photographerCard;

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
