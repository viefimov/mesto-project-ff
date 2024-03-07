import { createCard } from "./card.js";
import { cardList, close, editForm, addForm } from "./index.js";

export function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closeModal);
  modal.removeEventListener("click", closeModal);
}

export function openModal(popup, closeModal) {
  popup.classList.toggle("popup_is-opened");
  popup.addEventListener("click", closeModal);
  document.addEventListener("keydown", closeModal);
}

export function openImage(evt) {
  if (evt.target.hasAttribute("src")) {
    const popup = document.querySelector(".popup_type_image");
    const link = evt.target.getAttribute("src");
    const name =
      evt.target.parentElement.querySelector(".card__title").textContent;
    popup.querySelector(".popup__image").setAttribute("src", link);
    popup.querySelector(".popup__caption").textContent = name;
    openModal(popup, close);
  }
}

export function edit(evt) {
  evt.preventDefault();
  document.querySelector(".profile__title").textContent =
    editForm.querySelector(".popup__input_type_name").value;
  document.querySelector(".profile__description").textContent =
    editForm.querySelector(".popup__input_type_description").value;
  closeModal(document.querySelector(".popup_is-opened"));
}

export function addCard(evt) {
  evt.preventDefault();
  const newCard = {
    name: addForm.querySelector(".popup__input_type_card-name").value,
    link: addForm.querySelector(".popup__input_type_url").value,
  };
  cardList.prepend(createCard(newCard));
  closeModal(document.querySelector(".popup_is-opened"));
}
