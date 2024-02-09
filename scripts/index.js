// @todo: Темплейт карточки

const cardList = document.querySelector(".places__list");
const cardTemplate = document.querySelector("#card-template").content;

function createCard(cardData, deleteCard) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__image").setAttribute("src", cardData.link);
  cardElement.querySelector(".card__image").setAttribute("alt", `${cardData.name} на фото`);
  cardElement.querySelector(".card__title").textContent = cardData.name;
  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", deleteCard);
  return cardElement;
}

function deleteCard(evt) {
  evt.target.parentElement.remove();
}
initialCards.forEach((function (card) {
    cardList.append(createCard(card, deleteCard));
}));

