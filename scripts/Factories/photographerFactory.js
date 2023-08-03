class photographerFactory {
  constructor(data) {
    this.name = data.name;
    this.portrait = data.portrait;
    this.city = data.city;
    this.tagline = data.tagline;
    this.price = data.price;
    this.country = data.country;
    this.id = data.id;

    const picture = `assets/photographers/${this.portrait}`;

    //dom
    this.article = document.createElement("article");
    this.containerLink = document.createElement("a");
    this.img = document.createElement("img");
    this.h2 = document.createElement("h2");
    this.location = document.createElement("h3");
    this.tagLine = document.createElement("h4");
    this.priceData = document.createElement("p");

    //attributes et class
    this.containerLink.setAttribute(
      "href",
      `./photographers.html?id=${this.id}`
    );
    this.containerLink.setAttribute(
      "aria-label",
      `lien vers la page de ${this.name}`
    );
    this.img.setAttribute("src", picture);
    this.img.setAttribute("alt", `photo de ${this.name}`);
  }

  getUserCardDOM() {}
}
