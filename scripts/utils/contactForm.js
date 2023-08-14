// eslint-disable-next-line no-unused-vars
function contactForm(data) {
  const { name } = data;

  function getFormContact() {
    const formContent = `
    <div class="modal">
          <header>
            <h2>Contactez-moi<br>${name}
            </h2>
            <img class="closeModalBtn" src="assets/icons/close.svg"  alt="close button"/>
          </header>
          <form name="contactez-moi" method="post" class="contact-form">
            <div class="contact-form__prenom formData">
              <label for="prenom">Prénom</label>
              <input class="modalInput" type="text" name="prenom" id="prenom" autofocus/>
            </div>
            <div class="contact-form__nom formData">
              <label for="nom">Nom</label>
              <input class="modalInput" type="text" name="nom" id="nom" />
            </div>
            <div class="contact-form__email formData">
              <label for="email">Email</label>
              <input class="modalInput" type="email" name="email" id="email" />
            </div>
            <div class="contact-form__msg">
              <label for="msg">Votre Message</label>
              <textarea name="msg" id="msg" rows="11" cols="120"></textarea>
            </div>

            <button type="submit" class="submit-button">Envoyer</button>
          </form>
        </div>
    `;

    return formContent;
  }

  // check if the entry have at least 2 char for fname and lname and check the validaity of the email adress

  function inputCheck(input) {
    // eslint-disable-next-line no-useless-escape
    const standardRegex = new RegExp(/^[\w-\.]{2,}/);
    // eslint-disable-next-line no-useless-escape
    const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

    // using switch to select according to id the good regex test

    switch (input.id) {
      case "prenom":
        return standardRegex.test(input.value);
      case "nom":
        return standardRegex.test(input.value);
      case "email":
        return emailRegex.test(input.value);

      default:
        return false;
    }
  }

  //display an error msg if input don't fulfill conditions

  function errorMsg(input) {
    input.closest(".formData").setAttribute("data-error-visible", true);
    // using swith for the first five inputs and add a msg error
    switch (input.id) {
      case "prenom":
        input.closest(".formData").dataset.error =
          "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
        break;
      case "nom":
        input.closest(".formData").dataset.error =
          "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
        break;
      case "email":
        input.closest(".formData").dataset.error =
          "Merci de renseigner une adresse mail conforme";
        break;

      default:
        return "";
    }
  }

  // look threw input form and if is valid still true console log inputs and close modal

  function checkForm(e) {
    e.preventDefault();
    document.getElementById("prenom").focus();
    const modalCont = document.getElementById("contact_modal");
    const formInputs = document.querySelectorAll(".modalInput");
    const main = document.querySelector("#main");
    // console.log(formInputs);
    // boolean true by default
    let isValid = true;

    // check if input verify the rules using a function and a for each
    formInputs.forEach((formInput) => {
      formInput
        .closest(".formData")
        .setAttribute("data-error-visible", "false");
      if (!inputCheck(formInput)) {
        errorMsg(formInput);
        isValid = false;
      }
    });
    if (isValid) {
      formInputs.forEach((input) => {
        console.log(input.value);
        input.closest(".formData").setAttribute("data-error-visible", "false");
        input.value = "";
      });
      console.log(document.querySelector("#msg").value);
      document.querySelector("#msg").value = "";
      modalCont.ariaHidden = "true";
      main.ariaHidden = "false";
      modalCont.style.display = "none";
    }
  }

  return { getFormContact, checkForm };
}
