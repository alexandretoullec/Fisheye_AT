function sortMedia(currentMedias) {
  //DOM
  const optPop = document.querySelector(".optPop");
  const optDate = document.querySelector(".optDate");
  const optAlpha = document.querySelector(".optAlpha");
  let sortContainer = document.querySelector(".photograph-imgs-container");

  let sortedMedia = [];

  const sortBydate = () => {
    sortContainer.innerHTML = "";
    sortedMedia = currentMedias.sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    app.displayMedia(sortedMedia);
  };

  const sortByPopularity = () => {
    sortContainer.innerHTML = "";
    sortedMedia = currentMedias.sort((a, b) => b.likes - a.likes);
    app.displayMedia(sortedMedia);
    sortedMedia = [];
  };

  const sortByTitle = () => {
    sortContainer.innerHTML = "";
    sortedMedia = currentMedias.sort((a, b) => (a.title < b.title ? -1 : 1));
    app.displayMedia(sortedMedia);
    sortedMedia = [];
  };

  optDate.addEventListener("click", sortBydate);
  optPop.addEventListener("click", sortByPopularity);
  optAlpha.addEventListener("click", sortByTitle);
}
