// @todo: Темплейт карточки
import "../pages/index.css";
import { edit, addCard, closeModal, openModal, openImage } from "./modal.js";
import { initialCards } from "./cards.js";
import { createCard, deleteCard, likeCard } from "./card.js";

export const editForm = document
  .querySelector(".popup_type_edit")
  .querySelector(".popup__form");
export const addForm = document
  .querySelector(".popup_type_new-card")
  .querySelector(".popup__form");
const title = document.querySelector(".profile__title");
export const cardList = document.querySelector(".places__list");
const description = document.querySelector(".profile__description");

initialCards.forEach(function (card) {
  cardList.append(createCard(card, deleteCard, likeCard, openImage));
});

export function close(evt) {
  if (evt.target.classList.contains("popup__close")) {
    closeModal(evt.target.parentElement.parentElement);
  }
  if (evt.target === evt.currentTarget) {
    closeModal(evt.currentTarget);
  }
  if (evt.key == "Escape" || evt.key == "Esc") {
    closeModal(document.querySelector(".popup_is-opened"));
  }
}

function modalAct(evt) {
  if (evt.target == document.querySelector(".profile__add-button")) {
    const popup = document.querySelector(".popup_type_new-card");
    popup.querySelector(".popup__form").reset();
    openModal(popup, close);
  }
  if (evt.target == document.querySelector(".profile__edit-button")) {
    const popup = document.querySelector(".popup_type_edit");
    popup.querySelector(".popup__input_type_name").value = title.textContent;
    popup.querySelector(".popup__input_type_description").value =
      description.textContent;
    openModal(popup, close);
  }
}

document
  .querySelector(".profile__add-button")
  .addEventListener("click", modalAct);

document
  .querySelector(".profile__edit-button")
  .addEventListener("click", modalAct);

editForm.addEventListener("submit", edit);

addForm.addEventListener("submit", addCard);

document.querySelectorAll(".popup__close").forEach(function (button) {
  button.addEventListener("click", close);
});
