import "../pages/index.css";
import { closeModal, openModal } from "./modal.js";
import { initialCards } from "./cards.js";
import { createCard, deleteCard, likeCard } from "./card.js";
import { enableValidation, clearValidation } from "./validation.js";
const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
const editForm = document
  .querySelector(".popup_type_edit")
  .querySelector(".popup__form");
const addForm = document
  .querySelector(".popup_type_new-card")
  .querySelector(".popup__form");
const title = document.querySelector(".profile__title");
const cardList = document.querySelector(".places__list");
const description = document.querySelector(".profile__description");

function openImage(evt) {
  if (evt.target.hasAttribute("src")) {
    const popup = document.querySelector(".popup_type_image");
    const link = evt.target.getAttribute("src");
    const name =
      evt.target.parentElement.querySelector(".card__title").textContent;
    popup.querySelector(".popup__image").setAttribute("src", link);
    popup.querySelector(".popup__caption").textContent = name;
    openModal(popup);
  }
}

initialCards.forEach(function (card) {
  cardList.append(createCard(card, deleteCard, likeCard, openImage));
});

function modalAct(evt) {
  if (evt.target == document.querySelector(".profile__add-button")) {
    const popup = document.querySelector(".popup_type_new-card");
    popup.querySelector(".popup__form").reset();
    openModal(popup);
    clearValidation(popup, config);
  }
  if (evt.target == document.querySelector(".profile__edit-button")) {
    const popup = document.querySelector(".popup_type_edit");
    popup.querySelector(".popup__input_type_name").value = title.textContent;
    popup.querySelector(".popup__input_type_description").value =
      description.textContent;
    clearValidation(popup, config);
    openModal(popup);
  }
}

function editProfile(evt) {
  evt.preventDefault();
  document.querySelector(".profile__title").textContent =
    editForm.querySelector(".popup__input_type_name").value;
  document.querySelector(".profile__description").textContent =
    editForm.querySelector(".popup__input_type_description").value;
  closeModal(document.querySelector(".popup_is-opened"));
}

function addCard(evt) {
  evt.preventDefault();
  const newCard = {
    name: addForm.querySelector(".popup__input_type_card-name").value,
    link: addForm.querySelector(".popup__input_type_url").value,
  };
  cardList.prepend(createCard(newCard, deleteCard, likeCard, openImage));
  closeModal(document.querySelector(".popup_is-opened"));
}

document
  .querySelector(".profile__add-button")
  .addEventListener("click", modalAct);

document
  .querySelector(".profile__edit-button")
  .addEventListener("click", modalAct);

editForm.addEventListener("submit", editProfile);

addForm.addEventListener("submit", addCard);

document.querySelectorAll(".popup__close").forEach(function (button) {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closeModal(popup));
});

enableValidation(config);
