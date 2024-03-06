import { createCard } from "./cards.js";
import { cardList } from "./index.js";

export const editForm = document
  .querySelector(".popup_type_edit")
  .querySelector(".popup__form");
export const addForm = document
  .querySelector(".popup_type_new-card")
  .querySelector(".popup__form");
const title = document.querySelector(".profile__title");
const description = document.querySelector(".profile__description");

function close() {
  const modal = document.querySelector(".popup_is-opened");
  modal.classList.toggle("popup_is-opened");
  document.removeEventListener("keydown", closeEsc);
}

function closeOverlay(evt) {
  if (evt.target == document.querySelector(".popup_is-opened")) {
    close();
  }
}
function closeEsc(evt) {
  if (evt.key == "Escape" || evt.key == "Esc" || evt.keyCode == 27) {
    close();
  }
}

function modalAction(popup) {
  popup.classList.toggle("popup_is-opened");
  popup.addEventListener("click", closeOverlay);
  document.addEventListener("keydown", closeEsc);
  popup.querySelector(".popup__close").addEventListener("click", close);
}
export function modalAct(evt) {
  if (evt.target == document.querySelector(".profile__add-button")) {
    const popup = document.querySelector(".popup_type_new-card");
    popup.querySelector(".popup__input_type_card-name").value = "";
    popup.querySelector(".popup__input_type_url").value = "";
    modalAction(popup);
  }
  if (evt.target == document.querySelector(".profile__edit-button")) {
    const popup = document.querySelector(".popup_type_edit");
    popup.querySelector(".popup__input_type_name").value = title.textContent;
    popup.querySelector(".popup__input_type_description").value =
      description.textContent;
    modalAction(popup);
  }
  if (evt.target.hasAttribute("src")) {
    const popup = document.querySelector(".popup_type_image");
    const link = evt.target.getAttribute("src");
    const name =
      evt.target.parentElement.querySelector(".card__title").textContent;
    popup.querySelector(".popup__image").setAttribute("src", link);
    popup.querySelector(".popup__caption").textContent = name;
    modalAction(popup);
  }
}

export function edit(evt) {
  evt.preventDefault();
  title.textContent = editForm.querySelector(".popup__input_type_name").value;
  description.textContent = editForm.querySelector(
    ".popup__input_type_description"
  ).value;
  close();
}

export function addCard(evt) {
  evt.preventDefault();
  const newCard = {
    name: addForm.querySelector(".popup__input_type_card-name").value,
    link: addForm.querySelector(".popup__input_type_url").value,
  };
  cardList.prepend(createCard(newCard));
  close();
}
