// @todo: Темплейт карточки

const cardList = document.querySelector(".places__list");
const cardTemplate = document.querySelector("#card-template").content;

function addCard(initialCard, deleteCard) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__image").setAttribute("src", initialCard.link);
  cardElement.querySelector(".card__title").textContent = initialCard.name;
  cardList.append(cardElement);
  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", deleteCard);
}

function deleteCard(evt) {
  evt.target.parentElement.remove();
}

for (i = 0; i < initialCards.length; i++) {
  addCard(initialCards[i], deleteCard);
}
