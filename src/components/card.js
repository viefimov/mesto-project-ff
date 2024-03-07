const cardTemplate = document.querySelector("#card-template").content;
export function likeCard(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}
export function deleteCard(evt) {
  evt.target.parentElement.remove();
}
export function createCard(cardData, deleteCard, likeCard, openImage) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__image").setAttribute("src", cardData.link);
  cardElement
    .querySelector(".card__image")
    .setAttribute("alt", `${cardData.name} на фото`);
  cardElement.querySelector(".card__title").textContent = cardData.name;
  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", deleteCard);
  const likeButton = cardElement.querySelector(".card__like-button");
  likeButton.addEventListener("click", likeCard);
  cardElement
    .querySelector(".card__image")
    .addEventListener("click", openImage);
  return cardElement;
}
