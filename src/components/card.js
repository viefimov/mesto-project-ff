import { deleteCardApi, likeCardApi, dislikeCardApi } from "./api.js";

const cardTemplate = document.querySelector("#card-template").content;

export function likeCard(likeCount, likeButton, cardId) {
  if (likeButton.classList.contains("card__like-button_is-active")) {
    dislikeCardApi(cardId)
      .then((card) => {
        likeCount.textContent = card.likes.length;
        likeButton.classList.remove("card__like-button_is-active");
      })
      .catch((err) => {
        console.log(err);
      });
  } else if (!likeButton.classList.contains("card__like-button_is-active")) {
    likeCardApi(cardId)
      .then((card) => {
        likeCount.textContent = card.likes.length;
        likeButton.classList.add("card__like-button_is-active");
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export function deleteCard(cardElement, cardId) {
  deleteCardApi(cardId)
    .then(() => {
      cardElement.remove();
    })
    .catch((err) => {
      console.log(err);
    });
}
export function createCard(cardData, deleteCard, likeCard, openImage, userId) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__image").setAttribute("src", cardData.link);
  cardElement
    .querySelector(".card__image")
    .setAttribute("alt", `${cardData.name} на фото`);
  cardElement.querySelector(".card__title").textContent = cardData.name;
  const deleteButton = cardElement.querySelector(".card__delete-button");
  if (cardData.owner && cardData.owner._id != userId) {
    deleteButton.style.display = "none";
  } else {
    deleteButton.addEventListener("click", () => {
      deleteCard(cardElement, cardData._id);
    });
  }
  const likeCount = cardElement.querySelector(".card__like-count");
  likeCount.textContent = cardData.likes.length;
  const likeButton = cardElement.querySelector(".card__like-button");
  cardData.likes.forEach((user) => {
    if (user._id === userId) {
      likeButton.classList.add("card__like-button_is-active");
    }
  });
  likeButton.addEventListener("click", () => {
    likeCard(likeCount, likeButton, cardData._id);
  });
  cardElement
    .querySelector(".card__image")
    .addEventListener("click", openImage);
  return cardElement;
}
