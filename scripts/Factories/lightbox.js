/**
 * @property {HTMLElement} element
 * @property {string[]} images Chemins des images de la lightbox
 * @property {string} url image actuellemnt affichée
 */

class Lightbox {
  static init() {
    // selectionne les href qui finisse par png, jpg ,jpeg et mp4
    const links = Array.from(
      document.querySelectorAll(
        'a[href$=".png"],a[href$=".jpg"], a[href$=".jpeg"],a[href$=".mp4"] '
      )
    );

    const gallery = links.map((link) => link.getAttribute("href"));

    links.forEach((link) =>
      link.addEventListener("click", (e) => {
        e.preventDefault();
        new Lightbox(e.currentTarget.getAttribute("href"), gallery);
      })
    );
  }

  /**
   *
   * @param {string} url URL de l'image
   * @param {string[]} images Chemins des images de la lightbox
   * @param {string[]} medias datas de la photographie pour récupérer le titre
   *
   */

  constructor(url, images, medias) {
    this.element = this.builDom(url);

    this.images = images;
    this.medias = medias;
    this.loadImage(url);
    this.onKeyUp = this.onKeyUp.bind(this);
    document.body.appendChild(this.element);
    document.addEventListener("keyup", this.onKeyUp);
  }

  /**
   *
   * @param {string} url URL de l'image
   */

  loadImage(url) {
    this.url = null;
    // const image = new Image();
    const image = document.createElement("img");

    const video = document.createElement("video");

    // video.setAttribute("src", url);

    const container = this.element.querySelector(".lightbox__container");
    const loader = document.createElement("div");
    loader.classList.add("lightbox__loader");
    container.innerHTML = "";
    // container.appendChild(loader);

    if (url.endsWith(".jpg")) {
      // container.removeChild(loader);

      container.appendChild(image);
      this.url = url;

      // container.removeChild(loader);

      // container.appendChild(image);
      // this.url = url;
    } else if (url.endsWith(".mp4")) {
      // container.removeChild(loader);
      container.appendChild(video);
      video.setAttribute("src", url);
      video.controls = true;
      video.autoplay = true;
      this.url = url;
    }

    // image.onload = () => {
    //   container.removeChild(loader);

    //   container.appendChild(image);
    //   this.url = url;
    // };

    // console.log(this.medias);

    // image.onload = () => {
    //   container.removeChild(loader);
    //   container.appendChild(image);
    //   this.url = url;
    // };

    image.src = url;
  }

  /**
   * @param {KeyboardEvent}
   */

  onKeyUp(e) {
    if (e.key === "Escape") {
      this.close(e);
    } else if (e.key === "ArrowLeft") {
      this.prev(e);
    } else if (e.key === "ArrowRight") {
      this.next(e);
    }
  }

  /**
   * Ferme la lightbox
   * @param {MouseEvent/KeyboardEvent} e
   */

  close(e) {
    e.preventDefault();
    this.element.classList.add("fadeOut");
    window.setTimeout(() => {
      this.element.parentElement.removeChild(this.element);
    }, 500);
    document.removeEventListener("keyup", this.onKeyUp);
  }

  /**
   * image suivante
   * @param {MouseEvent/KeyboardEvent} e
   */

  next(e) {
    e.preventDefault();

    let i = this.images.findIndex((image) => image === this.url);
    console.log(i);
    // debugger;
    if (i === this.images.length - 1) {
      i = -1;
    }
    // debugger;
    this.loadImage(this.images[i + 1]);
  }

  /**
   * image précédente
   * @param {MouseEvent/KeyboardEvent} e
   */

  prev(e) {
    e.preventDefault();

    let i = this.images.findIndex((image) => image === this.url);
    console.log(i);
    // debugger;
    if (i === 0) {
      i = this.images.length;
    }
    // debugger;
    this.loadImage(this.images[i - 1]);
  }

  /**
   *
   * @param {string} url URL de l'image
   * @return {HTMLElement}
   */

  builDom(url) {
    const dom = document.createElement("div");
    dom.classList.add("lightbox-bg");
    dom.innerHTML = `
      <div class="lightbox">    
          <button class="lightbox__close">Fermer</button>
          <button class="lightbox__next">Suivant</button>
          <button class="lightbox__prev">Précédent</button>
          <div class="lightbox__container"></div> 
          
      </div>   
      `;
    dom
      .querySelector(".lightbox__close")
      .addEventListener("click", this.close.bind(this));
    dom
      .querySelector(".lightbox__next")
      .addEventListener("click", this.next.bind(this));
    dom
      .querySelector(".lightbox__prev")
      .addEventListener("click", this.prev.bind(this));
    return dom;
  }
}

// Lightbox.init();

/***
   * 
   <div class="lightbox">
          <button class="lightbox__close">Fermer</button>
          <button class="lightbox__next">Suivant</button>
          <button class="lightbox__prev">Précédent</button>
          <div class="lightbox__container">
              <img src="/assets/images/Portrait_Nora.jpg" alt="">
          </div>
      </div>
   *  */
