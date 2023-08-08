// // eslint-disable-next-line no-unused-vars
// function sortMedia(medias) {
//   const selectElement = document.querySelector(".selected");
//   selectElement.setAttribute("aria-expanded", false);
//   const options = document.querySelector(".options");
//   const optPop = document.querySelector(".optPop");
//   const optDate = document.querySelector(".optDate");
//   const optTitre = document.querySelector(".optTitre");

//   let sortedMedia = [];

//   selectElement.addEventListener("click", () => {
//     document.querySelector(".fa-chevron-down").classList.toggle("chevron-up");
//     let ariaExpanded = selectElement.getAttribute("aria-expanded");
//     ariaExpanded == "true" ? (ariaExpanded = "false") : (ariaExpanded = "true");
//     selectElement.setAttribute("aria-expanded", ariaExpanded);
//     options.classList.toggle("hidden");
//   });

//   if (optDate) {
//     optDate.addEventListener("click", () => {
//       this.mediaContainer.innerHTML = "";

//       sortedMedia = medias.sort((a, b) => new Date(a.date) - new Date(b.date));
//     });
//   }
//   if (optPop) {
//     optPop.addEventListener("click", () => {
//       this.mediaContainer.innerHTML = "";
//       sortedMedia = medias.sort((a, b) => b.likes - a.likes);
//     });
//   }

//   if (optTitre) {
//     optTitre.addEventListener("click", () => {
//       this.mediaContainer.innerHTML = "";
//       sortedMedia = medias.sort((a, b) => (a.title < b.title ? -1 : 1));
//     });
//   }

//   app.displayMedia(sortedMedia);
//   app.counterLike(medias);
// }
