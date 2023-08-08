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
            <div class="contact-form__prenom">
              <label for="prenom">Prénom</label>
              <input type="text" name="prenom" id="prenom" autofocus/>
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

            <button type="submit" class="submit-button">Envoyer</button>
          </form>
        </div>
    `;

    return formContent;
  }

  function inputCheck(input) {
    const standardRegex = new RegExp(/^[\w-\.]{2,}/);
    const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

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

  function errorMsg(input) {
    input
      .closest(".modalForm__container__form__formData")
      .setAttribute("data-error-visible", true);
    // using swith for the first five inputs and add a msg error
    switch (input.id) {
      case "first":
        input.closest(".modalForm__container__form__formData").dataset.error =
          "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
        break;
      case "last":
        input.closest(".modalForm__container__form__formData").dataset.error =
          "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
        break;
      case "email":
        input.closest(".modalForm__container__form__formData").dataset.error =
          "Merci de renseigner une adresse mail conforme";
        break;
      case "birthdate":
        input.closest(".modalForm__container__form__formData").dataset.error =
          "Vous devez entrer votre date de naissance.";
        break;
      case "quantity":
        input.closest(".modalForm__container__form__formData").dataset.error =
          "Merci de rensigner un nombre de participation";
        break;
      default:
        return "";
    }
  }

  const checkForm = () => {
    const formInputs = document.querySelectorAll("input");

    // boolean true by default
    let isValid = true;

    // check if input verify the rules using a function and a for each
    formInputs.forEach((formInput) => {
      if (!inputCheck(formInput)) {
        errorMsg(formInput);
        isValid = false;
      }
    });
    if (isValid) {
      logOnSubmit();
    }
  };

  function logOnSubmit() {
    const submitBtn = document.querySelector(".submit-button");
    const form = document.querySelector("form");
    const inputs = form.querySelectorAll("input,#msg");

    submitBtn.addEventListener("click", (e) => {
      e.preventDefault();

      inputs.forEach((input) => {
        console.log(input.value);
        input.value = "";
      });
    });
  }

  return { getFormContact, checkForm, logOnSubmit };
}
