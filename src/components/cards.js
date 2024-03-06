import { modalAct } from "./modal.js";

const firstImage = new URL(
  "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  import.meta.url
);
const secondImage = new URL(
  "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  import.meta.url
);
const thirdImage = new URL(
  "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  import.meta.url
);
const fourthImage = new URL(
  "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  import.meta.url
);
const fifthImage = new URL(
  "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  import.meta.url
);
const sixthImage = new URL(
  "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  import.meta.url
);

const cardTemplate = document.querySelector("#card-template").content;

export const initialCards = [
  {
    name: "Архыз",
    link: firstImage,
  },
  {
    name: "Челябинская область",
    link: secondImage,
  },
  {
    name: "Иваново",
    link: thirdImage,
  },
  {
    name: "Камчатка",
    link: fourthImage,
  },
  {
    name: "Холмогорский район",
    link: fifthImage,
  },
  {
    name: "Байкал",
    link: sixthImage,
  },
];

function likeCard(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}
function deleteCard(evt) {
  evt.target.parentElement.remove();
}
export function createCard(cardData) {
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
  cardElement.querySelector(".card__image").addEventListener("click", modalAct);
  return cardElement;
}
