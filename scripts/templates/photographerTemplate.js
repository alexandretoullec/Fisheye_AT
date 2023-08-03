//factory function simplified version of classes

// eslint-disable-next-line no-unused-vars
function photographerTemplate(data) {
  //destructuring objects from data
  const { id, name, portrait, city, country, tagline, price } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const photographerCard = `
    
      <a href="./photographers.html?id=${id}" aria-label="${name}">
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
        <h1>${name}</h1>
        <h2> ${city}, ${country}</h2>
        <h3>${tagline}</h3>
      </div>

      <button class="contact_button"  aria-label="Contact Me">
      Contactez-moi
      </button>
      
      <img src=${picture} alt=${name}>
      
    
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
