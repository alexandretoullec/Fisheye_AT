function contactForm(data) {
  const { name } = data;

  function getFormContact() {
    return `
    <div class="modal">
          <header>
            <h2>Contactez-moi<br>${name}
            </h2>
            <img class="closeModalBtn" src="assets/icons/close.svg"  />
          </header>
          <form name="contactez-moi" method="post" class="contact-form">
            <div class="contact-form__prenom">
              <label for="prenom">Prénom</label>
              <input type="text" name="prenom" id="prenom" />
            </div>
            <div class="contact-form__nom">
              <label for="nom">Nom</label>
              <input type="text" name="nom" id="nom" />
            </div>
            <div class="contact-form__email">
              <label for="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div class="contact-form__msg">
              <label for="msg">Votre Message</label>
              <textarea name="msg" id="msg" rows="11" cols="120"></textarea>
            </div>

            <button type="submit" class="contact_button">Envoyer</button>
          </form>
        </div>
    `;
  }

  return { getFormContact };

  // displayModal() {
  //   const modalCont = document.getElementById("contact_modal");
  //   modalCont.innerHTML = this.getFormContact();
  //   modalCont.style.display = "block";
  // }

  // closeModal() {
  //   const modal = document.getElementById("contact_modal");
  //   modal.style.display = "none";
  // }
}

// function displayModal() {
//   const modal = document.getElementById("contact_modal");
//   modal.style.display = "block";
// }

// function closeModal() {
//   const modal = document.getElementById("contact_modal");
//   modal.style.display = "none";
// }
